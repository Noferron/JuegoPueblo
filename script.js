window.addEventListener("DOMContentLoaded", () => {

let contadorPiedra = 600;
let campesino =0;
let piedra = document.getElementById("piedra");


//let comida= 150;
const campesinado=document.getElementById("campesinado");
const crearCampesino = document.getElementById("crearCampesino");
const viveres = document.getElementById("viveres");
const campesinoTrabajandoPiedra=document.getElementById("campesinoTrabajandoPiedra")


crearCampesino.addEventListener("click",()=>{
    
    if(contadorViveres>20 && campesinosTotal<=19){
            campesino=campesino +1;
            contadorViveres -=20;
            campesinado.textContent = "👤Campesinos: " + campesino;
            viveres.textContent = "🍖Viveres: " + contadorViveres;
            
        }
    else if(campesinosTotal>=20){
        campesinado.innerHTML=`<div class="textoRaton"><p>👤Alcanzaste el número máximo de campesinos</p><span class="textoFlotante">Sube de nivel el ayuntamiento para poder contratar más</span>
            </div>`
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
    campesinado.textContent = `👤Campesinos:${campesino}`;
    campesinoTrabajandoPiedra.textContent="👤⛏Mineros:" + campesinoPiedra;
    }
});


let restarCampesinosPiedra = document.getElementById("restarCampesinosPiedra");

restarCampesinoPiedra.addEventListener("click",()=>{
    if(campesinoPiedra>0){
    campesinoPiedra -= 1;
    campesino += 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    console.log(campesinoPiedra);
    campesinoTrabajandoPiedra.textContent="👤⛏Mineros:" + campesinoPiedra;
    }

});

setInterval(()=>{
    
    if(campesinoPiedra>0 && contadorPiedra<500 && construccionCantera){
        contadorPiedra += campesinoPiedra;
        piedra.textContent = "Piedra:" + contadorPiedra;
    }
    else if(campesinoPiedra>0 && construccionCantera==true && contadorPiedra<1500){
        contadorPiedra += campesinoPiedra;
        piedra.textContent = "Piedra:" + contadorPiedra;
    }
    else if(campesinoPiedra==0){
        contadorPiedra;
        piedra.textContent = "Piedra:" + contadorPiedra;
    }
    
    hospital();
    
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
let contadorViveres=1500;
agregarCampesinosViveres.addEventListener("click",()=>{
    if(campesino>0){
    campesinoViveres += 1;
    campesino = campesino - 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    campesinoTrabajandoCampo.textContent="👤🌽Agricultores:" + campesinoViveres;
    }
});


const restarCampesinosViveres = document.getElementById("restarCampesinosViveres");

restarCampesinosViveres.addEventListener("click",()=>{
    if(campesinoViveres>0){
    campesinoViveres -= 1;
    campesino += 1;
    campesinado.textContent = "👤Campesinos: " + campesino;
    console.log(campesinoViveres);
    campesinoTrabajandoCampo.textContent="👤🌽Agricultores:" + campesinoViveres;
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

//------------Construir el granero-------------------
let granero = document.getElementById("granero");

granero.addEventListener("click",()=>{
    if(contadorPiedra>200 && contadorViveres>150){
        document.getElementById("graneroConstruido").style.display="block";
        contadorPiedra=contadorPiedra-200;
        contadorViveres-=150;
        granero.style.display="none";


    }
});

//-------------Construir cantera----------------------

let cantera = document.getElementById("cantera");
let construccionCantera = false;

cantera.addEventListener("click",()=>{
    if(contadorPiedra>450 && contadorViveres>=600){
        document.getElementById("canteraConstruida").style.display="block";
        contadorPiedra=contadorPiedra-450;
        contadorViveres-=600;
        cantera.style.display="none";
        construccionCantera=true;
    }
});

//--------------Hospital--------------------------------
let hospitalizado=document.getElementById("hospitalizado");
let campesinoEnfermo =0;
let probabilidadEnfermar = Math.random()<0.08;

function hospital(){
    
    
    if(probabilidadEnfermar && campesinoPiedra>1){
        campesinoPiedra -= 1;
        campesinoEnfermo += 1;
        hospitalizado.textContent = `🤒Campesinos enfermos: ${campesinoEnfermo}`;
        campesinoTrabajandoPiedra.textContent="👤⛏Mineros:" + campesinoPiedra;
    }

}

//-------------------Médicos-------------------------------
//let sanitario =document.getElementById("sanitario");
let crearMedico = document.getElementById("crearMedico");
let numeroMedicos=document.getElementById("numeroMedicos");
let medico=0;

crearMedico.addEventListener("click",()=>{
    if(contadorViveres>150){
        contadorViveres-=150;
        medico+=1;
        numeroMedicos.textContent = `👨‍⚕️Hay ${medico} trabajando en el hospital`;
    }
    
})

let probabilidadRecuperacion = Math.random()<0.081;

function recuperacion (){
    

    if(probabilidadRecuperacion && campesinoEnfermo>=1 && medico>=1){
            campesinoPiedra += 1;
            campesinoEnfermo -= 1;
            hospitalizado.textContent = `🤒Campesinos enfermos: ${campesinoEnfermo}`;
            campesinoTrabajandoPiedra.textContent="👤⛏Mineros:" + campesinoPiedra;
        }
}
let campesinosTotal;

setInterval(()=>{
   recuperacion();
   campesinosTotal =  campesino + campesinoPiedra +campesinoEnfermo + campesinoViveres + medico;
console.log(campesinosTotal);
},1000);


//-------------------Taberna-----------------------------

let menosEnfermos = probabilidadEnfermar 









  // tu código aquí
});


