/* =========================================================
   PRISMA — Explore futuros possíveis
   style.css — folha de estilos principal
   Organização: variáveis > reset > tipografia > layout base >
   cabeçalho > hero > seções > componentes > modais > rodapé >
   responsividade
   ========================================================= */

/* ---------- 1. VARIÁVEIS GLOBAIS ---------- */
:root{
  /* cores base */
  --bg-primary:#07111F;
  --bg-secondary:#0B1728;
  --bg-elevated:#101E33;
  --text-primary:#F5F1E8;
  --text-secondary:#AAB5C4;
  --accent:#C7FF4A;
  --accent-dim:rgba(199,255,74,.16);
  --line:rgba(245,241,232,.12);
  --line-strong:rgba(245,241,232,.22);
  --glass-bg:rgba(16,30,51,.55);
  --glass-border:rgba(255,255,255,.08);

  /* cores das áreas */
  --saude:#EF476F;         --saude-2:#FFB4C2;
  --tecnologia:#6C63FF;    --tecnologia-2:#31D7FF;
  --engenharia:#FF8A34;    --engenharia-2:#FFD166;
  --direito:#7B4DFF;       --direito-2:#C9B5FF;
  --negocios:#16C79A;      --negocios-2:#8EF0D1;
  --artes:#FF4FA3;         --artes-2:#FFC857;
  --ciencias:#00B8D9;      --ciencias-2:#B8F2FF;
  --educacao:#F4B942;      --educacao-2:#FFF0B8;
  --agrarias:#55C271;      --agrarias-2:#B8E986;
  --arquitetura:#E76F51;   --arquitetura-2:#F4A261;

  /* tipografia */
  --font-display:'Unbounded', sans-serif;
  --font-editorial:'Spectral', serif;
  --font-ui:'Inter', sans-serif;

  /* espaçamento e forma */
  --radius-s:10px;
  --radius-m:18px;
  --radius-l:28px;
  --container:1240px;
  --header-h:76px;

  /* movimento */
  --ease:cubic-bezier(.16,.84,.44,1);
}

/* ---------- 2. RESET ---------- */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--header-h) + 12px);}
body{
  background:var(--bg-primary);
  color:var(--text-primary);
  font-family:var(--font-ui);
  font-size:16px;
  line-height:1.55;
  overflow-x:hidden;
  min-height:100vh;
}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer;}
ul{list-style:none;}
input{font:inherit;color:inherit;}
svg{display:block;}

:focus-visible{
  outline:2px solid var(--accent);
  outline-offset:3px;
  border-radius:4px;
}

@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
    scroll-behavior:auto !important;
  }
}

