var database = null;
var mainNimInput = null;
var mainResponse = null;
var mainDisplay = null;
var config = null;

$(document).ready(function() {
    database = new Data;
    config = new Config;

    if (localStorage.getItem(config.databaseKey) === null) {
        localStorage.setItem(config.databaseKey, JSON.stringify(database.Mahasiswa));
    }

    mainNimInput = new Input;
    mainNimInput.config = config.mainNimInput;
    mainNimInput.create();

    mainResponse = new Response;
    mainResponse.config = config.mainResponse;
    mainResponse.create();

    mainDisplay = new Display;
    mainDisplay.config = config.mainDisplay;
    mainDisplay.create();

    $("#reset").click(function(){
        if (confirm("Are you sure?")) {
            resetDatabase(config.databaseKey);
            mainDisplay.refreshTable();
        };
    });
});

function getDataMahasiswa(key) {
    return JSON.parse(localStorage.getItem(key));
}

function resetDatabase(key) {
    localStorage.removeItem(key);
    database = new data;
    localStorage.setItem(key, JSON.stringify(database.Mahasiswa));
}