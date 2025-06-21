const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Setting EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (if any) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/story', (req, res) => {
    // Extract Job_description and Cover_letter from the form
    const jobDescription = req.body.Job_description;
    const coverLetter = req.body.Cover_letter;

    // If client_name is empty, default to "N/A"
    const clientName = req.body.client_name || 'N/A';

    // Pass the clientName along with other data to the result template
    res.render('result', {
        Job_description: jobDescription,
        Cover_letter: coverLetter,
        clientName: clientName
    });
});

// Basic 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
