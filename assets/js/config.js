function Config() {
	this.databaseKey = "dbs";
	this.invalidResponseDisplayTime = 500;
	this.invalidResponseFadeOutTime = 1000;

	this.validResponseDisplayTime = 1000;
	this.validResponseFadeOutTime = 1000;
}

Config.prototype = {
	mainNimInput: function() {
	    this.formSubmitButton = $("#myFormButton");
	    this.formInput = $("form[name='myForm']");
	    this.nimInput = $("input[name='nim']");
	},

	mainResponse: function() {
	    this.responseItem = $("#response");
	    this.validResponseClass = "valid-response";
	    this.invalidResponseClass = "invalid-response";
	},

	mainDisplay: function() {
	    this.target = $("#table");
	}
}

