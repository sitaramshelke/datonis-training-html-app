## Datonis Training 

This repository contains a simple web application. The purpose is to showcase how one can use Datonis [APIs](https://api.datonis.io/apidoc) to build custom web applications.

### To run the application - 
- Clone this repo.
- Run `npm install`
- Update `config/datonis.js` with your valid Access Key.
- Run `node application.js`
- Open `http://localhost:3000` in your browser tab.

This application uses -
- [Node JS](https://nodejs.org/) for the runtime environment for execution. 
- [Express JS](https://expressjs.com/) for a simple backend server, which serves two basic APIs and HTML/CSS
- [JQuery](https://jquery.com/) for asynchronous http calls.
- [Skeleton](http://getskeleton.com) for minimal CSS.

Application structure is as follows - 
```
- config/
  - datonis.js //This is where one needs to update their access key.
- lib/
  - datonis.js //This provides a utility to make calls to Datonis API server.
  - thing.js //This provides HTTP request handlers for backend server.
- node_modules/
  - .. //All external dependencies
- public/
  - application.css //All custom css required.
  - index.html //HTML code for the simple UI.
  - index.js //JS that runs along the HTML and handles browser actions.
  - skeleton.css //Skeleton CSS.
- application.js //This has the logic for backend server.
```