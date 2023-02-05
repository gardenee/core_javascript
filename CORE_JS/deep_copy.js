let user = {
	name: "Jaenam",
	gender: "male",
	urls: {
		portfolio: "Jaenam.portfolio",
		blog: "Jaenam.blog",
		facebook: "Jaenam.facebook",
	},
};

let changeBlog = (user, newName) => {
	/*  
  1. 쌩 복사
  let newUser = user;

  2. 얕은 복사
  let newUser = { ...user };
  
  3. 깊은 복사
    3-1 : JSON 사용
    let newUser = JSON.parse(JSON.stringify(user));
    몹시 간단하지만 메소드, prototype 등은 JSON으로 변경이 불가하기에 무시됨.

    3-2 : 재귀적으로 복사
  */

	let deepCopy = (target) => {
		let result = {};
		if (typeof target === "object" && target !== null) {
			for (let prop in target) {
				result[prop] = deepCopy(target[prop]);
			}
		} else {
			result = target;
		}
		return result;
	};

	let newUser = deepCopy(user);
	newUser.urls.blog = newName;
	return newUser;
};

let user2 = changeBlog(user, "Jung.blog");

console.log(user.urls.blog, user2.urls.blog);
// 1. Jung.blog Jung.blog   2. Jung.blog Jung.blog   3. Jaenam.blog Jung.blog
