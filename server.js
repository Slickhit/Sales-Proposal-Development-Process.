const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setting EJS as the template engine
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/story', (req, res) => {
    // Extracting Job_description and Cover_letter from the form
    const jobDescription = req.body.Job_description;
    const coverLetter = req.body.Cover_letter;

    // If client_name is empty, default to "N/A"
    const clientName = req.body.client_name || "N/A";

    // Pass the clientName along with other data to the result template
    res.render('result', { 
        Job_description: jobDescription, 
        Cover_letter: coverLetter,
        clientName: clientName // Add this line to include the clientName
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
