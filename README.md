# NotesApp

NotesApp is a simple React Native application for managing your notes. It allows you to create, view, and organize notes based on different categories.

## Features

- **View Notes (Home):** View your notes sorted by categories.
- **Create Notes:** Easily create new notes and categorize them.
- **Summary:** Get a summary of the number of notes in each category.
- **Settings:** Access settings and links to online resources.
  
## Screenshots

iOS:

![Simulator Screenshot - iPhone SE (3rd generation) - 2024-01-27 at 12 50 29](https://github.com/siowshijia/NotesApp/assets/17192763/3cc84500-2a2f-4f3a-8243-e7fc29a44435)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-01-27 at 12 50 35](https://github.com/siowshijia/NotesApp/assets/17192763/37790cae-faea-4286-8bef-8fd0f68d48a8)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-01-27 at 12 50 42](https://github.com/siowshijia/NotesApp/assets/17192763/3d1a4955-684f-4697-8b97-59be2aae9155)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-01-27 at 12 50 54](https://github.com/siowshijia/NotesApp/assets/17192763/88d6dbed-2649-45b9-9153-14356743c0b4)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-01-27 at 12 50 48](https://github.com/siowshijia/NotesApp/assets/17192763/0ce65f9c-4b12-4efb-9379-ff9ad582dd6a)


## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native development environment set up

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/siowshijia/NotesApp.git

2. Navigate to the project directory:

    ```bash
    cd NotesApp
  
3. Install dependencies:
  
    ```bash
    npm install
  
4. Run the application:

    **For iOS:**
    
       npm start ios
  
    **For Android:**
    
        npm start android


## Libraries/Tools Used

- [React Native](https://reactnative.dev/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker): Version 2.6.1
- [@react-navigation/bottom-tabs](https://reactnavigation.org/): Version 6.5.11
- [@react-navigation/native](https://reactnavigation.org/): Version 6.1.9
- [@react-navigation/native-stack](https://reactnavigation.org/): Version 6.9.17
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient): Version 2.8.3
- [react-native-picker-select](https://github.com/lawnstarter/react-native-picker-select): Version 9.0.1
- [react-native-svg](https://github.com/react-native-svg/react-native-svg): Version 14.1.0
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer): Version 1.3.0


## Assumptions

In this project, there are some assumptions I have made and made tweaks around it:
- Icons should be used from a library but to make it identical to mockup, I export and import them as svg.
- On Home screen, there are no instructions where the individual notes will be directed to, so I removed the arrow and show the whole note despite a requirement to show max 20 characters.
- On Summary screen, there are no instructions where detail will be directed to, so I link it to Home screen.
- As I do not have access to the font file, I did not set any font-family in this project, hence text will be seen as the base font.


## Incomplete Features
In this 48 hours, I have completed the functions in the requirement. But, there are some that did not complete on time:
- Only working on iOS, spent working on iOS environment and did not have time to test out on Android
- As seen on the screenshot provided on top, the header is shorter and not rounded at the bottom, but tried my best to look as identical as possible.
- I am unable to create the New Note button at the center of the bottom tabs, hence I create a button at the top of Home screen instead.


## Contact

**Maintainer:** Siow Shi Jia

**Email:** siowshijia@gmail.com

**LinkedIn:** https://www.linkedin.com/in/siow-shi-jia-450917144

  
