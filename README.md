# NY Times Most Popular Articles App

This project is a React-based web app that fetches the most popular articles from the New York Times using the NY Times Most Popular Articles API. Users can select a time frame to view the most popular articles for the day, the last 7 days, or the last 30 days.

## Features

- Fetches articles based on the time frame (1, 7, 30 days).
- Displays articles in a list format with selection functionality.
- Displays article details when clicked.
- Error handling and loading state.
- Unit and UI testing using Jest.
- End-to-end testing using Cypress.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Generating Coverage Reports](#generating-coverage-reports)
- [API Information](#api-information)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/tbuddhi-dev/ny-times.git

2. Navigate to the project directory:

cd ny-times

3. Install the necessary dependencies:
For 'npm':
### 'npm install'
For 'yarn'
### 'yarn install'

4. Set up environment variables:
Create a .env file in the root of the project and add the following
    ```bash
    REACT_APP_NYTIMES_API_KEY=your-nytimes-api-key
    REACT_APP_API_URL="https://api.nytimes.com/svc/mostpopular/v2/viewed"

Replace your-nytimes-api-key with your actual NY Times API key.

## Running the App

### 'npm start'

This will start the app on http://localhost:3000. You can open this URL in your browser to view the app.
