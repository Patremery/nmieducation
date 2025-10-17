import{j as e,U as b,r as N}from"./App-CLMlBvF2.js";import{I as k}from"./InnerPageLayout-dQBO9lTJ.js";import{p as y}from"./index-oVHbJy96.js";import{F as v,a as p,b as g,c as u,d as j,e as f,f as w}from"./index-CyHg8OyR.js";/* empty css            */const C=({post:t,isLoading:d=!1,layout:o="card"})=>{const m=(s,a=65)=>{const r=document.createElement("div");if(r.innerHTML=s,(r.textContent||r.innerText||"").length<=a)return s;let x=0,h=0;for(let i=0;i<s.length;i++)if(s[i]==="<")for(;i<s.length&&s[i]!==">";)i++;else if(s[i]!==">"&&(x++,x===a)){h=i+1;break}return h>0?s.substring(0,h)+"...":s.substring(0,a)+"..."},c={transition:"all 0.3s ease",overflow:"hidden",boxShadow:"0 4px 6px rgba(0,0,0,0.05)",borderRadius:"8px"},n={boxShadow:"0 10px 20px rgba(0,0,0,0.1)"};return d?e.jsx("div",{className:"col-12 mb-4",children:e.jsxs("div",{className:"d-flex bg-white shadow-sm",style:c,children:[e.jsx("div",{className:"bg-light animate-pulse",style:{width:"30%",minHeight:"150px"}}),e.jsxs("div",{className:"p-3 flex-grow-1",children:[e.jsx("div",{className:"h5 bg-light animate-pulse mb-3",style:{height:"24px",width:"80%"}}),e.jsx("div",{className:"bg-light animate-pulse mb-3",style:{height:"60px"}}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("div",{className:"bg-light animate-pulse",style:{height:"20px",width:"120px"}}),e.jsx("div",{className:"bg-light animate-pulse",style:{height:"20px",width:"80px"}})]})]})]})}):e.jsx("div",{className:"col-12 mb-4",children:e.jsxs("div",{className:"d-flex flex-column flex-md-row bg-white shadow-sm",style:c,onMouseEnter:s=>{Object.assign(s.currentTarget.style,n);const a=s.currentTarget.querySelector("img");a&&(a.style.transform="scale(1.05)")},onMouseLeave:s=>{s.currentTarget.style.boxShadow="0 4px 6px rgba(0,0,0,0.05)";const a=s.currentTarget.querySelector("img");a&&(a.style.transform="")},children:[e.jsx("div",{className:"post-img-container overflow-hidden",style:{flex:"0 0 auto",width:"100%",maxHeight:"250px",padding:"10px"},children:e.jsx(b,{href:`/posts/${t.slug}`,className:"d-block h-100 border-radius-lg",children:e.jsx("img",{src:t.featured_image||"/images/placeholder.jpg",className:"w-100",alt:t.title,style:{objectFit:"cover",transition:"transform 0.5s ease"},onError:s=>{s.currentTarget.src="/images/placeholder.jpg"}})})}),e.jsxs("div",{className:"p-2 d-flex flex-column justify-content-between flex-grow-1",children:[e.jsx("div",{children:e.jsx("h6",{className:"mb-2",children:e.jsx(b,{href:`/posts/${t.slug}`,className:"text-dark text-decoration-none",children:y(m(t.title,60))})})}),e.jsx("div",{className:"d-flex justify-content-between align-items-center",children:e.jsxs(b,{href:`/posts/${t.slug}`,className:"btn btn-sm btn-outline-primary d-flex align-items-center",children:["Lire ",e.jsx(v,{className:"ms-1",size:12})]})})]})]})},t.id)},P=`
@media (min-width: 768px) {
    .post-img-container {
        width: 30% !important;
        max-height: none !important;
        height: auto !important;
    }
}

@media (max-width: 767px) {
    .post-img-container {
        height: 180px !important;
    }
}
`;if(typeof document<"u"){const t=document.createElement("style");t.textContent=P,document.head.appendChild(t)}const T=({latestPosts:t,similarPosts:d})=>e.jsxs("div",{className:"sidebar p-3 bg-light rounded",children:[e.jsx("h4",{className:"mb-3",children:"Articles récents"}),e.jsx("hr",{className:"mb-3"}),e.jsx("div",{className:"recent-posts",children:t.map(o=>e.jsx(C,{post:o},o.id))})]}),R=({post:t,latestPosts:d,similarPosts:o})=>{const[m,c]=N.useState(!1),n=s=>{const a=window.location.href,r=t.title;let l="";switch(s){case"facebook":l=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(a)}`;break;case"twitter":l=`https://twitter.com/intent/tweet?url=${encodeURIComponent(a)}&text=${encodeURIComponent(r)}`;break;case"linkedin":l=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(a)}`;break;case"whatsapp":l=`https://api.whatsapp.com/send?text=${encodeURIComponent(r+" "+a)}`;break;case"copy":navigator.clipboard.writeText(a).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)});return;default:return}window.open(l,"_blank","width=600,height=400")};return e.jsx(k,{banner:{title:t.title},children:e.jsx("div",{className:"container py-4 py-md-5",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-md-8 mb-4 mb-md-0",children:e.jsxs("div",{children:[t.featured_image&&e.jsx("img",{src:t.featured_image,alt:t.title,className:"img-fluid mb-4 rounded",height:300}),e.jsx("h3",{className:"mb-4 text-primary font-weight-600",children:t.title}),e.jsx("div",{className:"share-options mb-4",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"me-3 text-muted",children:"Partager:"}),e.jsxs("div",{className:"social-share-buttons",children:[e.jsx("button",{className:"btn btn-sm share-btn facebook-btn",onClick:()=>n("facebook"),"aria-label":"Partager sur Facebook",children:e.jsx(p,{})}),e.jsx("button",{className:"btn btn-sm share-btn twitter-btn",onClick:()=>n("twitter"),"aria-label":"Partager sur Twitter",children:e.jsx(g,{})}),e.jsx("button",{className:"btn btn-sm share-btn linkedin-btn",onClick:()=>n("linkedin"),"aria-label":"Partager sur LinkedIn",children:e.jsx(u,{})}),e.jsx("button",{className:"btn btn-sm share-btn whatsapp-btn",onClick:()=>n("whatsapp"),"aria-label":"Partager sur WhatsApp",children:e.jsx(j,{})}),e.jsx("button",{className:"btn btn-sm share-btn copy-btn",onClick:()=>n("copy"),"aria-label":"Copier le lien",children:m?e.jsx(f,{}):e.jsx(w,{})})]})]})}),e.jsxs("div",{className:"post-content",children:[e.jsx("style",{children:`
                                    .post-content img {
                                        max-width: 100%;
                                        height: auto;
                                        display: block;
                                        margin: 1rem auto;
                                    }
                                    
                                    .post-content {
                                        font-size: 1rem;
                                        line-height: 1.6;
                                    }
                                    
                                    @media (max-width: 768px) {
                                        .post-content {
                                            font-size: 0.95rem;
                                        }
                                    }

                                    .share-options {
                                        border-top: 1px solid #eee;
                                        border-bottom: 1px solid #eee;
                                        padding: 15px 0;
                                    }

                                    .social-share-buttons {
                                        display: flex;
                                        gap: 10px;
                                    }

                                    .share-btn {
                                        width: 36px;
                                        height: 36px;
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        color: white;
                                        transition: all 0.3s ease;
                                        border: none;
                                    }

                                    .share-btn:hover {
                                        transform: translateY(-3px);
                                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                                    }

                                    .facebook-btn {
                                        background-color: #3b5998;
                                    }

                                    .twitter-btn {
                                        background-color: #1da1f2;
                                    }

                                    .linkedin-btn {
                                        background-color: #0077b5;
                                    }

                                    .whatsapp-btn {
                                        background-color: #25d366;
                                    }

                                    .copy-btn {
                                        background-color: #6c757d;
                                    }

                                    @media (max-width: 576px) {
                                        .share-options {
                                            flex-direction: column;
                                            align-items: flex-start;
                                        }
                                        
                                        .social-share-buttons {
                                            margin-top: 10px;
                                        }
                                    }
                                    `}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})]}),e.jsx("div",{className:"share-options mt-5",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"me-3 text-muted",children:"Partager cet article:"}),e.jsxs("div",{className:"social-share-buttons",children:[e.jsx("button",{className:"btn btn-sm share-btn facebook-btn",onClick:()=>n("facebook"),"aria-label":"Partager sur Facebook",children:e.jsx(p,{})}),e.jsx("button",{className:"btn btn-sm share-btn twitter-btn",onClick:()=>n("twitter"),"aria-label":"Partager sur Twitter",children:e.jsx(g,{})}),e.jsx("button",{className:"btn btn-sm share-btn linkedin-btn",onClick:()=>n("linkedin"),"aria-label":"Partager sur LinkedIn",children:e.jsx(u,{})}),e.jsx("button",{className:"btn btn-sm share-btn whatsapp-btn",onClick:()=>n("whatsapp"),"aria-label":"Partager sur WhatsApp",children:e.jsx(j,{})}),e.jsx("button",{className:"btn btn-sm share-btn copy-btn",onClick:()=>n("copy"),"aria-label":"Copier le lien",children:m?e.jsx(f,{}):e.jsx(w,{})})]})]})})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx(T,{latestPosts:d,similarPosts:o})})]})})})};export{R as default};
