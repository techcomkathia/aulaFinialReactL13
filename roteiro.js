/*------------------ Roteiro aula final ------------------
- Criação do projeto (fora de um repositório)
- Criação do repositório vazio
- Configuração do repositório local (com os comandos listados no github após a criação do repositório vazio)
- Instalação das dependências (executada no diretório do projeto, onde o package.json foi criado):
    - React-router-dom 
    - Bootstrap
    - React-bootstrap
    - Styled-components
 (npm install react-router-dom bootstrap react-bootstrap styled-components)

-Criação da estrutura de pastas e arquivos (adaptação do modelo descrito no repositório oficial da Digital College https://github.com/digitalcollegebr/projeto-digital-store/blob/main/README.md , com a adição de uma pasta para contextos e outra para rotas):

├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── ProductListing.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductOptions.jsx
│   │   ├── BuyBox.jsx
│   │   ├── Section.jsx
│   │   ├── FilterGroup.jsx
│   │   └── ProductDetails.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── ProductViewPage.jsx
│       └── ProductListingPage.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── UserContext.jsx
│   │   └── ProductContext.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
├── App.jsx
└── index.jsx /*



/* Comando para criação da estrutura de pastas e arquivos (executado no diretório do projeto, onde o package.json foi criado) no terminal do power shell:

New-Item -ItemType Directory -Force -Path `
"src/components", `
"src/pages", `
"src/context", `
"src/routes"

New-Item -ItemType File -Force -Path `
"src/components/Header.jsx", `
"src/components/Footer.jsx", `
"src/components/Logo.jsx", `
"src/components/ProductListing.jsx", `
"src/components/ProductCard.jsx", `
"src/components/ProductOptions.jsx", `
"src/components/BuyBox.jsx", `
"src/components/Section.jsx", `
"src/components/FilterGroup.jsx", `
"src/components/ProductDetails.jsx", `
"src/pages/HomePage.jsx", `
"src/pages/ProductViewPage.jsx", `
"src/pages/ProductListingPage.jsx", `
"src/context/CartContext.jsx", `
"src/context/UserContext.jsx", `
"src/context/ProductContext.jsx", `
"src/routes/AppRoutes.jsx", `
"src/App.jsx", `
"src/index.jsx"
*/


/*


*Para consolidação dos conceitos do styled-components crie um componente estilizado chamado StyledButton, que seja um butão estilizado com as seguintes propriedades:

- Cor de fundo: #C92071
- Cor do texto: #FFFFFF
- Tamanho da fonte: 16px
- Estilo da fonte: bold
- Bordas arredondadas: 5px

*/

