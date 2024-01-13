/**
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів повинна відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

const logCount = (count) => console.log(count);
function promise(delay, count) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(count), delay);
	});
}
const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => {
	for (let index = 0; index < times; index++) {
		promise(delay, index + 1).then((value) => {
			logCount(value);
		});
		delay += stepInterval;
	}
};

countWithDelay(3000, 6, 1000);
