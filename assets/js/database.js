function Data() {
    this.Mahasiswa = [
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514001",
            "Nama Lengkap": "Aseng Sebastian",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514002",
            "Nama Lengkap": "Aseng Sebastian2",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514003",
            "Nama Lengkap": "Aseng Sebastian3",
            "Status": "Tidak Hadir"
        },
        {
            "NIM": "16514004",
            "Nama Lengkap": "Aseng Sebastian4",
            "Status": "Tidak Hadir"
        }
    ]
};

Data.prototype = {
    checkIn: function(nim) {
        var nimIndex = this.getNimIndex(nim);
        this.Mahasiswa[nimIndex-1].Status = "Hadir";
    },
    nameOf: function(nim) {
        var nimIndex = this.getNimIndex(nim);
        return this.Mahasiswa[nimIndex-1]["Nama Lengkap"];
    },
    nimValid: function(nim) {
        var nimIndex = this.getNimIndex(nim);
        return !(nim.length != 8 ||nim.substr(0,5) != "16514" || nim == null || nim == "" || nimIndex > this.Mahasiswa.length || nimIndex <= 0);
    },
    storeTo: function(key) {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(this.Mahasiswa));
    },
    getNimIndex: function(nim) {
        return Number(nim.slice(-3));
    }
};