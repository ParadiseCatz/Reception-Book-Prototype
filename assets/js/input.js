function Input() {
    this.formSubmitButton = null;
    this.formInput = null;
    this.nimInput = null;
}

Input.prototype = {
    create: function() {
        this.config();
        this.formSubmitButton.click(this.checkingIn.bind(this));
        this.formInput.submit(this.checkingIn.bind(this));
    },
    checkingIn: function() {
        console.log(database);
        database.Mahasiswa = getDataMahasiswa(config.databaseKey);
        var nim = this.getNim();
        if (database.nimValid(nim)) {
            database.checkIn(nim);
            database.storeTo(config.databaseKey);
            mainDisplay.refreshTable();
            this.clearInput();
            mainResponse.validResponseTo(database.nameOf(nim));
        }
        else {
            mainResponse.invalidResponse();
        }
        return false;
    },
    getNim: function() {
        return this.nimInput.val();
    },
    clearInput: function() {
        this.nimInput.val("");
    }
}