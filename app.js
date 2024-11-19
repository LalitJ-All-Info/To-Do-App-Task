const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (CSS)
app.set('view engine', 'ejs');

// To-Do List Data
let todos = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) {
        todos.push(newTodo);
    }
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
    res.redirect('/');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
