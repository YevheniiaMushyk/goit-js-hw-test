//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

//var arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// function removeDuplicates(arr) {
// 	let removeDuplicatesArr = [];
// 	for (const item of arr) {
// 		if (!removeDuplicatesArr.includes(item)) {
// 			removeDuplicatesArr.push(item);
// 		}
// 	}
// 	return removeDuplicatesArr;
// }
//
//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.
//
// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;

// 	orderedItems.forEach(function (value) {
// 		totalPrice += value;
// 	});

// 	return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//
const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong"],
		isActive: true,
		balance: 3951,
		gender: "male",
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman"],
		isActive: false,
		balance: 1498,
		gender: "male",
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
	},
];
const getUsersWithEyeColor = (users, color) => {
	const result = users.filter((users) => users.eyeColor === color);
	console.log(result);
};

getUsersWithEyeColor(users, "brown");

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
// 	{ name: "Mango", score: 83 },
// 	{ name: "Poly", score: 59 },
// 	{ name: "Ajax", score: 37 },
// 	{ name: "Kiwi", score: 94 },
// 	{ name: "Houston", score: 64 },
// ];

// // У колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average); // Масив об'єктів з іменами Poly і Houston
