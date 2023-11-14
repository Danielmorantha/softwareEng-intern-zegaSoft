interface karyawan {
    nama: string;
    umur: number;
    nik: number;
    tgl_lahir: string;
    departemen: string;
    divisi: string;
    jabatan: string;
    grade: string;
    no_npwp: number;
    no_rek: number;
    nama_pemilik: string;
}


const namaOrg : karyawan[] = [
    {nama: 'daniel morantha', umur: 22, nik: 317583393, tgl_lahir: '20 November 2000', departemen: 'IT', divisi:'data', jabatan:'intern', grade: 'strata I', no_npwp: 231323131, no_rek: 12121212121, nama_pemilik: 'danielmrnth'},
    {nama: 'burhan', umur: 30, nik: 317583393, tgl_lahir: '10 November 1978', departemen: 'IT', divisi:'data', jabatan:'intern', grade: 'pascasarjana', no_npwp: 231323131, no_rek: 12121212121, nama_pemilik: 'danielmrnth'}

]


const NamaOrg1 = namaOrg[0].nama;


const cekGreeting = (jam:number): string => {
    if (jam >= 5.00 && jam <= 10.59) {
        return "selamat pagi";
    }else if(jam >= 11.00 && jam <= 15.00){
        return "selamat siang";
    }else if(jam >= 15.01 && jam <= 18.29){
        return "selamat sore";
    }else if(jam >= 18.30 && jam <= 23.59){
        return "selamat malam";
    }else{
        return "dini hari";
    }
}

const HitungString = (kalimat: string): number => {
    let totalString: number = 0;
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ') {
            totalString++;  
        }
        
    }
    return totalString;
}


const cekLooping = (angka: number): string =>{
    let totalIterasi: number = 0;
    for (let i = 0; i < angka; i++) {
        totalIterasi = i*2;

        
    }
    return `Jumlah ${angka} dikali 2 = ${totalIterasi}`;
}

const ab = cekLooping(5);
console.log(ab);



const cekDesimal = (angka: number): string => {
    const desimal = angka - Math.floor(angka);
    
    if (desimal >= 0.4 && desimal <= 0.7) {
        return "5, 5";
    } else {
        return Math.round(angka).toString();
    }
}

const a = cekDesimal(12.3);
console.log(a);

const b = cekDesimal(15.9);
console.log(b);

const c = cekDesimal(5.5);
console.log(c);





const cekJam = cekGreeting(2.00);
console.log(cekJam);

const JumlahString = HitungString(NamaOrg1);
console.log(`Jumlah string ${namaOrg[0].nama} adalah ${JumlahString}`)


const HitungHelloWord = HitungString("Hello World")
console.log(HitungHelloWord)