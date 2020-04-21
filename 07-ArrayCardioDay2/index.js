const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and every checks
// Array.prototype.some() // is at leasont one person 19?

const isAdult = people.some((e) => {
  const date = new Date();
  const year = date.getFullYear();
  return year - e.year >= 18;
});

// Array.prototype.find()
// find the comment with the ID fo 823423
const result = comments.find(comment => comment.id == 823423);

// Array.prototype.findIndex()
// Find the comment with this ID 
// delete the comment with the ID of 823423;

const index = comments.splice(comments.findIndex(
    e => e.id === 823423
), 1);