/* =========================================================
   PRISMA — Explore futuros possíveis
   script.js — dados e interações
   Organização: dados > utilitários > cabeçalho/nav > hero >
   áreas > profissões (grid, busca, modal, favoritos) >
   teste DNA > comparador > mapa de habilidades >
   pouco conhecidas > futuro > além da faculdade >
   histórias > mitos > favoritos > painel de área > init
   ========================================================= */

/* ================= 1. DADOS ================= */

const AREAS = [
  { id:"saude", nome:"Saúde", icon:"heart-pulse", c1:"var(--saude)", c2:"var(--saude-2)",
    descricao:"Cuidar da vida, compreender o corpo humano e melhorar o bem-estar das pessoas.",
    profissoesTags:["Medicina","Enfermagem","Psicologia","Odontologia","Fisioterapia","Biomedicina","Nutrição","Farmácia"] },
  { id:"tecnologia", nome:"Tecnologia", icon:"cpu", c1:"var(--tecnologia)", c2:"var(--tecnologia-2)",
    descricao:"Criar ferramentas, sistemas e soluções capazes de transformar a maneira como vivemos.",
    profissoesTags:["Desenvolvimento de Software","Ciência da Computação","Ciência de Dados","Inteligência Artificial","Cibersegurança","Design de Experiência","Engenharia de Software","Desenvolvimento de Jogos"] },
  { id:"engenharia", nome:"Engenharia", icon:"cog", c1:"var(--engenharia)", c2:"var(--engenharia-2)",
    descricao:"Utilizar ciência, matemática e criatividade para construir soluções concretas.",
    profissoesTags:["Engenharia Civil","Engenharia Mecânica","Engenharia Elétrica","Engenharia de Produção","Engenharia Química","Engenharia Ambiental","Engenharia Mecatrônica","Engenharia Aeroespacial"] },
  { id:"direito", nome:"Direito e Sociedade", icon:"scale", c1:"var(--direito)", c2:"var(--direito-2)",
    descricao:"Compreender leis, mediar conflitos e contribuir para relações mais justas.",
    profissoesTags:["Advocacia","Magistratura","Promotoria","Defensoria Pública","Perícia","Relações Internacionais","Ciência Política","Gestão Pública"] },
  { id:"negocios", nome:"Negócios e Finanças", icon:"trending-up", c1:"var(--negocios)", c2:"var(--negocios-2)",
    descricao:"Organizar recursos, liderar pessoas e transformar ideias em projetos sustentáveis.",
    profissoesTags:["Administração","Contabilidade","Economia","Marketing","Gestão Comercial","Empreendedorismo","Mercado Financeiro","Ciências Atuariais"] },
  { id:"artes", nome:"Artes e Comunicação", icon:"camera", c1:"var(--artes)", c2:"var(--artes-2)",
    descricao:"Criar narrativas, experiências, imagens e mensagens que conectam pessoas.",
    profissoesTags:["Design Gráfico","Publicidade","Jornalismo","Cinema","Fotografia","Moda","Produção Musical","Animação"] },
  { id:"ciencias", nome:"Ciências", icon:"atom", c1:"var(--ciencias)", c2:"var(--ciencias-2)",
    descricao:"Investigar fenômenos, formular perguntas e ampliar os limites do conhecimento.",
    profissoesTags:["Biologia","Física","Química","Astronomia","Biotecnologia","Oceanografia","Geologia","Ciência Forense"] },
  { id:"educacao", nome:"Educação", icon:"book-open", c1:"var(--educacao)", c2:"var(--educacao-2)",
    descricao:"Compartilhar conhecimento e ajudar outras pessoas a desenvolver seu potencial.",
    profissoesTags:["Pedagogia","Letras","Matemática","História","Educação Física","Psicopedagogia","Educação Especial","Produção de Conteúdo Educacional"] },
  { id:"agrarias", nome:"Agrárias e Meio Ambiente", icon:"sprout", c1:"var(--agrarias)", c2:"var(--agrarias-2)",
    descricao:"Produzir, preservar recursos e criar soluções para a relação entre sociedade e natureza.",
    profissoesTags:["Agronomia","Medicina Veterinária","Engenharia Florestal","Zootecnia","Gestão Ambiental","Geoprocessamento","Engenharia de Alimentos","Ciências Biológicas"] },
  { id:"arquitetura", nome:"Arquitetura e Design", icon:"building-2", c1:"var(--arquitetura)", c2:"var(--arquitetura-2)",
    descricao:"Projetar espaços, produtos e experiências que unam beleza, função e significado.",
    profissoesTags:["Arquitetura","Design de Interiores","Design de Produto","Urbanismo","Paisagismo","Cenografia","Design Industrial","Visualização 3D"] },
];

// níveis: 1 baixo, 2 moderado, 3 alto, 4 muito alto
const NIVEL_LABEL = { 1:"Baixo", 2:"Moderado", 3:"Alto", 4:"Muito alto" };

