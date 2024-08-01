# Setup React Project

npm create vite@latest
Project name: . //se crea con el nombre de la carpeta
Select framework React
Javascript
npm install

# Setup .eslint file

To solve the problem of React is declared but never used it install eslint-plugin-react:
npm install eslint-plugin-react --save-dev

add in .eslintrc.cjs
"rules": {  
 'react/jsx-uses-react': 'error'
}

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
