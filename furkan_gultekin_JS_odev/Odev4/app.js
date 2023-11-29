let year = prompt("Lütfen Bir Yıl giriniz: ")
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  alert("Bu yıl artık yıldır.")
} else {
   alert("Bu Yıl Artık bir yıl değildir.")
}
