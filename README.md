# Ion Guard - Gerenciador de Seguros de E-bikes 🚲🛡️

<p align="center">
  <img src="images/Icone_IonGuard.png" alt="Ion Guard Logo" width="300">
</p>

O **Ion Guard** é um sistema de gerenciamento de apólices de seguro para bicicletas elétricas (e-bikes). Desenvolvido com uma arquitetura moderna em **NestJS**, o projeto oferece uma API robusta para controle de contratos, valores e vigência de seguros.

## 🚀 Funcionalidades

- **Gestão de Apólices**: Cadastro, consulta, atualização e remoção de apólices de seguro.
- **Controle de Vigência**: Acompanhamento de datas de início e fim dos planos.
- **Gestão Financeira**: Armazenamento de valores dos planos com precisão decimal.
- **Validação de Dados**: Garantia de integridade com `class-validator` e `class-transformer`.

## 🛠️ Tecnologias Utilizadas

- **Framework**: [NestJS](https://nestjs.com/) (Node.js)
- **Linguagem**: TypeScript
- **Banco de Dados**: MySQL
- **ORM**: TypeORM
- **Validação**: Class-Validator & Class-Transformer

## 📁 Estrutura do Projeto

```text
src/
├── apolice/           # Módulo principal de seguro
│   ├── controllers/  # Camada de entrada (HTTP)
│   ├── entities/     # Modelagem do banco de dados (tb_apolice)
│   ├── services/     # Regras de negócio
│   └── apolice.module.ts
├── main.ts           # Ponto de entrada da aplicação
└── app.module.ts     # Módulo raiz
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [MySQL](https://www.mysql.com/)
- [NPM](https://www.npmjs.com/) ou Yarn

## 🔧 Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/Gerenciador-de-Seguros.git
   cd Gerenciador-de-Seguros
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**:
   - Certifique-se de que o MySQL está rodando.
   - Execute o script SQL localizado em `SQL/db_seguradora_ion_guard.sql` para criar o banco e as tabelas iniciais:
     ```bash
     mysql -u seu_usuario -p < SQL/db_seguradora_ion_guard.sql
     ```
   - *Nota: Caso precise ajustar as credenciais de conexão, verifique o arquivo `src/app.module.ts` (ou arquivo de ambiente, se disponível).*

## 🏃 Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run start:dev
```
A API estará disponível em `http://localhost:4000` (ou a porta configurada no `main.ts`).

## 🧪 Testes

O projeto utiliza Jest para testes:
```bash
# Rodar todos os testes
npm run test

# Modo watch
npm run test:watch
```

## 📄 Documentação da API

Você pode encontrar os arquivos para importação no **Insomnia** na pasta `Insomnia/` na raiz do projeto para testar os endpoints da API.

---
<p align="center">
  Desenvolvido por <b>ONEtoMany</b>.
</p>

<p align="center">
  <img src="images/Logo.png" alt="ONEtoMany" width="300">
</p>
