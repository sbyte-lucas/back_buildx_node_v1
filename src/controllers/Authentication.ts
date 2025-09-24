import { TokenGenerator, TokenOptions } from "@/utils/tokenGenerator";
import { User } from "@/entities/User";
import bcrypt from "bcryptjs";

export default class Authentication {
    static async login(req: request, res: response): Promise<void> {
        const { email, password } = req.body;
        // Verifica se o usuario existe
    
        const passwordFromDb = await global.em.findOneOrFail(
            User,
            { email: email },
            { fields: ['password'] }
        );

        const isValid = await bcrypt.compare(password, passwordFromDb.password)
        //bcrypt.hashSync(secret, 8),
        // await global.em.clear()
        if (isValid) {
            const opt: TokenOptions = {
                email: email
            }

            const response = await TokenGenerator.create(opt)

            res.status(200).json({
                // dados: {
                    auth: {
                        user: {
                            first_name: response.user?.first_name,
                            username: response.user?.username,
                            email: response.user?.email
                        },
                        "access_token": response.token,
                    }
                // }
            });
            return;
        }

        res.status(401).json({ success: false, message: 'Invalid credentials!' })
        return;
    }

    //logout
}