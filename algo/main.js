function twoSum(array, target) {
    const numIndices = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }

        numIndices[array[i]] = i;
    }

    return null;
}

// Exemples de données d'entrée
const array = [2, 7, 11, 15];
const target = 9;


const result = twoSum(array, target);

console.log(result);