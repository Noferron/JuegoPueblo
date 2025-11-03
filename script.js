let contadorPiedra = 0;
let campesino =0;
let piedra = document.getElementById("piedra");


//let comida= 150;
const campesinado=document.getElementById("campesinado");
const crearCampesino = document.getElementById("crearCampesino");
const viveres = document.getElementById("viveres");


crearCampesino.addEventListener("click",()=>{
    
    if(contadorViveres>20){
            campesino=campesino +1;
            contadorViveres -=20;
            campesinado.textContent = "👤Campesinos: " + campesino;
            viveres.textContent = "🍖Viveres: " + contadorViveres;
            
        }
});
    
let agregarCampesinoPiedra=document.getElementById("agregarCampesinoPiedra");
let campesinoPiedra=0;
let campesinoViveres=0;

//--------Conseguir piedra------------------------

agregarCampesinoPiedra.addEventListener("click",()=>{
    if(campesino>0){
    campesinoPiedra += 1;
    campesino = campesino - 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    }
});


let restarCampesinosPiedra = document.getElementById("restarCampesinosPiedra");

restarCampesinoPiedra.addEventListener("click",()=>{
    if(campesinoPiedra>0){
    campesinoPiedra -= 1;
    campesino += 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    console.log(campesinoPiedra);
    }

});

setInterval(()=>{
    if(campesinoPiedra>0){
    contadorPiedra += campesinoPiedra;
    piedra.textContent = "Piedra:" + contadorPiedra;
    }
    else if(campesinoPiedra==0){
        contadorPiedra;
        piedra.textContent = "Piedra:" + contadorPiedra;
    }
    
},1000);

let construir = document.getElementById("construir");

construir.addEventListener("click",()=>{
    if(contadorPiedra>100){
        document.getElementById("construccion").style.display="block";
        contadorPiedra=contadorPiedra-100;
    }
})

//-------------Conseguir vivires---------------
const agregarCampesinosViveres =document.getElementById("agregarCampesinosViveres");
let contadorViveres=150;
agregarCampesinosViveres.addEventListener("click",()=>{
    if(campesino>0){
    campesinoViveres += 1;
    campesino = campesino - 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    }
});


const restarCampesinosViveres = document.getElementById("restarCampesinosViveres");

restarCampesinosViveres.addEventListener("click",()=>{
    if(campesinoViveres>0){
    campesinoViveres -= 1;
    campesino += 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    console.log(campesinoViveres);
    }

});

setInterval(()=>{
    if(campesinoViveres>0){
    contadorViveres += campesinoViveres;
    
    }
    else if(campesinoViveres==0){
        contadorViveres;
        
    }
     viveres.textContent = "🍖viveres:" + contadorViveres;
},1000);


let construccion = document.getElementById("construccion");

construccion.addEventListener("click",()=>{

        document.getElementById("ayuntamiento").style.display="block";
});