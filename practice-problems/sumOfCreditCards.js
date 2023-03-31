const payments = [
  {
    userId: 203,
    code: 12,
    date: '2015-10-05',
    monthly_payment: 450.20
  }, {
    userId: 204,
    code: 12,
    date: '2015-10-12',
    monthly_payment: 550.20
  }, {
    userId: 205,
    code: 12,
    date: '2015-10-20',
    monthly_payment: 150.20
  }, {
    userId: 206,
    code: 10,
    date: '2015-07-05',
    monthly_payment: 58.20
  }, {
    userId: 207,
    code: 5,
    date: '2015-10-05',
    monthly_payment: 78.95
  }, {
    userId: 208,
    code: 11,
    date: '2015-08-05',
    monthly_payment: 320.12
  }
];

// function getSumPayments(array) {
//   let sum = 0;
//   const date = new Date()
//   for (let i = 0; i < array.length; i++) {
//     if(array[i].code === 12 && )
//   }
// }

// console.log(payments.filter(p => {
//   return p.code === 12;
// }));

const filteredPayments = payments.filter(p => {
  const date = new Date(p.date);
  if (p.code !== 12) {
    return false;
  }
  if (date.getMonth() !== 10 && date.getFullYear() !== 2015) {
    return false;
  }
  return true;
}
);

function getSumPayments(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].monthly_payment;
  }
  return sum;
}

(getSumPayments(filteredPayments).toFixed(2));
