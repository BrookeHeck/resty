# RESTy

## Overview
This project shows results from making requests to a specified endpoint. You can add an endpoint to the text input and choose the method in the select box next to it. You can also add a body in the body tab of the nav. In the header tab, you choose to add a bearer token or a username and password for basic auth. Hitting submit will show the results in the container below. Alerts will show when a request is loading and when an invalid request was made. A search history is recorded in the left sidebar. When you click on any of the search history items, you can see the results for that query.

[Deployed Site](https://unique-cendol-3e90d5.netlify.app/)

## UML
<img src='./img/lab26.png'>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Change Logs
oct-24-2022 @ 1015 - Add form, results, and history functional components and styling

oct-24-2022 @ 1227 - Make axios requests with info provided from form and show search history in sidebar

oct-25-2022 @ 1430 - Added a basic and bearer auth form

oct-26-2022 @ 1407 - Used useEffect and useRef hooks to keep values in the inputs, requests use the data in the inputs to make requests

oct-27-2022 @ 1130 - made the history a stack, clicking on a history gives you the results for that query

oct-28-2022 @ 0619 - Refactored some of the useState hooks and used useReducer instead

### Resource
[How to print JSON String in human readable format in JS](https://stackoverflow.com/questions/60785852/how-to-print-json-string-in-human-readable-format-in-js)

[Render Component in Nav](https://stackoverflow.com/questions/35872349/react-js-bootstrap-render-component-in-nav)
