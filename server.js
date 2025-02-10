const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Определённая статическая папка
app.use(express.static(path.join(__dirname, 'public')));

// Отправка HTML-файла при запросе к корню сайта
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Функция для генерации коэффициентов и их вероятностей
function generateCoefficientsAndProbabilities() {
    const coefficientsSet = new Set();
    const coefficientsArray = [];

    while (coefficientsSet.size < 4) {
        let randomCoefficient = (Math.random() * (1.99 - 1.1) + 1.1).toFixed(2);
        coefficientsSet.add(randomCoefficient);
    }

    coefficientsSet.forEach(item => {
        let probability;
        if (item < 1.3) {
            probability = (Math.random() * (85 - 75) + 75).toFixed(2);
        } else if (item < 1.5) {
            probability = (Math.random() * (78 - 65) + 65).toFixed(2);
        } else if (item < 1.7) {
            probability = (Math.random() * (65 - 58) + 58).toFixed(2);
        } else {
            probability = (Math.random() * (58 - 39) + 39).toFixed(2);
        }

        coefficientsArray.push({ coefficient: item, probability });
    });

    return coefficientsArray;
}

// Создаем маршрут для получения коэффициентов и вероятностей
app.get('/api/coefficients', (req, res) => {
    const coefficients = generateCoefficientsAndProbabilities();
    res.json(coefficients);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
