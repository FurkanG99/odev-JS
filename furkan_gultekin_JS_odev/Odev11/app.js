let numbers= [1,5,7,15,3,25,12,24];

//! Her elemanın  karesini almak

for (let i = 0; i < numbers.length; i++) {
    const numberSquare = numbers[i] * numbers[i];
    console.log(numberSquare);

}


//! Hangi sayılar 5 in katıdır;

let divideOf5 = numbers.filter(function(number){
    return number % 5 === 0;
});
console.log("5 in kaatları: " + divideOf5)

//! Çift Sayıların Toplamını Bulunuz:

let evenNumber = numbers.reduce(function(calculate, number){
    if (number % 2 == 0 ) {
        return calculate + number
;    }else{
    return calculate;
}
},0);

console.log("Dizide ki Çift Sayıların Toplamı: " + evenNumber);
//! Dizide ki elemanları büyük harf ile yazdır
let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

let upperUrunler = urunler.map(function(urun){
    return urun.toUpperCase();
});

console.log(upperUrunler);

//! samsung geçen kaç eleman var

let products = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

let incSamsung = products.filter(function(product){
    return product.toLowerCase().includes("samsung");
}).length;

console.log("Samsung içeren Ürün Sayısı: " + incSamsung);

let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
    ];

    //! her öğrencinin not ortalamsı ve başarı durumlarını yazdır.

    ogrenciler.forEach(function(ogrenci){
        let notOrtalaması = ogrenci.notlar.reduce((AA,not) =>AA + not,0) / ogrenci.notlar.length

        let basariDurumu = notOrtalaması >=50 ? "Başarılı" : "Başarısız"

        console.log(`${ogrenci.ad} ${ogrenci.soyad} - Not Ortalaması ${notOrtalaması.toFixed(2)}. Başarı Durumu: ${basariDurumu}`);
    });

    //! Tüm Öğrencilerin Not Ortalaması Kaçtır.

    const allNotes = ogrenciler.flatMap(ogrenci => ogrenci.notlar);
    const allNotesAvg = allNotes.reduce((AA,not) => AA + not, 0) / allNotes.length;
    console.log("Tüm öğrencilerin not ortalaması: ", allNotesAvg.toFixed(2));