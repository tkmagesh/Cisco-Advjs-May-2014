function test(title,testFn){
		var newEle = document.createElement("li");
		newEle.innerHTML = title;
		var result = testFn();
		newEle.classList.add(result ? "pass" : "fail");
		document.getElementById("ulTestList").appendChild(newEle);
	}
