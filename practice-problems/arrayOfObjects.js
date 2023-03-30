const arr = [{
  firstName: 'Steven',
  lastName: 'Hancock',
  score: 90
}, {
  firstName: 'Lynette',
  lastName: 'Jorgensen',
  score: 100
}, {
  firstName: 'Andrew',
  lastName: 'Wilson',
  score: 71
}, {
  firstName: 'Annika',
  lastName: 'Turner',
  score: 82
}];

// Sorting by last name

arr.sort((a, b) => {
  if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
    return -1;
  }
  if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
    return 1;
  }
  return 0;
});

// Sorting by score from least to greatest

arr.sort((a, b) => {
  return a.score - b.score;
});

// Sorting by score from greatest to least

arr.sort((a, b) => {
  return b.score - a.score;
});
