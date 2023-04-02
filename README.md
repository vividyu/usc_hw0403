# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Description

Your task is to implement a React component that renders a board representing the sliding puzzle called 15-puzzle. The board consists of 15 numbered square tiles (from 1 up to 15) and one empty space. The aim of the puzzle is to place the tiles in order by making sliding moves that use the empty space.

Requirements
The root of the component tree is a div element with class name board.
Each of the tiles should be rendered as a direct child of the div element and be a div element with class name tile. The empty space should additionally contain an empty class.
The component receives two props: initialConfiguration and onSolveCallback. The first one is an array of length 16 that contains a permutation of the set { 0, 1, 2, ..., 15 }. Each number represents the number that should be placed on a corresponding tile in the initial arrangement. The 0 element refers to the empty space. The callback onSolveCallback should be called when the puzzle is correctly sorted into order the first time.
The first element of the initialConfiguration array corresponds to the top-left tile, the second element to the next tile along the top row, the third to the tile to the left of the top-right tile, and so forth up to the 16th element, which corresponds to the bottom-right tile.
Assumptions
You can assume the initial board's configuration is not the puzzle's solution. At least one move is necessary to reach a solution.
You can assume the initial board's configuration is a valid configuration which means that it's possible to make such sliding moves that lead to the solution.
The "Preview" tab will display your component. You can use it for testing purposes.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements. Using classes: board, tile and empty gives neat styling.
The following imports are allowed: react (v16.12.0) and classnames (v2.2.6). You can find both at the top of the starting code.
You can use console.log and console.error for debugging purposes via your browser's developer tools.

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
