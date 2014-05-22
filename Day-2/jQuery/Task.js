define([], function(){
	function Task(){
		this.id = -1;
		this.name = "";
		this.isCompleted = false;
	}
	Task.prototype.toggleCompletion = function(){
		this.isCompleted = !this.isCompleted;
	}
	return Task;
});