/* textura de grão sutil */
.grain{
  position:fixed;inset:0;pointer-events:none;z-index:2;
  opacity:.035;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ---------- 3. TIPOGRAFIA ---------- */
h1,h2,h3,h4{font-family:var(--font-display);font-weight:600;line-height:1.12;letter-spacing:-.01em;}
.section-title{font-size:clamp(1.8rem,3.6vw,2.7rem);margin-bottom:.6rem;}
.section-lead{font-family:var(--font-ui);color:var(--text-secondary);max-width:640px;font-size:1.02rem;margin-bottom:2.6rem;}
.editorial-title{font-family:var(--font-editorial);font-weight:500;font-style:normal;font-size:clamp(1.9rem,4vw,3rem);line-height:1.24;max-width:820px;}
.editorial-text{font-family:var(--font-editorial);color:var(--text-secondary);font-size:clamp(1.05rem,1.6vw,1.25rem);max-width:640px;margin-top:1.2rem;}
.eyebrow{
  font-family:var(--font-ui);text-transform:uppercase;letter-spacing:.14em;font-size:.75rem;
  color:var(--accent);font-weight:600;margin-bottom:1.1rem;
}
.section-number{
  display:inline-block;font-family:var(--font-ui);font-size:.78rem;color:var(--text-secondary);
  letter-spacing:.1em;border:1px solid var(--line);padding:.25rem .6rem;border-radius:100px;margin-bottom:1.4rem;
}
.subheading{font-family:var(--font-display);font-size:1.2rem;font-weight:500;margin:2.6rem 0 1.2rem;}

/* ---------- 4. LAYOUT BASE ---------- */
.section-inner{max-width:var(--container);margin:0 auto;padding:6.5rem 1.6rem;position:relative;}
section{position:relative;}
main > section:nth-of-type(even){background:var(--bg-secondary);}

/* ---------- 5. BOTÕES ---------- */
.btn{
  display:inline-flex;align-items:center;gap:.5rem;
  font-family:var(--font-ui);font-weight:600;font-size:.95rem;
  padding:.85rem 1.6rem;border-radius:100px;
  transition:transform .35s var(--ease),background .3s,box-shadow .3s,border-color .3s;
  white-space:nowrap;
}
.btn-primary{background:var(--accent);color:#0A1408;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px -8px rgba(199,255,74,.45);}
.btn-ghost{border:1px solid var(--line-strong);color:var(--text-primary);background:rgba(255,255,255,.02);}
.btn-ghost:hover{border-color:var(--accent);background:var(--accent-dim);transform:translateY(-2px);}
.btn-small{padding:.6rem 1.2rem;font-size:.85rem;}

/* ---------- 6. CABEÇALHO ---------- */
.site-header{
  position:fixed;top:0;left:0;right:0;z-index:100;
  height:var(--header-h);
  display:flex;align-items:center;
  border-bottom:1px solid transparent;
  transition:background .4s var(--ease),border-color .4s,backdrop-filter .4s;
}
.site-header.scrolled{
  background:rgba(7,17,31,.72);
  backdrop-filter:blur(16px) saturate(140%);
  -webkit-backdrop-filter:blur(16px) saturate(140%);
  border-bottom:1px solid var(--line);
}
.header-inner{
  width:100%;max-width:var(--container);margin:0 auto;padding:0 1.6rem;
  display:flex;align-items:center;justify-content:space-between;gap:2rem;
}

.logo{display:flex;align-items:center;gap:.65rem;}
.logo-text{font-family:var(--font-display);font-weight:700;font-size:1.15rem;letter-spacing:.02em;}
.logo-mark{position:relative;width:30px;height:30px;flex-shrink:0;}
.beam-in{
  position:absolute;left:-4px;top:50%;width:14px;height:2px;
  background:var(--text-primary);transform:translateY(-50%);opacity:.7;
}
.logo-mark::before{
  content:"";position:absolute;left:10px;top:2px;width:12px;height:26px;
  background:linear-gradient(180deg, rgba(245,241,232,.9), rgba(245,241,232,.2));
  clip-path:polygon(0 0,100% 30%,60% 100%,0 70%);
}
.ray{position:absolute;top:50%;height:2px;border-radius:2px;transform-origin:left center;}
.ray-1{left:24px;width:10px;background:var(--saude);transform:translateY(-8px) rotate(-18deg);}
.ray-2{left:24px;width:8px;background:var(--tecnologia);transform:translateY(-2px) rotate(-4deg);}
.ray-3{left:24px;width:8px;background:var(--negocios);transform:translateY(3px) rotate(8deg);}
.ray-4{left:24px;width:10px;background:var(--engenharia);transform:translateY(9px) rotate(20deg);}

.main-nav ul{display:flex;gap:1.9rem;}
.nav-link{
  font-size:.9rem;color:var(--text-secondary);font-weight:500;position:relative;padding:.3rem 0;
  transition:color .25s;
}
.nav-link::after{
  content:"";position:absolute;left:0;bottom:-4px;height:2px;width:0;background:var(--accent);
  transition:width .3s var(--ease);
}
.nav-link:hover{color:var(--text-primary);}
.nav-link.active{color:var(--text-primary);}
.nav-link.active::after{width:100%;}

.header-actions{display:flex;align-items:center;gap:1rem;}
.menu-toggle{display:none;flex-direction:column;gap:5px;padding:.4rem;}
.menu-toggle span{width:22px;height:2px;background:var(--text-primary);border-radius:2px;transition:transform .3s,opacity .3s;}
.menu-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.menu-toggle[aria-expanded="true"] span:nth-child(2){opacity:0;}
.menu-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

.mobile-nav{
  position:fixed;top:var(--header-h);left:0;right:0;bottom:0;z-index:99;
  background:rgba(7,17,31,.98);backdrop-filter:blur(20px);
  display:flex;flex-direction:column;gap:.4rem;padding:1.6rem;
  transform:translateY(-8px);opacity:0;pointer-events:none;
  transition:opacity .3s var(--ease),transform .3s var(--ease);
}
.mobile-nav.open{opacity:1;transform:translateY(0);pointer-events:auto;}
.mobile-nav .nav-link{font-size:1.15rem;padding:.9rem .2rem;border-bottom:1px solid var(--line);}
.mobile-nav .btn{margin-top:1rem;justify-content:center;}

/* ---------- 7. HERO ---------- */
.hero{
  min-height:100svh;display:flex;align-items:center;position:relative;
  padding:calc(var(--header-h) + 2rem) 0 4rem;
  background:
    radial-gradient(ellipse 60% 50% at 78% 30%, rgba(108,99,255,.16), transparent 60%),
    radial-gradient(ellipse 50% 40% at 15% 75%, rgba(239,71,111,.10), transparent 60%),
    var(--bg-primary);
}
.hero-particles{position:absolute;inset:0;overflow:hidden;z-index:0;}
.hero-particles span{
  position:absolute;width:3px;height:3px;border-radius:50%;
  background:var(--text-secondary);opacity:.35;
}
.hero-inner{
  max-width:var(--container);margin:0 auto;padding:0 1.6rem;
  display:grid;grid-template-columns:1.05fr .95fr;gap:2rem;align-items:center;
  position:relative;z-index:1;width:100%;
}
.hero-title{font-size:clamp(2.3rem,4.6vw,3.6rem);display:flex;flex-direction:column;gap:.3rem;}
.hero-highlight{
  color:var(--accent);
  font-style:normal;
}
.hero-text{color:var(--text-secondary);font-size:1.08rem;max-width:480px;margin:1.4rem 0 2rem;}
.hero-actions{display:flex;gap:1rem;flex-wrap:wrap;}

/* prisma 3D */
.hero-visual{display:flex;align-items:center;justify-content:center;perspective:1200px;}
.prism-scene{position:relative;width:min(420px,90vw);height:min(420px,90vw);transform-style:preserve-3d;}
.prism-beam-in{
  position:absolute;left:-18%;top:48%;width:45%;height:3px;
  background:linear-gradient(90deg, transparent, rgba(245,241,232,.75));
  filter:blur(.3px);
}
.prism3d{
  position:absolute;inset:0;margin:auto;width:52%;height:52%;
  transform-style:preserve-3d;
  animation:spin-prism 22s linear infinite;
  transform:rotateX(-18deg) rotateY(28deg);
}
@keyframes spin-prism{to{transform:rotateX(-18deg) rotateY(388deg);}}
.prism-face{
  position:absolute;inset:0;
  background:linear-gradient(145deg, rgba(245,241,232,.14), rgba(245,241,232,.02));
  border:1px solid rgba(245,241,232,.28);
  backdrop-filter:blur(2px);
}
.face-front{transform:translateZ(90px);clip-path:polygon(50% 0,100% 100%,0 100%);}
.face-back{transform:translateZ(-90px) rotateY(180deg);clip-path:polygon(50% 0,100% 100%,0 100%);}
.face-left{width:156px;transform:rotateY(-60deg) translateZ(90px);clip-path:polygon(50% 0,100% 100%,0 100%);}
.face-right{width:156px;transform:rotateY(60deg) translateZ(90px);clip-path:polygon(50% 0,100% 100%,0 100%);}
.face-top{height:156px;transform:rotateX(90deg) translateZ(90px);}
.face-bottom{height:156px;transform:rotateX(-90deg) translateZ(90px);}

.prism-rays{position:absolute;inset:0;}
.prism-rays span{
  position:absolute;left:52%;top:50%;height:2px;width:38%;
  background:linear-gradient(90deg, var(--c), transparent);
  transform-origin:left center;opacity:.85;border-radius:2px;
}
.prism-rays span:nth-child(1){transform:rotate(-32deg) translateY(-2px);}
.prism-rays span:nth-child(2){transform:rotate(-19deg) translateY(-2px);width:44%;}
.prism-rays span:nth-child(3){transform:rotate(-6deg) translateY(-2px);}
.prism-rays span:nth-child(4){transform:rotate(7deg) translateY(-2px);width:40%;}
.prism-rays span:nth-child(5){transform:rotate(20deg) translateY(-2px);}
.prism-rays span:nth-child(6){transform:rotate(33deg) translateY(-2px);width:44%;}

.floating-icons{position:absolute;inset:0;transform-style:preserve-3d;}
.floating-icons .ficon{
  position:absolute;width:44px;height:44px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  background:var(--glass-bg);border:1px solid var(--glass-border);
  backdrop-filter:blur(10px);box-shadow:0 10px 30px -12px rgba(0,0,0,.6);
  animation:float-icon 6s ease-in-out infinite;
  color:var(--text-primary);
}
.floating-icons .ficon i{width:19px;height:19px;}
@keyframes float-icon{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}

.scroll-cue{
  position:absolute;bottom:2.2rem;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:.4rem;
  color:var(--text-secondary);z-index:2;
}
.scroll-cue span{width:1px;height:34px;background:linear-gradient(var(--text-secondary),transparent);animation:scroll-cue-move 1.8s ease-in-out infinite;}
@keyframes scroll-cue-move{0%{opacity:0;}30%{opacity:1;}100%{opacity:0;transform:translateY(10px);}}

/* ---------- 8. MANIFESTO ---------- */
.manifesto-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:3.2rem;}
.manifesto-card{
  border-top:1px solid var(--line-strong);padding-top:1.4rem;
}
.manifesto-num{font-family:var(--font-display);color:var(--accent);font-size:.9rem;}
.manifesto-card h3{font-size:1.2rem;margin:.6rem 0 .5rem;}
.manifesto-card p{color:var(--text-secondary);font-size:.95rem;}

/* ---------- 9. GLASS CARD BASE ---------- */
.glass{
  background:var(--glass-bg);
  border:1px solid var(--glass-border);
  border-radius:var(--radius-m);
  backdrop-filter:blur(14px) saturate(140%);
  -webkit-backdrop-filter:blur(14px) saturate(140%);
}

/* ---------- 10. CONSTELAÇÃO DE ÁREAS ---------- */
.areas-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:1.3rem;
}
.area-card{
  position:relative;border-radius:var(--radius-l);padding:1.8rem;min-height:230px;
  overflow:hidden;cursor:pointer;isolation:isolate;
  border:1px solid var(--glass-border);
  background:var(--bg-elevated);
  transition:transform .5s var(--ease),box-shadow .5s var(--ease),border-color .4s;
  transform-style:preserve-3d;
  display:flex;flex-direction:column;justify-content:space-between;
}
.area-card::before{
  content:"";position:absolute;inset:0;z-index:-1;opacity:.16;
  background:radial-gradient(ellipse 90% 70% at 80% -10%, var(--area-c1), transparent 65%),
             radial-gradient(ellipse 70% 60% at -10% 110%, var(--area-c2), transparent 60%);
  transition:opacity .4s;
}
.area-card:hover,.area-card:focus-visible{
  transform:translateY(-6px) rotateX(3deg) rotateY(-3deg);
  border-color:var(--area-c1);
  box-shadow:0 24px 60px -20px rgba(0,0,0,.6);
}
.area-card:hover::before{opacity:.32;}
.area-glyph{
  width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;
  background:color-mix(in srgb, var(--area-c1) 22%, transparent);color:var(--area-c1);
}
.area-glyph i{width:26px;height:26px;}
.area-card h3{font-size:1.25rem;margin:1.1rem 0 .5rem;}
.area-card p{color:var(--text-secondary);font-size:.92rem;}
.area-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:1rem;opacity:0;max-height:0;overflow:hidden;transition:opacity .35s,max-height .35s;}
.area-card:hover .area-tags,.area-card:focus-within .area-tags{opacity:1;max-height:120px;}
.area-tags span{font-size:.72rem;padding:.25rem .55rem;border-radius:100px;background:rgba(255,255,255,.06);color:var(--text-secondary);}
.area-count{font-size:.78rem;color:var(--area-c1);font-weight:600;margin-top:1rem;display:inline-flex;align-items:center;gap:.35rem;}

