const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// click blinking alarmLight alarmSound stopButton

let ledB=0;
let timer = '';
blinking = function(x){
if(x==1){    
    //input = document.getElementById();
    if(timer==''){
        timer = setInterval(()=>{
            console.log('blink')
            let led = document.getElementById('led')
            led.setAttribute('style','background-color:'+(ledB==0?' rgb(104, 241, 63)':'green'));
            ledB=!ledB
        },250)
    }
}else{
    clearInterval(timer)
    timer=''
    let led = document.getElementById('led')
            led.setAttribute('style','background-color:rgb(104, 241, 63)');
            ledB=0;
}
}

let timer2 = '';
let backS=0
alarmLight = function(x){
    if(x==1){    
        //input = document.getElementById();
        if(timer2==''){
            timer2 = setInterval(()=>{
               
                let back = document.getElementById('back')
                back.setAttribute('style','background-color:'+(backS==0?'rgb(233, 89, 89)':'transparent'));
                backS=!backS
            },600)
        }
    }else{
        clearInterval(timer2)
        timer2=''
        let back = document.getElementById('back')
                back.setAttribute('style','background-color:transparent');
                backS=0;
    }
}
alarmSound = function(x){
    if (x==1) {
        document.getElementById('led2').setAttribute('style','background-color: red')
    }else{
        document.getElementById('led2').setAttribute('style','background-color: rgb(49, 32, 21)')
    }
}

step1 = function(x){
    let condicion = 0
    for(let i=1; i<5; i++){
        if(document.getElementById('slider'+i).checked){
            condicion=1
        }
        console.log('slider'+i+': '+document.getElementById('slider'+i).checked)
    }
    if (step==1 && condicion==1) {
        if(x==2){
            test=1;
            blinking(1);
            console.log('comienza en modo test')
        }else{
            blinking(1)
            console.log('comienza la espera a activacion de sensor')
            setTimeout(()=>{
                blinking(0)
            },2000)
        }
        step=2;    
    }   
}

alarmButton = function(){
    if(step==2){
        if(test==1){    //modo test
            blinking(0)
            alarmLight(1)
        
        }else{  //modo normal
            alarmLight(1)
            alarmSound(1)
        }
        console.log('se activo la sirena')
        step=3;
    }
}

alarmStopButton = function(){
    if(step==3){
        alarmLight(0)
        alarmSound(0)
        step=1;
        console.log('se desactivo la alarma')
    }
}

let contador = 0
let step=1;
let test=0;
let input = document.getElementById('button1');
input.addEventListener('click',()=>step1(1));
input = document.getElementById('button2');
input.addEventListener('click',()=>step1(2));
input = document.getElementById('button3');
input.addEventListener('click',alarmButton)
input = document.getElementById('button4');
input.addEventListener('click',alarmStopButton)
//inicio