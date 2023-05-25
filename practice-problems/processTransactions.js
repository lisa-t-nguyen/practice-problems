const input = ["notebook", "notebook", "mouse", "keyboard", "mouse"];
const expectedOutput = ["mouse 2", "notebook 2", "keyboard 1"];

function processTransactions(transactions) {
    let items = new Map();
    for (let i = 0; i < transactions.length; i++) {
        if (!items.has(transactions[i])) {
            items.set(transactions[i], 1);
        } else {
            items.set(transactions[i], items.get(transactions[i]) + 1);
        }
    }
    
    const newArray = [];
    for (const [id, count] of items) {
        newArray.push(id + ' ' + count);
    }
    
    newArray.sort();
    newArray.sort((a, b) => {
        const countA = parseInt(a.split(' ')[1]);
        const countB = parseInt(b.split(' ')[1]);
        
        if (countA <= countB) {
            return 1;
        } else {
            return -1;
        }
    })
    return newArray;
}

const processedTransactions = processTransactions(input);
for (let i = 0; i < processedTransactions.length; i++) {
    console.log(processedTransactions[i]);
}