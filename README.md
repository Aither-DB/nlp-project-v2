# Evaluate a News Article With Natural Language Processing

![Screenshot](src/client/images/Screenshot.jpg "Screenshot")

## Project Description

This is a project developed as part of the Udacity Front End Web Developer Nanodegree Build Tools and Single Page Web Apps module.

This app allows you to input the url of an online article and then get Sentiment Analysis run over it using Natural Language Processing from MeaningCloud. It extracts information about agreement, subjectivity, irony and confidence.

The purpose of developing this was to learn how to integrate build tools into my web development workflow. In this project I utilise Jest, Webpack, Workbox Service Workers, Node, Express and MeaningCloud API to acheive this.

## How to run this file

1. Install the zip folder to your local computer.
2. In your IDE of choice run 'npm install' to install all the dependencies from the 'package.json' file
3. Create a '.env' file and fill it with an 'API_KEY' from MeaningCloud (https://www.meaningcloud.com/).
4. Using the magic of webpack you can this in either 'Producton mode' or 'Development mode'. 'Production mode' is on port 8081 and requires you to run 'npm run build-prod' followed by 'npm start'. 'Development mode' runs on port 8080 and requires you to run 'npm run build-dev'