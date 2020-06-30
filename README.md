# Finger Lakes Behavioral Health Bed Board
A basic web app that uses Front-End web technologies to post and display the current *open* and *on hold* beds for local behavioral health institutions. 

## Setup
1. In order to get this working it is important that you create an account and follow the documentation at https://sheety.co/docs/getting-started. 
1. Prepare and populate a Google Sheet (with the format that Sheety provides in their documentation) and enable it to be shared publically
1. Connect your Google Sheet to Sheety, where Sheety will then provide you with an endpoint URL to obtain your live Google Sheet data in JSON format
1. Use Handlebars.js and jQuery to extract the data from the JSON file and convert it into your desired format, in this case as table
1. Use the TableSorter jQuery Plugin to allow your HTML table to be filterable and sortable
1. Use Sheety documentation on making requests https://sheety.co/docs/making-requests or view the Finger Lakes BH Bed `index.html` file and `/js/beds.js` file

### Notes
* Updates from Google Sheets may take anywhere from 1-5 minutes to display on your web app
* Google API requests will be limited to 500 requests/month unless you purchase a plan
* The use of Bootstrap, Sass, and Fontawesome are optional and not necessary to get this project operational 

## Dependencies
* Sheety Google Sheets API
* Handlebars.js
* jQuery
* TableSorter jQuery plugin
* Bootstrap
* Node.js
* Sass
* FontAwesome

