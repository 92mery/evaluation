// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

}


// Fonction pour récupérer la "tooltip" qui correspond à l'input

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes les fonctions dans un objet littéral

check['lastName'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['firstName'] = check['lastName']; 

check['age'] = function() {

    var age = document.getElementById('age'),
        tooltipStyle = getTooltip(age).style,
        ageValue = parseInt(age.value);

    if (!isNaN(ageValue) && ageValue >= 5 && ageValue <= 100) {
        age.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        age.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['mail'] = function(id) {

    var mail = document.getElementById('mail'),
        tooltipStyle = getTooltip(mail).style;

    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;


    if(regex.test(mail.value)) {
        mail.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        mail.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};


check['pwd1'] = function() {

    var pwd1 = document.getElementById('pwd1'),
        tooltipStyle = getTooltip(pwd1).style;

    if (pwd1.value.length >= 6) {
        pwd1.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        pwd1.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};




// envoi du formulaire

(function() { 

    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[type=text], input[type=password]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }

    myForm.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            var fenetreConfirme = confirm('Inscription réussie ! Vous pouvez utiliser maintenant vos identifiants.');
            if (fenetreConfirme){
                document.location.href="accueil.html";
            }else{
                document.location.href="deconnection.html";

    }




        }

        e.preventDefault();

    });

    
})();


// désactivation des "tooltips"

deactivateTooltips();

// boutons de connection

function jeClique(){
    document.location.href="accueil.html";
};

function jeMinscrit(){
    document.location.href="inscription.html";
};

function deconnection(){
        document.location.href="deconnection.html";
};

function jeMidentifie(){
        document.location.href="profil.html";
};

