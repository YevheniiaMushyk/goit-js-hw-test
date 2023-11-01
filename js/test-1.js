// function calculateTotal(number) {
// 	let index = 0;
// 	let result = 0;
// 	while (index <= number) {
// 		result = result + index;

// 		index += 1;
// 	}
// 	return result;
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function calculateEvenTotal(number) {
// 	let result = 0;

// 	for (let index = 1; index <= number; ++index) {
// 		let ost = index % 2;
// 		if (ost === 0) {
// 			result = result + index;
// 		} else {
// 			result = result;
// 		}
// 	}
// 	return result;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));

const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; ++i) {
	let ost = i % 5;

	if (ost === 0) {
		number = i;
		break;
	}
}
console.log(number);
