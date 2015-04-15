function Response() {
    this.responseItem = null;
    this.validResponseClass = null;
    this.invalidResponseClass = null;
}

Response.prototype = {
    create: function() {
        this.config();
    },
    validResponseTo: function(name) {
        this.responseItem.html("<p class=\"" + this.validResponseClass + "\"> " + name + " has checked in </p>").bind(this);
        this.responseItem.fadeIn(0);
        setTimeout(function () { 
            this.responseItem.fadeOut(config.validResponseFadeOutTime); 
        }.bind(this), config.validResponseDisplayTime);
    },
    invalidResponse: function() {
        this.responseItem.html("<p class=\"" + this.invalidResponseClass + "\"> NIM Invalid </p>").bind(this);
        this.responseItem.fadeIn(0);
        setTimeout(function () { 
            this.responseItem.fadeOut(config.invalidResponseFadeOutTime); 
        }.bind(this), config.invalidResponseDisplayTime);
    }

}
