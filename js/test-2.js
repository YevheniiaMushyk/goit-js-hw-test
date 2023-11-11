// function getEvenNumbers(start, end) {
// 	const array = [];
// 	for (let index = start; index <= end; index++) {
// 		if (index % 2 === 0) {
// 			array.push(index);
// 		} else {
// 		}
// 	}
// 	return array;
// }
// console.log(getEvenNumbers(6, 12));

// function getCommonElements(array1, array2) {
// 	const array3 = [];
// 	let item;
// 	for (let index = 0; index < array1.length; index++) {
// 		item = array1[index];
// 		for (let index2 = 0; index2 < array2.length; index2++) {
// 			if (item === array2[index2]) {
// 				array3.push(item);
// 			} else {
// 			}
// 		}
// 	}
// 	return array3;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3));

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
// 	values.push(apartment[key]);
// }
// console.log(values);

function getProductPrice(productName) {
	const products = [
		{ name: "Radar", price: 1300, quantity: 4 },
		{ name: "Scanner", price: 2700, quantity: 3 },
		{ name: "Droid", price: 400, quantity: 7 },
		{ name: "Grip", price: 1200, quantity: 9 },
	];
	for (let namePr of products) {
		if (namePr.name === productName) {
			return namePr.price;
		}
	}
	return "null";
}
console.log(getProductPrice("Radar")); //  повертає 1300.

console.log(getProductPrice("Grip")); //  повертає 1200.
console.log(getProductPrice("Scanner")); //  повертає 2700.
console.log(getProductPrice("Droid")); //  повертає 400.
console.log(getProductPrice("Engine")); // повертає null.
