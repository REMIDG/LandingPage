
form()
function form(){

}

function Chgtext(){
  document.getElementsByClassName('chgText')[0].innerHTML = "Hight-Connection";
  document.getElementsByClassName('chgText')[1].innerHTML = "BOUTIQUE";
  document.getElementsByClassName('chgText')[2].innerHTML = "FAQ";
  document.getElementsByClassName('chgText')[3].innerHTML = "CONTACT";
  document.getElementsByClassName('chgText')[4].innerHTML = "Restez connecté à votre VIE !";
  document.getElementsByClassName('chgText')[5].innerHTML = "Découvrez les possibilités";
  document.getElementsByClassName('chgText')[6].innerHTML = "Boutique";
  document.getElementsByClassName('chgText')[7].innerHTML = "Boutique";
  document.getElementsByClassName('chgText')[8].innerHTML = "Boutique";
  document.getElementsByClassName('chgText')[9].innerHTML = "Boutique";
  document.getElementsByClassName('chgText')[10].innerHTML = "Boutique";
  document.getElementsByClassName('chgText')[11].innerHTML = "CONTACT";
  document.getElementsByClassName('chgText')[12].innerHTML = "Envoyer";
  document.getElementsByClassName('chgText')[13].innerHTML = "Message envoyé avec succès.";
  document.getElementsByClassName('chgText')[14].innerHTML = "Je vous remercie pour votre message et m'engage à vous répondre dans les 24h !<br>Excellente journée à vous,<br>Rémi";
  document.getElementsByClassName('chgText')[15].innerHTML = "Fermer";
  document.getElementsByClassName('chgText')[16].innerHTML = "Copyright © 2016 Copyright Holder All Rights Reserved.";
}

var slide = false;

function showdescription() {
  if (!slide) {
    $('.collapse').slideDown();
    slide = true;
  }else{
    $('.collapse').slideUp();
    slide = false;
  }
}

var nom = document.getElementById('nom').value;

var filter = /^[a-zA-Z0-9._-]+$/;
var filterMail = /^[a-zA-Z0-9._-]+@[a-z0-9]{2,}\.[a-z]{2,4}$/;

var first_name = filter.test(nom);
first_name = "";
console.log(first_name);

function empty(){
  console.log(first_name);

  if (first_name == true) {
    document.getElementById('nom').style.boxShadow = 'inset 0 0 1px 1px green';
  }
}
