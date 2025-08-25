import{j as e,a as r}from"./blocks-B32-Cnf6.js";import{useMDXComponents as d}from"./index-0ojb1UYW.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CUy-WZ22.js";const m=""+new URL("dark-theme-toggle-C2LARM3V.png",import.meta.url).href;function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.h2,{id:"dark-theme",children:"Dark theme"}),`
`,e.jsxs(n.p,{children:["dark theme can be activated by adding ",e.jsx(n.code,{children:".dodo-theme--dark"})," class on the top container."]}),`
`,e.jsx(r,{dark:!0,language:"html",code:`
<body class="dodo-theme--dark">
...
`}),`
`,e.jsx(n.h2,{id:"toggle-theme-in-documentation",children:"Toggle theme in documentation"}),`
`,e.jsx(n.p,{children:"Use the moon icon to toogle theme in documentation mode"}),`
`,e.jsx("img",{src:m})]})}function i(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default};
