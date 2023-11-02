// function getLength(array) {
// 	const arrayJoin = array.join("");
// 	return arrayJoin.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

function calculateEngravingPrice(message, pricePerWord) {
	const messageSplit = message.split(" ");
	const messageLenght = messageSplit.length;
	return messageLenght * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
