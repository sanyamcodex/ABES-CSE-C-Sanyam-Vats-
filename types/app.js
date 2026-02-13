const express = require("express");
const app = express();

const PORT = 3000;

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Home Page</h1>
        <p>This is the home page of our website.</p>
        <a href="/about">About</a> |
        <a href="/contact">Contact</a>
    `);
});

// About Page
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Us</h1>
        <p>This website is created using Node.js and Express.</p>
        <a href="/">Home</a> |
        <a href="/contact">Contact</a>
    `);
});

// Contact Page
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Email: example@gmail.com</p>
        <p>Phone: 1234567890</p>
        <a href="/">Home</a> |
        <a href="/about">About</a>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
