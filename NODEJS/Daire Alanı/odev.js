
const arguments =process.argv.slice(1);

//const a=MATH.PI;
function alanHesapla(r){
    let alan=Math.PI*r*r;
    let sonuc=alan.toFixed(2);
    console.log(sonuc);
}

alanHesapla(arguments[1]);
//console.log(process.argv.slice(1));