/* ---------- 11. PROFISSÕES / TOOLBAR ---------- */
.professions-toolbar{display:flex;flex-direction:column;gap:1.2rem;margin-bottom:2.6rem;}
.search-field{
  display:flex;align-items:center;gap:.7rem;padding:.9rem 1.2rem;
  border-radius:100px;border:1px solid var(--line-strong);background:var(--bg-elevated);
  max-width:520px;
}
.search-field i{width:18px;height:18px;color:var(--text-secondary);flex-shrink:0;}
.search-field input{background:none;border:none;width:100%;color:var(--text-primary);font-size:.95rem;}
.search-field input::placeholder{color:var(--text-secondary);}
.filter-chips{display:flex;flex-wrap:wrap;gap:.6rem;}
.chip{
  padding:.5rem 1rem;border-radius:100px;font-size:.82rem;border:1px solid var(--line);
  color:var(--text-secondary);transition:all .25s;
}
.chip:hover{border-color:var(--line-strong);color:var(--text-primary);}
.chip.active{background:var(--accent);color:#0A1408;border-color:var(--accent);font-weight:600;}

.professions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.2rem;}
.profession-card{
  border-radius:var(--radius-m);padding:1.5rem;position:relative;
  border:1px solid var(--glass-border);background:var(--bg-elevated);
  display:flex;flex-direction:column;gap:.8rem;
  transition:transform .4s var(--ease),border-color .3s;
}
.profession-card:hover{transform:translateY(-4px);border-color:var(--card-c,var(--accent));}
.profession-top{display:flex;justify-content:space-between;align-items:flex-start;gap:.6rem;}
.profession-area-tag{font-size:.72rem;color:var(--card-c,var(--accent));font-weight:600;text-transform:uppercase;letter-spacing:.05em;}
.fav-btn{color:var(--text-secondary);transition:color .25s,transform .25s;flex-shrink:0;}
.fav-btn i{width:19px;height:19px;}
.fav-btn.active{color:var(--accent);}
.fav-btn:hover{transform:scale(1.15);}
.profession-card h3{font-size:1.15rem;}
.profession-card p{color:var(--text-secondary);font-size:.88rem;flex-grow:1;}
.profession-meta{display:flex;flex-wrap:wrap;gap:.5rem;font-size:.72rem;color:var(--text-secondary);}
.profession-meta span{border:1px solid var(--line);padding:.2rem .55rem;border-radius:100px;}
.profession-actions{display:flex;justify-content:space-between;align-items:center;margin-top:.4rem;}
.know-btn{font-size:.86rem;font-weight:600;color:var(--card-c,var(--accent));display:inline-flex;align-items:center;gap:.3rem;}
.know-btn i{width:16px;height:16px;}
.empty-state{color:var(--text-secondary);text-align:center;padding:2.5rem 0;font-size:.95rem;}

