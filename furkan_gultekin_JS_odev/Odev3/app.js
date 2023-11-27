function asalSayiBul(input){
    let asalSayilar = [];
    for(let i = 2; i<=input; i++){
        if(asal(i)){
            asalSayilar.push(i);
        }
    }
    return asalSayilar;
}

function asal(sayi){
    for(let j = 2; j < sayi; j++){
        if(sayi % j === 0 ){
            return false;
        }
    }
    return true;
}

let input = prompt("Asal sayılarını bulmak için bir sayı giriniz: ");

let result = asalSayiBul(input);
alert("Asal Sayıları:  " + result)