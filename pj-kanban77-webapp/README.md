# Kanban PCM - Heineken

Este projeto é uma aplicação web de gerenciamento de tarefas baseada no método Kanban, desenvolvida para a Heineken. A aplicação permite que os usuários gerenciem suas tarefas de forma eficiente, utilizando uma interface intuitiva.

## Estrutura do Projeto

```
pj-kanban77-webapp
├── src
│   ├── js
│   │   ├── auth.js           # Lógica de login / sessão
│   │   ├── kanban.js         # Lógica do board (baseada no index.html)
│   │   └── firebase-adapter.js # Adaptador para interações com o Firebase
│   └── css
│       └── styles.css        # Estilos da aplicação
├── public
│   ├── index.html            # Página principal do software (Kanban)
│   └── login.html            # Página de login / cadastro
├── package.json               # Configuração do npm
├── .editorconfig              # Configurações de estilo de código
└── README.md                  # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd pj-kanban77-webapp
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

- Para iniciar a aplicação, abra o arquivo `public/index.html` em um navegador.
- Para acessar a página de login, abra `public/login.html`.

## Funcionalidades

- **Autenticação de Usuário**: Os usuários podem se registrar e fazer login para acessar suas tarefas.
- **Gerenciamento de Tarefas**: Os usuários podem criar, editar e excluir tarefas no quadro Kanban.
- **Persistência de Dados**: As tarefas são armazenadas no Firebase, garantindo que os dados sejam mantidos entre sessões.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.