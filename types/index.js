const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>This is Home Page</h1>
            <p>ABES Engineering College</p>
            <a href="/about">About</a> |
            <a href="/contact">Contact Us</a>
        `);
    }

    
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Us</h1>
            <p>Name: Student</p>
            <p>Contact no: 7565041654</p>
            <a href="/">Home</a> |
            <a href="/contact">Contact Us</a>
        `);
    }

    
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Contact Us</h1>
            <p>Email: example@gmail.com</p>
            <p>Phone: 9876543210</p>
            <img src="/image" width="300"/>
            <br><br>
            <a href="/">Home</a> |
            <a href="/about">About</a>
        `);
    }

    // Image Route
    else if (req.url === '/image') {
        const imagePath = path.join(__dirname, 'image.jpg'); // Put image.jpg in same folder
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Image not found");
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    }

    // 404 Page
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');
    }
});

myserver.listen(8000, () => console.log('Server is running on http://localhost:8000'));
