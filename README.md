# react-express-electron-boilerplate
A boilerplate to generate an Electron app with a React Front end and an Express BackEnd embedded.

## Setup
After cloning the project run:

    yarn run install-all

## Development
To run a development version of it run

    yarn run start-dev

This will:

1. Start the React Application in the port 3000: <br />
    You can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Start the ExpressJS Application in the port 3001: <br />
    You can open [http://localhost:3001/products](http://localhost:3001/products) to see if it is running (should return a JSON of products).
    
3. Start the Electron App Automatically with DevTools open as default.    

### IMPORTANT
The app **WILL** reload if you make edits to the React App.

The app **WILL NOT** reload if you make edits to the ExpressJS or Electron App.

## Testing
To run a test of the whole application run

    yarn run test

To run a test of the whole application with _coverage_ run

    yarn run test-coverage
    
### NOTE
This will run tests of the React App and of the ExpressJS App

For Coverage you will find the HTML Report in the following directories:<br />
    - **React App**: `client/coverage/lcov-report/index.html` <br />
    - **Express App**: `server/coverage/lcov-report/index.html`
    
## Production Build
To run a production build, you have several options:

1. `yarn run build-all` This will create a package for MacOS, Windows and Linux.
2. `yarn run build-win` This will create a package for Windows.
3. `yarn run build-linux` This will create a package for Linux.
4. `yarn run build-mac` This will create a package for MacOS.

### NOTE
The packages will be generated in the `dist` folder.<br />
You can also find the compiled files in the `build` directory (In case you want to use the React Build in another project or only for reviewing what will Electron use for the package).
