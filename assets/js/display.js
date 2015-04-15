function Display() {
    this.target = null;
}

Display.prototype = {
    create: function() {
        this.config();
        this.refreshTable();
    },
    refreshTable: function() {
        var tableHTML = "";
        var mahasiswa = getDataMahasiswa(config.databaseKey);
        if (mahasiswa.length) {
            tableHTML += this.addHeader(mahasiswa[0]);
            for (var i = 0; i < mahasiswa.length; i++) {
                tableHTML += this.addRow(mahasiswa[i], i+1);
            };
        };
        this.target.html(tableHTML);
    },

    addHeader: function(data) {
        var returnString = "";
        returnString += "<thead> <tr>";
        returnString += "<th>#</th>";
        for (var property in data) {
            returnString += "<th>" + property + "</th>";
        }
        returnString += "</tr> </thead>";
        return returnString;
    },

    addRow: function (data, index) {
        var returnString = "";
        returnString += "<tbody> <tr> <th scope=\"row\">" + index + "</th>";
        for (var property in data) {
            returnString += "<td class=";
            if (property == "Status") {
                returnString += data[property] == "Hadir" ? "\"table-element-green\"" : "\"table-element-red\"";
            }
            else {
                returnString += "\"table-element\"";
            }
            returnString += ">" + data[property] + "</td>";
        }
        returnString += "</tr> </tbody>";
        return returnString;
    }
}

