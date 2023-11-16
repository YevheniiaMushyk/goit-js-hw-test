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

//

let count = 0;

function cc(card) {
	// Змініть код лише під цим рядком
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count += 1;
			break;
		case 7:
		case 8:
		case 9:
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count -= 1;
			break;
	}
	return count > 0 ? `${count} Bet` : `${count} Hold`;

	// Змініть код лише над цим рядком
}

cc(7);
cc(8);
cc(9);
