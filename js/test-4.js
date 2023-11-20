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

const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		skills: ["ipsum", "lorem"],
		gender: "male",
		age: 37,
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
		gender: "female",
		age: 34,
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
		gender: "male",
		age: 24,
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		skills: ["adipisicing", "irure", "velit"],
		gender: "female",
		age: 21,
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong"],
		isActive: true,
		balance: 3951,
		skills: ["ex", "culpa", "nostrud"],
		gender: "male",
		age: 27,
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman"],
		isActive: false,
		balance: 1498,
		skills: ["non", "amet", "ipsum"],
		gender: "male",
		age: 38,
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		skills: ["lorem", "veniam", "culpa"],
		gender: "female",
		age: 39,
	},
];

const getUserEmails = (users) => {
	users.map((users) => users.email);
};
console.log(getUserEmails(users));
