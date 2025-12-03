# 🌱 Estação IoT Sustentável - Dashboard Inteligente

<div align="center">

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![License](https://img.shields.io/badge/License-MIT-green)

**Transformando dados em consciência ambiental**

Um dashboard interativo e educativo para monitoramento em tempo real de consumo de energia, água e reciclagem, com gamificação e impacto ambiental mensurável.

[Demonstração](#) • [Documentação](#) • [Reportar Bug](#) • [Solicitar Funcionalidade](#)

</div>

---

## 📋 Sobre o Projeto

A **Estação IoT Sustentável** é uma plataforma desenvolvida para instituições de ensino e organizações que desejam promover a sustentabilidade através de dados concretos e experiências gamificadas. Conectada a dispositivos ESP32, a plataforma coleta e visualiza dados de consumo em tempo real, transformando números técnicos em informações acessíveis e inspiradoras.

### 🎯 Objetivos

- **Conscientizar**: Mostrar o impacto real de pequenas atitudes no meio ambiente
- **Educar**: Ensinar sobre sustentabilidade e educação financeira de forma prática
- **Engajar**: Criar competições saudáveis através de rankings e desafios
- **Medir**: Quantificar economia de recursos e redução de emissões de CO₂

### 🏆 Parceiros

Projeto desenvolvido em parceria com **SENAI** e **Sicredi**, unindo tecnologia e responsabilidade socioambiental.

---

## ✨ Funcionalidades Principais

### 📊 Monitoramento em Tempo Real

- **Energia**: Medidor semicircular de consumo em watts, gráficos comparativos e estimativa de custo em reais
- **Água**: Fluxo em litros por minuto com alertas de vazamento e metas diárias
- **Reciclagem**: Proporção de materiais reciclados (papel, plástico, metal, vidro) e progresso mensal

### 🗺️ Visualização por Setores

Mapa interativo mostrando consumo em diferentes ambientes:
- Código de cores dinâmico (verde: baixo, amarelo: moderado, vermelho: alto)
- Drill-down por localização (garagem, sala, quarto, setores escolares)
- Comparação entre áreas

### 🎮 Sistema de Gamificação

- **Rankings**: Competição entre turmas e instituições
- **Medalhas**: "Guardião da Energia", "Herói da Água", "Mestre da Reciclagem"
- **Quizzes Interativos**: Perguntas sobre sustentabilidade com acúmulo de pontos
- **Sistema de Conquistas**: Desbloqueio de badges conforme metas são atingidas

### 🌍 Impacto Ambiental

Visualização de dados consolidados:
- Total de energia economizada (kWh e R$)
- Litros de água poupados
- Quilos de resíduos reciclados
- Emissões de CO₂ evitadas
- Equivalência em "árvores salvas" e "dias de energia limpa"

### 📱 Design Responsivo

Interface otimizada para desktop, tablet e mobile com animações suaves e experiência intuitiva.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[Next.js 16](https://nextjs.org/)** - Framework React com SSR e otimizações
- **[React 18.3](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Bootstrap 5.3](https://getbootstrap.com/)** - Framework CSS para design responsivo
- **[Recharts](https://recharts.org/)** - Biblioteca de gráficos compostos para React

### UI/UX

- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca completa de ícones
- **CSS3** - Animações e estilizações customizadas
- **Tailwind CSS** - Utilitários para estilização rápida

### IoT (Hardware)

- **ESP32** - Microcontrolador com Wi-Fi integrado
- **Sensores de corrente** - Medição de consumo elétrico
- **Sensores de fluxo** - Medição de consumo de água
- **MQTT/WebSocket** - Protocolo de comunicação em tempo real

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- NPM ou Yarn
- Conexão com dispositivos ESP32 (opcional para dados simulados)

### Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/ErickPenazzi07/iotec-dashboard-project

# Entre no diretório
cd estacao-iot-sustentavel

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
\`\`\`

O dashboard estará disponível em `http://localhost:3000`

### Build para Produção

\`\`\`bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm start
\`\`\`

---

## 📁 Estrutura do Projeto

\`\`\`
estacao-iot-sustentavel/
├── app/
│   ├── layout.tsx           # Layout principal do Next.js
│   ├── page.tsx             # Página principal do dashboard
│   └── globals.css          # Estilos globais e tema
├── src/
│   └── components/
│       ├── Header.jsx       # Cabeçalho com status ESP32
│       ├── EnergyCard.jsx   # Card de monitoramento de energia
│       ├── WaterCard.jsx    # Card de monitoramento de água
│       ├── RecyclingCard.jsx # Card de reciclagem
│       ├── GaugeChart.jsx   # Medidor tipo velocímetro
│       ├── SectorMap.jsx    # Mapa interativo de setores
│       ├── Gamification.jsx # Sistema de ranking e medalhas
│       ├── ImpactSummary.jsx # Resumo de impacto ambiental
│       └── Footer.jsx       # Rodapé com parceiros
├── public/
│   └── images/              # Imagens e assets
├── .gitignore
├── package.json
├── next.config.mjs
└── README.md
\`\`\`

---

## 🎨 Paleta de Cores

O design utiliza cores que remetem à natureza e tecnologia:

- **Verde Principal**: `#22c55e` - Sustentabilidade e crescimento
- **Azul Tecnológico**: `#3b82f6` - Inovação e confiança
- **Branco Clean**: `#ffffff` - Clareza e modernidade
- **Verde Escuro**: `#16a34a` - Estabilidade
- **Azul Escuro**: `#1e40af` - Profissionalidade

---

## 💡 Como Usar

### Conectando o ESP32

1. Configure o ESP32 com os sensores de energia e água
2. Programe o dispositivo para enviar dados via MQTT ou WebSocket
3. Configure as credenciais de conexão no arquivo de ambiente
4. O dashboard detectará automaticamente a conexão

### Personalizando Setores

Edite o componente `SectorMap.jsx` para adicionar ou remover ambientes:

\`\`\`javascript
const sectors = [
  { id: 1, name: 'Garagem', consumption: 45 },
  { id: 2, name: 'Sala de Estar', consumption: 78 },
  // Adicione mais setores aqui
];
\`\`\`

### Configurando Metas

As metas de economia podem ser ajustadas nos cards individuais:

\`\`\`javascript
// Em WaterCard.jsx
const dailyGoal = 500; // litros por dia

// Em RecyclingCard.jsx
const monthlyGoal = 100; // kg por mês
\`\`\`

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade X'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga os padrões de estilo existentes
- Adicione testes quando aplicável
- Atualize a documentação se necessário

---

## 🐛 Reportar Problemas

Encontrou um bug? Abra uma [issue](https://github.com/ErickPenazzi07/iotec-dashboard-project) detalhando:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs. observado
- Screenshots (se aplicável)
- Ambiente (navegador, versão, SO)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores e Reconhecimentos

**Desenvolvido com dedicação para um futuro mais sustentável**

- **SENAI** - Parceiro educacional e tecnológico
- **Sicredi** - Apoio à educação financeira e sustentabilidade
- **Comunidade Open Source** - Pelas ferramentas e bibliotecas incríveis

---

## 📞 Contato

Para dúvidas, sugestões ou parcerias:

- Email: penazzi1234@gmail.com
- Website: [https://iotec-dashboard-project.vercel.app/](#)
- LinkedIn: [https://www.linkedin.com/in/erick-penazzi-573265377/](#)

---

<div align="center">

**"Pequenas atitudes geram grandes transformações"**

⭐ Se este projeto te ajudou, considere deixar uma estrela!

</div>
