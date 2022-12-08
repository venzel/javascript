# Mocks e testes sem componentes de terceiros

Neste caso de uso, testes foram realizados sem a utilização de bibilitecas a exemplo do Jest.

```
├── config.js
├── error.js
├── File.js
├── files
│   ├── file.empty.header.mock.csv
│   ├── file.empty.lines.mock.csv
│   ├── file.with.four.lines.csv
│   └── file.with.tree.lines.csv
├── Gamer.js
├── index.test.js
└── Readme.md
```

Bibliotecas nativas do node utilizadas:

-   fs/promises
-   assert

## Como testar

```bash
node index.test.js
```
