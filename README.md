# X-Men: Sala de Perigo

Protótipo de jogo de combate por turnos feito com **React** e **JavaScript**, inspirado em batalhas de treinamento entre personagens dos X-Men.

O foco do projeto é testar mecânicas de turnos, consumo de energia e habilidades distintas por personagem.

## 🎮 Demo
🔗 Link do jogo: (https://willqos15.github.io/X-menJogoBETA/)



## 🕹️ Como jogar

- Clique em **Jogar**
- Selecione um personagem entre os **5 disponíveis**
- Quem inicia o primeiro turno é decidido **aleatoriamente**
- Cada jogador tem direito a **uma ação por turno**
- Ações disponíveis:
  - **Atacar** Retira vida do inimigo
  - **Defesa** Reduz dano levado no próximo turno
  - **Especial** Ataque de dano massivo
  - **Voltar** Cancela a partida
- Ao passar o mouse sobre as ações, são exibidas **descrições específicas de cada personagem**
- Algumas ações consomem ou geram **energia** dependendo do personagem
- Vence quem **zerar a vida** do oponente primeiro

---

## ⚔️ Sistema de Combate

### 🔴 Ciclope
- Vida Total: 15  
- Energia Total: 10  

| Ação     | Efeito |
|---------|--------|
| Ataque  | 6 de dano / consome 2 de energia |
| Defesa  | Reduz dano recebido / ganha energia |
| Especial| 12 de dano / consome 10 de energia |

---

### 🟡 Wolverine
- Vida Total: 20  
- Energia Total: 5  

| Ação     | Efeito |
|---------|--------|
| Ataque  | 3 de dano / ganha 1 de energia |
| Defesa  | Reduz 1 de dano / ganha 1 de energia |
| Especial| 5 de dano + cura 5 de vida / custo variável de energia |

---

### ⚡ Tempestade
- Vida Total: 15  
- Energia Total: 10  

| Ação     | Efeito |
|---------|--------|
| Ataque  | 6 de dano / ganha 2 de energia |
| Defesa  | Reduz 2 de dano / reduz energia inimiga em 1 / ganha 2 de energia |
| Especial| 15 de dano / zera energia inimiga / consome 10 de energia |

---

### 👿 Noturno
- Vida Total: 15  
- Energia Total: 10  

| Ação     | Efeito |
|---------|--------|
| Ataque  | 2 de dano / ganha 2 de energia |
| Defesa  | Reduz 4 de dano / ganha 2 de energia |
| Especial| 8 de dano / consome 5 de energia |

---

### 🛡️ Colossus
- Vida Total: 25  
- Energia Total: 10  

| Ação     | Efeito |
|---------|--------|
| Ataque  | 4 de dano / ganha 2 de energia |
| Defesa  | Reduz 3 de dano / ganha 2 de energia |
| Especial| 10 de dano / consome 10 de energia |

---

## 🛠️ Tecnologias utilizadas
- React
- JavaScript
- HTML5
- CSS3
- React Icons

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
git clone https://github.com/seu-usuario/xmen-atomic-genesis.git
cd xmen-atomic-genesis
npm install
npm start


## 🖼️ Preview

