This code example highlights how we keep the state of two or more components synced.
If two or more components need to have the same state at any given time, 
we store the state in the nearest shared parent component instead of in the separate children components. We then pass
the same state value set in the parent component as props to each of the child components that we want synced. 
If the value in one of the child compoennts changes, we want the value in the other child component to change too.

In this example, App.js is the parent component. See comments in .src/App.js to see how we set the state that we want
the child components to share and pass the value down to the child components as props.

In this example, Input1.js defines the child components. See comments in ./src/Input1.js.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To run this project, do the following:
1. Copy the directory called 'example' to your local machine.
2. Navigate to this directory from the command line interface. E.g. cd c:\example.
3. In the command line interface type 'npm install'
4. Now type 'npm start'. Runs the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.