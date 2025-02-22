const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware to parse the body of the form
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS for rendering views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the form
app.get('/', (req, res) => {
    res.render('index');  // 'index.ejs' in 'views' folder
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Send data to Flask backend
    axios.post('http://backend:5000/submit', formData)
        .then(response => {
            res.send('Form submitted successfully: ' + response.data);
        })
        .catch(error => {
            console.error(error);
            res.send('Error submitting form');
        });
});

// Start the server
app.listen(3000, () => {
    console.log('Frontend server running on port 3000');
});
