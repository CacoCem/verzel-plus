# **Verzel+**

Aplicação web que lista filmes e permite que os usuários favoritem e compartilhem suas listas de filmes favoritos.

## **Tabela de Conteúdo**

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [API do TMDB](#api-do-tmdb)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Deploy](#deploy)
- [Endpoints da API](#endpoints-da-api)
- [Observações](#observações)

## **Funcionalidades**

### Listagem de filmes populares

A aplicação lista filmes populares obtidos da API do TMDB.

### Busca de filmes por título

A aplicação permite que os usuários busquem filmes por título.

### Favoritar e desfavoritar filmes

A aplicação permite que os usuários favoritem e desfavoritem filmes.

### Compartilhar lista de filmes favoritos

A aplicação permite que os usuários compartilhem suas listas de filmes favoritos.

## **Tecnologias Utilizadas**

### Frontend

- Angular 18
- HTML5
- CSS3
- TypeScript

### Backend

- Spring Boot 3.3.3
- Java 17
- Banco de dados H2
- API do TMDb para obter informações de filmes

## **Como Executar o Projeto**

### Frontend

1. Clone o repositório do projeto
2. Instale as dependências do projeto com `npm install`
3. Inicie o servidor de desenvolvimento com `ng serve`
4. Acesse a aplicação em `http://localhost:4200`

### Backend

1. Clone o repositório do projeto
2. Instale as dependências do projeto com `mvn clean package`
3. Inicie o servidor de backend com `mvn spring-boot:run`
4. Acesse a API de backend em `http://localhost:8080`

## **Estrutura do Projeto**

- `angular-verzel-plus/`: Pasta do frontend da aplicação, desenvolvido em Angular 18
  - `src/`: Pasta do código fonte do frontend
  - `angular.json`: Arquivo de configuração do Angular
- `spring-verzel-plus/`: Pasta do backend da aplicação, desenvolvido em Spring Boot 3.3.3
  - `src/`: Pasta do código fonte do backend
  - `pom.xml`: Arquivo de configuração do Maven
- `README.md`: Este arquivo de README

## **Deploy**

### **Frontend (Vercel)**

A aplicação frontend é hospedada no Vercel, acesse a aplicação em `https://angular-verzel-plus-gw5m.vercel.app/`

## **Endpoints da API**

- `GET /movies/popular`: Retorna a lista de filmes populares
- `GET /movies/search`: Busca filmes por título
- `GET /movies/{movieId}`: Retorna as informações de um filme específico
- `POST /favorite`: Favorita um filme
- `POST /unfavorite`: Desfavorita um filme
- `GET /favorites`: Retorna a lista de filmes favoritos
- `GET /favorites/{movieId}`: Verifica se um filme é favorito
- `GET /share-favorites`: Compartilha a lista de filmes favoritos

## **Observações**

- A aplicação é apenas para fins de demonstração e não é destinada a ser utilizada para fins comerciais.
- A aplicação não possui autenticação ou autorização, portanto, qualquer usuário pode acessar e modificar a lista de filmes favoritos.
