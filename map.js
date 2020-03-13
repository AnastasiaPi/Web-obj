
let objMinPrice = new Object;
let objMinTime = new Object;
let objMaxPrice = new Object;
let objMaxTime = new Object;
//назва продукту
var map1 = new Map();
map1.set('Mersedes', 'GLA');
map1.set('Audi', 'Q8');
map1.set('Ferrari', 'Roma');
map1.set('Honda', 'Accord');
map1.set('Lexus', 'RS');
map1.set('Tesla', 'RS');
map1.set('AlfaRomeo', 'Roma');
map1.set('Fiat', 'Q8');
map1.set('Infinity', 'Roma');


//вартість
var map2 = new Map([
    [40000, 'Mersedes'],
    [59000, 'Audi'],
    [85000, 'Ferrari'],
    [35000, 'Honda'],
    [65000, 'Lexus'],
    [85000, 'Tesla'],
    [35000, 'AlfaRomeo'],
    [25000, 'Fiat'],
    [45000, 'Infinity'],

]);

//час доставки
var map3 = new Map([
    [4, 'Mersedes'],
    [5, 'Audi'],
    [8, 'Ferrari'],
    [5, 'Honda'],
    [12, 'Lexus'],
    [8, 'Tesla'],
    [3, 'AlfaRomeo'],
    [2, 'Fiat'],
    [4, 'Infinity'],
]);

let MasFirm = [];
let MasGoods = [];
let MasPrice = [];
let MasTime = [];

map1.forEach((value, key)=>{
    MasGoods.push(value);
    MasFirm.push(key);
});


map2.forEach((value, key)=>{
    MasPrice.push(key);
});


map3.forEach((value, key)=>{
    MasTime.push(key);
});

function Max(Arr){
    var ind =0;
    var min = Arr[0];
    var max = min;
    for (i = 0; i < Arr.length; ++i) {
        if(Arr[i]>max){
            max = Arr[i];
            ind = i;
        } 
    }
    return ind;}

function Min(Arr){
    var ind =0;
    var min = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if(Arr[i]<min){
            min = Arr[i];
            ind = i;
        } 
    }
    return ind;
}
var minP = Min(MasPrice);
var minT = Min(MasTime);
var maxP = Max(MasPrice);
var maxT = Max(MasTime);
objMinPrice[MasGoods[minP]] = `Виробник: ${MasFirm[minP]}, Ціна: ${MasPrice[minP]}, Час доставки: ${MasTime[minP]}`;
objMinTime[MasGoods[minT]] = `Виробник: ${MasFirm[minT]}, Ціна: ${MasPrice[minT]}, Час доставки: ${MasTime[minT]}`;
objMaxPrice[MasGoods[maxP]] = `Виробник: ${MasFirm[maxP]}, Ціна: ${MasPrice[maxP]}, Час доставки: ${MasTime[maxP]}`;
objMaxTime[MasGoods[maxT]] = `Виробник: ${MasFirm[maxT]}, Ціна: ${MasPrice[maxT]}, Час доставки: ${MasTime[maxT]}`;
console.log(objMinPrice);
console.log(objMinTime);
console.log(objMaxPrice);
console.log(objMaxTime);




