let url = "https://www.wissenakademie.com&quot";
let dersAdi = "Fullstack Web Developer Eğitimi";

let urlLength = url.length;
console.log("Url karakter Sayısı: " + urlLength);

let kelimeSayisi = dersAdi.split(' ').length;
console.log("Ders Adında ki Kelime Sayısı: " + kelimeSayisi);

let urlStartWith = url.startsWith('https');
console.log("Url https ile başlıyor mu ? : " + urlStartWith);

let include = dersAdi.includes('Eğitimi');
console.log("Ders Adı Eğitimi Kelimesini İçeriyor mu? : " + include);

//! G ile Ğ yi değiştirmeyi Unutma
//* boşluklara "-" ekle
//* iki değişkenin arasına / ekle
let createString = url + "/" + dersAdi.toLowerCase().replace(/\s/g, "-");
createString = createString.replace("ğ","g");
createString = createString.replace("&quot","");
console.log("Oluşturulan String: " + createString)


