function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this,n);
		return !isNaN(n) ? parseInt(n,10) : 0;	
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}