/* nível de indicadores (bolinhas) */
.level-dots{display:inline-flex;gap:3px;vertical-align:middle;margin-left:.3rem;}
.level-dots span{width:6px;height:6px;border-radius:50%;background:var(--line-strong);}
.level-dots span.filled{background:var(--accent);}

/* ---------- 12. TESTE DE DNA ---------- */
.dna-panel{max-width:720px;margin:0 auto;padding:2.6rem;border-radius:var(--radius-l);}
.dna-panel{background:var(--glass-bg);border:1px solid var(--glass-border);backdrop-filter:blur(14px);}
.dna-intro{text-align:center;padding:1.5rem 0;}
.dna-intro p{color:var(--text-secondary);margin-bottom:1.6rem;}
.dna-progress-track{width:100%;height:5px;border-radius:100px;background:rgba(255,255,255,.08);overflow:hidden;margin-bottom:1rem;}
.dna-progress-fill{height:100%;background:var(--accent);width:0%;transition:width .4s var(--ease);}
.dna-question-count{font-size:.8rem;color:var(--text-secondary);margin-bottom:.6rem;}
.dna-question{font-size:1.35rem;margin-bottom:1.6rem;}
.dna-options{display:grid;gap:.8rem;}
.dna-option{
  text-align:left;padding:1rem 1.2rem;border-radius:var(--radius-s);border:1px solid var(--line);
  background:rgba(255,255,255,.02);transition:border-color .25s,background .25s,transform .2s;font-size:.94rem;
}
.dna-option:hover{border-color:var(--accent);background:var(--accent-dim);transform:translateX(3px);}

