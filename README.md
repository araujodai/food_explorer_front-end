<div align="center">
  <img alt="Logo Food Explorer" width="150" src="https://github.com/araujodai/food_explorer_front-end/blob/main/src/assets/logo.svg">
  
  <h1>Food Explorer</h1>
  
  <p>
    Food Explorer é uma aplicação que simula um cardápio de um restaurante fictício, conta com front-end e back-end desenvolvidos com tecnologias aprendidas na trilha Explorer da Rocketseat.
  </p>
  
  <p>
    <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#instalacão">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#utilização">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#funcionalidades">Funcionalidades</a>
  </p>
</div>

<br>

## Projeto
Food Explorer é uma aplicação que simula um cardápio digital para um restaurante fictício, essa aplicação conta com front-end e back-end desenvolvidos com tecnologias aprendidas na trilha Explorer da [Rocketseat](https://github.com/Rocketseat). 

A aplicação pode ser utilizada através de um login com e-mail e senha, que deve ser registrado previamente, e conta com dois tipos de usuário, usuário comum e administrador.

<br>

### Tecnologias utilizadas:
- HTML
- CSS
- JavaScript
- React.js
- Styled Components
- Axios
- Vite

Projeto desenvolvido com mobile first.

Deploy: Netlify

<br><br>

## Instalação
Para rodar o projeto localmente será necessário primeiro clonar o projeto, selecione um local ou pasta de sua escolha para armazenar o projeto e acesse o caminho via terminal.

Requisitos:
* Node.js
* npm ou yarn

Após selecionar o caminho de sua escolha, execute o comando abaixo:
```bash
git clone https://github.com/araujodai/food_explorer_front-end
```
<br>

Ainda no terminal, após o projeto ser clonado, acesse o diretório:
```bash
cd food_explorer_front-end
```
<br>

Instale as dependências:
```bash
npm install
```
<br>

Inicie o servidor local do fron-end com o comando para iniciar a aplicação em modo de desenvolvimento:
```bash
npm run dev
```
<br>

Acesse o link disponibilizado no terminal ao executar o comando acima.

O front-end é conectado com o back-end através do BASEURL, nesse momento ele está rodando localmente então não exige nenhuma variável de ambiente configurada, se necessário, basta configurar o arquivo .env_example com o link ou chave do seu back-end, não existindo nenhuma configuração dessa variável, o projeto irá ser executado localmente.

<br><br>

## Utilização
Para utilizar a aplicação rodando localmente, será necessário executar juntamente o back-end dessa aplicação, siga a documentação do FoodExplorer API [aqui](https://github.com/araujodai/food_explorer_back-end).

Você pode testar a aplicação completa através desse [link](https://moonlit-biscochitos-4e4bda.netlify.app/) ou, escaneando o QR Code abaixo:

<p align="left">
  <img height="200" width="200" alt="QR Code containing the project URL" src="https://github.com/user-attachments/assets/4ff86cfe-27a1-4c5e-b347-4ef3ec6dc0a2">
</p>

Para logar na aplicação e testar suas fucionalidades, utilize um dos logins já existentes listados abaixo:

| Tipo  | E-mail           | Senha        |
|-------|------------------|--------------|
| USER  | user@email.com   | 123456       |
| ADMIN | admin@email.com  | 123456       |

<br><br>

## Funcionalidades
Abaixo veremos a listagem das funcionalidades da aplicação. Cada funcionalidade, exceto criação de usuário, login e logout, será identificada com uma tag que indica para qual tipo de usuário (user ou admin) a funcionalidade está disponível.

* ### Criar usuário
  Permite que novos usuários se registrem na aplicação.

* ### Login
  Permite que usuários registrados façam login na aplicação.

* ### Logout
  Permite que usuários façam logout da aplicação.

* ### Menu ![Static Badge](https://img.shields.io/badge/user-339900) ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Ambos usuários podem visualizar todos os pratos, os pratos são exibidos separadamente em seções de acordo com a categoria atribuída no momento da criação do prato.

* ### Buscar pratos ![Static Badge](https://img.shields.io/badge/user-339900) ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Permite que usuários realizem uma busca por pratos, em qualquer página da aplicação, através do nome ou ingredientes do prato.

* ### Criar prato ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Permite que usuários administradores adicionem novos pratos ao menu da aplicação.

* ### Editar/Remover prato ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Ao selecionar o ícone ou botão referente, permite tanto alterar as informações de um prato quanto remover esse prato do menu da aplicação.

* ### Detalhes do prato ![Static Badge](https://img.shields.io/badge/user-339900) ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Ao clicar em qualquer prato listado, seremos direcionados a página contendo os detalhes desse prato específico, a visualização e funcionalidades dessa página mudam de acordo com o tipo   de usuário.

* ### Adicionar aos favoritos ![Static Badge](https://img.shields.io/badge/user-339900)
  Permite que usuários comuns adicionem um prato a uma listagem de favoritos, após adicionado ele será exibido na seção de favoritos.

* ### Favoritos ![Static Badge](https://img.shields.io/badge/user-339900)
  Essa página somente estará visível para usuários comuns, nela recebemos a listagem de todos os pratos favorios do usuário logado.

* ### Remover dos favoritos ![Static Badge](https://img.shields.io/badge/user-339900)
  Permite a usuários com acesso a essa página, a remoção de um prato que tenha sido adiconado anteriormente aos favoritos.

* ### Adicionar prato ao carrinho ![Static Badge](https://img.shields.io/badge/user-339900)
  Adiciona pratos ao carrinho de acordo com a quantidade desejada, depois de adicionado é possível visualizar e/ou remover os itens do carrinho.

* ### Criar pedido ![Static Badge](https://img.shields.io/badge/user-339900)
  Ao adicionar itens ao carrinho, permite ao usuário selecionar uma forma de pagamento e criar um pedido com os itens adicionados.

* ### Listar pedidos ![Static Badge](https://img.shields.io/badge/user-339900) ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Permite que usuários visualizem os pedidos já criados, usuários comuns visualizam a listagem de pedidos do usuário logado, usuários administradores recebem a listagem de todos os
  pedidos da aplicação.

* ### Atualizar pedido ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Permite que usuários administradores atualizem o status que se refere ao andamento do pedido.

* ### Visualisar pedido ![Static Badge](https://img.shields.io/badge/user-339900) ![Static Badge](https://img.shields.io/badge/admin-3366ff)
  Ao clicar no número do pedido, o usuário será direcionado a pagina contendo os detalhes do pedido.

<br><br>

Projeto criado por [Rocketseat](https://github.com/Rocketseat) e desenvolvido por [Daiane&nbsp;Araújo](https://github.com/araujodai).

