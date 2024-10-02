# EXP To-Do List App

A productivity application that turns daily tasks into rewarding quests, inspired by video game mechanics to boost motivation and task completion.

## Motivation

This project was born out of a personal need to balance productivity with my gaming hobby. By applying game-like elements to a to-do list, the app aims to make task management more engaging and rewarding.

## Features

- **Experience Points (XP) System**: Earn XP for completing tasks
- **Leveling Mechanism**: Progress through levels as you accumulate XP
- **Task Difficulty Levels**: Categorize tasks as Easy, Medium, or Hard
- **Dynamic Rewards**: XP rewards adjust based on your current level
- **Task Organization**: Sort tasks into Active and Completed categories

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (typically bundled with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gamified-todo-list.git
   ```

2. Navigate to the project directory:
   ```
   cd gamified-todo-list
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

### Desktop Application Build

To create a standalone desktop application:

1. Build the React app:
   ```
   npm run react-build
   ```

2. Package with Electron:
   ```
   npm run electron-build
   ```

The packaged application will be available in the `dist` folder.

## Usage

1. Add a new task by entering a title, description, and selecting a difficulty level
2. Complete tasks by checking them off
3. Track your XP growth and level progression
4. Use the leveling system as motivation to complete more tasks

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- React for the frontend framework
- Electron for desktop app packaging
- shadcn/ui for UI components
