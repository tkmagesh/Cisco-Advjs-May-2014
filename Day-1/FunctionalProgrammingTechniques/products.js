var products =[
	{id :1, name :"pen", cost :10, units:1,category:1},
	{id :2, name :"hen", cost :60, units:8,category:2},
	{id :6, name :"ten", cost :30, units:3,category:1},
	{id :4, name :"len", cost :80, units:7,category:2},
	{id :9, name :"den", cost :30, units:4,category:1},
	{id :5, name :"zen", cost :90, units:2,category:2}
]

function sort(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (left[attrName] > right[attrName]){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

function sort(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (comparerFn(left,right) > 0){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

function productComparerByValue(p1,p2){
   var p1Value = p1.cost * p1.units,
       p2Value = p2.cost * p2.units;
   if (p1Value > p2Value) return 1;
   if (p1Value < p2Value) return -1;
   return 0;
}

function sort(list, comparer){
	var comparerFn = comparer;
	if (typeof comparer === "string"){
		comparerFn = function(p1,p2){
			return p1[comparer] === p2[comparer] ? 0 : (p1[comparer] > p2[comparer] ? 1 : -1);
		}
	}
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (comparerFn(left,right) > 0){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

/*
filter
min
max
sum
avg
countBy
groupBy
join
*/

function filter(list, predicate){
	var result = [];
	for(var i=0;i<list.length;i++){
		var item = list[i];
		if (predicate(item) )
			result.push(item);
	}
	return result;
}
var costlyProductPredicate = function(p){ return p.cost > 50};
var costlyProducts = filter(products,costlyProductPredicate);

var inversePredicate = function(predicate){
	return function(){
		return !predicate.apply(this,[].slice.call(arguments,0));
	}
}

var cheapProductPredicate = function(product){
	return !costlyProductPredicate(product);
};


var cheapProducts = filter(products,cheapProductPredicate);

var overStockedPredicate = function(product){
	return product.units > 20;
};

var wellStockedPredicate = function(product){
	return !overStockedPredicate(product);
};

var wellStockedPredicate = inversePredicate(overStockedPredicate);

function min(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result)
			result = value;
	}
	return result;
}

function max(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value > result)
			result = value;
	}
	return result;
}

function groupBy(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var productCategorizerByPrice = function(p){
  if (p.cost < 20) return "cheap";
  if (p.cost > 50) return "costly";
  return "affordable"
}

var productsByCost = groupBy(products,productCategorizerByPrice);