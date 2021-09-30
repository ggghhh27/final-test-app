# Typescript & Tailwind CSS Install Process

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Typescript

## Update Node.js & npm latest version

Check Node.js & npm latest version

### Node.js 
1) Open terminal app
2) `sudo npm install -g n`
3) `sudo n latest`
4) Check version  
`node -v`

### npm
1) Open terminal app
2) `sudo npm install -g n`
3) Check version 
`npm -v`  
* Install specific version  
`sudo npm install -g n <version>`  
    * ex. `sudo npm install -g n 7.24.0`


## Create react app

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npx create-react-app <app-name> --typescript`  
* ex. `npx create-react-app text-test --typescript`

### Open VScode > terminal [control + `]
1) `npm i`
2) `npm run build`
3) `npm run start`   
Check running command on packgage.json before start project
* reset
`control + c`

# Tailwind CSS

## Install all packages
tailwindcss, postcss(+cli, loader, import), autoprefixer 
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm i postcss-cli postcss-import --D
```


Check **package.json** > devDependencies  
```json
  "devDependencies": {
    "autoprefixer": "^10.3.6",
    "postcss": "^8.3.8",
    "postcss-cli": "^9.0.0",
    "postcss-import": "^14.0.2",
    "tailwindcss": "^2.2.16"
  }
  ```
**package.json** > scripts >   
Add `"tailwind": "postcss ./tailwind.css -o src/index.css"  `  
* ex.
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "tailwind": "postcss ./tailwind.css -o src/index.css"
  },
```


## Create config files
### tailwind.config.js  
### postcss.config.js  
`npx tailwindcss init -p`  
`npx tailwindcss init --full`

### webpack.config.js  
(create myself)
```js
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    app: '',
  },
  output: {
    path: '',
    filename: '',
    publicPath: '',
  },
  module: {
    rules: [
        {
            test: /.jsx?$/,
            include: [path.resolve(__dirname, "src")],
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader",
        },
        {
            test: /.css?$/,
            exclude: [],
            //로더는 오른쪽부터 읽어들이므로 postcss-loader를 맨 오른쪽에 넣어준다.
            use: ["style-loader", "css-loader", "postcss-loader"],
        },
    ],
  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
```


## Create tailwind.css
`npx tailwindcss -o tailwind.css`  

and Create tailwind.css in src
```css
/* tailwind.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

## App.js 
Add `import './tailwind.css';`  
* ex.
```js
import logo from './logo.svg';
import './App.css';
import './tailwind.css'
```

## Run Project
1) `npm i  `
2) `npm run tailwind  `
3) `npm run build  `
4) `npm run start  `
