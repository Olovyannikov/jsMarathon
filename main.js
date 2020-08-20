const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === 'а') {
            first++;
        }
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === 'а') {
            second++;
        }
    }
    if (second > first) {
        return secondRow;
    } else {
        return firstRow;
    }
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму