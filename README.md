# Lista de Tarefas em React

Aplicação simples de lista de tarefas feita com **React** e **Vite**, com tema escuro e detalhes em roxo neon. Criada como projeto de estudo para praticar os conceitos básicos do React.

<img width="1920" height="892" alt="31" src="https://github.com/user-attachments/assets/f7fe7571-45cd-4aa2-82c3-54398f8a44d5" />
<img width="1913" height="845" alt="33" src="https://github.com/user-attachments/assets/e65b4380-181b-40d5-a7d7-c72e64af6a48" />
<img width="1909" height="1019" alt="34" src="https://github.com/user-attachments/assets/9a79d9b8-0e59-4e3e-bc9c-6d2a3894fb4e" />


## Funcionalidades

- Adicionar novas tarefas
- Bloquear tarefas vazias (ou com apenas espaços)
- Remover tarefas individualmente
- Interface escura com efeitos de brilho (neon) ao passar o mouse

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES6+)
- CSS3

## Conceitos praticados

- Componentes e JSX
- Estado com `useState` (lista de tarefas e texto do campo)
- Campo controlado (`value` + `onChange`)
- Eventos com `onClick`
- Renderização de listas com `.map()`
- Atualização imutável do estado com spread (`[...tarefas, novaTarefa]`) e `.filter()`
- Estilização com CSS importado no componente

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/SEU-USUARIO/tarefas-react.git

# entrar na pasta
cd tarefas-react

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Estrutura

```
tarefas-react/
├── src/
│   ├── App.jsx    # componente principal (estado e lógica)
│   └── App.css    # estilos
├── index.html
└── package.json
```

## Próximos passos

- [ ] Marcar tarefas como concluídas
- [ ] Salvar as tarefas no `localStorage`
- [ ] Editar o texto de uma tarefa

## Autor

Feito por **Marcos Silvari**, estudante de Análise e Desenvolvimento de Sistemas.
