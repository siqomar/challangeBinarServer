//menangkap pilihan player
let p = prompt('pilih : Gunting,Batu, Kertas');

//menangkap pilihan com :
//membangkitkan bilangan random
let comp = Math.random();

if (comp < 0.34) {
    comp = 'Gunting';
}else if (comp >=0.34 && comp < 0.67) {
    comp = "Batu";
}else {
    comp = "Kertas";
}

// menentukan rules
let hasil ='';
if (p == comp) {
    hasil = 'Seri';
}else if (p == 'Gunting') {
    // if (comp =='Batu') {
    //     hasil = 'Comp Menang';
    // }else{
    //     hasil ='Player Menang';
    // }
    hasil = (comp == 'Batu') ? 'Comp Menang' : 'Player Menang';
}else if (p == 'Batu') {
   hasil = (comp == 'Kertas') ? 'Comp Menang' : 'Player Menang';
}else if (p == 'Kertas') {
    hasil = (comp == 'Gunting') ? 'Compt Menang' : 'Compt Kalah';
}else{
    hasil = "Pilihan Tidak ada";
}

// tampilkan hasilnya
alert ('Kamu Milih :' + p + ' dan komputer milih:' + comp + '\nMaka Hasilnya :' + hasil)