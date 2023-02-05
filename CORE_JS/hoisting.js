let a = (x) => {
	console.log(x); // 1
	var x;
	console.log(x); // 1
	var x = 2;
	console.log(x); // 2
};
a(1);

let b = () => {
	console.log(y); // function y()
	var y = "yyy";
	console.log(y); // yyy
	function y() {}
	console.log(y); // yyy
};
b();
