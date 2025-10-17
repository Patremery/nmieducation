import{r as c,j as e,L as s,a as j}from"./App-DtlFSCyq.js";const h="/build/assets/logo-u__CWoMH.png",p=()=>{const[t,a]=c.useState(!1),[n,r]=c.useState(!1),[o,d]=c.useState({catalogue:!1,contact:!1});c.useEffect(()=>{const i=()=>{a(window.innerWidth<992)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const x=(i,g)=>{t&&(g.preventDefault(),d(u=>({...u,[i]:!u[i]})))},m=()=>{r(!n),document.body.style.overflow=n?"":"hidden"},l=()=>{t&&n&&(r(!1),document.body.style.overflow="")};return e.jsxs(e.Fragment,{children:[t&&n&&e.jsx("div",{className:"mobile-menu-overlay",onClick:m}),e.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:e.jsxs("div",{className:"container flex-column",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center w-100 py-5",children:[e.jsx("button",{className:"navbar-toggler border-0",type:"button",onClick:m,style:{width:"42px",visibility:"visible"},children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx(s,{className:"navbar-brand text-center position-absolute start-50 translate-middle-x",href:"/",children:e.jsx("img",{src:h,alt:"NMI Education",width:"100",style:{filter:"brightness(0) invert(1)"}})}),e.jsx("div",{className:"d-lg-none",style:{width:"42px",visibility:"hidden"},children:e.jsx("span",{className:"navbar-toggler-icon"})})]}),e.jsxs("div",{className:`mobile-menu ${n?"open":""} d-lg-none`,children:[e.jsxs("div",{className:"mobile-menu-header",children:[e.jsx("button",{className:"btn-close text-white",onClick:m,"aria-label":"Fermer le menu"}),e.jsx("div",{className:"text-center py-3",children:e.jsx("img",{src:h,alt:"NMI Education",width:"80",style:{filter:"brightness(0) invert(1)"}})})]}),e.jsxs("ul",{className:"navbar-nav",children:[e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/",onClick:l,children:"Accueil"})}),e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/about",onClick:l,children:"À propos de nous"})}),e.jsxs("li",{className:`nav-item dropdown ${o.catalogue?"show":""}`,children:[e.jsx(s,{className:`nav-link dropdown-toggle ${o.catalogue?"show":""}`,href:"/catalogue",id:"catalogueDropdown",onClick:i=>x("catalogue",i),role:"button","aria-expanded":o.catalogue,children:"Notre catalogue"}),e.jsxs("ul",{className:`dropdown-menu ${o.catalogue?"show":""}`,style:{borderRadius:0},"aria-labelledby":"catalogueDropdown",children:[e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue",onClick:l,children:"Tout le catalogue"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/school",onClick:l,children:"Manuels Scolaires"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/literature",onClick:l,children:"Littérature Générale"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/kids",onClick:l,children:"Littérature pour enfants"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/guides",onClick:l,children:"Guides Pédagogiques"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/catalog",onClick:l,children:"Catalogues"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/authors",onClick:l,children:"Auteurs"})})]})]}),e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/blog",onClick:l,children:"Actualité"})}),e.jsxs("li",{className:`nav-item dropdown ${o.contact?"show":""}`,children:[e.jsx(s,{className:`nav-link dropdown-toggle ${o.contact?"show":""}`,href:"/contact",id:"contactDropdown",onClick:i=>x("contact",i),role:"button","aria-expanded":o.contact,children:"Nous contacter"}),e.jsxs("ul",{className:`dropdown-menu ${o.contact?"show":""}`,style:{borderRadius:0},"aria-labelledby":"contactDropdown",children:[e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/contact",onClick:l,children:"Nous Contacter"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/submit-your-manuscrit",onClick:l,children:"Envoyer un Manuscrit"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/become-distributor",onClick:l,children:"Devenir distributeur"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/join-us",onClick:l,children:"Candidature Spontanée"})})]})]})]})]}),e.jsx("div",{className:"collapse navbar-collapse d-none d-lg-block py-1",id:"navbarNav",children:e.jsxs("ul",{className:"navbar-nav mx-auto gap-2",children:[e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/",children:"Accueil"})}),e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/about",children:"À propos de nous"})}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx(s,{className:"nav-link dropdown-toggle",href:"/catalogue",id:"catalogueDropdownDesktop",role:"button","data-bs-toggle":"dropdown",children:"Notre catalogue"}),e.jsxs("ul",{className:"dropdown-menu",style:{borderRadius:0},"aria-labelledby":"catalogueDropdownDesktop",children:[e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue",children:"Tout le catalogue"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/school",children:"Manuels Scolaires"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/literature",children:"Littérature Générale"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/kids",children:"Littérature pour enfants"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/guides",children:"Guides Pédagogiques"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/catalogue/category/catalog",children:"Catalogues"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/authors",children:"Auteurs"})})]})]}),e.jsx("li",{className:"nav-item",children:e.jsx(s,{className:"nav-link",href:"/blog",children:"Actualité"})}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx(s,{className:"nav-link dropdown-toggle",href:"/contact",id:"contactDropdownDesktop",role:"button","data-bs-toggle":"dropdown",children:"Nous contacter"}),e.jsxs("ul",{className:"dropdown-menu",style:{borderRadius:0},"aria-labelledby":"contactDropdownDesktop",children:[e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/contact",children:"Nous Contacter"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/submit-your-manuscrit",children:"Envoyer un Manuscrit"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/become-distributor",children:"Devenir distributeur"})}),e.jsx("li",{children:e.jsx(s,{className:"dropdown-item",href:"/join-us",children:"Candidature Spontanée"})})]})]})]})})]})}),e.jsx("style",{children:`
                /* Overlay pour le menu mobile */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1040;
                }
                
                /* Menu mobile style tiroir */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    left: -280px;
                    width: 280px;
                    height: 100vh;
                    background-color: var(--bs-primary);
                    z-index: 1050;
                    overflow-y: auto;
                    transition: left 0.3s ease;
                    padding: 0;
                    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
                }
                
                .mobile-menu.open {
                    left: 0;
                }
                
                .mobile-menu-header {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu .btn-close {
                    align-self: flex-end;
                    opacity: 0.8;
                }
                
                .mobile-menu .navbar-nav {
                    padding: 1rem 0;
                }
                
                .mobile-menu .nav-link {
                    padding: 0.75rem 1.5rem;
                    color: white;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu .dropdown-menu.show {
                    display: block;
                    position: static;
                    float: none;
                    width: 100%;
                    margin-top: 0;
                    background-color: rgba(0, 0, 0, 0.2);
                    border: none;
                    box-shadow: none;
                    padding: 0;
                }
                
                .mobile-menu .dropdown-item {
                    color: rgba(255, 255, 255, 0.8) !important;
                    padding: 0.75rem 2.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .mobile-menu .dropdown-item:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white !important;
                }
                
                .mobile-menu .nav-link.dropdown-toggle.show:after {
                    transform: rotate(180deg);
                    transition: transform 0.2s ease;
                }
                
                .mobile-menu .nav-link.dropdown-toggle:after {
                    transition: transform 0.2s ease;
                    float: right;
                    margin-top: 8px;
                }
                `})]})},b="/build/assets/qr-CrAwG6dn.png",N=()=>e.jsx("div",{className:"copyright-section",style:{backgroundColor:"rgb(0 36 74)",padding:"15px 20px"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row gy-2 align-items-center",children:[e.jsx("div",{className:"col-12 col-md-4 text-center",children:e.jsxs("small",{className:"text-white",children:["nmieducation.com © ",new Date().getFullYear()]})}),e.jsx("div",{className:"col-12 col-md-8",children:e.jsxs("div",{className:"d-flex flex-wrap gap-3 justify-content-center",children:[e.jsx("small",{children:e.jsx(s,{href:"/contact",className:"text-white text-decoration-none",children:"Nous Contacter"})}),e.jsx("small",{children:e.jsx(s,{href:"/submit-your-manuscrit",className:"text-white text-decoration-none",children:"Soumettre un manuscrit"})}),e.jsx("small",{children:e.jsx(s,{href:"/become-distributor",className:"text-white text-decoration-none",children:"Devenir Distributeur"})})]})})]})})});function f(){return j().props.settings}const w=()=>{const t=f();return c.useEffect(()=>{console.log(t)},[]),e.jsxs(e.Fragment,{children:[e.jsx("footer",{className:"bg-primary text-white py-4 py-md-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row gy-4",children:[e.jsxs("div",{className:"col-12 col-sm-6 col-lg-3 text-center text-sm-start",children:[e.jsx(s,{href:"/",className:"d-inline-block",children:e.jsx("img",{src:h,alt:"NMI Education",width:"120",style:{filter:"brightness(0) invert(1)"},className:"mb-3"})}),e.jsxs("p",{className:"text-white mb-3",children:["Nomayos, Entrée route Ngoumou ",e.jsx("br",{}),"Tel: ",t.support_phone]})]}),e.jsxs("div",{className:"col-12 col-sm-6 col-lg-3 text-center text-sm-start",children:[e.jsx("h5",{className:"mb-3",children:"Suivez notre actualité"}),e.jsxs("div",{className:"social-icons d-flex flex-wrap gap-2 mb-3 justify-content-center justify-content-sm-start",children:[e.jsx("a",{href:"https://facebook.com/nmieducationsarl",className:"social-icon","aria-label":"Facebook",target:"_blank",children:e.jsx("i",{className:"fab fa-facebook"})}),e.jsx("a",{href:"https://www.linkedin.com/company/nmi-education-sarl",className:"social-icon","aria-label":"LinkedIn",children:e.jsx("i",{className:"fab fa-linkedin"})}),e.jsx("a",{href:"https://www.youtube.com/@nmieducation5180",className:"social-icon","aria-label":"YouTube",children:e.jsx("i",{className:"fab fa-youtube"})}),e.jsx("a",{href:"https://twitter.com/nmieducationcam",className:"social-icon","aria-label":"Twitter",children:e.jsx("i",{className:"fab fa-twitter"})}),e.jsx("a",{href:"https://wa.me/237682000200",className:"social-icon","aria-label":"WhatsApp",children:e.jsx("i",{className:"fab fa-whatsapp"})})]}),e.jsx("small",{children:e.jsx("i",{children:"@nmieducationsarl"})}),e.jsx("div",{className:"d-none d-sm-block mb-3 mt-2 text-center text-sm-start",children:e.jsx("img",{src:b,alt:"QR Code",width:"120",className:"qr-code"})})]}),e.jsxs("div",{className:"col-12 col-sm-6 col-lg-3 text-center text-sm-start",children:[e.jsx("h5",{className:"mb-3",children:"A propos de nous"}),e.jsxs("ul",{className:"list-unstyled mb-3",children:[e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/about",className:"text-white text-decoration-none",children:"A Propos"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue",className:"text-white text-decoration-none",children:"Notre Catalogue"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/authors",className:"text-white text-decoration-none",children:"Nos Auteurs"})})]})]}),e.jsxs("div",{className:"col-12 col-sm-6 col-lg-3 text-center text-sm-start",children:[e.jsx("h5",{className:"mb-3",children:"Notre catalogue"}),e.jsxs("ul",{className:"list-unstyled",children:[e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue/category/school",className:"text-white text-decoration-none",children:"Manuels Scolaires"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue/category/literature",className:"text-white text-decoration-none",children:"Littérature Générale"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue/category/kids",className:"text-white text-decoration-none",children:"Littérature pour enfants"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue/category/guides",className:"text-white text-decoration-none",children:"Guides Pédagogiques"})}),e.jsx("li",{className:"mb-2",children:e.jsx(s,{href:"/catalogue/category/catalog",className:"text-white text-decoration-none",children:"Télécharger nos catalogues"})})]})]})]})})}),e.jsx(N,{})]})},v="/build/assets/banner-DtbGbjVo.jpg",y=({title:t,description:a,backgroundImage:n=v,textAlign:r,className:o,padding:d="100px 0"})=>e.jsx("div",{className:"banner",style:{backgroundImage:`
                    linear-gradient(
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0.7)
                    ),
                    radial-gradient(
                        rgba(255, 255, 255, 0.1) 2px,
                        transparent 2px
                    ),
                    url(${n})`,backgroundSize:"cover, 20px 20px, cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundBlendMode:"-moz-initial",padding:d,color:"white",position:"relative"},children:e.jsxs("div",{className:"container",children:[t&&e.jsx("h1",{style:{position:"relative",zIndex:1,fontSize:30,textAlign:r,marginBottom:a?"1.5rem":"0"},children:t}),a&&e.jsx("div",{className:"row",children:e.jsx("div",{className:o,style:{textAlign:r},children:a})})]})}),C=({children:t,banner:a,displayBanner:n=!0})=>e.jsxs("div",{className:"min-vh-100 d-flex flex-column",children:[e.jsx(p,{}),n&&e.jsx(y,{title:a==null?void 0:a.title,description:a==null?void 0:a.description,backgroundImage:a==null?void 0:a.backgroundImage,textAlign:(a==null?void 0:a.textAlign)||"center",className:a==null?void 0:a.className}),e.jsx("main",{className:"flex-grow-1",style:{backgroundColor:"#F7F7F7"},children:t}),e.jsx(w,{})]});export{v as D,C as I};
