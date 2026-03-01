import{j as e,L as h,r as g}from"./App-Ba2XPvwj.js";import{I as u}from"./InnerPageLayout-CtFE7R33.js";import{F as p,a as x,b,c as f,d as j,e as w}from"./index-CZTXEawM.js";/* empty css            */const y=({post:t,isLoading:o=!1})=>{const i=s=>{if(!s)return"";const r={year:"numeric",month:"long",day:"numeric"};return new Date(s).toLocaleDateString("fr-FR",r)},d={transition:"all 0.3s ease",borderRadius:"12px",border:"1px solid transparent"},c={backgroundColor:"#f8f9fa",border:"1px solid rgba(0,0,0,0.05)",transform:"translateX(5px)"};return o?e.jsxs("div",{className:"d-flex mb-4 align-items-center",children:[e.jsx("div",{className:"bg-light animate-pulse rounded-3 flex-shrink-0",style:{width:"90px",height:"90px"}}),e.jsxs("div",{className:"ms-3 flex-grow-1",children:[e.jsx("div",{className:"bg-light animate-pulse mb-2 rounded-pill",style:{height:"14px",width:"40%"}}),e.jsx("div",{className:"bg-light animate-pulse mb-2",style:{height:"20px",width:"100%"}}),e.jsx("div",{className:"bg-light animate-pulse",style:{height:"20px",width:"70%"}})]})]}):e.jsxs("div",{className:"d-flex mb-3 p-2 align-items-center bg-white",style:d,onMouseEnter:s=>{Object.assign(s.currentTarget.style,c);const r=s.currentTarget.querySelector("img");r&&(r.style.transform="scale(1.08)")},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent",s.currentTarget.style.border="1px solid transparent",s.currentTarget.style.transform="translateX(0)";const r=s.currentTarget.querySelector("img");r&&(r.style.transform="scale(1)")},children:[e.jsx("div",{className:"overflow-hidden rounded-3 flex-shrink-0 position-relative shadow-sm",style:{width:"95px",height:"95px",backgroundColor:"#f8f9fa"},children:e.jsx(h,{href:`/posts/${t.slug}`,className:"d-block h-100",children:e.jsx("img",{src:t.featured_image||"/images/placeholder.jpg",alt:t.title,className:"w-100 h-100 object-fit-cover",style:{transition:"transform 0.5s ease"},onError:s=>{s.currentTarget.src="/images/placeholder.jpg"}})})}),e.jsxs("div",{className:"ms-3 flex-grow-1 d-flex flex-column justify-content-center",children:[t.categories&&t.categories.length>0&&e.jsx("div",{className:"mb-1",children:e.jsx("span",{className:"text-primary fw-bold text-uppercase",style:{fontSize:"0.65rem",letterSpacing:"0.8px"},children:t.categories[0].name})}),e.jsx("h6",{className:"mb-1 fw-bold fs-6",style:{lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.jsx(h,{href:`/posts/${t.slug}`,className:"text-dark text-decoration-none hover-primary transition-colors",children:t.title})}),e.jsxs("div",{className:"text-muted",style:{fontSize:"0.75rem"},children:[e.jsx("i",{className:"far fa-calendar-alt me-1"})," ",i(t.published_at)]})]})]})},N=({latestPosts:t,similarPosts:o})=>e.jsxs("div",{className:"sidebar rounded-4 overflow-hidden",children:[e.jsxs("div",{className:"p-4 bg-white shadow-sm rounded-4 mb-4 border border-light",children:[e.jsxs("div",{className:"d-flex align-items-center mb-4",children:[e.jsx("div",{className:"bg-primary rounded-pill me-3",style:{width:"4px",height:"24px"}}),e.jsx("h4",{className:"mb-0 fw-bold fs-5",children:"Articles récents"})]}),e.jsx("div",{className:"recent-posts d-flex flex-column gap-2",children:t.slice(0,5).map(i=>e.jsx(y,{post:i},i.id))})]}),e.jsxs("div",{className:"p-4 bg-light rounded-4 border border-light text-center",children:[e.jsx("div",{className:"mb-3",children:e.jsx("i",{className:"far fa-envelope text-primary fs-1 mb-2"})}),e.jsx("h5",{className:"fw-bold fs-5 mb-3",children:"Restez informés"}),e.jsx("p",{className:"text-muted small mb-4",children:"Abonnez-vous à notre newsletter pour recevoir les dernières actualités littéraires."}),e.jsxs("div",{className:"input-group mb-2",children:[e.jsx("input",{type:"email",className:"form-control rounded-pill-start border-0 shadow-sm ps-4",placeholder:"Votre email..."}),e.jsx("button",{className:"btn btn-primary rounded-pill-end shadow-sm px-3",type:"button",children:e.jsx("i",{className:"fas fa-paper-plane"})})]}),e.jsx("style",{children:`
                     .rounded-pill-start {
                         border-top-left-radius: 50rem !important;
                         border-bottom-left-radius: 50rem !important;
                     }
                     .rounded-pill-end {
                         border-top-right-radius: 50rem !important;
                         border-bottom-right-radius: 50rem !important;
                     }
                     `})]})]}),I=({post:t,latestPosts:o,similarPosts:i})=>{const[d,c]=g.useState(!1),s=a=>{const n=window.location.href,m=t.title;let l="";switch(a){case"facebook":l=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`;break;case"twitter":l=`https://twitter.com/intent/tweet?url=${encodeURIComponent(n)}&text=${encodeURIComponent(m)}`;break;case"linkedin":l=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`;break;case"whatsapp":l=`https://api.whatsapp.com/send?text=${encodeURIComponent(m+" "+n)}`;break;case"copy":navigator.clipboard.writeText(n).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)});return;default:return}window.open(l,"_blank","width=600,height=400")},r=a=>{if(!a)return"";const n={year:"numeric",month:"long",day:"numeric"};return new Date(a).toLocaleDateString("fr-FR",n)};return e.jsxs(u,{banner:{title:t.title},title:t.title,children:[e.jsx("div",{className:"bg-white pb-5 border-bottom border-light",children:e.jsx("div",{className:"container pt-4 pt-md-5",children:e.jsxs("div",{className:"row justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-10 text-center mb-5",children:[t.categories&&t.categories.length>0&&e.jsx("span",{className:"badge bg-primary px-3 py-2 rounded-pill fw-medium mb-4 fs-6 text-uppercase shadow-sm",style:{letterSpacing:"1px"},children:t.categories[0].name}),e.jsx("h1",{className:"display-4 fw-bold mb-4 text-dark",style:{lineHeight:"1.2"},children:t.title}),e.jsxs("div",{className:"d-flex align-items-center justify-content-center text-muted fs-5 fw-medium",children:[e.jsxs("span",{className:"me-4",children:[e.jsx("i",{className:"far fa-calendar-alt me-2 text-primary"})," ",r(t.published_at)]}),e.jsxs("span",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"rounded-circle bg-light d-flex align-items-center justify-content-center me-2",style:{width:"30px",height:"30px",color:"var(--bs-primary)"},children:e.jsx("i",{className:"fas fa-feather-alt fa-sm"})}),"NMI Édition"]})]})]}),t.featured_image&&e.jsx("div",{className:"col-12 mb-5",children:e.jsx("div",{className:"rounded-4 overflow-hidden shadow-sm",style:{maxHeight:"600px"},children:e.jsx("img",{src:t.featured_image,alt:t.title,className:"w-100 object-fit-cover",style:{height:"100%",maxHeight:"600px"}})})})]})})}),e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"row justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-8 mb-5 mb-lg-0",children:[e.jsx("div",{className:"share-options-modern mb-5 pb-4 border-bottom border-light",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between flex-wrap gap-3",children:[e.jsx("span",{className:"text-muted fw-bold text-uppercase fs-6",style:{letterSpacing:"1px"},children:"Partager l'article"}),e.jsxs("div",{className:"social-share-buttons",children:[e.jsx("button",{className:"btn share-btn facebook-btn",onClick:()=>s("facebook"),title:"Partager sur Facebook",children:e.jsx(p,{})}),e.jsx("button",{className:"btn share-btn twitter-btn",onClick:()=>s("twitter"),title:"Partager sur X (Twitter)",children:e.jsx(x,{})}),e.jsx("button",{className:"btn share-btn linkedin-btn",onClick:()=>s("linkedin"),title:"Partager sur LinkedIn",children:e.jsx(b,{})}),e.jsx("button",{className:"btn share-btn whatsapp-btn",onClick:()=>s("whatsapp"),title:"Partager sur WhatsApp",children:e.jsx(f,{})}),e.jsx("button",{className:"btn share-btn copy-btn",onClick:()=>s("copy"),title:"Copier le lien",children:d?e.jsx(j,{}):e.jsx(w,{})})]})]})}),e.jsxs("div",{className:"post-content",children:[e.jsx("style",{children:`
                                /* Magazine Quality Typography */
                                .post-content {
                                    font-size: 1.15rem; /* ~18.4px */
                                    line-height: 1.8;
                                    color: #333333;
                                    font-family: inherit;
                                }
                                
                                .post-content p {
                                    margin-bottom: 1.8rem;
                                    color: inherit;
                                }
                                
                                .post-content strong, .post-content b {
                                    color: #111111;
                                    font-weight: 700;
                                }
                                
                                .post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5 {
                                    color: #111111;
                                    font-weight: 700;
                                    margin-top: 3rem;
                                    margin-bottom: 1.2rem;
                                    line-height: 1.3;
                                }
                                
                                .post-content h2 { font-size: 2rem; }
                                .post-content h3 { font-size: 1.6rem; }
                                
                                .post-content img {
                                    max-width: 100%;
                                    height: auto;
                                    display: block;
                                    margin: 3rem auto;
                                    border-radius: 12px;
                                    box-shadow: 0 5px 25px rgba(0,0,0,0.06);
                                }
                                
                                .post-content blockquote {
                                    border-left: 4px solid var(--bs-primary);
                                    padding: 1.5rem 2rem;
                                    margin: 2.5rem 0;
                                    background-color: #f8f9fa;
                                    border-radius: 0 12px 12px 0;
                                    font-size: 1.25rem;
                                    font-style: italic;
                                    color: #444;
                                }
                                
                                .post-content ul, .post-content ol {
                                    margin-bottom: 1.8rem;
                                    padding-left: 1.5rem;
                                }
                                
                                .post-content li {
                                    margin-bottom: 0.5rem;
                                }
                                
                                .post-content a {
                                    color: var(--bs-primary);
                                    text-decoration: underline;
                                    text-decoration-thickness: 1px;
                                    text-underline-offset: 4px;
                                    transition: all 0.2s ease;
                                }
                                
                                .post-content a:hover {
                                    color: var(--bs-primary-dark);
                                    text-decoration-thickness: 2px;
                                }
                                
                                @media (max-width: 768px) {
                                    .post-content {
                                        font-size: 1.05rem; /* ~16.8px */
                                        line-height: 1.7;
                                    }
                                }

                                /* Modern Social Sharing Buttons */
                                .share-options-modern {
                                    margin-top: 10px;
                                }

                                .social-share-buttons {
                                    display: flex;
                                    gap: 12px;
                                    flex-wrap: wrap;
                                }

                                .share-btn {
                                    width: 42px;
                                    height: 42px;
                                    border-radius: 50%;
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: white !important;
                                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                    border: none;
                                    font-size: 1.1rem;
                                }

                                .share-btn:hover {
                                    transform: translateY(-4px) scale(1.05);
                                    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
                                }

                                .facebook-btn { background-color: #1877F2; }
                                .twitter-btn { background-color: #000000; }
                                .linkedin-btn { background-color: #0A66C2; }
                                .whatsapp-btn { background-color: #25D366; }
                                .copy-btn { background-color: #6c757d; }
                                `}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})]}),e.jsxs("div",{className:"mt-5 pt-4 border-top border-light d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-4",children:[t.tags&&t.tags.length>0?e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("span",{className:"text-muted fw-bold me-2 mt-1",children:"Tags:"}),t.tags.map(a=>e.jsxs("span",{className:"badge bg-light text-dark border px-3 py-2 rounded-pill",children:["#",a.name]},a.id))]}):e.jsx("div",{}),e.jsxs("div",{className:"social-share-buttons",children:[e.jsx("button",{className:"btn share-btn facebook-btn",onClick:()=>s("facebook"),title:"Partager sur Facebook",children:e.jsx(p,{})}),e.jsx("button",{className:"btn share-btn twitter-btn",onClick:()=>s("twitter"),title:"Partager sur X",children:e.jsx(x,{})}),e.jsx("button",{className:"btn share-btn linkedin-btn",onClick:()=>s("linkedin"),title:"Partager sur LinkedIn",children:e.jsx(b,{})})]})]})]}),e.jsx("div",{className:"col-12 col-lg-4 mt-5 mt-lg-0 ps-lg-5",children:e.jsx("div",{className:"position-sticky",style:{top:"100px",zIndex:10},children:e.jsx(N,{latestPosts:o,similarPosts:i})})})]})})]})};export{I as default};