.dna-bars{display:grid;gap:.75rem;margin:1.6rem 0;}
.dna-bar-row{display:grid;grid-template-columns:110px 1fr 46px;align-items:center;gap:.8rem;font-size:.85rem;}
.dna-bar-track{height:8px;border-radius:100px;background:rgba(255,255,255,.08);overflow:hidden;}
.dna-bar-fill{height:100%;background:linear-gradient(90deg,var(--accent),#8FE000);border-radius:100px;transition:width .8s var(--ease);}
.dna-description{color:var(--text-secondary);margin:1.2rem 0;}
.dna-areas{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:1.4rem;}
.dna-areas span{padding:.4rem .9rem;border-radius:100px;font-size:.82rem;border:1px solid var(--line-strong);}
.dna-suggestions{display:grid;gap:.8rem;margin-bottom:1.8rem;}
.dna-suggestion-card{padding:1rem 1.2rem;border-radius:var(--radius-s);border:1px solid var(--line);background:rgba(255,255,255,.02);}
.dna-suggestion-card h5{font-size:1rem;margin-bottom:.3rem;font-family:var(--font-ui);font-weight:600;}
.dna-suggestion-card p{font-size:.85rem;color:var(--text-secondary);}

/* ---------- 13. COMPARADOR ---------- */
.comparator-picker{display:flex;flex-wrap:wrap;gap:.7rem;margin-bottom:2.2rem;}
.comparator-hint{color:var(--text-secondary);font-size:.9rem;}
.comparator-table-wrap{overflow-x:auto;border-radius:var(--radius-m);border:1px solid var(--line);}
.comparator-table{display:grid;min-width:560px;}
.ctable-row{display:grid;border-bottom:1px solid var(--line);}
.ctable-row:last-child{border-bottom:none;}
.ctable-row.head-row{background:var(--bg-elevated);}
.ctable-cell{padding:1rem 1.2rem;font-size:.88rem;display:flex;align-items:center;gap:.4rem;border-right:1px solid var(--line);}
.ctable-cell:last-child{border-right:none;}
.ctable-cell.label-cell{color:var(--text-secondary);font-weight:600;background:rgba(255,255,255,.02);}
.ctable-cell.name-cell{font-family:var(--font-display);font-weight:600;font-size:.95rem;}
.qual-tag{padding:.2rem .55rem;border-radius:100px;font-size:.74rem;border:1px solid var(--line-strong);}
.qual-baixo{color:#AAB5C4;}
.qual-moderado{color:#FFD166;border-color:#FFD16660;}
.qual-alto{color:#8EF0D1;border-color:#8EF0D160;}
.qual-muito-alto{color:var(--accent);border-color:var(--accent);}

/* ---------- 14. MAPA DE HABILIDADES ---------- */
.skills-buttons{display:flex;flex-wrap:wrap;gap:.7rem;margin-bottom:2rem;}
.skill-btn{
  display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;border-radius:100px;
  border:1px solid var(--line-strong);font-size:.88rem;transition:all .25s;
}
.skill-btn i{width:16px;height:16px;}
.skill-btn:hover,.skill-btn.active{border-color:var(--accent);background:var(--accent-dim);color:var(--text-primary);}
.skills-result{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;}
.skills-result .empty{color:var(--text-secondary);grid-column:1/-1;}
.skill-result-card{padding:1.2rem;border-radius:var(--radius-s);border:1px solid var(--line);background:var(--bg-elevated);}
.skill-result-card h4{font-size:1rem;margin-bottom:.4rem;}
.skill-result-card p{font-size:.85rem;color:var(--text-secondary);}

/* ---------- 15. PROFISSÕES POUCO CONHECIDAS ---------- */
.unknown-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.2rem;}
.unknown-card{padding:1.5rem;border-radius:var(--radius-m);border:1px solid var(--line);background:var(--bg-elevated);}
.unknown-card .u-icon{width:42px;height:42px;border-radius:12px;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;}
.unknown-card .u-icon i{width:20px;height:20px;}
.unknown-card h3{font-size:1.05rem;margin-bottom:.5rem;}
.unknown-card p{font-size:.86rem;color:var(--text-secondary);margin-bottom:.4rem;}
.unknown-card .u-fact{font-size:.8rem;color:var(--accent);margin-top:.6rem;font-style:italic;font-family:var(--font-editorial);}

/* ---------- 16. LINHA DO TEMPO — FUTURO ---------- */
.future-timeline{position:relative;padding-left:1.6rem;}
.future-timeline::before{content:"";position:absolute;left:5px;top:6px;bottom:6px;width:1px;background:var(--line-strong);}
.future-item{position:relative;padding:0 0 2.4rem 2rem;}
.future-item::before{content:"";position:absolute;left:-1.6rem;top:5px;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--accent-dim);}
.future-item h3{font-size:1.05rem;margin-bottom:.4rem;}
.future-item p{color:var(--text-secondary);font-size:.9rem;}

/* ---------- 17. CAMINHOS ALÉM DA FACULDADE ---------- */
.paths-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;}
.path-card{padding:1.3rem;border-radius:var(--radius-s);border:1px solid var(--line);background:var(--bg-elevated);display:flex;align-items:center;gap:.8rem;}
.path-card i{width:22px;height:22px;color:var(--accent);flex-shrink:0;}
.path-card span{font-size:.92rem;}
.tech-professions{display:flex;flex-wrap:wrap;gap:.6rem;}
.tech-professions span{padding:.5rem 1rem;border-radius:100px;border:1px solid var(--line-strong);font-size:.85rem;color:var(--text-secondary);}

/* ---------- 18. HISTÓRIAS INTERATIVAS ---------- */
.story-picker{display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;}
.story-pick-card{
  flex:1;min-width:220px;padding:1.5rem;border-radius:var(--radius-m);cursor:pointer;
  border:1px solid var(--line);background:var(--bg-elevated);transition:all .3s;
}
.story-pick-card:hover,.story-pick-card.active{border-color:var(--accent);background:var(--accent-dim);}
.story-pick-card h3{font-size:1.05rem;margin-bottom:.4rem;}
.story-pick-card p{font-size:.85rem;color:var(--text-secondary);}
.story-stage{padding:2rem;border-radius:var(--radius-l);border:1px solid var(--glass-border);background:var(--glass-bg);backdrop-filter:blur(14px);}
.story-scene-tag{font-size:.78rem;color:var(--accent);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.6rem;}
.story-text{font-size:1.05rem;margin-bottom:1.4rem;font-family:var(--font-editorial);}
.story-choices{display:grid;gap:.7rem;}
.story-choice{padding:.9rem 1.1rem;border-radius:var(--radius-s);border:1px solid var(--line-strong);text-align:left;transition:all .25s;}
.story-choice:hover{border-color:var(--accent);background:var(--accent-dim);}
.story-summary h4{margin-bottom:.8rem;}
.story-skill-tags{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0 1.4rem;}
.story-skill-tags span{padding:.35rem .8rem;border-radius:100px;background:var(--accent-dim);color:var(--accent);font-size:.82rem;}
.story-note{font-size:.8rem;color:var(--text-secondary);margin-top:1rem;}

/* ---------- 19. MITOS — CARTAS ---------- */
.myths-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.2rem;}
.myth-card{perspective:1200px;height:220px;}
.myth-card-inner{
  position:relative;width:100%;height:100%;transform-style:preserve-3d;
  transition:transform .6s var(--ease);cursor:pointer;
}
.myth-card.flipped .myth-card-inner{transform:rotateY(180deg);}
.myth-face{
  position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--radius-m);
  padding:1.4rem;display:flex;flex-direction:column;justify-content:center;
  border:1px solid var(--line);
}
.myth-front{background:var(--bg-elevated);}
.myth-front p{font-family:var(--font-editorial);font-size:1.1rem;font-style:italic;}
.myth-front span{font-size:.76rem;color:var(--text-secondary);margin-top:1rem;}
.myth-back{background:var(--accent-dim);transform:rotateY(180deg);border-color:var(--accent);}
.myth-back p{font-size:.88rem;color:var(--text-primary);}

