const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешаем доступ к статическим файлам (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
