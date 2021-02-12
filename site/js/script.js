/********************************/
/***  Affichage des contenus ***/
/******************************/

$('#tdb').click(function (){
    $('#contenubord').show();
    $('#commanderlemateriel').hide();
    $('#ajoutemploye').hide();
    $('#editerprofil').hide();
    $('#voiremployesajouteer').hide();
});

$('#epy').click(function(){
    $('#contenubord').hide();
    $('#commanderlemateriel').hide();
    $('#editerprofil').hide();
    $('#voiremployesajouteer').hide();
    $('#ajoutemployer').show();
    
});

$('#mtr').click(function(){
    $('#commanderlemateriel').show();
    $('#contenubord').hide();
    /*$('#gereremployes').hide();*/
    $('#editerprofil').hide();
    $('#ajoutemployer').hide();
    $('#voiremployesajouteer').hide();
});

$('#pfl').click(function(){
    $('#editerprofil').show();
    $('#contenubord').hide();
    $('#commanderlemateriel').hide();
    $('#voiremployesajouteer').hide();
    $('#ajoutemployer').hide();

});

$('#voir').click(function(){
    $('#editerprofil').hide();
    $('#contenubord').hide();
    $('#commanderlemateriel').hide();
    $('#ajoutemployer').hide();
    $('#voiremployesajouteer').show();

});

$('#recruter').click(function(){
    $('#editerprofil').hide();
    $('#contenubord').hide();
    $('#commanderlemateriel').hide();
    $('#voiremployesajouteer').hide();
    $('#ajoutemployer').show();
    $('.formulaireajout').show();

});

/***  Ajouter la class active  ***/

function activetdb() {
    var pfl = document.getElementById("pfl");
    var epy = document.getElementById("epy");
    var tdb = document.getElementById("tdb");
    var mtr = document.getElementById("mtr");
    pfl.classList.remove("active");
    epy.classList.remove("active");
    tdb.classList.add("active");
    mtr.classList.remove("active");
}

function activemtr() {
    var pfl = document.getElementById("pfl");
    var epy = document.getElementById("epy");
    var tdb = document.getElementById("tdb");
    var mtr = document.getElementById("mtr");
    pfl.classList.remove("active");
    epy.classList.remove("active");
    tdb.classList.remove("active");
    mtr.classList.add("active");
}

function activepepy() {
    var pfl = document.getElementById("pfl");
    var epy = document.getElementById("epy");
    var tdb = document.getElementById("tdb");
    var mtr = document.getElementById("mtr");
    pfl.classList.remove("active");
    epy.classList.add("active");
    tdb.classList.remove("active");
    mtr.classList.remove("active");
    
}

function activepfl() {
    var pfl = document.getElementById("pfl");
    var epy = document.getElementById("epy");
    var tdb = document.getElementById("tdb");
    var mtr = document.getElementById("mtr");
    pfl.classList.add("active");
    epy.classList.remove("active");
    tdb.classList.remove("active");
    mtr.classList.remove("active");
}

function voir() {
    var voircontenu = document.getElementById("tableaudebord");
    voircontenu.classList.add("none");
  }