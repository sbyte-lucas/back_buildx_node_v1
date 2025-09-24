# Mapeamento de Rotas e Métodos - BuildX Backend 

 

## 📋 Resumo das Rotas Principais 

 

### 🔐 Autenticação 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/auth/register/` | RegisterViewSet | POST (create) | 

| `api/auth/login/` | LoginViewSet | POST (create) | 

| `api/auth/refresh-token/` | TokenRefreshViewSet | POST (create) | 

| `api/auth/verify-token/` | TokenVerifyViewSet | POST (create) | 

 

### 👤 Usuário 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/user/` | ProfileUserViewSet | GET (list), POST (create), GET/{id} (retrieve), PUT/{id} (update), DELETE/{id} (destroy) | 

 

### 🏠 Endereços 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/address/` | AddressViewSet | GET (list), POST (create), GET/{id} (retrieve), PUT/{id} (update), DELETE/{id} (destroy) | 

 

## 🔧 BuildX Models 

 

### 🔑 Chaves e Configurações 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/chaves/` | Bx_chavesViewSet | GET (list), POST (create), GET/{id} (retrieve), PUT/{id} (update), DELETE/{id} (destroy) | 

| `api/bx/chaves-de-para/` | Bx_chaves_de_paraViewSet | GET (list), POST (create), GET/single (single), PUT/single (single), DELETE/single (single) | 

| `api/bx/monitor/` | Bx_monitorViewSet | Métodos de monitoramento | 

 

### 📦 ERP e Itens 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/erp-item/` | Bx_erp_itemViewSet | CRUD completo | 

| `api/bx/erp-estrutura/` | Bx_estruturaViewSet | CRUD completo | 

| `api/bx/erp-it-carac-tec/` | Bx_erp_it_carac_tecViewSet | CRUD completo | 

 

### 🏭 Steel (Produção) 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/st-pecas/` | Bx_st_pecas_ViewSet | GET/{id} (retrieve), POST (create), PUT/{id} (update), DELETE/{id} (destroy) | 

| `api/bx/st-ord-prod/` | Bx_st_ord_prodViewSet | GET (list), GET/{id} (retrieve), POST (create) | 

| `api/bx/st-reservas/` | Bx_st_reservasViewSet | GET (list), GET/{id} (retrieve), POST (create) | 

| `api/bx/st-oper-ord/` | Bx_st_oper_ordViewSet | GET (list), GET/{id} (retrieve), POST (create) | 

 

### 🔧 Fabricação (Jobs) 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/st-fab-job/` | Bx_st_fab_jobViewSet | CRUD completo + ações especiais | 

| `api/bx/st-fab-job-oper/` | Bx_st_fab_job_operViewSet | GET (list), GET/{id} (retrieve), POST (create) | 

| `api/bx/st-fab-job-oper-corte/` | Bx_st_fab_job_oper_corteViewSet | GET (list), GET/{id} (retrieve) | 

| `api/bx/st-fab-job-marca/` | Bx_st_fab_job_oper_marcaViewSet | GET (list), GET/{id} (retrieve) | 

| `api/bx/st-fab-job-posicao/` | Bx_st_fab_job_oper_PosicaoViewSet | GET (list) | 

 

### 📊 Projetos e Etapas 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/projetos-etapas/` | Bx_projetos_etapasViewSet | GET (list), POST (create), GET/{id} (retrieve), GET/single (single), PUT/single (single), DELETE/single (single), PUT/reativar (reativar), GET/numero_revisao (numero_revisao) | 

| `api/bx/itens-etapas/` | Bx_itens_etapasViewSet | GET (list), POST (create), GET/single (single), PUT/single (single), DELETE/single (single), POST/relatorio (relatorio), POST/revisao/relatorio (revisao_relatorio) | 

| `api/bx/itens-etapas-posicoes/` | Bx_itens_etapas_posicoesViewSet | CRUD completo | 

| `api/bx/itens-etapas-posicoes-mp/` | Bx_itens_etapas_posicoesMPViewSet | CRUD completo | 

| `api/bx/itens-etapas-posicoes-ct/` | Bx_itens_etapas_posicoesCTViewSet | CRUD completo | 

| `api/bx/itens-etapas-posicoes-op/` | Bx_itens_etapas_posicoesOPViewSet | CRUD completo | 

 

### ⚠️ Controle de Erros 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/erro/` | Bx_erroViewSet | CRUD completo | 

 

## 🔗 Integração TOTVS 

| Rota | ViewSet | Métodos Disponíveis | 

|------|---------|-------------------| 

| `api/bx/erp-item-totvs/` | Bx_erp_totvs_itemViewSet | Integração com ERP TOTVS | 

| `api/bx/erp-estrutura-totvs/` | Bx_erp_totvs_estruturaViewSet | Integração com ERP TOTVS | 

| `api/bx/erp-it-carac-tec-totvs/` | Bx_erp_totvs_item_carac_tecViewSet | Integração com ERP TOTVS | 

 

## 📝 Padrões de Métodos 

 

### Métodos CRUD Padrão: 

- **GET** `/` → `list()` - Lista todos os registros 

- **POST** `/` → `create()` - Cria novo registro 

- **GET** `/{id}/` → `retrieve()` - Busca registro específico 

- **PUT** `/{id}/` → `update()` - Atualiza registro 

- **DELETE** `/{id}/` → `destroy()` - Remove registro 

 

### Métodos Customizados: 

- **GET/PUT/DELETE** `/single/` → `single()` - Operações com query parameters 

- **PUT** `/reativar/` → `reativar()` - Reativa projeto 

- **GET** `/numero_revisao/` → `numero_revisao()` - Próximo número de revisão 

- **POST** `/relatorio/` → `relatorio()` - Gera relatório 

- **POST** `/revisao/relatorio/` → `revisao_relatorio()` - Gera relatório de revisão 

 

## 🌐 URLs Base 

- **Admin:** `/admin/` 

- **API:** `/api/` 

- **Auth DRF:** `/api-auth/` 

- **Frontend:** `/` (home) 

 

## 📂 Arquivos Estáticos 

- **MEDIA_URL:** Arquivos de mídia 

- **STATIC_URL:** Arquivos estáticos (CSS, JS, imagens) 

 

 