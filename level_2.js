//Q11 — Classify students: Return a new array of objects containing
// each student's name and a grade property. Use "A" for marks of 80 or above, "B" for marks from 70–79,
//  "C" for marks from 50–69, and "F" for marks below 50.

let students = [
    { name: "Thabo", age: 18, mark: 75 },
    { name: "Lerato", age: 20, mark: 88 },
    { name: "Sipho", age: 19, mark: 45 },
    { name: "Amara", age: 21, mark: 92 },
    { name: "Zanele", age: 18, mark: 63 },
    { name: "David", age: 22, mark: 79 },
    { name: "Naledi", age: 20, mark: 55 }
];

// function Classifystudents(learner) {

//   for (let i = 0; i < students.length ; i++) {

//     if (students[i].mark >= 80) {
//       console.log(`A for  ${students[i].name}` );
//     } else if (students[i].mark >= 70 && students[i].mark <= 79) {
//       console.log(`B for ${students[i].name}`);
//     } else if (students[i].mark >= 50 && students[i].mark <= 69) {
//       console.log(`C for ${students[i].name}`);
//     } else  {
//       console.log(`F for ${students[i].name}`);
//     }

//   }

// };
// console.log(Classifystudents(students))




let marks = [75, 88, 45, 92, 63, 79, 88, 92, 55];

function findSecondHighest(marks) {

  let largest = 0;
  for (let i = 0; i < marks.length; i++){
    if (marks[i] > largest) {
      largest = marks[i];
    }
  }
  return largest;
};
console.log(findSecondHighest(marks));



let sales = [
    { product: "Laptop", price: 12000, quantity: 3 },
    { product: "Mouse", price: 250, quantity: 15 },
    { product: "Keyboard", price: 600, quantity: 8 },
    { product: "Monitor", price: 2500, quantity: 5 },
    { product: "USB Cable", price: 100, quantity: 30 },
    { product: "Headphones", price: 850, quantity: 10 },
    { product: "Webcam", price: 1200, quantity: 4 }
];













let cart = [
    { name: "T-shirt", price: 150, quantity: 2 },
    { name: "Jeans", price: 400, quantity: 1 },
    { name: "Sneakers", price: 800, quantity: 1 },
    { name: "Cap", price: 100, quantity: 3 }
];
