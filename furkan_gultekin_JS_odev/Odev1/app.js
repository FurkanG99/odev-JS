let entrySecond = parseInt(prompt("Lütfen Bir Saniye Giriniz: "));

let minute = parseInt(entrySecond / 60) + " Dakika  " + (entrySecond % 60) + "  Saniye";
//! Bölme İşlemi yanlış hesaplar entrySecond ın MODU alınır. Araştırıldı.
console.log("Girilen Değer: " + entrySecond);
console.log("Sonuç : " + minute)