import jwt from "jsonwebtoken";
import { Token } from "@/entities/Token"
import { User } from "@/entities/User"

interface TokenResult {
    token: string;
    success: boolean;
    message?: string;
    user?: {
        first_name: string,
        username: string,
        email: string
    };
}

export interface TokenOptions {
    email?: string;
}

/**
 * Token Generator Class
 * Usage: const tokenResult = await TokenGenerator.create(options, res);
 * Token is generated automatically and saved to database
 */
export class TokenGenerator {
    private secret_jwt: string | null;
    private algorithm_jwt: string | null;
    private options: TokenOptions;

    private constructor(options: TokenOptions) {
        this.secret_jwt = process.env.JWT_SECRET ?? null;
        this.algorithm_jwt = process.env.JWT_ALGORITHM ?? null;
        this.options = options;

        if (!this.secret_jwt || !this.algorithm_jwt) {
            throw new Error("JWT configuration missing in environment variables");
        }
    }

    /**
     * Static method to create instance and generate token
     */
    static async create(options: TokenOptions): Promise<TokenResult> {
        const instance = new TokenGenerator(options);
        return await instance.generateToken();
    }

    /**
     * Generates JWT token, saves to database, and sets cookie
     */
    private async generateToken(): Promise<TokenResult> {
        try {
            // Pega os dados corretos para criar a token
            const user = await global.em.findOneOrFail(User, { email: this.options.email }, {
                fields: ['id', 'first_name', 'username', 'email']
            });

            const token = jwt.sign(
                { ...this.options },
                this.secret_jwt ?? 'none',
                {
                    expiresIn: '30d',
                    algorithm: this.algorithm_jwt as jwt.Algorithm
                }
            );
            await this.saveToDatabase(token, user.id);
            // session saved in database
            return {
                token,
                success: true,
                user: {
                    first_name: user.first_name,
                    username: user.username,
                    email: user.email
                }
            }
        } catch (error) {
            console.error('Token generation error:', error);
            return {
                token: "",
                success: false,
                message: "Error generating token"
            };
        }
    }

    /**
     * Saves token to database
    */
    private async saveToDatabase(token: string, userId: number): Promise<void> {
        // First, try to find existing token for this user
        const existingToken = await global.em.findOne(Token, { user: userId });

        if (!existingToken) {
            // Create new token
            const tokenEntity = global.em.create(Token, {
                token,
                user: userId,
                created_at: new Date()
            });
            global.em.persist(tokenEntity);
            await global.em.flush();
            return;
        }
        
        // Flush changes to database
        existingToken.token = token;
        await global.em.flush();
    }
    /**
     * Verifies if a JWT token is valid then return if needed 
     */
    static async verifyToken(token: string, returnToken?: boolean): Promise<any> {
        try {
            const secret_jwt: string = process.env.JWT_SECRET ?? "";
            const algorithm_jwt: any = process.env.JWT_ALGORITHM ?? "HS256";

            if (!secret_jwt || !algorithm_jwt) return false;

            if (!token) return false;
            const verified = jwt.verify(
                token,
                secret_jwt,
                { algorithms: [algorithm_jwt] }
            ) as any;

            // Check if token is expired (verified.exp is in seconds)
            if (typeof verified !== "string" && verified.exp && verified.exp * 1000 < Date.now()) {
                return false;
            }
            if (returnToken) {
                return verified;
            }
            return true;
        } catch (error) {
            return false;
        }
    }
}