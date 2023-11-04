// function getLength(array) {
// 	const arrayJoin = array.join("");
// 	return arrayJoin.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// function calculateEngravingPrice(message, pricePerWord) {
// 	const messageSplit = message.split(" ");
// 	const messageLenght = messageSplit.length;
// 	return messageLenght * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function getSlice(array, value) {
// 	const checkValue = array.indexOf(value);
// 	const index = checkValue + 1;
// 	return checkValue >= 0 ? array.slice(0, index) : [];
// }

function createArrayOfNumbers(min, max) {
	const array = [];

	for (let i = min; i <= max; i += 1) {
		array.push(i);
	}
	return array;
}

console.log(createArrayOfNumbers(14, 17));
