import{j as n,a as t}from"./blocks-B32-Cnf6.js";import{useMDXComponents as l}from"./index-0ojb1UYW.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CUy-WZ22.js";const i=`{
  "name": "@flightlesslabs/colors",
  "version": "0.2.0",
  "scripts": {
    "copy-css": "cpy src/lib/styles dist/ --flat",
    "build": "vite build && pnpm run prepack",
    "build:test": "vite build && pnpm copy-css",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && pnpm copy-css && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build-storybook": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format"
  },
  "homepage": "https://flightlesslabs.github.io/colors",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/flightlesslabs/colors.git"
  },
  "license": "MIT",
  "files": [
    "dist",
    "!dist/**/*.test.*",
    "!dist/**/*.spec.*",
    "src/lib/styles",
    "!src/lib/stories/"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "svelte": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    },
    "./global.css": "./dist/global.css"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^4.1.1",
    "@eslint/compat": "^1.2.5",
    "@eslint/js": "^9.18.0",
    "@storybook/addon-a11y": "^9.1.3",
    "@storybook/addon-docs": "^9.1.3",
    "@storybook/addon-svelte-csf": "^5.0.8",
    "@storybook/addon-vitest": "^9.1.3",
    "@storybook/sveltekit": "^9.1.3",
    "@sveltejs/adapter-auto": "^6.0.0",
    "@sveltejs/kit": "^2.22.0",
    "@sveltejs/package": "^2.0.0",
    "@sveltejs/vite-plugin-svelte": "^6.0.0",
    "@types/node": "^22",
    "cpy-cli": "^6.0.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-storybook": "^9.1.3",
    "eslint-plugin-svelte": "^3.0.0",
    "globals": "^16.0.0",
    "prettier": "^3.4.2",
    "prettier-plugin-svelte": "^3.3.3",
    "publint": "^0.3.2",
    "sass": "^1.90.0",
    "storybook": "^9.1.3",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "typescript": "^5.0.0",
    "typescript-eslint": "^8.20.0",
    "vite": "^7.0.4"
  },
  "keywords": [
    "svelte"
  ],
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  },
  "volta": {
    "node": "22.18.0",
    "pnpm": "10.15.0"
  },
  "dependencies": {
    "@vueless/storybook-dark-mode": "^9.0.7"
  }
}
`;function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsxs("main",{style:{textAlign:"center"},children:[n.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),n.jsx(e.h1,{id:"colors",children:"Colors"}),n.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(i)?.version]}),n.jsx("h3",{style:{fontWeight:400},children:"Colorset for everyone. based on tailwind"}),n.jsxs(e.h3,{id:"github---npm",children:[n.jsx(e.a,{href:"https://github.com/flightlesslabs/colors",rel:"nofollow",children:"Github"})," - ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@flightlesslabs/colors",rel:"nofollow",children:"npm"})]})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"install",children:"Install"}),`
`,n.jsx(e.p,{children:"pnpm"}),`
`,n.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/colors
`}),`
`,n.jsx(e.p,{children:"npm"}),`
`,n.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/colors
`}),`
`,n.jsx(e.h2,{id:"add-css",children:"Add css"}),`
`,n.jsxs(e.p,{children:["Add global css in your ",n.jsx(e.code,{children:"+layout.svelte"})," file"]}),`
`,n.jsx(t,{dark:!0,language:"js",code:`
import '@flightlesslabs/colors/global.css';
`})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{a as default};
