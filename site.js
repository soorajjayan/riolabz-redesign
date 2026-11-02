const $=s=>document.querySelector(s),P=location.pathname.split('/').pop()||'index.html';
const S=[["Web design & development","Custom websites that load fast and are easy for your team to update.",["Company sites","Web apps","CMS","Redesigns"],"web-design-and-development.html"],
["Ecommerce","Online stores built to turn visitors into orders.",["Catalogue & checkout","Payments","Inventory sync"],"ecommerce-website-development.html"],
["Mobile apps","iOS and Android apps built around your business goals.",["iOS","Android","Cross-platform"],"mobile-application-development.html"],
["Custom software","Portals, dashboards and internal tools that scale with you.",["Dashboards","Integrations","APIs"],"custom-software-development.html"],
["SEO & digital marketing","Get found by the people already searching for you.",["Technical SEO","Content","Campaigns"],"seo-digital-marketing.html"],
["Hosting & server management","Secure hosting and managed servers.",["Monitoring","Backups"],"hosting-and-server-management.html"],
["Google Cloud","Cloud architecture, migration and automation.",["Migration","CI/CD"],"google-cloud-services.html"],
["Cloud managed services","We run your cloud so your team can focus on the product.",["Monitoring","Cost control"],"cloud-managed-services.html"],
["Business email","Professional email on your own domain.",["Setup","Migration"],"business-email-services.html"],
["Video creation","Product and brand videos for your site and social channels.",["Explainers","Promos"],"video-creation-services.html"]];
const B="#2547F5",I="#0F1A33",M="#12B88F",Y="#FFD95A",F="#fff";
const W=[["Sabine Hospital","Hospital website","web",B,F],["Smita Memorial Hospital","Hospital website","web",I,F],["Vivifipharma","Medical website","web",M,I],
["Vehiclemall Auction","Auction platform","web",Y,I],["Autochek","Mobile app","app",I,F],["Eventoq","Event management system","app",B,F],
["Paars","Clothing store","shop",Y,I],["Fika","Clothing store","shop",M,I],["Oneira","Clothing store","shop",B,F],["Natanki","Clothing store","shop",I,F],
["Jerucap","Financial platform","app",M,I],["Kadambra Restaurant","Restaurant website","web",Y,I]];
const tile=w=>`<a class="tile" href="case-study.html?p=${W.indexOf(w)}" style="--c:${w[3]};--f:${w[4]}"><div class="mock${w[2]=='app'?' ph':''}"><i></i><i></i><i></i><i></i></div><span>${w[1]}</span><b>${w[0]}</b></a>`;
const N=[["index.html","Home"],["About",[["who-we-are.html","Who we are"],["board-of-directors.html","Board of Directors"],["team.html","Team"],["clients.html","Clients"],["testimonials.html","Testimonials"],["rationale.html","Design rationale"]]],
["Our Services",[["services.html","All services"],["web-design-and-development.html","Web Design and Development"],["ecommerce-website-development.html","Ecommerce Website Development"],["hosting-and-server-management.html","Hosting and Server Management"],["seo-digital-marketing.html","SEO & Digital Marketing"],["mobile-application-development.html","Mobile Application Development"],["video-creation-services.html","Video Creation Services"],["google-cloud-services.html","Google Cloud Services"],["business-email-services.html","Business Email Services"],["cloud-managed-services.html","Cloud Managed Services"]]],
["Solutions",[["offshore-web-development-company.html","Offshore web development"],["remote-software-development-team.html","Remote software team"],["startup-software-development.html","Startup software development"]]],
["portfolio.html","Portfolio"],["blogs.html","Blogs"],["career.html","Careers"]];
const L=n=>`<a href="${n[0]}"${n[0]==P?' class="on"':''}>${n[1]}</a>`;
document.body.insertAdjacentHTML('afterbegin',`<header class="top"><div class="wrap nav"><a class="logo" href="index.html"><i></i>riolabz</a><button class="menu" aria-expanded="false">Menu</button><nav>${N.map(n=>Array.isArray(n[1])?`<div class="dd"><button class="ddb">${n[0]}</button><div class="sub">${n[1].map(L).join('')}</div></div>`:L(n)).join('')}<a class="btn" href="contact.html">Contact us</a><button class="th" aria-label="Switch light or dark theme">◐</button></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div><b>riolabz</b><p>Web, mobile and software development for businesses in Kerala, the UK and the USA.</p><a href="rationale.html">Design rationale</a></div>
<div><b>Kerala</b><p>Malikayal Towers, Vennala, Ernakulam</p><p>+91 70344 48855</p></div><div><b>USA</b><p>340 S Lemon Ave #7160, Walnut, CA 91789</p><p>+1 925 239 1299</p></div>
<div><b>UK</b><p>PO Box 316, Ashton-Under-Lyne, OL6 0GR</p><p>+44 7475 939216</p></div></div></footer>`);
const mb=$('.menu');mb.onclick=()=>{const o=$('nav').classList.toggle('open');mb.setAttribute('aria-expanded',o)};
if($('#svc'))$('#svc').innerHTML=S.slice(0,6).map(s=>`<div class="row"><h3><a href="${s[3]}">${s[0]}</a></h3><p>${s[1]}</p></div>`).join('');
if($('#svcFull'))$('#svcFull').innerHTML=S.map(s=>`<div class="row"><h3><a href="${s[3]}">${s[0]}</a></h3><div><p>${s[1]}</p><div class="tags">${s[2].map(t=>`<span>${t}</span>`).join('')}</div></div></div>`).join('');
if($('#work'))$('#work').innerHTML=W.slice(0,6).map(tile).join('');
if($('#all')){const f=$('.filters'),r=f=>$('#all').innerHTML=W.filter(w=>f=='all'||w[2]==f).map(tile).join('');r('all');
f.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;f.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x==b));r(b.dataset.f)}}
const E=$('#est');if(E){let t=3,p=10,seo=0;const out=()=>{const w=t+(p-5)*.12+seo;$('#res').textContent=Math.round(w)+"–"+Math.round(w*1.4)+" weeks";$('#pv').textContent=p};
const cs=E.querySelectorAll('.chip[data-w]');cs.forEach(b=>b.onclick=()=>{cs.forEach(x=>x.setAttribute('aria-pressed',x==b));t=+b.dataset.w;$('#go').href='contact.html?type='+encodeURIComponent(b.textContent);out()});
$('#rng').oninput=e=>{p=+e.target.value;out()};$('#seo').onclick=e=>{const b=e.currentTarget;seo=b.getAttribute('aria-pressed')=='true'?0:1;b.setAttribute('aria-pressed',!!seo);out()};out()}
const F2=$('#form');if(F2){const q=new URLSearchParams(location.search).get('type');if(q)[...F2.type.options].forEach(o=>{if(o.text==q)o.selected=true});
F2.onsubmit=e=>{e.preventDefault();$('.ok').style.display='block';$('.ok').textContent='Thanks, '+F2.name.value+'. We have your message and will reply soon.';F2.reset()}}

