// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
// 	{ name: "John", id: 123, marks: 98 },
// 	{ name: "Baba", id: 101, marks: 23 },
// 	{ name: "yaga", id: 200, marks: 45 },
// 	{ name: "Wick", id: 115, marks: 75 },
// ];

// const reitStudent = studentRecords.filter(function (student) {
// 	return student.marks > 50;
// });
// console.log(reitStudent);
let studentRecords = [
	{ name: "John", id: 123, marks: 98 },
	{ name: "Baba", id: 101, marks: 23 },
	{ name: "yaga", id: 200, marks: 45 },
	{ name: "Wick", id: 115, marks: 75 },
];
const reitStudent = studentRecords.filter((student) => student.marks > 50).map((stud) => stud.name);
console.log(reitStudent);

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31