/* ---------- 20. FAVORITOS ---------- */
.favorites-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.2rem;margin-bottom:1rem;}

/* ---------- 21. FONTES ---------- */
.sources-grid{display:grid;grid-template-columns:1fr 1fr;gap:2.4rem;align-items:start;}
.sources-list li{display:flex;align-items:center;gap:.8rem;padding:.85rem 0;border-bottom:1px solid var(--line);font-size:.94rem;}
.sources-list i{width:19px;height:19px;color:var(--accent);flex-shrink:0;}
.sources-notice{display:flex;gap:1rem;padding:1.6rem;border-radius:var(--radius-m);border:1px solid var(--line-strong);background:var(--bg-elevated);}
.sources-notice i{width:22px;height:22px;color:var(--accent);flex-shrink:0;}
.sources-notice p{font-size:.9rem;color:var(--text-secondary);}

/* ---------- 22. CTA FINAL ---------- */
.final-cta{position:relative;padding:6rem 0 8rem;overflow:hidden;text-align:center;}
.final-cta .section-inner{display:flex;flex-direction:column;align-items:center;}
.final-cta .editorial-title,.final-cta .editorial-text{margin-left:auto;margin-right:auto;}
.final-cta .hero-actions{justify-content:center;margin-top:2rem;}
.prism-converge{position:absolute;top:0;left:50%;transform:translateX(-50%);width:420px;height:100%;pointer-events:none;opacity:.5;}
.converge-core{position:absolute;left:50%;top:30%;width:14px;height:14px;border-radius:50%;background:var(--text-primary);transform:translate(-50%,-50%);filter:blur(1px);}
.prism-converge span{
  position:absolute;left:50%;top:30%;width:2px;height:180px;border-radius:2px;
  background:linear-gradient(180deg, var(--c), transparent);transform-origin:top center;
}
.prism-converge span:nth-child(2){transform:translateX(-50%) rotate(-24deg);}
.prism-converge span:nth-child(3){transform:translateX(-50%) rotate(-14deg);}
.prism-converge span:nth-child(4){transform:translateX(-50%) rotate(-4deg);}
.prism-converge span:nth-child(5){transform:translateX(-50%) rotate(6deg);}
.prism-converge span:nth-child(6){transform:translateX(-50%) rotate(16deg);}
.prism-converge span:nth-child(7){transform:translateX(-50%) rotate(26deg);}

