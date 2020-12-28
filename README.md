Music App built with React and Typescript
-----------------------------------------

( See specifications and download project as zip - https://drive.google.com/drive/folders/17FhSWfESi2S7bZqmRIcZ7291v039IHif )

1. Redux for global state management using redux toolkit with slices (avoid redux boilerplate).
2. Sass for styling.
3. React hooks.
5. Custom Hooks: The main idea was to isolate the state logic using custom hooks ( useDetails, useGenre, etc).
   So this way if you want to change how to handle the state logic of the app, you don't have to modify your components
   You just update the custom hooks. IE: use global context instead of redux inside the custom hooks.
6. The "favorites" functionality is done by persisting the favorites state in the localStorage (see store/index.ts)
7. Fetch Utility was implemented to trigger different async actions. IE: gettting artists, getting genres, etc.

How to run the app ?
1. first run `yarn` or `npm install` in the root directory
2. run `yarn start` or `npm run start`

