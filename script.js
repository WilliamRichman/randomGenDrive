function generate() {



    const names = ["ALEGRIA A", "BAISA R", "CARRASCO F", "CHAIRA R", "DESSELLIER J", "FREEMAN L", "GOMEZ D", "HAINES T", "HERNANDEZ I", "MANSHAEM R", "MONTANO R", "PSHAK R", "ROHR D", "SMITH M", "AVAKIAN M", "CONNOLLY J", "ESPINO J", "GRAHAM T", "GREEN J", "HEARD B", "HOFMANN K", "KERR C", "MILLER K", "PERNACK G", "QUINTERO J ", "WADD C", "YEAGER D", "WALDER D", "BIETZ M", "CABLE D", "DAVIS Y", "GARDUNO D", "GUTIERREZ F", "HERNANDEZ M", "HORNBERGER Z", "LAVELLE B", "ORR J", "PROFFITT J ", "SAAVEDRA F", "SMITH E", "STAHL N", "TUMLINSON S", "ALICEA B", "BAKER J", "BERTRAND T", "BUGARIN A", "BURLESON R", "HESTER D", "JOHNSON R", "KENT P", "LAWRENCE B", "MORENO A", "MORENO JA", "MORENO JU", "SCHULTE D", "WOODS D", "ALVARADO M", "BLANCO R", "BROWN D", "HANSON S", "JONES J ", "LOPEZ R", "MCKINNEY R", "PADILLA D", "PERKINS J", "ROMERO R", "SALCIDO Z", "SIECKMANN S", "TISCHER T", "ZACHMAN D", "ADAMS R", "ANDERSON R", "CAMPBELL C", "CONOVER C", "FAIRBANKS W", "GLADEM R", "HIRSHBERG D", "KRAUSE R", "MAIN D", "MONTIJO F", "OCHOA R", "SALENTINE D", "STAMEY R", "TORRES S", "VIAR G"]

    /* console.log(names) */
    let name = ""

    for (let i = 0; i < names.length; i++) {
        /* let name = names[i] */
        name = names[Math.floor(Math.random) * Math.floor(names.length - 1)];

    }

};
generate();
console.log(generate)






/*
//generate
function generate() {
    //set password length and complex
    let complex = document.getElementById('inbox').value;

    //password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=+?";

    let password = "";

    for (var i = 0; i <= complex; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to text box
    document.getElementById('display').value = password;
}

//set default length to 8
document.getElementById('length').innerHTML = "Enter: Length";


//function to set length to slider inbox
document.getElementById('inbox').oninput = function () {
    if (document.getElementById('inbox').value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("inbox").value;
    }
    else {
        document.getElementById("Length").innerHTML = "Length: 1";
    }
}

//copy to clipboard
function clip() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Copied to Clipboard Asshole ")
}*/