// const users = {
// 	Alan: {
// 		online: false,
// 	},
// 	Jeff: {
// 		online: true,
// 	},
// 	Sarah: {
// 		online: false,
// 	},
// };

// function countOnline(allUsers) {
// 	// Змініть код лише під цим рядком
// 	let count = 0;
// 	for (const obj in allUsers) {
// 		if (allUsers[obj].online) {
// 			count += 1;
// 		}
// 	}
// 	return count;
// }
// // Змініть код лише над цим рядком

// console.log(countOnline(users));
// console.log(users.Jeff.online);

let user = {
	name: "Kenneth",
	age: 28,
	data: {
		username: "kennethCodesAllDay",
		joinDate: "March 26, 2016",
		organization: "freeCodeCamp",
		friends: ["Sam", "Kira", "Tomo"],
		location: {
			city: "San Francisco",
			state: "CA",
			country: "USA",
		},
	},
};

function addFriend(userObj, friend) {
	// Змініть код лише під цим рядком
	userObj.data.friends.push(friend);
	return userObj.data.friends;
	// Змініть код лише над цим рядком
}

console.log(addFriend(user, "Pete"));
