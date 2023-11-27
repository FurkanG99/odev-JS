let fruits = ["Elma", "Armut" , "Muz" , "Çilek"];

let fruitsLength = fruits.length;
console.log("Dizinin Eleman Sayısı: " + fruitsLength);

let firtsChild = fruits[0];
let lastChild = fruits[3];

console.log("Dizinin İlk Elemanı: " + firtsChild + " Dizinin Son elamanı: " + lastChild + " tir");

let elmaVar = fruits.includes('Elma');
console.log("Dizi de Elma Elamanı Var mı? : " + elmaVar);

let addNew = fruits.push("Kiraz");
console.log(fruits);

let deleteLast = fruits.splice(3,4);
console.log(fruits);








let students = [
    { ad: "Kemal Devrimdar", dogumYili: 2010, scores: [70, 60, 80] },
    { ad: "Saliha Temel", dogumYili: 2012, scores: [80, 80, 90] },
    { ad: "Defne Küp", dogumYili: 2009, scores: [60, 60, 70] }
];


// //! Döngü kur yaş hesapla
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let yas = new Date().getFullYear() - student.dogumYili;
    

// //! Not ortalaması hesaplama kodlarını yaz!
    let scores = student.scores;
    let scoreAvg = (scores.reduce((a, b) => a + b, 0)) / scores.length;

    console.log("Öğrenci " + (i + 1) + ": " + student.ad);
    console.log("Yaş: " + yas);
    console.log("Not Ortalaması: " + scoreAvg.toFixed(2) + "\n");
}