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
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];
// const getUsersWithEyeColor = (users, color) => {
// 	const result = users.filter((users) => users.eyeColor === color);
// 	console.log(result);
// };

// getUsersWithEyeColor(users, "brown");

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

// const isAnyUserActive = (users) => {
// 	const activeUser = users.some((user) => user.isActive === true);
// 	return activeUser;
// };

// console.log(
// 	isAnyUserActive([
// 		{
// 			name: "Moore Hensley",
// 			email: "moorehensley@indexia.com",
// 			eyeColor: "blue",
// 			friends: ["Sharron Pace"],
// 			isActive: false,
// 			balance: 2811,
// 			gender: "male",
// 		},
// 		{
// 			name: "Sharlene Bush",
// 			email: "sharlenebush@tubesys.com",
// 			eyeColor: "blue",
// 			friends: ["Briana Decker", "Sharron Pace"],
// 			isActive: true,
// 			balance: 3821,
// 			gender: "female",
// 		},
// 		{
// 			name: "Ross Vazquez",
// 			email: "rossvazquez@xinware.com",
// 			eyeColor: "green",
// 			friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 			isActive: false,
// 			balance: 3793,
// 			gender: "male",
// 		},
// 		{
// 			name: "Elma Head",
// 			email: "elmahead@omatom.com",
// 			eyeColor: "green",
// 			friends: ["Goldie Gentry", "Aisha Tran"],
// 			isActive: true,
// 			balance: 2278,
// 			gender: "female",
// 		},
// 		{
// 			name: "Carey Barr",
// 			email: "careybarr@nurali.com",
// 			eyeColor: "blue",
// 			friends: ["Jordan Sampson", "Eddie Strong"],
// 			isActive: true,
// 			balance: 3951,
// 			gender: "male",
// 		},
// 		{
// 			name: "Blackburn Dotson",
// 			email: "blackburndotson@furnigeer.com",
// 			eyeColor: "brown",
// 			friends: ["Jacklyn Lucas", "Linda Chapman"],
// 			isActive: false,
// 			balance: 1498,
// 			gender: "male",
// 		},
// 		{
// 			name: "Sheree Anthony",
// 			email: "shereeanthony@kog.com",
// 			eyeColor: "brown",
// 			friends: ["Goldie Gentry", "Briana Decker"],
// 			isActive: true,
// 			balance: 2764,
// 			gender: "female",
// 		},
// 	])
// );

//
// Налаштування
// const recordCollection = {
// 	2548: {
// 		albumTitle: "Slippery When Wet",
// 		artist: "Bon Jovi",
// 		tracks: ["Let It Rock", "You Give Love a Bad Name"],
// 	},
// 	2468: {
// 		albumTitle: "1999",
// 		artist: "Prince",
// 		tracks: ["1999", "Little Red Corvette"],
// 	},
// 	1245: {
// 		artist: "Robert Palmer",
// 		tracks: [],
// 	},
// 	5439: {
// 		albumTitle: "ABBA Gold",
// 	},
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
// 	if (value === "") {
// 		delete records[id][prop];
// 	} else {
// 		if (prop === "tracks") {
// 			if (records[id][prop]) {
// 				records[id][prop].push(value);
// 			} else {
// 				records[id][prop] = [];
// 				records[id][prop].push(value);
// 			}
// 		} else {
// 			records[id][prop] = value;
// 		}
// 	}

// 	return records;
// }

// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

// function multiplyAll(arr) {
// 	let product = 1;
// 	// Змініть код лише під цим рядком
// 	for (let i = 0; i < arr.length; i++) {
// 		let total = 1;
// 		for (let j = 0; j < arr[i].length; j++) {
// 			total = total * arr[i][j];
// 		}
// 		product = product * total;
// 	}
// 	// Змініть код лише над цим рядком
// 	return product;
// }

// multiplyAll([
// 	[1, 2],
// 	[3, 4],
// 	[5, 6, 7],
// ]);

//

// function countdown(n) {
// 	if (n < 1) {
// 		return [];
// 	} else {
// 		const countArray = countdown(n - 1);
// 		countArray.push(n);
// 		return countArray;
// 	}
// }
// console.log(countdown(10));

// class Car {
// 	static maxPrice = 50000;

// 	#price;
// 	#statPrice;

// 	constructor({ price, statPrice = Car.maxPrice }) {
// 		this.#price = price;
// 		this.#statPrice = statPrice;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		if (newPrice <= this.#statPrice) {
// 			this.#price = newPrice;
// 		} else {
// 			return this.#price;
// 		}
// 	}
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

class User {
	email;

	constructor(email) {
		this.email = email;
	}

	get email() {
		return this.email;
	}

	set email(newEmail) {
		this.email = newEmail;
	}
}
class Admin extends User {
	static role = {
		BASIC: "basic",
		SUPERUSER: "superuser",
	};

	blacklistedEmails = [];

	constructor({ email, access }) {
		super(email);
		this.access = access;
	}

	blacklist(email) {
		this.blacklistedEmails.push(email);
	}

	isBlacklisted(email) {
		this.blacklistedEmails.includes(email);
	}
}

const mango = new Admin({
	email: "mango@mail.com",
	access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
