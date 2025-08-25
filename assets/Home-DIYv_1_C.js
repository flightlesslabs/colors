import{j as s,a as t}from"./blocks-Bg1oDa6n.js";import{useMDXComponents as l}from"./index-D0ExIJju.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-KVZVS0Xm.js";const i=`{
  "name": "@flightlesslabs/colors",
  "version": "0.1.0",
  "scripts": {
    "copy-css": "cpy src/lib/styles dist/ --flat",
    "build": "vite build && pnpm copy-css && pnpm run prepack",
    "build:test": "vite build && pnpm copy-css",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && publint",
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
    "src/lib",
    "!src/lib/**/*.test.*",
    "!src/lib/**/*.spec.*",
    "!src/lib/stories/**/*.stories.*",
    "!src/lib/stories/**/*.mdx",
    "!src/lib/stories/assets/**/*.png",
    "!src/lib/stories/assets/**/*.jpg"
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
`;function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsxs("main",{style:{textAlign:"center"},children:[s.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),s.jsx(n.h1,{id:"colors",children:"Colors"}),s.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(i)?.version]}),s.jsx("h3",{style:{fontWeight:400},children:"Colorset for everyone. based on tailwind"}),s.jsxs(n.h3,{id:"github---npm",children:[s.jsx(n.a,{href:"https://github.com/flightlesslabs/colors",rel:"nofollow",children:"Github"})," - ",s.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/colors",rel:"nofollow",children:"npm"})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(n.h2,{id:"install",children:"Install"}),`
`,s.jsx(n.p,{children:"pnpm"}),`
`,s.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/colors
`}),`
`,s.jsx(n.p,{children:"npm"}),`
`,s.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/colors
`}),`
`,s.jsx(n.h2,{id:"add-css",children:"Add css"}),`
`,s.jsxs(n.p,{children:["Add global css in your ",s.jsx(n.code,{children:"+layout.svelte"})," file"]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import '@flightlesslabs/colors/global.css';
`})]})}function a(e={}){const{wrapper:n}={...l(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(o,{...e})}):o(e)}export{a as default};
