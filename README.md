# EXP To-Do List

A TypeScript-based web application that gamifies your to-do list, turning daily tasks into rewarding quests to boost motivation and productivity. Can be run in a web browser or as a desktop application using Electron.

## Motivation

This project was born out of a personal need to balance productivity with my gaming hobby. By applying game-like elements to a to-do list, the app aims to make task management more engaging and rewarding.

## Features

- **Experience Points (XP) System**: Earn XP for completing tasks
- **Leveling Mechanism**: Progress through levels as you accumulate XP
- **Task Difficulty Levels**: Categorize tasks as Easy, Medium, or Hard
- **Dynamic Rewards**: XP rewards adjust based on your current level
- **Task Organization**: Sort tasks into Active and Completed categories

## Application Preview

![EXP To-Do List Application Screenshot](.screenshot.png)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (typically bundled with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/exp-to-do-list.git
   ```

2. Navigate to the project directory:
   ```
   cd exp-to-do-list
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. Add a new task by entering a title, description, and selecting a difficulty level
2. Complete tasks by checking them off
3. Track your XP growth and level progression
4. Use the leveling system as motivation to complete more tasks

## Project Structure

The main component of this application is located in the file `exp-to-do-list.tsx`. This TypeScript file contains the core logic and UI for the EXP To-Do List.

## Running as a Desktop Application with Electron

To run the app as a desktop application using Electron, follow these additional steps:

1. Install Electron and related dependencies:
   ```
   npm install --save-dev electron electron-builder concurrently wait-on cross-env
   ```

2. Create a new file `public/electron.js` with the following content:
   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');
   const isDev = require('electron-is-dev');

   function createWindow() {
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         nodeIntegration: true,
       },
     });

     win.loadURL(
       isDev
         ? 'http://localhost:3000'
         : `file://${path.join(__dirname, '../build/index.html')}`
     );

     if (isDev) {
       win.webContents.openDevTools({ mode: 'detach' });
     }
   }

   app.whenReady().then(createWindow);

   app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') {
       app.quit();
     }
   });

   app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) {
       createWindow();
     }
   });
   ```

3. Update your `package.json` to include Electron-related scripts and configuration:
   ```json
   {
     "main": "public/electron.js",
     "homepage": "./",
     "scripts": {
       "react-start": "react-scripts start",
       "react-build": "react-scripts build",
       "react-test": "react-scripts test",
       "react-eject": "react-scripts eject",
       "electron-build": "electron-builder",
       "build": "npm run react-build && npm run electron-build",
       "start": "concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\""
     },
     "build": {
       "extends": null,
       "appId": "com.example.exp-to-do-list",
       "files": [
         "dist/**/*",
         "build/**/*",
         "node_modules/**/*",
         "package.json"
       ],
       "directories": {
         "buildResources": "assets"
       }
     }
   }
   ```

4. To run the Electron app in development mode:
   ```
   npm run start
   ```

5. To build the standalone desktop app:
   ```
   npm run build
   ```
   This will create installable files for your operating system in the `dist` folder.

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- React and TypeScript for the frontend framework
- shadcn/ui for UI components
- Electron for desktop app packaging
