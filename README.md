# Electron React TypeScript Starter

## Instructions

Create fresh electron app with React and TypeScript by running this command:

```bash
npm init electron-app@latest electron-starter-app -- --template=webpack-typescript
```

Create the app and setup the TypeScript config

Create the app with the TypeScript + Webpack template, then edit the newly created tsconfig.json to add the key-value entry "jsx": "react-jsx" to the "compilerOptions" section.

Add the React dependencies
Add the basic React packages to your dependencies and the corresponding types to your devDependencies:

Copy
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
Integrate React code
You should now be able to start writing and using React components in your Electron app. The following is a very minimal example of how to start to add React code:

src/app.tsx
src/renderer.ts
Copy
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
root.render(<h2>Hello from React!</h2>);


## References

- [Electron Webpack + Typescript](https://www.electronforge.io/templates/typescript-+-webpack-template)
- [React With TypeScript](https://www.electronforge.io/guides/framework-integration/react-with-typescript)
