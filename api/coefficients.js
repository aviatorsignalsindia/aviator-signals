// api/coefficients.js
export default function handler(req, res) {
    const coefficients = generateCoefficientsAndProbabilities();
    res.status(200).json(coefficients);
}

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
