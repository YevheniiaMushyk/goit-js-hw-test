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

function getCommonElements(array1, array2) {
	const array3 = [];
	let item;
	for (let index = 0; index < array1.length; index++) {
		item = array1[index];
		for (let index2 = 0; index2 < array2.length; index2++) {
			if (item === array2[index2]) {
				array3.push(item);
			} else {
			}
		}
	}
	return array3;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3));