/* ---------- 23. RODAPÉ ---------- */
.site-footer{background:var(--bg-secondary);border-top:1px solid var(--line);position:relative;}
.footer-inner{display:grid;grid-template-columns:1fr 1.2fr 1.3fr;gap:2.4rem;padding-top:4rem;padding-bottom:4rem;}
.footer-tagline{color:var(--text-secondary);font-family:var(--font-editorial);font-style:italic;margin-top:.8rem;}
.footer-nav{display:flex;flex-direction:column;gap:.7rem;}
.footer-nav a{color:var(--text-secondary);font-size:.9rem;transition:color .2s;}
.footer-nav a:hover{color:var(--text-primary);}
.footer-meta p{font-size:.85rem;color:var(--text-secondary);margin-bottom:.6rem;}
.footer-credit{font-weight:600;color:var(--text-primary) !important;}
.back-to-top{
  position:absolute;right:1.6rem;bottom:1.6rem;width:44px;height:44px;border-radius:50%;
  background:var(--accent);color:#0A1408;display:flex;align-items:center;justify-content:center;
  box-shadow:0 10px 24px -8px rgba(199,255,74,.5);
}
.back-to-top i{width:19px;height:19px;}

/* ---------- 24. MODAL / PAINEL LATERAL ---------- */
.modal-overlay,.panel-overlay{
  position:fixed;inset:0;z-index:200;background:rgba(4,8,15,.72);backdrop-filter:blur(6px);
  align-items:center;justify-content:center;padding:2rem 1.2rem;
  opacity:0;transition:opacity .3s var(--ease);
}
.modal-overlay[hidden],.panel-overlay[hidden]{display:none;}
.modal-overlay:not([hidden]),.panel-overlay:not([hidden]){display:flex;opacity:1;}
.panel-overlay{justify-content:flex-end;padding:0;}

.modal{
  width:min(760px,100%);max-height:88vh;background:var(--bg-elevated);border:1px solid var(--glass-border);
  border-radius:var(--radius-l);position:relative;overflow:hidden;
  transform:translateY(16px) scale(.98);transition:transform .35s var(--ease);
}
.modal-overlay:not([hidden]) .modal{transform:translateY(0) scale(1);}
.side-panel{
  width:min(440px,100%);height:100%;background:var(--bg-elevated);border-left:1px solid var(--glass-border);
  position:relative;transform:translateX(24px);transition:transform .35s var(--ease);
}
.panel-overlay:not([hidden]) .side-panel{transform:translateX(0);}

