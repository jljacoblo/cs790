
var f = function(x) { 
		return (x == 1) ? 1 : (x * f(x-1)); 
	};
f(10)