{const R=document.documentElement,g=()=>{try{return localStorage.getItem('th')}catch(e){}};
R.dataset.theme=g()||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
$('.th').onclick=()=>{const t=R.dataset.theme=='dark'?'light':'dark';R.dataset.theme=t;try{localStorage.setItem('th',t)}catch(e){}}}
const CS=$('#cs');if(CS){const i=+new URLSearchParams(location.search).get('p')||0,w=W[i]||W[0],
t={web:["Visitors had to hunt for the information they came for.","We reorganised the site around the top tasks, then designed and built it for speed on every device.","A clearer, faster site that the team can update without developer help."],
shop:["Shoppers dropped off between browsing and paying.","We simplified product pages and checkout, and connected payments and inventory.","An easier path from product to order, and a store that is simple to manage."],
app:["Teams relied on manual steps and scattered tools.","We mapped the workflow, prototyped the key screens and built the product in short, testable steps.","One place to do the work, with a roadmap for what comes next."]}[w[2]];
CS.innerHTML=`<section class="wrap ph"><h1>${w[0]}</h1><p>${w[1]}</p></section><section class="wrap" style="padding-bottom:64px"><div class="tile big" style="--c:${w[3]};--f:${w[4]}"><div class="mock${w[2]=='app'?' ph':''}"><i></i><i></i><i></i><i></i></div></div>
${["The challenge","Our approach","The outcome"].map((h,k)=>`<div class="row"><h3>${h}</h3><p>${t[k]}</p></div>`).join('')}
<p class="more"><a class="btn alt" href="portfolio.html">All projects</a> <a class="btn" href="case-study.html?p=${(i+1)%W.length}">Next project</a></p><p style="color:var(--mut);font-size:14px;margin-top:20px">Sample text. Replace with the real project story.</p></section>
<div class="band"><h2>Want a result like this?</h2><a class="btn" href="contact.html">Contact us</a></div>`}
{const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,R=document.documentElement;
if(!rm){const h=$('.hero h1');if(h)h.innerHTML=h.textContent.split(' ').map((w,k)=>`<span class="w" style="--k:${k}">${w}</span>`).join(' ');
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.row,.tile,.steps>div,.stats>div,.band,.est').forEach((e,k)=>{e.classList.add('rv');e.style.setProperty('--dl',(k%3)*90+'ms');io.observe(e)});
document.querySelectorAll('.stats b').forEach(b=>{const n=parseInt(b.textContent),s=b.textContent.replace(/\d+/,''),o=new IntersectionObserver(([x])=>{if(x.isIntersecting){o.disconnect();const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1300,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(t0)}});o.observe(b)})}
if(!rm&&fine){const c=document.createElement('div');c.className='cur';document.body.append(c);let cx=0,cy=0,tx=0,ty=0;
(function f(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;c.style.transform=`translate(${cx-17}px,${cy-17}px)`;requestAnimationFrame(f)})();
R.addEventListener('mouseleave',()=>c.style.opacity=0);
document.addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;c.style.opacity=1;const el=e.target.closest?e.target:document.body;c.classList.toggle('hv',!!el.closest('a,button,.tile,input,select,textarea'));
R.classList.add('mv');R.style.setProperty('--mx',tx+'px');R.style.setProperty('--my',ty+'px');R.style.setProperty('--nx',(tx/innerWidth-.5)*2);R.style.setProperty('--ny',(ty/innerHeight-.5)*2);
const t=el.closest('.tile:not(.big)'),b=el.closest('.btn');
document.querySelectorAll('.tile.tl').forEach(x=>{if(x!=t){x.classList.remove('tl');x.style.transform='';x.style.removeProperty('--px');x.style.removeProperty('--py')}});
document.querySelectorAll('.btn.mg').forEach(x=>{if(x!=b){x.classList.remove('mg');x.style.translate=''}});
if(t){const r=t.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;t.classList.add('tl');t.style.transform=`perspective(700px) rotateX(${-py*10}deg) rotateY(${px*12}deg) translateY(-4px)`;t.style.setProperty('--px',px);t.style.setProperty('--py',py)}
if(b){const r=b.getBoundingClientRect();b.classList.add('mg');b.style.translate=`${(e.clientX-r.left-r.width/2)*.2}px ${(e.clientY-r.top-r.height/2)*.3}px`}})}}
