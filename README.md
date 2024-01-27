# NotesApp

NotesApp is a simple React Native application for managing your notes. It allows you to create, view, and organize notes based on different categories.

## Features

- **View Notes (Home):** View your notes sorted by categories.
- **Create Notes:** Easily create new notes and categorize them.
- **Summary:** Get a summary of the number of notes in each category.
- **Settings:** Access settings and links to online resources.
  
## Screenshots

iOS:

![Simulator Screenshot 1](https://github.com/siowshijia/NotesApp/assets/17192763/4002d448-7bb3-4dd9-ae92-c5c2d41fcc8f)
![Simulator Screenshot 2](https://github.com/siowshijia/NotesApp/assets/17192763/0c523b89-b245-44b3-b5fc-bf16c41fc57b)
![Simulator Screenshot 3](https://github.com/siowshijia/NotesApp/assets/17192763/aeab884d-193d-4782-b49c-469ef19853dd)
![Simulator Screenshot 4](https://github.com/siowshijia/NotesApp/assets/17192763/5f722c04-36f6-49b5-924e-456e9d6e7241)
![Simulator Screenshot 5](https://github.com/siowshijia/NotesApp/assets/17192763/78af4cc9-e88e-4b2e-9b43-f6f47dcabff6)


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
- On Home screen, there are no instructions where the individual notes will be direct to, so I removed the arrow and show the whole note despite a requirement to show max 20 characters.
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

  
