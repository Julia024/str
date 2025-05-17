const text = document.querySelector('#text')
console.log(`1. Количество символов в тексте: ${text.innerText.length}`);

const result = text.innerText.replace(/;/g, "\n");
console.log(`2. Текст с переносами строк: \n ${result}`);

const substring = result.replace(/\s+/g, '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

const newText = result.slice(26,50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace('клён', 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

const index = text.innerText.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = () => {
    let firstLetter = replacedText[0].toUpperCase();
    let str = replacedText.slice(1);
    return firstLetter + str;
}
console.log(`9. Строка с измененной первой буквой: ${modifiedText()}`);

// text.append(text.innerText.length, result, newText + replacedText + replacedText2 + replacedText3 + index + modifiedText())

text.innerText = `
1. ${text.innerText.length}
2. ${result}
3. ${substring}
4. ${newText}
5. ${replacedText2}
6. ${replacedText3}
7. ${index}
8. ${modifiedText()}
`;