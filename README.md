# PRISMA — Explore futuros possíveis

Plataforma de orientação de carreira criada para ajudar estudantes do Ensino Médio a conhecer profissões, entender habilidades, comparar carreiras e refletir sobre possíveis caminhos para o futuro.

> Projeto escolar — 1º ano do Ensino Médio.

---

## 🔺 Sobre o projeto

Assim como um prisma transforma um único feixe de luz em várias cores, o PRISMA mostra que uma pessoa pode seguir diferentes caminhos profissionais. O site combina orientação vocacional, dados sobre profissões e ferramentas interativas em uma experiência visual moderna.

## 📁 Estrutura de arquivos

```
prisma/
├── index.html   → estrutura e conteúdo de todas as seções do site
├── style.css    → identidade visual, layout, responsividade e efeitos
├── script.js    → dados das profissões e toda a interatividade
└── README.md    → este arquivo
```

Os três arquivos precisam ficar **na mesma pasta**, com esses nomes exatos, pois `index.html` referencia `style.css` e `script.js` por caminho relativo.

## 🚀 Como executar

Não é necessário instalar nada nem rodar servidor.

1. Baixe (ou clone) os três arquivos para a mesma pasta.
2. Dê duplo clique em `index.html` — ele abre direto no navegador.

Para publicar online gratuitamente, use o **GitHub Pages**:
1. Suba os três arquivos na raiz do repositório (sem subpastas).
2. Vá em **Settings > Pages**, selecione a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos e acesse o link gerado.

## ✨ Funcionalidades

- **Constelação de carreiras**: 10 áreas profissionais com hover 3D e painel lateral de detalhes.
- **Profissões em destaque**: 12 profissões com busca em tempo real, filtro por área e modal detalhado (rotina, ferramentas, mitos, desafios, caminhos relacionados).
- **Sistema de favoritos**: salva profissões no `localStorage` do navegador (permanece após fechar a aba).
- **DNA profissional**: teste de 10 perguntas que mapeia o perfil em 6 dimensões e sugere áreas e profissões.
- **Comparador**: compara de 2 a 3 profissões lado a lado com indicadores qualitativos.
- **Mapa de habilidades**: relaciona 12 habilidades a profissões onde elas são aplicadas.
- **Profissões pouco conhecidas** e **profissões do futuro**, em formato de grade e linha do tempo.
- **Caminhos além da faculdade**: cursos técnicos, certificações, empreendedorismo, entre outros.
- **Um dia na profissão**: mini simulações interativas baseadas em escolhas (Medicina, Tecnologia, Arquitetura).
- **Mitos sobre escolha profissional**: cartas que viram ao clicar.
- Layout 100% responsivo, navegação por teclado, `prefers-reduced-motion` respeitado e nenhuma dependência externa além de fontes (Google Fonts) e ícones (Lucide via CDN).

## 🎨 Como personalizar

| O que mudar | Onde mudar |
|---|---|
| Textos, profissões, áreas, perguntas do teste, mitos | Início do `script.js`, nos arrays `AREAS`, `PROFESSIONS`, `DNA_QUESTIONS`, `MYTHS`, etc. |
| Cores da identidade visual | Bloco `:root` no topo do `style.css` (`--accent`, `--saude`, `--tecnologia`...) |
| Fontes | Import do Google Fonts no `<head>` do `index.html` |

Depois de editar os dados no `script.js`, o site atualiza sozinho — não é preciso mexer no HTML.

## 🛠️ Tecnologias

HTML5 · CSS3 (Grid, Flexbox, variáveis, glassmorphism) · JavaScript puro (sem frameworks) · [Lucide Icons](https://lucide.dev) · [Google Fonts](https://fonts.google.com) (Unbounded, Spectral, Inter)

Nenhuma dependência de backend ou build — roda inteiramente no navegador.

## ⚠️ Aviso

As informações sobre formação, mercado e remuneração apresentadas no site têm caráter educativo e podem variar conforme região, experiência, instituição, setor e momento econômico. Antes de tomar decisões, consulte fontes atualizadas e converse com profissionais da área.

---

Projeto educacional criado para incentivar estudantes a explorar profissões, habilidades e diferentes possibilidades de futuro.
