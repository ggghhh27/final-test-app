# Tailwind CSS Install Process

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Node.js

Install tailwindcss, postcss, autoprefixer, webpack(+cil) + npm i tailwindcss postcss-cli postcss-import --D
Making postcss.config.js / webpack.config.js (+tailwind.config.js) / src > tailwind.css
Add package.json > script > "tailwind": "postcss ./tailwind.css -o src/index.css" 
    and checking devDependencies
Add webpack.config.js > module > rules
Add tailwind.config.js > purge > './src/**/*.html',
     './src/**/*.js',
Add App.js > import './tailwind.css';
npm i
npm run tailwind
npm run build
npm run start


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
*) Install specific version
`sudo npm install -g n <version>`
    ex. `sudo npm install -g n 7.24.0`


## Create react app

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npx create-react-app <app-name> --typescript`
ex. `npx create-react-app text-test --typescript`

### Open VScode > terminal [control + `]
1) `npm i`
2) `npm run build`
3) `npm run start`
Check running command on packgage.json before start project

*) reset
`control + c`

## Install
tailwindcss, postcss(+cil), autoprefixer, webpack(+cil)
`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
`npm i tailwindcss postcss-cli postcss-import --D`

### Create config files
postcss.config.js
webpack.config.js
tailwind.config.js `npx tailwindcss init`

src > tailwind.css





**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
