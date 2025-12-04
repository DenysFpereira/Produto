# 📦 Gerenciador de Produtos (Fullstack)

> Projeto desenvolvido para a disciplina de Back-end (4º Semestre), expandido para uma aplicação Fullstack completa.

![Status do Projeto](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 💻 Sobre o Projeto

Este sistema é um gerenciador de produtos que permite o controle total do inventário.

O objetivo inicial do projeto acadêmico era desenvolver apenas a API (Back-end). No entanto, para exercitar conhecimentos de integração e experiência do usuário, foi desenvolvida também a interface completa (Front-end) consumindo a API.

## ⚙️ Funcionalidades

O sistema conta com um **CRUD** completo:

* ✅ **Create:** Cadastro de novos produtos (Nome, Preço, Descrição).
* ✅ **Read:** Listagem de todos os produtos cadastrados no banco.
* ✅ **Update:** Edição de dados de um produto existente.
* ✅ **Delete:** Remoção de produtos do sistema.

## 🛠️ Tecnologias Utilizadas

### Back-end
* **Java 22**
* **Spring Boot 3** (Web, JPA, DevTools)
* **Maven** (Gerenciamento de dependências)

### Front-end
* **Angular 18+**
* **TypeScript**
* **HTML/CSS**

### Banco de Dados
* **PostgreSQL**

---

## 🚀 Como rodar o projeto

### Pré-requisitos
* Java JDK 17 ou superior
* Node.js e Angular CLI
* PostgreSQL instalado

### 1. Configuração do Banco de Dados
Crie um banco de dados no PostgreSQL chamado `produtos_db` (ou ajuste no `application.properties`).

### 2. Rodando o Back-end
```bash
# Entre na pasta do servidor
cd produtos

# Execute o projeto via Maven ou sua IDE (IntelliJ)
./mvnw spring-boot:run
O servidor iniciará na porta 8081.

### 3. Rodando o Front-end
```bash
# Abra um novo terminal e entre na pasta da aplicação web
cd produtos-app

# Instale as dependências do projeto
npm install

# Rode o servidor de desenvolvimento
ng serve
````
### 3. Rodando o Front-end
```bash
# Abra um novo terminal e entre na pasta da aplicação web
cd produtos-app

# Instale as dependências do projeto
npm install

# Rode o servidor de desenvolvimento
ng serve
Acesse a aplicação no navegador em: `http://localhost:4200`

-----
```

### 👨‍💻 Autor

Desenvolvido por **Denys Felipe**.
Estudante de Análise e Desenvolvimento de Sistemas.
