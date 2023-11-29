// Ödev - 10) 1 - Aşağıdaki sipariş bilgilerini object içerisinde saklayınız.
// 2 - Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: % 18)
// 3 - Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

order1 = {
    orderID: 101,
    orderDate: "31.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",
    products: [
        product1 = {
            productID: 5,
            productHeader: "IPhone 13 Pro",
            productUrl: "http://abc.com/iphone-13-pro",
            productPrice: 22000
        },
        product2 = {
            productID: 6,
            productHeader: "IPhone 13 Pro Max",
            productUrl: "http://abc.com/iphone-13-pro-max",
            productPrice: 25000
        }
    ],
    customer: {
        customerID: 12
    },
    seller: {
        companyID: 34,
        companyName: "Apple Türkiye"
    }
};

order2 = {
    orderID: 102,
    orderDate: "30.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",
    products: [
        product1 = {
            productID: 6,
            productHeader: "IPhone 13 Pro Max",
            productUrl: "http://abc.com/iphone-13-pro-max",
            productPrice: 25000
        }
    ],
    customer: {
        customerID: 12
    },
    seller: {
        companyID: 34,
        companyName: "Apple Türkiye"
    }
};

function getPrice(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].productPrice;
    };
    return sum + (sum * 0.18);
};
console.log(order1);
console.log(getPrice(order1.products) + '₺');
console.log(order2);
console.log(getPrice(order2.products) + '₺');
console.log('Genel Toplam "' + (getPrice(order1.products) + getPrice(order2.products)) + '₺"dir.');