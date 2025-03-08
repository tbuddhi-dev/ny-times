# NY Times Most Popular Articles App

This project is a React-based web app that fetches the most popular articles from the New York Times using the NY Times Most Popular Articles API. Users can select a time frame to view the most popular articles for the day, the last 7 days, or the last 30 days.

## Deployed Link: [Demo](https://nytimespoparticles.netlify.app)
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

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/tbuddhi-dev/ny-times.git

2. Navigate to the project directory:

    ### `cd ny-times`

3. Install the necessary dependencies:
    For 'npm':
    ### `npm install`
    For 'yarn'
    ### `yarn install`

    **Note**: From this point onward, the instructions assume you're using npm. If you're using yarn, please use the equivalent yarn commands.

4. Set up environment variables:
    ```bash
    REACT_APP_NYTIMES_API_KEY=your-nytimes-api-key
    REACT_APP_API_URL="https://api.nytimes.com/svc/mostpopular/v2/viewed"

Replace your-nytimes-api-key with your actual NY Times API key. In the code I already put my key.

## Running the App

### `npm start`

This will start the app on http://localhost:3000. You can open this URL in your browser to view the app.

## Running Tests

The project has unit tests and end-to-end (E2E) tests.

## Unit Tests
Unit tests are written using Jest. To run unit tests, use the following command:

### `npm test`

## End-to-End Tests
E2E tests are written using Cypress. To run the Cypress test suite, first, make sure the app is running locally (npm start or yarn start), then open Cypress using:

### `npx cypress open`

This will open the Cypress test runner where you can run your E2E tests.

## Generating Coverage Reports

You can generate test coverage reports using Jest's built-in coverage tool.

To generate a code coverage report, run:
### `npm test -- --coverage`

The coverage report will be generated in the coverage folder.

## API Information

This app uses the NY Times Most Popular Articles API to fetch the articles. The API is accessed using the following URL format:
    ```bash
    https://api.nytimes.com/svc/mostpopular/v2/viewed/{time-period}.json?api-key={your-api-key}

Where:
- {time-period} is the number of days for which the most popular articles are fetched (1, 7, or 30 days).
- {your-api-key} is your NY Times API key.

To get an API key, visit the [NY Times Developer Portal](https://developer.nytimes.com/get-started).