const PROFESSIONS = [
  {
    id:"medicina", nome:"Medicina", area:"saude", icon:"stethoscope",
    resumo:"Diagnosticar, tratar e cuidar da saúde das pessoas ao longo da vida.",
    formacao:"Graduação em Medicina, seguida de residência na especialidade escolhida.",
    ambientes:["Hospitais","Clínicas","Unidades de saúde","Pesquisa"],
    habilidades:["Empatia","Concentração","Raciocínio lógico","Comunicação"],
    contato:4, criatividade:2, logica:4, remoto:1,
    fraseUnica:"Cuidar de vidas com ciência, atenção e responsabilidade.",
    faz:"O médico investiga sintomas, solicita e interpreta exames, propõe tratamentos e acompanha a evolução dos pacientes, sempre atualizando seus conhecimentos.",
    resolve:"Ajuda a prevenir, identificar e tratar doenças, além de orientar hábitos que preservam a saúde.",
    diaTipo:[
      {hora:"07h00",atividade:"Visita aos pacientes internados"},
      {hora:"09h00",atividade:"Consultas ambulatoriais"},
      {hora:"12h30",atividade:"Pausa e estudo de casos"},
      {hora:"14h00",atividade:"Procedimentos e exames"},
      {hora:"17h00",atividade:"Registro de prontuários"},
    ],
    ferramentas:["Estetoscópio","Prontuário eletrônico","Equipamentos de diagnóstico"],
    especializacoes:["Clínica geral","Cirurgia","Pediatria","Cardiologia","Medicina de família"],
    ladoOculto:"Rotina de plantões, decisões sob pressão e necessidade constante de atualização científica.",
    mitos:[
      {mito:"Todo médico enriquece rapidamente.", real:"A trajetória é longa, exige residência e a renda varia muito por região e especialidade."},
      {mito:"Basta gostar de ajudar pessoas.", real:"É preciso também gostar de estudo intenso e ciência aplicada por toda a carreira."},
    ],
    combinaSe:["Você tem paciência para estudar por muitos anos","Lida bem com situações de pressão","Gosta de ciência e do contato humano"],
    desafiadoraSe:["Você se sente muito desconfortável com rotinas exaustivas","Prefere evitar contato constante com sofrimento alheio"],
    relacionadas:["psicologia","pericia-criminal"],
  },
  {
    id:"psicologia", nome:"Psicologia", area:"saude", icon:"brain",
    resumo:"Compreender o comportamento humano e apoiar o bem-estar emocional.",
    formacao:"Graduação em Psicologia, com possibilidade de especializações posteriores.",
    ambientes:["Clínicas","Escolas","Empresas","Hospitais","Atendimento online"],
    habilidades:["Empatia","Escuta ativa","Comunicação","Concentração"],
    contato:4, criatividade:2, logica:2, remoto:3,
    fraseUnica:"Ajudar pessoas a entenderem a si mesmas.",
    faz:"O psicólogo escuta, avalia e acompanha processos emocionais, cognitivos e comportamentais, usando diferentes abordagens teóricas.",
    resolve:"Contribui para saúde mental, relações mais saudáveis e melhor qualidade de vida.",
    diaTipo:[
      {hora:"08h30",atividade:"Preparação e estudo de casos"},
      {hora:"09h00",atividade:"Sessões de atendimento"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h00",atividade:"Mais atendimentos ou supervisão"},
      {hora:"18h00",atividade:"Registro de evolução dos casos"},
    ],
    ferramentas:["Testes psicológicos","Prontuário clínico","Plataformas de atendimento online"],
    especializacoes:["Clínica","Organizacional","Escolar","Neuropsicologia","Social"],
    ladoOculto:"Lidar com histórias difíceis exige autocuidado constante e supervisão profissional.",
    mitos:[
      {mito:"Psicólogo dá conselhos prontos.", real:"O trabalho é ajudar a pessoa a encontrar suas próprias respostas."},
      {mito:"Só serve para quem tem um problema grave.", real:"A psicologia também apoia autoconhecimento e desenvolvimento pessoal."},
    ],
    combinaSe:["Você gosta de ouvir e compreender pessoas","Tem interesse por comportamento humano"],
    desafiadoraSe:["Você prefere pouco contato emocional no trabalho"],
    relacionadas:["medicina","direito-prof"],
  },
  {
    id:"dev-software", nome:"Desenvolvimento de Software", area:"tecnologia", icon:"code-2",
    resumo:"Criar programas e sistemas que resolvem problemas do dia a dia.",
    formacao:"Graduação em Computação, cursos técnicos, tecnólogos ou formação autodidata com prática.",
    ambientes:["Empresas de tecnologia","Startups","Trabalho remoto","Consultorias"],
    habilidades:["Lógica","Resolução de problemas","Trabalho em equipe","Adaptação"],
    contato:2, criatividade:3, logica:4, remoto:4,
    fraseUnica:"Transformar ideias em soluções digitais que funcionam.",
    faz:"Projeta, escreve, testa e mantém sistemas e aplicações, colaborando com times de produto e design.",
    resolve:"Automatiza processos, cria produtos digitais e conecta pessoas a serviços.",
    diaTipo:[
      {hora:"09h00",atividade:"Reunião rápida de alinhamento"},
      {hora:"09h30",atividade:"Desenvolvimento de funcionalidades"},
      {hora:"12h30",atividade:"Pausa"},
      {hora:"14h00",atividade:"Revisão de código em equipe"},
      {hora:"16h00",atividade:"Testes e ajustes"},
    ],
    ferramentas:["Editores de código","Sistemas de versionamento","Plataformas de nuvem"],
    especializacoes:["Front-end","Back-end","Mobile","Infraestrutura","Jogos"],
    ladoOculto:"Aprendizado constante, prazos apertados e depuração de erros complexos fazem parte da rotina.",
    mitos:[
      {mito:"Só precisa saber programar sozinho.", real:"Trabalho em equipe e comunicação são tão importantes quanto o código."},
      {mito:"É preciso ser 'gênio da matemática'.", real:"Lógica é mais importante que fórmulas avançadas na maior parte das áreas."},
    ],
    combinaSe:["Você gosta de resolver quebra-cabeças","Tem paciência para testar e ajustar até funcionar"],
    desafiadoraSe:["Você se frustra facilmente com tentativa e erro"],
    relacionadas:["ciencia-dados","design-grafico"],
  },
  {
    id:"ciencia-dados", nome:"Ciência de Dados", area:"tecnologia", icon:"bar-chart-3",
    resumo:"Transformar grandes volumes de dados em decisões e descobertas.",
    formacao:"Graduação em áreas como Computação, Estatística, Matemática ou Engenharia, com especialização em dados.",
    ambientes:["Empresas de tecnologia","Bancos","Indústrias","Pesquisa","Trabalho remoto"],
    habilidades:["Lógica","Investigação","Comunicação","Organização"],
    contato:2, criatividade:2, logica:4, remoto:4,
    fraseUnica:"Encontrar histórias e padrões escondidos nos dados.",
    faz:"Coleta, organiza e analisa dados para identificar padrões e apoiar decisões estratégicas.",
    resolve:"Ajuda empresas e instituições a tomarem decisões baseadas em evidências, não apenas em intuição.",
    diaTipo:[
      {hora:"09h00",atividade:"Organização e limpeza de dados"},
      {hora:"10h30",atividade:"Construção de modelos e análises"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Apresentação de resultados ao time"},
      {hora:"16h30",atividade:"Documentação dos processos"},
    ],
    ferramentas:["Linguagens de programação para análise","Painéis de visualização","Bancos de dados"],
    especializacoes:["Machine learning","Business intelligence","Estatística aplicada","Engenharia de dados"],
    ladoOculto:"Grande parte do tempo é dedicada a organizar dados desorganizados antes de qualquer análise.",
    mitos:[
      {mito:"É só rodar um algoritmo pronto.", real:"Entender o contexto do problema é mais importante que a ferramenta usada."},
      {mito:"Só serve para grandes empresas de tecnologia.", real:"Praticamente todo setor usa dados hoje, de agricultura a saúde."},
    ],
    combinaSe:["Você gosta de investigar padrões e números","Tem curiosidade sobre 'o porquê' das coisas"],
    desafiadoraSe:["Você não gosta de trabalhar com estatística e estruturação de dados"],
    relacionadas:["dev-software","ciencias-atuariais"],
  },
  {
    id:"arquitetura-prof", nome:"Arquitetura", area:"arquitetura", icon:"building",
    resumo:"Projetar espaços que equilibram estética, função e significado.",
    formacao:"Graduação em Arquitetura e Urbanismo, com registro profissional obrigatório.",
    ambientes:["Escritórios de projeto","Construtoras","Prefeituras","Trabalho autônomo"],
    habilidades:["Criatividade","Comunicação","Organização","Raciocínio espacial"],
    contato:3, criatividade:4, logica:3, remoto:2,
    fraseUnica:"Desenhar lugares onde a vida das pessoas acontece.",
    faz:"Cria projetos de edificações e espaços urbanos, equilibrando estética, orçamento, normas técnicas e necessidades do cliente.",
    resolve:"Transforma necessidades humanas em espaços funcionais, seguros e agradáveis de habitar.",
    diaTipo:[
      {hora:"09h00",atividade:"Reunião com clientes"},
      {hora:"10h30",atividade:"Desenvolvimento de projetos"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Visita a obra ou terreno"},
      {hora:"16h30",atividade:"Ajustes técnicos e documentação"},
    ],
    ferramentas:["Softwares de projeto e modelagem 3D","Maquetes físicas e digitais","Normas técnicas de construção"],
    especializacoes:["Residencial","Urbanismo","Paisagismo","Design de interiores","Restauro"],
    ladoOculto:"Orçamentos apertados e prazos de obra podem limitar ideias criativas iniciais.",
    mitos:[
      {mito:"Arquiteto só desenha fachadas bonitas.", real:"Grande parte do trabalho envolve normas técnicas, estrutura e viabilidade."},
      {mito:"É uma profissão só para quem sabe desenhar muito bem à mão.", real:"Hoje a maior parte do processo criativo acontece em softwares especializados."},
    ],
    combinaSe:["Você gosta de imaginar e desenhar espaços","Tem interesse por estética e função ao mesmo tempo"],
    desafiadoraSe:["Você não gosta de lidar com normas técnicas e burocracia de obras"],
    relacionadas:["engenharia-civil","design-grafico"],
  },
  {
    id:"agronomia", nome:"Agronomia", area:"agrarias", icon:"wheat",
    resumo:"Aplicar ciência para tornar a produção de alimentos mais eficiente e sustentável.",
    formacao:"Graduação em Agronomia, com registro profissional em conselho de classe.",
    ambientes:["Propriedades rurais","Cooperativas","Indústrias","Órgãos de pesquisa e extensão"],
    habilidades:["Investigação","Habilidade manual","Organização","Interesse por natureza"],
    contato:3, criatividade:2, logica:3, remoto:1,
    fraseUnica:"Unir ciência e terra para alimentar o futuro.",
    faz:"Planeja cultivos, analisa solo e clima, orienta manejo de pragas e busca formas mais sustentáveis de produzir.",
    resolve:"Aumenta a eficiência da produção agrícola cuidando também do meio ambiente.",
    diaTipo:[
      {hora:"07h00",atividade:"Visita a campo e coleta de dados"},
      {hora:"10h00",atividade:"Análise de solo e planejamento de manejo"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h00",atividade:"Reunião com produtores"},
      {hora:"16h30",atividade:"Relatórios técnicos"},
    ],
    ferramentas:["Equipamentos de análise de solo","Softwares de geoprocessamento","Sensores agrícolas"],
    especializacoes:["Fitotecnia","Solos","Defesa sanitária","Agronegócio","Sustentabilidade"],
    ladoOculto:"Rotina de campo exige deslocamentos, exposição ao clima e disponibilidade em safras.",
    mitos:[
      {mito:"É uma profissão só para quem nasceu na fazenda.", real:"É aberta a qualquer pessoa com interesse por ciência e produção de alimentos."},
      {mito:"O trabalho é só no campo.", real:"Também envolve pesquisa, laboratório, gestão e tecnologia."},
    ],
    combinaSe:["Você tem interesse por natureza e ciência aplicada","Gosta de resolver problemas práticos"],
    desafiadoraSe:["Você prefere rotinas totalmente urbanas e previsíveis"],
    relacionadas:["engenharia-civil","oceanografia"],
  },
  {
    id:"engenharia-civil", nome:"Engenharia Civil", area:"engenharia", icon:"hard-hat",
    resumo:"Planejar e construir estruturas que sustentam cidades inteiras.",
    formacao:"Graduação em Engenharia Civil, com registro profissional.",
    ambientes:["Construtoras","Escritórios de projeto","Órgãos públicos","Canteiros de obra"],
    habilidades:["Raciocínio lógico","Precisão","Organização","Liderança"],
    contato:3, criatividade:2, logica:4, remoto:1,
    fraseUnica:"Transformar cálculos em pontes, prédios e estradas.",
    faz:"Projeta e acompanha a execução de obras, garantindo segurança estrutural e cumprimento de normas técnicas.",
    resolve:"Cria a infraestrutura física que sustenta moradia, transporte e serviços urbanos.",
    diaTipo:[
      {hora:"07h30",atividade:"Visita ao canteiro de obras"},
      {hora:"10h00",atividade:"Cálculos e revisão de projetos"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Reunião com equipe de execução"},
      {hora:"16h30",atividade:"Documentação técnica"},
    ],
    ferramentas:["Softwares de cálculo estrutural","Equipamentos de topografia","Normas técnicas de construção"],
    especializacoes:["Estruturas","Geotecnia","Saneamento","Transportes","Gestão de obras"],
    ladoOculto:"Responsabilidade legal por segurança estrutural e rotina intensa em fases de obra.",
    mitos:[
      {mito:"O trabalho é só no escritório.", real:"Boa parte do tempo pode ser em campo, acompanhando obras."},
      {mito:"Só lida com prédios grandes.", real:"Também atua em saneamento, estradas, barragens e obras residenciais."},
    ],
    combinaSe:["Você gosta de matemática aplicada a problemas reais","Tem atenção a detalhes e segurança"],
    desafiadoraSe:["Você não gosta de lidar com prazos e imprevistos de obra"],
    relacionadas:["arquitetura-prof","agronomia"],
  },
  {
    id:"direito-prof", nome:"Direito", area:"direito", icon:"gavel",
    resumo:"Atuar na defesa de direitos e na construção de relações mais justas.",
    formacao:"Graduação em Direito; para advogar, é exigida aprovação em exame da Ordem.",
    ambientes:["Escritórios de advocacia","Tribunais","Empresas","Órgãos públicos"],
    habilidades:["Comunicação","Raciocínio lógico","Argumentação","Concentração"],
    contato:4, criatividade:2, logica:4, remoto:2,
    fraseUnica:"Usar as leis para defender pessoas e mediar conflitos.",
    faz:"Analisa casos, elabora documentos jurídicos, representa clientes e busca soluções dentro da lei.",
    resolve:"Ajuda a resolver conflitos, proteger direitos e organizar relações sociais e comerciais.",
    diaTipo:[
      {hora:"08h30",atividade:"Leitura de processos"},
      {hora:"10h00",atividade:"Atendimento a clientes"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Elaboração de petições"},
      {hora:"16h30",atividade:"Audiências ou reuniões"},
    ],
    ferramentas:["Sistemas processuais eletrônicos","Bibliotecas jurídicas digitais","Modelos de documentos"],
    especializacoes:["Direito civil","Trabalhista","Empresarial","Penal","Público"],
    ladoOculto:"Prazos processuais rígidos e alto volume de leitura fazem parte da rotina.",
    mitos:[
      {mito:"Advogado sempre 'vence' ou 'perde' uma causa sozinho.", real:"Muitos casos envolvem acordo, negociação e trabalho em equipe."},
      {mito:"Basta 'saber falar bem'.", real:"É preciso domínio técnico profundo da legislação e dos processos."},
    ],
    combinaSe:["Você gosta de argumentar com base em regras e lógica","Tem interesse por justiça e relações sociais"],
    desafiadoraSe:["Você não gosta de ler grandes volumes de texto técnico"],
    relacionadas:["pericia-criminal","psicologia"],
  },
  {
    id:"design-grafico", nome:"Design Gráfico", area:"artes", icon:"palette",
    resumo:"Criar imagens e composições visuais que comunicam ideias.",
    formacao:"Graduação, curso tecnólogo ou formação livre com portfólio consistente.",
    ambientes:["Agências","Empresas","Trabalho autônomo","Estúdios criativos"],
    habilidades:["Criatividade","Comunicação","Organização","Adaptação"],
    contato:2, criatividade:4, logica:1, remoto:4,
    fraseUnica:"Transformar ideias em imagens que comunicam algo.",
    faz:"Cria identidades visuais, materiais gráficos e composições para diferentes marcas e projetos.",
    resolve:"Ajuda marcas e mensagens a serem compreendidas e lembradas visualmente.",
    diaTipo:[
      {hora:"09h30",atividade:"Briefing com cliente ou equipe"},
      {hora:"10h30",atividade:"Criação de peças visuais"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h00",atividade:"Ajustes e revisões"},
      {hora:"16h30",atividade:"Organização de arquivos e entregas"},
    ],
    ferramentas:["Softwares de design gráfico","Mesas digitalizadoras","Bancos de tipografia e imagem"],
    especializacoes:["Identidade visual","Editorial","Design digital","Ilustração","Motion"],
    ladoOculto:"Prazos curtos e revisões constantes exigem organização e resiliência criativa.",
    mitos:[
      {mito:"Designer só faz 'coisa bonita'.", real:"O trabalho envolve estratégia de comunicação, não só estética."},
      {mito:"Basta ter talento natural.", real:"Técnica, teoria e prática constante são fundamentais."},
    ],
    combinaSe:["Você gosta de criar e experimentar visualmente","Tem sensibilidade estética"],
    desafiadoraSe:["Você não gosta de receber críticas e pedidos de revisão"],
    relacionadas:["arquitetura-prof","dev-software"],
  },
  {
    id:"oceanografia", nome:"Oceanografia", area:"ciencias", icon:"waves",
    resumo:"Estudar os oceanos e sua relação com o clima e a vida na Terra.",
    formacao:"Graduação em Oceanografia ou áreas correlatas em Ciências Biológicas.",
    ambientes:["Institutos de pesquisa","Universidades","Embarcações","Órgãos ambientais"],
    habilidades:["Investigação","Concentração","Organização","Interesse por natureza"],
    contato:2, criatividade:2, logica:3, remoto:1,
    fraseUnica:"Investigar os mistérios que os oceanos guardam.",
    faz:"Estuda correntes marinhas, ecossistemas costeiros e o impacto humano sobre os oceanos.",
    resolve:"Contribui para entender e proteger o equilíbrio climático e a biodiversidade marinha.",
    diaTipo:[
      {hora:"08h00",atividade:"Coleta de dados em campo ou embarcação"},
      {hora:"11h00",atividade:"Análise de amostras em laboratório"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Processamento de dados"},
      {hora:"16h30",atividade:"Redação de relatórios científicos"},
    ],
    ferramentas:["Sensores oceanográficos","Softwares de análise de dados","Equipamentos de mergulho e coleta"],
    especializacoes:["Biologia marinha","Geologia marinha","Química oceânica","Climatologia"],
    ladoOculto:"Expedições podem ser longas e distantes de casa, exigindo adaptação.",
    mitos:[
      {mito:"O trabalho é só nadar e observar peixes.", real:"Envolve muita análise de dados, estatística e escrita científica."},
      {mito:"Só existe emprego em institutos de pesquisa.", real:"Também há atuação em consultorias ambientais e órgãos públicos."},
    ],
    combinaSe:["Você tem curiosidade científica sobre a natureza","Gosta de trabalho de campo e pesquisa"],
    desafiadoraSe:["Você não se adapta bem a viagens e trabalho embarcado"],
    relacionadas:["agronomia","ciencia-dados"],
  },
  {
    id:"ciencias-atuariais", nome:"Ciências Atuariais", area:"negocios", icon:"calculator",
    resumo:"Usar matemática e estatística para medir e prever riscos financeiros.",
    formacao:"Graduação em Ciências Atuariais, com certificações profissionais complementares.",
    ambientes:["Seguradoras","Bancos","Fundos de pensão","Consultorias"],
    habilidades:["Lógica","Organização","Concentração","Investigação"],
    contato:2, criatividade:1, logica:4, remoto:3,
    fraseUnica:"Calcular o risco antes que ele aconteça.",
    faz:"Constrói modelos matemáticos para estimar riscos e precificar seguros, planos e investimentos.",
    resolve:"Ajuda empresas e pessoas a se planejarem financeiramente diante de imprevistos.",
    diaTipo:[
      {hora:"09h00",atividade:"Análise de bases de dados"},
      {hora:"10h30",atividade:"Construção de modelos de risco"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h30",atividade:"Reunião com áreas comerciais"},
      {hora:"16h30",atividade:"Relatórios técnicos"},
    ],
    ferramentas:["Softwares estatísticos","Planilhas avançadas","Modelos de precificação"],
    especializacoes:["Seguros de vida","Previdência","Seguros gerais","Gestão de riscos"],
    ladoOculto:"Exige domínio técnico profundo de matemática financeira e estatística.",
    mitos:[
      {mito:"É a mesma coisa que contabilidade.", real:"O foco atuarial está em probabilidade e risco, não em registros contábeis."},
      {mito:"É uma profissão pouco conhecida porque tem pouco espaço.", real:"A demanda existe, mas a profissão ainda é pouco divulgada nas escolas."},
    ],
    combinaSe:["Você gosta muito de matemática e estatística","Tem paciência para análises detalhadas"],
    desafiadoraSe:["Você não gosta de trabalhar com números o tempo todo"],
    relacionadas:["ciencia-dados","direito-prof"],
  },
  {
    id:"pericia-criminal", nome:"Perícia Criminal", area:"direito", icon:"fingerprint",
    resumo:"Investigar evidências científicas para elucidar crimes.",
    formacao:"Graduação em áreas como Ciências Biológicas, Química, Farmácia ou Direito, seguida de concurso público específico.",
    ambientes:["Institutos de criminalística","Locais de crime","Laboratórios forenses"],
    habilidades:["Investigação","Concentração","Precisão","Raciocínio lógico"],
    contato:2, criatividade:2, logica:4, remoto:1,
    fraseUnica:"Deixar que as evidências contem a verdade.",
    faz:"Analisa vestígios materiais em locais de crime e laboratório, produzindo laudos técnicos.",
    resolve:"Contribui para a elucidação de crimes com base em evidências científicas, não em suposições.",
    diaTipo:[
      {hora:"08h00",atividade:"Deslocamento a local de perícia"},
      {hora:"09h00",atividade:"Coleta e documentação de vestígios"},
      {hora:"13h00",atividade:"Pausa"},
      {hora:"14h00",atividade:"Análise laboratorial"},
      {hora:"16h30",atividade:"Elaboração de laudos técnicos"},
    ],
    ferramentas:["Equipamentos de coleta forense","Microscópios e reagentes","Softwares de documentação"],
    especializacoes:["Perícia papiloscópica","Balística","Perícia digital","Toxicologia forense"],
    ladoOculto:"Contato com cenas de crime exige equilíbrio emocional e rigor técnico constante.",
    mitos:[
      {mito:"Um caso é resolvido em poucas horas, como em séries.", real:"Laudos técnicos podem levar semanas de análise cuidadosa."},
      {mito:"Só existe perícia de sangue e digitais.", real:"Há perícia digital, contábil, ambiental e muitas outras especialidades."},
    ],
    combinaSe:["Você gosta de investigação minuciosa e método científico","Tem estabilidade emocional para lidar com temas sensíveis"],
    desafiadoraSe:["Você se sente muito impactado por temas relacionados a violência"],
    relacionadas:["direito-prof","medicina"],
  },
];

// mapa auxiliar: profissão -> objeto área
const AREA_BY_ID = Object.fromEntries(AREAS.map(a => [a.id, a]));

const DNA_QUESTIONS = [
  { texto:"Você prefere ajudar diretamente uma pessoa ou desenvolver uma solução que ajude muitas pessoas ao mesmo tempo?",
    opcoes:[ {t:"Ajudar diretamente uma pessoa", d:"social"}, {t:"Criar algo que ajude muitas pessoas", d:"tecnologico"} ] },
  { texto:"Você se sente mais interessado em criar algo novo ou em compreender como algo já existente funciona?",
    opcoes:[ {t:"Criar algo novo", d:"criativo"}, {t:"Entender como funciona", d:"investigativo"} ] },
  { texto:"Se pudesse escolher, prefere trabalhar principalmente com:",
    opcoes:[ {t:"Ideias e conceitos", d:"criativo"}, {t:"Pessoas", d:"social"}, {t:"Números e dados", d:"investigativo"}, {t:"Objetos e materiais", d:"pratico"} ] },
  { texto:"Você gosta mais de situações previsíveis ou de desafios que mudam rapidamente?",
    opcoes:[ {t:"Situações previsíveis", d:"pratico"}, {t:"Desafios que mudam rápido", d:"empreendedor"} ] },
  { texto:"No dia a dia, você prefere:",
    opcoes:[ {t:"Explicar e ensinar algo", d:"social"}, {t:"Investigar um problema", d:"investigativo"}, {t:"Liderar um projeto", d:"empreendedor"}, {t:"Construir ou criar algo com as mãos", d:"pratico"} ] },
  { texto:"Você se imagina trabalhando mais em ambientes internos (escritório, laboratório) ou externos (campo, obra, rua)?",
    opcoes:[ {t:"Ambientes internos", d:"investigativo"}, {t:"Ambientes externos", d:"pratico"} ] },
  { texto:"Você gosta de tomar decisões importantes e assumir responsabilidade por elas?",
    opcoes:[ {t:"Sim, gosto bastante", d:"empreendedor"}, {t:"Prefiro colaborar em vez de decidir sozinho", d:"social"} ] },
  { texto:"Você teria paciência para estudar um mesmo problema durante muito tempo até resolvê-lo?",
    opcoes:[ {t:"Sim, isso me motiva", d:"investigativo"}, {t:"Prefiro resultados mais rápidos e visíveis", d:"pratico"} ] },
  { texto:"Que tipo de resultado te deixa mais satisfeito?",
    opcoes:[ {t:"Um resultado visual e criativo", d:"criativo"}, {t:"Um resultado humano e relacional", d:"social"}, {t:"Um resultado financeiro ou estratégico", d:"empreendedor"}, {t:"Um resultado científico e comprovado", d:"investigativo"} ] },
  { texto:"Qual situação mais desperta sua curiosidade?",
    opcoes:[ {t:"Um novo aplicativo ou tecnologia", d:"tecnologico"}, {t:"Um mistério a ser investigado", d:"investigativo"}, {t:"Uma obra de arte ou design", d:"criativo"}, {t:"Um negócio crescendo do zero", d:"empreendedor"} ] },
];

const DIMENSOES = {
  social:{ nome:"Social", desc:"Você se conecta com facilidade e gosta de apoiar outras pessoas.", areas:["saude","educacao"] },
  investigativo:{ nome:"Investigativo", desc:"Você gosta de entender profundamente como as coisas funcionam.", areas:["ciencias","tecnologia"] },
  criativo:{ nome:"Criativo", desc:"Você pensa fora do padrão e gosta de criar coisas novas.", areas:["artes","arquitetura"] },
  tecnologico:{ nome:"Tecnológico", desc:"Você se interessa por ferramentas, sistemas e inovação.", areas:["tecnologia","engenharia"] },
  empreendedor:{ nome:"Empreendedor", desc:"Você gosta de liderar, decidir e transformar ideias em ação.", areas:["negocios","direito"] },
  pratico:{ nome:"Prático", desc:"Você prefere resultados concretos e gosta de mão na massa.", areas:["agrarias","engenharia"] },
};

const MYTHS = [
  { frase:"Preciso decidir toda a minha vida agora.", real:"Ninguém escolhe o resto da vida aos 15 ou 16 anos. A primeira escolha é só um ponto de partida — trocar de caminho ao longo da vida é normal e comum." },
  { frase:"Só existe uma profissão certa para cada pessoa.", real:"A maioria das pessoas se realizaria em mais de um caminho possível. O importante é encontrar algo que faça sentido agora, não 'a' escolha perfeita." },
  { frase:"Mudar de carreira significa fracassar.", real:"Mudar de direção é parte natural da trajetória profissional de muita gente, e costuma vir acompanhada de aprendizado, não de fracasso." },
  { frase:"A profissão dos meus sonhos não pode ter dificuldades.", real:"Toda profissão tem desafios reais. Conhecer o 'lado que nem sempre aparece' ajuda a escolher com mais consciência, não a desistir." },
  { frase:"Somente a faculdade garante sucesso.", real:"Cursos técnicos, tecnólogos, certificações e empreendedorismo também são caminhos válidos e reconhecidos de carreira." },
  { frase:"Preciso escolher apenas pelo salário.", real:"Remuneração importa, mas rotina, ambiente e propósito também afetam diretamente sua qualidade de vida no longo prazo." },
  { frase:"Um teste vocacional pode decidir por mim.", real:"Testes são apenas um ponto de partida para reflexão — a decisão final é sempre sua, construída aos poucos." },
];

const UNKNOWN_CAREERS = [
  { nome:"Atuário", icon:"calculator", faz:"Calcula riscos financeiros usando matemática e estatística.", onde:"Seguradoras, bancos e fundos de previdência.", habilidade:"Raciocínio lógico e análise de dados.", curiosidade:"É uma das profissões mais bem avaliadas em rankings internacionais de satisfação no trabalho." },
  { nome:"Oceanógrafo", icon:"waves", faz:"Estuda os oceanos, correntes marinhas e vida aquática.", onde:"Institutos de pesquisa e embarcações científicas.", habilidade:"Investigação e trabalho de campo.", curiosidade:"Conhecemos melhor a superfície da Lua do que o fundo de muitos oceanos." },
  { nome:"Bioinformata", icon:"dna", faz:"Usa programação para analisar dados biológicos, como sequências genéticas.", onde:"Laboratórios de pesquisa e biotecnologia.", habilidade:"Lógica de programação aplicada à biologia.", curiosidade:"Une biologia e tecnologia para acelerar descobertas médicas." },
  { nome:"Engenheiro Acústico", icon:"volume-2", faz:"Projeta ambientes e equipamentos considerando o comportamento do som.", onde:"Estúdios, indústrias e construção civil.", habilidade:"Física aplicada e percepção auditiva.", curiosidade:"Está por trás do conforto sonoro de salas de cinema e teatros." },
  { nome:"Restaurador de Obras", icon:"paintbrush", faz:"Recupera pinturas, esculturas e objetos históricos.", onde:"Museus, igrejas e instituições culturais.", habilidade:"Precisão manual e conhecimento histórico.", curiosidade:"Cada restauro exige pesquisa sobre os materiais originais da época." },
  { nome:"Especialista em Geoprocessamento", icon:"map", faz:"Analisa mapas e dados espaciais para planejamento territorial.", onde:"Prefeituras, agronegócio e órgãos ambientais.", habilidade:"Análise espacial e tecnologia geográfica.", curiosidade:"É usado tanto para planejar cidades quanto para prever safras agrícolas." },
  { nome:"Cientista de Alimentos", icon:"flask-conical", faz:"Desenvolve e melhora produtos alimentícios com base científica.", onde:"Indústrias alimentícias e laboratórios de pesquisa.", habilidade:"Química aplicada e inovação.", curiosidade:"Está por trás de praticamente todo alimento industrializado que você consome." },
  { nome:"Ergonomista", icon:"armchair", faz:"Adapta ambientes e equipamentos ao corpo humano.", onde:"Indústrias, empresas e consultorias.", habilidade:"Análise do movimento humano.", curiosidade:"Ajuda a reduzir lesões e aumentar conforto em qualquer tipo de trabalho." },
  { nome:"Designer de Serviços", icon:"workflow", faz:"Projeta a experiência completa de um serviço, não só um produto.", onde:"Empresas, hospitais e órgãos públicos.", habilidade:"Empatia e visão sistêmica.", curiosidade:"Pode redesenhar desde uma fila de atendimento até um aplicativo bancário." },
  { nome:"Analista de Inteligência", icon:"search", faz:"Coleta e interpreta informações para apoiar decisões estratégicas.", onde:"Empresas, governos e órgãos de segurança.", habilidade:"Investigação e pensamento crítico.", curiosidade:"Trabalha conectando pequenos pedaços de informação para formar um panorama maior." },
  { nome:"Especialista em Acessibilidade Digital", icon:"accessibility", faz:"Garante que sites e aplicativos possam ser usados por todas as pessoas.", onde:"Empresas de tecnologia e órgãos públicos.", habilidade:"Empatia e conhecimento técnico.", curiosidade:"Uma internet mais acessível melhora a experiência de todo mundo, não só de quem tem deficiência." },
  { nome:"Engenheiro Biomédico", icon:"activity", faz:"Desenvolve equipamentos e tecnologias para a área da saúde.", onde:"Hospitais, indústrias e centros de pesquisa.", habilidade:"Engenharia aplicada à biologia humana.", curiosidade:"Cria desde próteses avançadas até equipamentos de diagnóstico por imagem." },
];

const FUTURE_CAREERS = [
  { nome:"Especialista em Inteligência Artificial", texto:"Desenvolve e ajusta sistemas capazes de aprender padrões e apoiar decisões em diferentes setores." },
  { nome:"Cientista de Dados", texto:"Transforma grandes volumes de informação em insights para empresas, governos e pesquisa." },
  { nome:"Profissional de Cibersegurança", texto:"Protege sistemas, dados e pessoas contra ataques e vazamentos digitais." },
  { nome:"Especialista em Energias Renováveis", texto:"Planeja e implementa soluções de energia solar, eólica e outras fontes sustentáveis." },
  { nome:"Designer de Realidade Virtual", texto:"Cria experiências imersivas para educação, entretenimento e treinamento profissional." },
  { nome:"Especialista em Ética Tecnológica", texto:"Avalia os impactos sociais e morais do uso de novas tecnologias." },
  { nome:"Profissional de Automação", texto:"Projeta sistemas que tornam processos industriais e administrativos mais eficientes." },
  { nome:"Especialista em Cidades Inteligentes", texto:"Une tecnologia e planejamento urbano para melhorar a vida nas cidades." },
  { nome:"Profissional de Biotecnologia", texto:"Aplica ciência e tecnologia à saúde, agricultura e meio ambiente." },
  { nome:"Especialista em Sustentabilidade", texto:"Ajuda empresas e governos a reduzirem impactos ambientais de suas atividades." },
  { nome:"Piloto e Operador de Drones", texto:"Opera equipamentos aéreos para inspeção, agricultura, mapeamento e logística." },
  { nome:"Designer de Experiências Digitais", texto:"Projeta interações entre pessoas e produtos digitais, tornando-as mais intuitivas." },
];

const BEYOND_COLLEGE_PATHS = [
  { nome:"Curso técnico", icon:"wrench" },
  { nome:"Curso tecnológico", icon:"laptop" },
  { nome:"Graduação", icon:"graduation-cap" },
  { nome:"Aprendizagem profissional", icon:"hammer" },
  { nome:"Certificações", icon:"badge-check" },
  { nome:"Empreendedorismo", icon:"rocket" },
  { nome:"Portfólio", icon:"folder-open" },
  { nome:"Concursos públicos", icon:"file-text" },
  { nome:"Formação autodidata com prática", icon:"book-open-check" },
];

const TECH_PROFESSIONS = ["Técnico em Automação","Técnico em Enfermagem","Técnico em Segurança do Trabalho","Técnico em Eletrotécnica","Desenvolvedor Web","Fotógrafo","Designer","Mecânico Especializado","Técnico Agrícola","Técnico em Edificações"];

const SKILLS_MAP = [
  { nome:"Criatividade", icon:"sparkles", profissoes:["design-grafico","arquitetura-prof","dev-software"] },
  { nome:"Comunicação", icon:"message-circle", profissoes:["direito-prof","psicologia","design-grafico"] },
  { nome:"Raciocínio lógico", icon:"puzzle", profissoes:["dev-software","engenharia-civil","ciencias-atuariais"] },
  { nome:"Liderança", icon:"users", profissoes:["direito-prof","arquitetura-prof","engenharia-civil"] },
  { nome:"Precisão", icon:"target", profissoes:["pericia-criminal","engenharia-civil","medicina"] },
  { nome:"Empatia", icon:"heart-handshake", profissoes:["psicologia","medicina","direito-prof"] },
  { nome:"Investigação", icon:"search", profissoes:["pericia-criminal","oceanografia","ciencia-dados"] },
  { nome:"Habilidade manual", icon:"hand", profissoes:["agronomia","engenharia-civil","medicina"] },
  { nome:"Organização", icon:"clipboard-list", profissoes:["ciencias-atuariais","direito-prof","arquitetura-prof"] },
  { nome:"Interesse por natureza", icon:"leaf", profissoes:["agronomia","oceanografia","engenharia-civil"] },
  { nome:"Tecnologia", icon:"cpu", profissoes:["dev-software","ciencia-dados","pericia-criminal"] },
  { nome:"Resolução de problemas", icon:"lightbulb", profissoes:["dev-software","medicina","engenharia-civil"] },
];

const STORIES = {
  medicina:{
    titulo:"Medicina", area:"saude",
    intro:"Você acompanha um plantão em uma clínica movimentada.",
    cenas:[
      { texto:"Um paciente chega com dor no peito. Como você começa o atendimento?",
        opcoes:[
          { t:"Ouço o histórico com calma antes de examinar", skill:"Empatia" },
          { t:"Já solicito exames imediatamente", skill:"Raciocínio lógico" } ] },
      { texto:"Os exames demoram e a sala de espera está cheia. O que você faz?",
        opcoes:[
          { t:"Organizo a fila por gravidade dos casos", skill:"Organização" },
          { t:"Peço ajuda da equipe para dividir tarefas", skill:"Trabalho em equipe" } ] },
      { texto:"O diagnóstico é incerto. Como você decide o próximo passo?",
        opcoes:[
          { t:"Discuto o caso com colegas mais experientes", skill:"Comunicação" },
          { t:"Reviso os exames com mais atenção sozinho", skill:"Concentração" } ] },
    ],
  },
  tecnologia:{
    titulo:"Tecnologia", area:"tecnologia",
    intro:"Você participa do desenvolvimento de um novo aplicativo.",
    cenas:[
      { texto:"O time precisa decidir como resolver um problema técnico. O que você propõe?",
        opcoes:[
          { t:"Sugiro dividir o problema em partes menores", skill:"Resolução de problemas" },
          { t:"Proponho testar rapidamente uma solução simples", skill:"Adaptação" } ] },
      { texto:"Um teste encontrou um erro grave no sistema. Como você reage?",
        opcoes:[
          { t:"Investigo com calma a causa do problema", skill:"Lógica" },
          { t:"Chamo o time para resolver juntos", skill:"Trabalho em equipe" } ] },
      { texto:"O prazo de entrega está próximo. O que você prioriza?",
        opcoes:[
          { t:"Garanto que as funções essenciais funcionem bem", skill:"Organização" },
          { t:"Converso com o time sobre o que é possível entregar", skill:"Comunicação" } ] },
    ],
  },
  arquitetura:{
    titulo:"Arquitetura", area:"arquitetura",
    intro:"Você acompanha o projeto de uma casa para uma família.",
    cenas:[
      { texto:"A família tem um orçamento limitado, mas muitos desejos. O que você faz?",
        opcoes:[
          { t:"Priorizo os ambientes mais importantes para a rotina deles", skill:"Organização" },
          { t:"Busco soluções criativas para reduzir custos", skill:"Criatividade" } ] },
      { texto:"Você percebe que o projeto pode dificultar o acesso de uma pessoa com mobilidade reduzida.",
        opcoes:[
          { t:"Redesenho os acessos para garantir acessibilidade", skill:"Empatia" },
          { t:"Pesquiso normas técnicas de acessibilidade", skill:"Investigação" } ] },
      { texto:"O cliente pede uma mudança de última hora no projeto. Como você conduz?",
        opcoes:[
          { t:"Explico com clareza os impactos da mudança", skill:"Comunicação" },
          { t:"Ajusto o projeto buscando manter a essência criativa", skill:"Criatividade" } ] },
    ],
  },
};


/* ================= 2. ESTADO E UTILITÁRIOS ================= */

const state = {
  favorites: new Set(JSON.parse(localStorage.getItem("prisma_favoritos") || "[]")),
  activeAreaFilter: "todas",
  comparatorSelection: [],
  dnaAnswers: [],
  dnaCurrent: 0,
  activeStory: null,
  storyStep: 0,
  storySkills: [],
};

const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function saveFavorites(){
  try{
    localStorage.setItem("prisma_favoritos", JSON.stringify(Array.from(state.favorites)));
  }catch(err){
    console.warn("Não foi possível salvar os favoritos:", err);
  }
}

function levelDots(n){
  let html = '<span class="level-dots" aria-hidden="true">';
  for(let i=1;i<=4;i++) html += `<span class="${i<=n?'filled':''}"></span>`;
  html += '</span>';
  return html;
}

function refreshIcons(){
  if(window.lucide) lucide.createIcons();
}

function trapFocus(container){
  const focusables = $$('button, a, input, [tabindex]:not([tabindex="-1"])', container);
  if(focusables.length) focusables[0].focus();
}

/* ================= 3. CABEÇALHO E NAVEGAÇÃO ================= */

function initHeader(){
  const header = $("#site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  const menuToggle = $("#menu-toggle");
  const mobileNav = $("#mobile-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$("#mobile-nav a").forEach(a => a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  // destaque da seção ativa via IntersectionObserver
  const navLinks = $$(".main-nav .nav-link");
  const sections = navLinks.map(l => document.getElementById(l.dataset.section)).filter(Boolean);
  if("IntersectionObserver" in window && sections.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          navLinks.forEach(l => l.classList.toggle("active", l.dataset.section === entry.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    sections.forEach(s => observer.observe(s));
  }

  $("#back-to-top").addEventListener("click", () => {
    window.scrollTo({ top:0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* ================= 4. HERO ================= */

function initHero(){
  // partículas discretas
  const particlesEl = $("#hero-particles");
  const count = window.innerWidth < 700 ? 14 : 28;
  for(let i=0;i<count;i++){
    const p = document.createElement("span");
    p.style.left = Math.random()*100 + "%";
    p.style.top = Math.random()*100 + "%";
    p.style.animation = `float-particle ${8+Math.random()*10}s ease-in-out ${Math.random()*5}s infinite`;
    particlesEl.appendChild(p);
  }
  const styleTag = document.createElement("style");
  styleTag.textContent = `@keyframes float-particle{0%,100%{transform:translateY(0);opacity:.2;}50%{transform:translateY(-24px);opacity:.6;}}`;
  document.head.appendChild(styleTag);

  // ícones flutuantes ao redor do prisma
  const icons = ["stethoscope","cog","code-2","leaf","camera","book-open","bar-chart-3","dna","scale","hard-hat"];
  const wrap = $("#floating-icons");
  const positions = [
    {top:"6%",left:"10%"},{top:"14%",left:"78%"},{top:"66%",left:"84%"},
    {top:"80%",left:"18%"},{top:"36%",left:"2%"},{top:"4%",left:"46%"},
    {top:"90%",left:"52%"},{top:"46%",left:"92%"},{top:"58%",left:"6%"},{top:"20%",left:"36%"},
  ];
  icons.forEach((icon,i) => {
    const el = document.createElement("div");
    el.className = "ficon";
    el.style.top = positions[i].top;
    el.style.left = positions[i].left;
    el.style.animationDelay = (i*0.4)+"s";
    el.innerHTML = `<i data-lucide="${icon}"></i>`;
    wrap.appendChild(el);
  });

  // reação suave ao mouse
  const scene = $("#prism-scene");
  const heroVisual = $("#hero-visual");
  if(!prefersReducedMotion && scene){
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      scene.style.transform = `rotateX(${-y*10}deg) rotateY(${x*14}deg)`;
    });
    heroVisual.addEventListener("mouseleave", () => { scene.style.transform = ""; });
  }

  $("#scroll-cue").addEventListener("click", () => {
    $("#manifesto").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* ================= 5. CONSTELAÇÃO DE ÁREAS ================= */

function renderAreas(){
  const grid = $("#areas-grid");
  grid.innerHTML = AREAS.map(area => `
    <button class="area-card" style="--area-c1:${area.c1};--area-c2:${area.c2}" data-area="${area.id}" aria-haspopup="dialog">
      <div>
        <div class="area-glyph"><i data-lucide="${area.icon}"></i></div>
        <h3>${area.nome}</h3>
        <p>${area.descricao}</p>
      </div>
      <div>
        <div class="area-tags">${area.profissoesTags.slice(0,4).map(t=>`<span>${t}</span>`).join("")}</div>
        <span class="area-count"><i data-lucide="arrow-up-right" style="width:14px;height:14px"></i> ${area.profissoesTags.length} profissões</span>
      </div>
    </button>
  `).join("");

  $$(".area-card", grid).forEach(card => {
    card.addEventListener("click", () => openAreaPanel(card.dataset.area));
    card.addEventListener("mousemove", (e) => {
      if(prefersReducedMotion) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX-rect.left)/rect.width - 0.5;
      const y = (e.clientY-rect.top)/rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y*8}deg) rotateY(${x*8}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
  refreshIcons();
}

function openAreaPanel(areaId){
  const area = AREA_BY_ID[areaId];
  if(!area) return;
  const related = PROFESSIONS.filter(p => p.area === areaId);
  $("#panel-scroll").innerHTML = `
    <div class="panel-area-header" style="background:linear-gradient(135deg, color-mix(in srgb, ${area.c1} 30%, transparent), color-mix(in srgb, ${area.c2} 16%, transparent));border:1px solid ${area.c1}">
      <div class="area-glyph" style="background:color-mix(in srgb, ${area.c1} 25%, transparent);color:${area.c1}"><i data-lucide="${area.icon}"></i></div>
      <h2 style="margin-top:1rem">${area.nome}</h2>
      <p style="color:var(--text-secondary);margin-top:.5rem">${area.descricao}</p>
    </div>
    <h3 style="margin-bottom:.8rem">Profissões da área</h3>
    <div class="panel-professions">
      ${area.profissoesTags.map(tag => {
        const prof = related.find(p => p.nome === tag);
        return prof
          ? `<button data-prof="${prof.id}" style="--card-c:${area.c1}">${tag} <span style="float:right;color:${area.c1}">Ver detalhes →</span></button>`
          : `<div style="padding:.8rem 1rem;border-radius:var(--radius-s);border:1px solid var(--line);font-size:.9rem;color:var(--text-secondary)">${tag}</div>`;
      }).join("")}
    </div>
  `;
  $$('.panel-professions button[data-prof]').forEach(btn => {
    btn.addEventListener("click", () => {
      closePanel();
      setTimeout(() => openProfessionModal(btn.dataset.prof), 250);
    });
  });
  refreshIcons();
  $("#panel-overlay").hidden = false;
  document.body.style.overflow = "hidden";
  trapFocus($("#area-panel"));
}
function closePanel(){
  $("#panel-overlay").hidden = true;
  document.body.style.overflow = "";
}
$("#panel-close")?.addEventListener("click", closePanel);
$("#panel-overlay")?.addEventListener("click", (e) => { if(e.target.id === "panel-overlay") closePanel(); });

/* ================= 6. PROFISSÕES: GRID, BUSCA, FILTRO ================= */

function renderFilterChips(){
  const wrap = $("#filter-chips");
  const chips = [{id:"todas", nome:"Todas as áreas"}, ...AREAS];
  wrap.innerHTML = chips.map(a => `<button class="chip ${a.id==='todas'?'active':''}" data-filter="${a.id}">${a.nome}</button>`).join("");
  $$(".chip", wrap).forEach(chip => {
    chip.addEventListener("click", () => {
      state.activeAreaFilter = chip.dataset.filter;
      $$(".chip", wrap).forEach(c => c.classList.toggle("active", c === chip));
      renderProfessionsGrid();
    });
  });
}

function professionCardHTML(p){
  const area = AREA_BY_ID[p.area];
  const isFav = state.favorites.has(p.id);
  return `
    <article class="profession-card" style="--card-c:${area.c1}" data-id="${p.id}">
      <div class="profession-top">
        <span class="profession-area-tag">${area.nome}</span>
        <button class="fav-btn ${isFav?'active':''}" data-fav="${p.id}" aria-label="Favoritar ${p.nome}" aria-pressed="${isFav}">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <h3>${p.nome}</h3>
      <p>${p.resumo}</p>
      <div class="profession-meta">
        <span>Contato ${levelDots(p.contato)}</span>
        <span>Criatividade ${levelDots(p.criatividade)}</span>
        <span>Lógica ${levelDots(p.logica)}</span>
      </div>
      <div class="profession-actions">
        <button class="know-btn" data-know="${p.id}">Conhecer profissão <i data-lucide="arrow-right"></i></button>
      </div>
    </article>
  `;
}

function renderProfessionsGrid(){
  const grid = $("#professions-grid");
  const empty = $("#professions-empty");
  const query = $("#profession-search").value.trim().toLowerCase();

  const filtered = PROFESSIONS.filter(p => {
    const matchesArea = state.activeAreaFilter === "todas" || p.area === state.activeAreaFilter;
    const matchesQuery = !query || p.nome.toLowerCase().includes(query) || p.resumo.toLowerCase().includes(query);
    return matchesArea && matchesQuery;
  });

  if(!filtered.length){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(professionCardHTML).join("");
  }

  $$('[data-know]', grid).forEach(btn => btn.addEventListener("click", () => openProfessionModal(btn.dataset.know)));
  $$('[data-fav]', grid).forEach(btn => btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(btn.dataset.fav);
  }));
  refreshIcons();
}

function toggleFavorite(id){
  if(state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
  renderProfessionsGrid();
  renderFavorites();
  // atualiza o botão do modal se estiver aberto
  const modalFav = $("#modal-fav-btn");
  if(modalFav && modalFav.dataset.id === id){
    modalFav.classList.toggle("active", state.favorites.has(id));
  }
}

function initSearch(){
  const input = $("#profession-search");
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(renderProfessionsGrid, 120);
  });
}

/* ================= 7. MODAL DETALHADO DE PROFISSÃO ================= */

function openProfessionModal(id){
  const p = PROFESSIONS.find(pr => pr.id === id);
  if(!p) return;
  const area = AREA_BY_ID[p.area];
  const isFav = state.favorites.has(p.id);

  $("#modal-scroll").innerHTML = `
    <span class="modal-eyebrow" style="--card-c:${area.c1}">${area.nome}</span>
    <h2 id="modal-title">${p.nome}</h2>
    <p class="modal-oneliner">"${p.fraseUnica}"</p>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="briefcase"></i> O que esse profissional faz</h3>
      <p>${p.faz}</p>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="target"></i> Que problemas essa profissão resolve</h3>
      <p>${p.resolve}</p>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="clock"></i> Um dia possível de trabalho</h3>
      <ul class="timeline-list">
        ${p.diaTipo.map(d => `<li><span class="t-time">${d.hora}</span><span>${d.atividade}</span></li>`).join("")}
      </ul>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="sparkles"></i> Habilidades importantes</h3>
      <div class="tag-row">${p.habilidades.map(h=>`<span>${h}</span>`).join("")}</div>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="wrench"></i> Ferramentas utilizadas</h3>
      <div class="tag-row">${p.ferramentas.map(h=>`<span>${h}</span>`).join("")}</div>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="git-branch"></i> Possíveis áreas de atuação</h3>
      <div class="tag-row">${p.especializacoes.map(h=>`<span>${h}</span>`).join("")}</div>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="eye-off"></i> O lado que nem sempre aparece</h3>
      <p>${p.ladoOculto}</p>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="help-circle"></i> Mitos e verdades</h3>
      ${p.mitos.map(m => `<div class="myth-pair"><strong>Mito: ${m.mito}</strong><span>Verdade: ${m.real}</span></div>`).join("")}
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="check-circle"></i> Pode combinar com você se...</h3>
      <ul>${p.combinaSe.map(x=>`<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="modal-block">
      <h3 style="--card-c:${area.c1}"><i data-lucide="alert-circle"></i> Talvez seja desafiadora se...</h3>
      <ul>${p.desafiadoraSe.map(x=>`<li>${x}</li>`).join("")}</ul>
    </div>

    ${(() => {
      const relatedValid = p.relacionadas.map(rid => PROFESSIONS.find(pr=>pr.id===rid)).filter(Boolean);
      if(!relatedValid.length) return "";
      return `<div class="modal-block">
        <h3 style="--card-c:${area.c1}"><i data-lucide="link-2"></i> Caminhos relacionados</h3>
        <div class="related-chips">
          ${relatedValid.map(r => `<span data-related="${r.id}" style="cursor:pointer">${r.nome}</span>`).join("")}
        </div>
      </div>`;
    })()}

    <p style="font-size:.8rem;color:var(--text-secondary);margin-bottom:1.4rem">Formação, mercado e ambientes podem variar conforme região, instituição e momento econômico. Consulte fontes atualizadas antes de decidir. Formação típica: ${p.formacao}</p>

    <div class="modal-actions">
      <button class="btn btn-primary" id="modal-fav-btn" data-id="${p.id}" style="${isFav?'':''}">
        <i data-lucide="heart"></i> ${isFav ? "Remover dos favoritos" : "Favoritar profissão"}
      </button>
      <button class="btn btn-ghost" id="modal-compare-btn" data-id="${p.id}"><i data-lucide="scale"></i> Adicionar ao comparador</button>
    </div>
  `;

  $("#modal-fav-btn").classList.toggle("active", isFav);
  $("#modal-fav-btn").addEventListener("click", () => {
    toggleFavorite(p.id);
    openProfessionModal(p.id); // re-render para atualizar texto do botão
  });
  $("#modal-compare-btn").addEventListener("click", () => {
    addToComparator(p.id);
  });
  $$('[data-related]').forEach(chip => chip.addEventListener("click", () => openProfessionModal(chip.dataset.related)));

  refreshIcons();
  $("#modal-overlay").hidden = false;
  document.body.style.overflow = "hidden";
  trapFocus($("#profession-modal"));
}
function closeModal(){
  $("#modal-overlay").hidden = true;
  document.body.style.overflow = "";
}
$("#modal-close")?.addEventListener("click", closeModal);
$("#modal-overlay")?.addEventListener("click", (e) => { if(e.target.id === "modal-overlay") closeModal(); });

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    if(!$("#modal-overlay").hidden) closeModal();
    if(!$("#panel-overlay").hidden) closePanel();
  }
});

/* ================= 8. TESTE DNA PROFISSIONAL ================= */

function initDnaTest(){
  $("#dna-start").addEventListener("click", startDnaTest);
  $("#dna-restart").addEventListener("click", startDnaTest);
}

function startDnaTest(){
  state.dnaAnswers = [];
  state.dnaCurrent = 0;
  $("#dna-intro").hidden = true;
  $("#dna-result").hidden = true;
  $("#dna-quiz").hidden = false;
  renderDnaQuestion();
}

function renderDnaQuestion(){
  const q = DNA_QUESTIONS[state.dnaCurrent];
  $("#dna-question-count").textContent = `Pergunta ${state.dnaCurrent+1} de ${DNA_QUESTIONS.length}`;
  $("#dna-progress-fill").style.width = `${(state.dnaCurrent/DNA_QUESTIONS.length)*100}%`;
  $("#dna-question").textContent = q.texto;
  $("#dna-options").innerHTML = q.opcoes.map((op,i) => `<button class="dna-option" data-i="${i}">${op.t}</button>`).join("");
  $$(".dna-option", $("#dna-options")).forEach(btn => {
    btn.addEventListener("click", () => {
      state.dnaAnswers.push(q.opcoes[Number(btn.dataset.i)].d);
      state.dnaCurrent++;
      if(state.dnaCurrent < DNA_QUESTIONS.length) renderDnaQuestion();
      else finishDnaTest();
    });
  });
}

function finishDnaTest(){
  $("#dna-progress-fill").style.width = "100%";
  const counts = {};
  Object.keys(DIMENSOES).forEach(d => counts[d] = 0);
  state.dnaAnswers.forEach(d => counts[d] = (counts[d]||0) + 1);
  const total = state.dnaAnswers.length;
  const sorted = Object.entries(counts).sort((a,b) => b[1]-a[1]);

  $("#dna-bars").innerHTML = sorted.map(([dim,val]) => {
    const pct = Math.round((val/total)*100);
    return `<div class="dna-bar-row">
      <span>${DIMENSOES[dim].nome}</span>
      <div class="dna-bar-track"><div class="dna-bar-fill" style="width:${pct}%"></div></div>
      <span>${pct}%</span>
    </div>`;
  }).join("");

  const topDim = sorted[0][0];
  $("#dna-description").textContent = DIMENSOES[topDim].desc + " Lembre-se: este é apenas um ponto de partida para reflexão, não uma resposta definitiva sobre seu futuro.";

  const topAreas = [...new Set(sorted.slice(0,3).flatMap(([dim]) => DIMENSOES[dim].areas))].slice(0,3);
  $("#dna-areas").innerHTML = topAreas.map(aid => {
    const a = AREA_BY_ID[aid];
    return `<span style="border-color:${a.c1};color:${a.c1}">${a.nome}</span>`;
  }).join("");

  const suggested = PROFESSIONS.filter(p => topAreas.includes(p.area)).slice(0,5);
  $("#dna-suggestions").innerHTML = suggested.map(p => `
    <div class="dna-suggestion-card">
      <h5>${p.nome}</h5>
      <p>Sugerida porque combina com seu interesse ${DIMENSOES[topDim].nome.toLowerCase()} e está ligada à área de ${AREA_BY_ID[p.area].nome}.</p>
    </div>
  `).join("");

  $("#dna-quiz").hidden = true;
  $("#dna-result").hidden = false;
}

/* ================= 9. COMPARADOR DE FUTUROS ================= */

const COMPARATOR_ROWS = [
  { label:"Duração aproximada da formação", key:p => p.area==="tecnologia"||p.area==="arquitetura" ? "Moderada a longa" : "Longa (graduação completa)" },
  { label:"Contato com pessoas", key:p => NIVEL_LABEL[p.contato] },
  { label:"Criatividade", key:p => NIVEL_LABEL[p.criatividade] },
  { label:"Raciocínio lógico", key:p => NIVEL_LABEL[p.logica] },
  { label:"Possibilidade de trabalho remoto", key:p => NIVEL_LABEL[p.remoto] },
  { label:"Ambientes de trabalho", key:p => p.ambientes.slice(0,2).join(", ") },
  { label:"Principais habilidades", key:p => p.habilidades.slice(0,2).join(", ") },
  { label:"Áreas de especialização", key:p => p.especializacoes.slice(0,2).join(", ") },
];

function qualClass(text){
  const map = {"Baixo":"qual-baixo","Moderado":"qual-moderado","Alto":"qual-alto","Muito alto":"qual-muito-alto"};
  return map[text] || "";
}

function renderComparatorPicker(){
  const picker = $("#comparator-picker");
  picker.innerHTML = PROFESSIONS.map(p => `<button class="chip" data-cmp="${p.id}">${p.nome}</button>`).join("");
  $$('[data-cmp]', picker).forEach(chip => chip.addEventListener("click", () => addToComparator(chip.dataset.cmp)));
  updateComparatorChipsState();
}

function updateComparatorChipsState(){
  $$('[data-cmp]').forEach(chip => chip.classList.toggle("active", state.comparatorSelection.includes(chip.dataset.cmp)));
}

function addToComparator(id){
  if(state.comparatorSelection.includes(id)){
    state.comparatorSelection = state.comparatorSelection.filter(x => x !== id);
  } else {
    if(state.comparatorSelection.length >= 3) state.comparatorSelection.shift();
    state.comparatorSelection.push(id);
  }
  updateComparatorChipsState();
  renderComparatorTable();
  if(state.comparatorSelection.length >= 2){
    $("#comparar").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block:"start" });
  }
}

function renderComparatorTable(){
  const wrap = $("#comparator-table-wrap");
  const hint = $("#comparator-hint");
  const selected = state.comparatorSelection.map(id => PROFESSIONS.find(p => p.id === id)).filter(Boolean);

  if(selected.length < 2){
    wrap.hidden = true;
    hint.hidden = false;
    return;
  }
  wrap.hidden = false;
  hint.hidden = true;

  const colTemplate = `160px repeat(${selected.length}, 1fr)`;
  let html = `<div class="ctable-row head-row" style="grid-template-columns:${colTemplate}">
    <div class="ctable-cell label-cell">Critério</div>
    ${selected.map(p => `<div class="ctable-cell name-cell" style="color:${AREA_BY_ID[p.area].c1}">${p.nome}</div>`).join("")}
  </div>`;

  COMPARATOR_ROWS.forEach(row => {
    html += `<div class="ctable-row" style="grid-template-columns:${colTemplate}">
      <div class="ctable-cell label-cell">${row.label}</div>
      ${selected.map(p => {
        const val = row.key(p);
        const cls = qualClass(val);
        return `<div class="ctable-cell">${cls ? `<span class="qual-tag ${cls}">${val}</span>` : val}</div>`;
      }).join("")}
    </div>`;
  });

  $("#comparator-table").innerHTML = html;
}

/* ================= 10. MAPA DE HABILIDADES ================= */

function renderSkillsMap(){
  const wrap = $("#skills-buttons");
  wrap.innerHTML = SKILLS_MAP.map(s => `<button class="skill-btn" data-skill="${s.nome}"><i data-lucide="${s.icon}"></i> ${s.nome}</button>`).join("");
  $$('[data-skill]', wrap).forEach(btn => btn.addEventListener("click", () => {
    $$('[data-skill]', wrap).forEach(b => b.classList.toggle("active", b === btn));
    showSkillResult(btn.dataset.skill);
  }));
  refreshIcons();
  $("#skills-result").innerHTML = `<p class="empty">Escolha uma habilidade acima para ver profissões relacionadas.</p>`;
}

function showSkillResult(skillName){
  const skill = SKILLS_MAP.find(s => s.nome === skillName);
  const profs = skill.profissoes.map(id => PROFESSIONS.find(p => p.id === id)).filter(Boolean);
  $("#skills-result").innerHTML = profs.map(p => `
    <div class="skill-result-card">
      <h4>${p.nome}</h4>
      <p>${skillName} é usada para: ${p.faz.slice(0,110)}${p.faz.length>110?"…":""}</p>
    </div>
  `).join("");
}

/* ================= 11. PROFISSÕES POUCO CONHECIDAS ================= */

function renderUnknownCareers(){
  $("#unknown-grid").innerHTML = UNKNOWN_CAREERS.map(u => `
    <div class="unknown-card">
      <div class="u-icon"><i data-lucide="${u.icon}"></i></div>
      <h3>${u.nome}</h3>
      <p><strong>O que faz:</strong> ${u.faz}</p>
      <p><strong>Onde atua:</strong> ${u.onde}</p>
      <p><strong>Habilidade-chave:</strong> ${u.habilidade}</p>
      <p class="u-fact">${u.curiosidade}</p>
    </div>
  `).join("");
  refreshIcons();
}

/* ================= 12. PROFISSÕES DO FUTURO ================= */

function renderFutureCareers(){
  $("#future-timeline").innerHTML = FUTURE_CAREERS.map(f => `
    <div class="future-item">
      <h3>${f.nome}</h3>
      <p>${f.texto}</p>
    </div>
  `).join("");
}

/* ================= 13. CAMINHOS ALÉM DA FACULDADE ================= */

function renderBeyondCollege(){
  $("#paths-grid").innerHTML = BEYOND_COLLEGE_PATHS.map(p => `
    <div class="path-card"><i data-lucide="${p.icon}"></i><span>${p.nome}</span></div>
  `).join("");
  $("#tech-professions").innerHTML = TECH_PROFESSIONS.map(t => `<span>${t}</span>`).join("");
  refreshIcons();
}

/* ================= 14. UM DIA NA PROFISSÃO (HISTÓRIAS) ================= */

function renderStoryPicker(){
  const wrap = $("#story-picker");
  wrap.innerHTML = Object.entries(STORIES).map(([key,s]) => `
    <div class="story-pick-card" data-story="${key}">
      <h3>${s.titulo}</h3>
      <p>${s.intro}</p>
    </div>
  `).join("");
  $$('[data-story]', wrap).forEach(card => card.addEventListener("click", () => {
    $$('[data-story]', wrap).forEach(c => c.classList.toggle("active", c === card));
    startStory(card.dataset.story);
  }));
}

function startStory(key){
  state.activeStory = key;
  state.storyStep = 0;
  state.storySkills = [];
  $("#story-stage").hidden = false;
  renderStoryStep();
  $("#story-stage").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block:"center" });
}

function renderStoryStep(){
  const story = STORIES[state.activeStory];
  const stage = $("#story-stage");

  if(state.storyStep >= story.cenas.length){
    stage.innerHTML = `
      <div class="story-summary">
        <span class="story-scene-tag">${story.titulo} — fim da simulação</span>
        <h4>Habilidades que você mais utilizou:</h4>
        <div class="story-skill-tags">${[...new Set(state.storySkills)].map(s=>`<span>${s}</span>`).join("")}</div>
        <button class="btn btn-ghost" id="story-restart">Refazer esta história</button>
        <p class="story-note">Esta é uma simulação educativa simplificada e não representa todos os aspectos reais da profissão.</p>
      </div>
    `;
    $("#story-restart").addEventListener("click", () => startStory(state.activeStory));
    return;
  }

  const cena = story.cenas[state.storyStep];
  stage.innerHTML = `
    <span class="story-scene-tag">${story.titulo} — cena ${state.storyStep+1} de ${story.cenas.length}</span>
    <p class="story-text">${cena.texto}</p>
    <div class="story-choices">
      ${cena.opcoes.map((op,i) => `<button class="story-choice" data-i="${i}">${op.t}</button>`).join("")}
    </div>
  `;
  $$(".story-choice", stage).forEach(btn => btn.addEventListener("click", () => {
    state.storySkills.push(cena.opcoes[Number(btn.dataset.i)].skill);
    state.storyStep++;
    renderStoryStep();
  }));
}

/* ================= 15. MITOS — CARTAS ================= */

function renderMyths(){
  $("#myths-grid").innerHTML = MYTHS.map((m,i) => `
    <div class="myth-card" data-i="${i}" tabindex="0" role="button" aria-label="Virar carta de mito ${i+1}">
      <div class="myth-card-inner">
        <div class="myth-face myth-front">
          <p>"${m.frase}"</p>
          <span>Clique para ver a realidade</span>
        </div>
        <div class="myth-face myth-back">
          <p>${m.real}</p>
        </div>
      </div>
    </div>
  `).join("");
  $$(".myth-card").forEach(card => {
    const flip = () => card.classList.toggle("flipped");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (e) => { if(e.key==="Enter"||e.key===" "){ e.preventDefault(); flip(); } });
  });
}

/* ================= 16. FAVORITOS ================= */

function renderFavorites(){
  const grid = $("#favorites-grid");
  const empty = $("#favorites-empty");
  const favs = PROFESSIONS.filter(p => state.favorites.has(p.id));

  if(!favs.length){
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.innerHTML = favs.map(professionCardHTML).join("");
  $$('[data-know]', grid).forEach(btn => btn.addEventListener("click", () => openProfessionModal(btn.dataset.know)));
  $$('[data-fav]', grid).forEach(btn => btn.addEventListener("click", () => toggleFavorite(btn.dataset.fav)));
  refreshIcons();
}

/* ================= 17. INICIALIZAÇÃO GERAL ================= */

function init(){
  initHeader();
  initHero();
  renderAreas();
  renderFilterChips();
  renderProfessionsGrid();
  initSearch();
  initDnaTest();
  renderComparatorPicker();
  renderComparatorTable();
  renderSkillsMap();
  renderUnknownCareers();
  renderFutureCareers();
  renderBeyondCollege();
  renderStoryPicker();
  renderMyths();
  renderFavorites();
  refreshIcons();

  // pausa animações pesadas quando a aba está inativa
  document.addEventListener("visibilitychange", () => {
    const prism = $("#prism-scene");
    if(!prism) return;
    prism.style.animationPlayState = document.hidden ? "paused" : "running";
  });
}

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
