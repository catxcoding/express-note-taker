# 11 Express.js: Note Taker

## Overview
This application, built using Express.js, is a convenient note-taking tool. It allows users to write, save, and retrieve notes efficiently, making it ideal for small business owners or individuals seeking an organized way to store their thoughts and tasks.

## User Story (from challenge)

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Acceptance Criteria (from challenge)

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears


## Mock-Up

## Features
- **Note Creation**: Users can create notes with a title and body text.
- **Note Persistence**: Notes are saved to and retrieved from a JSON file, ensuring data persistence.
- **Simple and Intuitive UI**: The application features a user-friendly interface for easy navigation and use.
- **Heroku Deployment**: Deployed on Heroku for global access.

## Installation and Setup
Follow these steps to set up the application locally:

1. **Clone the Repository**: git clone https://github.com/catxcoding/express-note-taker.git

2. **Install Dependencies**
Navigate to the project directory and install required dependencies:

`cd express-note-taker`

`npm install`

3. **Start the Server**
Launch the application by running: `npm start`

The application will be accessible on `localhost:3000`.

## Usage
- Access the web interface through your local server or the Heroku deployment.
- On the main page, click on 'Add Note' to create a new note.
- Enter the title and details of your note and click 'Save' to store it.
- View your saved notes in the list on the main page.

## Deployment
The application is hosted on Heroku, making it accessible anywhere. Visit the [Heroku App](https://git.heroku.com/frozen-shelf-79993.git) to try it out.

## Technologies Used
- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, and Bootstrap for styling
- **Testing**: Insomnia
- **Deployment**: Heroku

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) 
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [CHATGBT](https://openai.com/chatgpt) - Assited with README and debugging some errors 


## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

