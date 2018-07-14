var time=0;

function myFirstFun(){
    time+=1;
    if(time>=5){
        clearInterval(timer);
    }
    console.log(`Run by Love! at ${time} seconds`);

}


//var timer=setInterval(myFirstFun,1000);   //output line


//First p[art is closed
//_________________________________________________________________________________________________

var bala=function(){
    console.log("Bala always make stupid things(:-");
}

function callCustom(functions){
    functions();
}

callCustom(bala);