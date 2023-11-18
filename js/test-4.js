//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

var arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
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
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

console.log(isPlainObject({ a: 1 })); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(1)); // false
console.log(isPlainObject(undefined)); // false
