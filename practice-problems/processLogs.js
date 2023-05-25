function processLogs(logs, maxSpan) {
    const signInMap = new Map();
    const signOutMap = new Map();
    
    for (let i = 0; i < logs.length; i++) {
        const logData = logs[i].split(' ');
        const id = logData[0];
        const time = logData[1];
        const action = logData[2];
        if (action === 'sign-in') {
            signInMap.set(id, time);
        } else {
            signOutMap.set(id, time);
        }
        
    } 
    
    const returnArray = [];
    
    for (const id of signInMap.keys()) {
        const timeDelta = signOutMap.get(id) - signInMap.get(id); 
        if (timeDelta <= maxSpan) {
            returnArray.push(id);    
        }
        
    }
    
    returnArray.sort((a, b) => {
        let firstNum = parseInt(a);
        let secondNum = parseInt(b);
        if (firstNum < secondNum) {
            return -1;
        }
        if (firstNum > secondNum) {
            return 1;
        }
        return 0;
    }) 
    
    return returnArray;
      
}