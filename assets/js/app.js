
var botonsito= document.getElementById('botonsito');
botonsito.onchange = function (){
  if(botonsito.value=="todas"){
    document.getElementById('chile').style.display="block";
    document.getElementById("lima").style.display="block";
    document.getElementById("lima-seis").style.display="block";
  }else if (botonsito.value=="5ta-promo") {
    document.getElementById('chile').style.display="none";
    document.getElementById("lima").style.display="block";
    document.getElementById("lima-seis").style.display="none";
  }else if (botonsito.value =="6ta-promo"){
    document.getElementById('chile').style.display="none";
    document.getElementById("lima").style.display="none";
    document.getElementById("lima-seis").style.display="block";
  }else {
    document.getElementById('chile').style.display="block";
    document.getElementById("lima").style.display="none";
    document.getElementById("lima-seis").style.display="none";
  }
};
/* visibility = sirve para  aparacer y desaprecer imagenes pero en bloque y mismo
lugar donde se encuentre
display = los mueve de lugar .*/