.modal-close{
  position:absolute;top:1.2rem;right:1.2rem;z-index:2;width:38px;height:38px;border-radius:50%;
  background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;
}
.modal-close i{width:18px;height:18px;}
.modal-close:hover{background:rgba(255,255,255,.14);}
.modal-scroll{max-height:88vh;overflow-y:auto;padding:2.6rem 2.2rem;}
.side-panel .modal-scroll{max-height:100vh;height:100%;}

.modal-eyebrow{color:var(--card-c,var(--accent));font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.6rem;}
.modal h2{font-size:1.7rem;margin-bottom:.6rem;}
.modal-oneliner{font-family:var(--font-editorial);font-style:italic;color:var(--text-secondary);font-size:1.1rem;margin-bottom:1.8rem;}
.modal-block{margin-bottom:1.8rem;}
.modal-block h3{font-size:1.02rem;margin-bottom:.6rem;display:flex;align-items:center;gap:.5rem;}
.modal-block h3 i{width:17px;height:17px;color:var(--card-c,var(--accent));}
.modal-block p{color:var(--text-secondary);font-size:.92rem;}
.modal-block ul{display:grid;gap:.4rem;}
.modal-block ul li{font-size:.9rem;color:var(--text-secondary);padding-left:1rem;position:relative;}
.modal-block ul li::before{content:"—";position:absolute;left:0;color:var(--card-c,var(--accent));}
.timeline-list{display:grid;gap:.9rem;}
.timeline-list li{display:grid;grid-template-columns:64px 1fr;gap:.9rem;font-size:.88rem;}
.timeline-list .t-time{color:var(--card-c,var(--accent));font-weight:600;}
.tag-row{display:flex;flex-wrap:wrap;gap:.5rem;}
.tag-row span{font-size:.8rem;padding:.3rem .7rem;border-radius:100px;border:1px solid var(--line-strong);}
.myth-pair{margin-bottom:.9rem;padding:.9rem 1rem;border-radius:var(--radius-s);border:1px solid var(--line);}
.myth-pair strong{display:block;margin-bottom:.3rem;font-size:.88rem;}
.myth-pair span{font-size:.85rem;color:var(--text-secondary);}
.related-chips{display:flex;flex-wrap:wrap;gap:.6rem;}
.related-chips span{padding:.4rem .9rem;border-radius:100px;border:1px solid var(--line-strong);font-size:.85rem;}
.modal-actions{display:flex;gap:.8rem;margin-top:.6rem;}

/* painel de área */
.panel-area-header{padding:1.6rem;border-radius:var(--radius-m);margin-bottom:1.6rem;}
.panel-professions{display:grid;gap:.6rem;}
.panel-professions button{
  text-align:left;padding:.8rem 1rem;border-radius:var(--radius-s);border:1px solid var(--line);
  font-size:.9rem;transition:border-color .2s,background .2s;
}
.panel-professions button:hover{border-color:var(--card-c,var(--accent));background:rgba(255,255,255,.03);}

/* ---------- 25. RESPONSIVIDADE ---------- */
@media (max-width:1080px){
  .hero-inner{grid-template-columns:1fr;text-align:left;}
  .hero-visual{order:-1;max-height:340px;}
  .sources-grid{grid-template-columns:1fr;}
  .footer-inner{grid-template-columns:1fr 1fr;}
}

@media (max-width:860px){
  .main-nav{display:none;}
  .menu-toggle{display:flex;}
  .manifesto-grid{grid-template-columns:1fr;gap:1.8rem;}
  .footer-inner{grid-template-columns:1fr;gap:2rem;}
  .section-inner{padding:4.5rem 1.3rem;}
  .comparator-table{min-width:100%;}
  .ctable-row{grid-auto-flow:row;}
}

@media (max-width:600px){
  :root{--header-h:64px;}
  .hero{padding-top:calc(var(--header-h) + 1.2rem);}
  .header-inner{padding:0 1.1rem;}
  .logo-text{font-size:1rem;}
  .hero-actions .btn,.final-cta .btn{width:100%;justify-content:center;}
  .hero-actions,.final-cta .hero-actions{flex-direction:column;}
  .dna-panel{padding:1.6rem;}
  .dna-bar-row{grid-template-columns:82px 1fr 36px;font-size:.78rem;}
  .prism-scene{width:78vw;height:78vw;}
  .modal-scroll{padding:2.2rem 1.3rem;}
  .side-panel{width:100%;}
}

/* impede rolagem horizontal indevida */
html,body{max-width:100%;}
