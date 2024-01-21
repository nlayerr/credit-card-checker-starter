// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = (cardDigits) => {
    // Duplica los digitos de la tarjeta, comenzando desde el final
    const reverseDigits = cardDigits.slice().reverse();
    let sum = 0;

    for (let i = 0; i < reverseDigits.length; i++) {
        let digit = reverseDigits[i];

        // Duplica cada segundo digito (comenzando desde el primer digito)
        if (i % 2 === 1) {
            digit *= 2;
        
            // Resta 9 si el resultado es mayor o igual a 10
            if (digit >= 10){
                digit -= 9;
            }
        }

        // Suma el digito a la suma total
        sum += digit;
         //console.log(sum)
    }

    // La tarjeta es valida si la suma es un mutiplo de 10
    return sum % 10 === 0
}

const findInvalidCards = (batch) => {
    const invalidCards = [];

    // Itera sobre cada tarjeta en la matriz anidada
    for (let i = 0; i < batch.length; i++){
        const cardDigits = batch[i];

        // Utiliza la funcion validateCred para verificar si la tarjeta es valida o no
        if (!validateCred(cardDigits)) {
            invalidCards.push(cardDigits);
        }
    }

    return invalidCards;
}

const idInvalidCardCompanies = (invalidCards) => {
    const invalidCompanies = [];

    // Itera sobre cada tarjeta no valida
    for (let i = 0; i < invalidCards.length; i++) {
        const firstDigit = invalidCards[i][0];

        // Identifica la compañia basandose en el primer digito
        switch (firstDigit) {
            case 3:
                if (!invalidCompanies.includes('Amex')) {
                    invalidCompanies.push('Amex');
                }
                break;
            case 4: 
                if (!invalidCompanies.includes('Visa')) {
                    invalidCompanies.push('Visa');
                }
                break;
            case 5:
                if (!invalidCompanies.includes('MasterCard')) {
                    invalidCompanies.push('MasterCard');
                }
                break;
            case 6:
                if (!invalidCompanies.includes('Discover')) {
                    invalidCompanies.push('Discover');
                }
                break;
                default:
                    console.log('Empresa no encontrada para el numero de tarjeta no valida');
        }
    }
    
    return invalidCompanies
}
const invalidCompanies = idInvalidCardCompanies(batch)
const isvalid = validateCred(invalid1);
const invalidCards = findInvalidCards(batch)
//const cardDigits = [4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5];
console.log(invalidCompanies);







