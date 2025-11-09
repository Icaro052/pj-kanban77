# Kanban PCM - Heineken

Este projeto é um aplicativo Kanban desenvolvido para gerenciar ordens de serviço na Cervejaria Heineken. O aplicativo permite que os usuários visualizem, adicionem e gerenciem tarefas em um formato de quadro Kanban.

## Estrutura do Projeto

O projeto possui os seguintes arquivos:

- **index.html**: Página principal do aplicativo Kanban, contendo a estrutura HTML, cabeçalho, corpo do kanban e lógica para manipulação de tarefas.
  
- **auth.html**: Página de cadastro e login, incluindo formulários para entrada de dados do usuário, como e-mail e senha, e botões para autenticação.

- **src/js/main.js**: Lógica principal do aplicativo, incluindo a inicialização do Firebase e manipulação do DOM para a página principal.

- **src/js/auth.js**: Lógica de autenticação, com funções para cadastro de novos usuários e login de usuários existentes, interagindo com o Firebase.

- **src/js/firebase-adapter.js**: Implementação do adaptador para o Firebase, facilitando a interação com os serviços do Firebase, como Firestore e Auth.

- **src/css/styles.css**: Estilos CSS para o aplicativo, incluindo estilos para a página de autenticação e a página principal.

- **package.json**: Arquivo de configuração do npm, listando as dependências do projeto e scripts para facilitar o desenvolvimento.

- **.gitignore**: Especifica quais arquivos ou pastas devem ser ignorados pelo Git, como dependências de pacotes e arquivos temporários.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd pj-kanban77
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

- Para iniciar o aplicativo, abra o arquivo `index.html` em um navegador.
- Acesse a página de autenticação através do arquivo `auth.html` para se cadastrar ou fazer login.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.