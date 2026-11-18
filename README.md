# Produtos Web

Implementação do exemplo **[Thinking in React](https://react.dev/learn/thinking-in-react)** da documentação oficial do React: uma tabela de produtos com busca por nome e filtro "apenas em estoque".

- **Aplicação (Vercel):** _cole aqui o link_
- **Código (GitHub):** _cole aqui o link_

**Tecnologias:** Vite · React · TypeScript · CSS Modules · (extra) API REST com Express + Docker

---

## Pontos principais do trabalho

O tutorial ensina a construir uma interface em **5 passos**:

1. **Dividir a interface em componentes.** Cada componente tem uma única responsabilidade:
   - `FilterableProductTable`: contém o app e guarda o estado;
   - `SearchBar`: campo de busca e checkbox;
   - `ProductTable`: filtra e monta a lista;
   - `ProductCategoryRow`: cabeçalho de cada categoria;
   - `ProductRow`: linha de cada produto (em vermelho se estiver sem estoque).
2. **Construir uma versão estática.** Primeiro só renderizar os dados, passando-os de pai para filho via **props** (fluxo de mão única).
3. **Encontrar o estado mínimo.** Só é estado o que muda com o tempo, não chega por props e não pode ser calculado. Aqui são apenas o **texto da busca** e o **checkbox**. A lista filtrada é calculada a cada renderização.
4. **Decidir onde o estado fica.** No **pai comum** dos componentes que o usam: `FilterableProductTable`, com `useState`.
5. **Fluxo de dados inverso.** O pai passa funções (`onFilterTextChange`, `onInStockOnlyChange`) para o `SearchBar` atualizar o estado quando o usuário digita ou marca o checkbox.

**Além do tutorial:**

- **TypeScript:** interfaces para `Product` e para as props de todos os componentes.
- **CSS Modules:** um `.module.css` por componente (classes com escopo local), com tema claro/escuro.
- **Produtos traduzidos para pt-BR**, com busca que ignora acentos ("maca" encontra "Maçã").
- **Backend (extra):** API REST em Express (`backend/`) com Dockerfile. O front consome a API se a variável `VITE_API_URL` estiver definida; caso contrário, usa os dados locais.

**Lição principal:** pensar antes de codificar. Primeiro a estrutura dos componentes, depois a versão estática, e só então o estado e a interatividade.

---

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install
npm run dev
```

Abra **http://localhost:5173**.

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

A versão de produção abre em **http://localhost:4173**.

> **Windows:** se aparecer "a execução de scripts foi desabilitada", rode uma vez
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` no PowerShell
> (ou use `npm.cmd` no lugar de `npm`).

**Com o backend (opcional):**

1. Em um terminal, rode `cd backend`, depois `npm install` e `npm run dev`. A API sobe em http://localhost:3000.
2. Na raiz do projeto, crie um arquivo `.env` contendo `VITE_API_URL=http://localhost:3000`.
3. Em outro terminal, na raiz, rode `npm run dev`. O rodapé da página mostrará "Fonte dos dados: API REST".

---