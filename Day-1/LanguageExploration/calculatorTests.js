window.addEventListener("DOMContentLoaded",init);
function init(){
	test("Should be able to add two numbers",function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = add(number1, number2);

		//Assert
		return result === expectedResult;
	})	
}