/*
SCRIVERE UN ALGORITMO CHE STAMPI I NUMERI DA 1 A 100 , POI PER I MULTIPLI DI 3 SCRIVERE FIZZ PER I MULTIPLI DI 5 BUZZ 
 PER I MULTIPLI DI 3\5 O SEMPLICEMENTE DI 15 STAMPARE FIZZ-BUZZ
 QUANDO TUTTO FUNZIONA ELIMINARE I CONSOLE.LOG E CREARE UN MINIMO DI GRAFICA PER IL PROGETTINO
*/

//utilizzo un ciclo 4 poichè conosco esattamente i cicli che dovra fare per ottenere l'algoritmo

// ciclo4
for(var i = 1; i <=100;i++){
    document.getElementById('game').style.listStyle='none';
    

    // utilizzo un if else per generare i miei multipli
    //js ok ora passiamo alla grafica
       if(i % 15 ==0){
            //tramite l'ancora game ho riportato sull'html il gioco dando una classe colorata per distinguere i vari step
           document.getElementById('game').innerHTML +='<li class="blu">'+i+" "+" fizz-buzz "+'</li>'
           
       } else if( i % 3==0){
        document.getElementById('game').innerHTML +='<li class="green">'+i+" "+" fizz "+'</li>'
       } else if(i % 5 == 0){
        document.getElementById('game').innerHTML +='<li class="rosa">'+i+" "+" buzz "+'</li>'
       } else {
        document.getElementById('game').innerHTML +='<li class="orange">'+ i +'</li>'
       }
}