# X-Men: Sala de Perigo

Protótipo de jogo de combate por turnos feito com **React**, inspirado em batalhas de treinamento entre personagens dos X-Men.

O foco do projeto foi estudar React com um projeto autoral, reforçando o conhecimento na prática da aplicação de Hooks, como useState() e useEffect(). O projeto simula elementos de jogos estilo RPG de turno, com barras de vida e energia de personagens, interatividade e componentes reutilizáveis.

---

## 🎮 Demo
🔗 https://willqos15.github.io/X-menJogoBETA/

---

## 🖼️ Screenshots
![Tela Inicial](https://res.cloudinary.com/drklvmtqp/image/upload/v1766689448/Captura_de_tela_2025-12-25_155905_kw2lbi.png)
![Tela de Seleção](https://res.cloudinary.com/drklvmtqp/image/upload/v1766689406/Captura_de_tela_2025-12-25_160005_ukxjfr.png)
![Tela de Combate](https://res.cloudinary.com/drklvmtqp/image/upload/v1766689405/Captura_de_tela_2025-12-25_160025_twhm6f.png)

---

## 🕹️ Como jogar

- Clique em **Jogar**
- Selecione um personagem entre os **5 disponíveis**
- Quem inicia o primeiro turno é decidido **aleatoriamente**
- Cada jogador tem direito a **uma ação por turno**
- Ações disponíveis:
  - **Atacar** – retira vida do inimigo
  - **Defesa** – reduz o dano levado no próximo turno
  - **Especial** – ataque de dano massivo
  - **Voltar** – cancela a partida
- Ao passar o mouse sobre as ações, são exibidas **descrições específicas de cada personagem**
- Algumas ações consomem ou geram **energia**, dependendo do personagem
- Vence quem **zerar a vida** do oponente primeiro

---

## ⚔️ Sistema de Combate

### 🔴 Ciclope
- Vida Total: 15  
- Energia Total: 10  

| Ação | Efeito |
|-----|--------|
| Ataque | 6 de dano / consome 2 de energia |
| Defesa | Reduz dano recebido / ganha energia |
| Especial | 12 de dano / consome 10 de energia |

Sugestão de combate: variar entre ataque e defesa e guardar o especial para finalizar o oponente.

---

### 🟡 Wolverine
- Vida Total: 20  
- Energia Total: 5  

| Ação | Efeito |
|-----|--------|
| Ataque | 3 de dano / ganha 1 de energia |
| Defesa | Reduz 1 de dano / ganha 1 de energia |
| Especial | 5 de dano + cura 5 de vida / custo variável de energia |

Sugestão de combate: atacar até liberar o especial e continuar pressionando.

---

### ⚡ Tempestade
- Vida Total: 15  
- Energia Total: 10  

| Ação | Efeito |
|-----|--------|
| Ataque | 6 de dano / ganha 2 de energia |
| Defesa | Reduz 2 de dano / reduz energia inimiga em 1 / ganha 2 de energia |
| Especial | 15 de dano / zera energia inimiga / consome 10 de energia |

Sugestão de combate: usar defesa contra personagens de alto dano ou dependentes de energia; atacar até carregar o especial.

---

### 👿 Noturno
- Vida Total: 15  
- Energia Total: 10  

| Ação | Efeito |
|-----|--------|
| Ataque | 2 de dano / ganha 2 de energia |
| Defesa | Reduz 4 de dano / ganha 2 de energia |
| Especial | 8 de dano / consome 5 de energia |

Sugestão de combate: defender até carregar o especial.

---

### 🛡️ Colossus
- Vida Total: 25  
- Energia Total: 10  

| Ação | Efeito |
|-----|--------|
| Ataque | 4 de dano / ganha 2 de energia |
| Defesa | Reduz 3 de dano / ganha 2 de energia |
| Especial | 10 de dano / consome 10 de energia |

Sugestão de combate: focar na defesa até carregar o especial.


---

## 🛠️ Tecnologias utilizadas
- React
- JavaScript
- HTML5
- CSS3

---

## 📦 Dependências
As dependências do projeto são gerenciadas automaticamente via **npm**.  
Não é necessário instalar bibliotecas manualmente.

---

## ▶️ Como rodar o projeto

### Requisitos
- Node.js 16 ou 18
- npm

### Passo a passo

```bash
git clone https://github.com/willqos15/X-men-Jogo-React.git
cd X-men-Jogo-React.git
npm install
npm start
```

## 🗂️ Estrutura do projeto

### src/
- `App.js`  
  Componente principal. Controla o fluxo do jogo e as telas.

- `Globais.js`  
  Armazena estados globais do jogo (vida, energia, turno, ações).

### src/components/
Componentes reutilizáveis da interface:
- `BarraPlayer.js` / `BarraEnemy.js` → barras de vida e energia
- `btn.js` → botões de ação (ataque, defesa, especial)
- `Selectperson.js` → seleção de personagem
- `Sobre.js` → tela de informações do projeto

### src/images/
Imagens dos personagens, cenários e interface do jogo.



### Organização de pastas

```
│
├─ build/                   # Arquivos gerados na build do projeto
├─ node_modules/            # Dependências do projeto
├─ public/                  # Arquivos públicos estáticos
│   ├─ favicon.ico          # Ícone do site
│   ├─ index.html           # Arquivo HTML principal
│   ├─ logo192.png          # Logo em 192px
│   ├─ logo512.png          # Logo em 512px
│   ├─ manifest.json        # Configurações do PWA
│   ├─ xico.svg             # Ícone SVG
│   └─ xlogo.svg            # Logo SVG
│
├─ src/                     # Código-fonte do projeto
│   ├─ components/          # Componentes React
│   │   ├─ BarraEnemy.js
│   │   ├─ BarraEnemy.module.css
│   │   ├─ BarraPlayer.js
│   │   ├─ BarraPlayer.module.css
│   │   ├─ btn.js
│   │   ├─ btn.module.css
│   │   ├─ Selectperson.js
│   │   ├─ Selectperson.module.css
│   │   ├─ Sobre.js
│   │   └─ Sobre.module.css
│   │
│   ├─ images/              # Imagens utilizadas no projeto
│   │
│   ├─ App.css              # Estilos globais
│   ├─ App.js               # Componente principal
│   ├─ App.test.js          # Testes do App
│   ├─ Globais.js           # Dados globais do jogo
│   ├─ index.css            # Estilos base
│   ├─ index.js             # Ponto de entrada da aplicação
│   ├─ logo.svg             # Logo do projeto
│   ├─ reportWebVitals.js   # Métricas de performance
│   └─ setupTests.js        # Configuração de testes
│
├─ .gitignore               # Arquivos e pastas ignorados pelo Git
├─ package-lock.json        # Gerenciamento de dependências exato
├─ package.json             # Dependências e scripts do projeto
└─ README.md                # Documentação do projeto
```


---

## 👨‍💻 Sobre o autor

Desenvolvido por William  Queiroz
🔗 Portfólio: (https://queirozdeveloper.vercel.app/)


