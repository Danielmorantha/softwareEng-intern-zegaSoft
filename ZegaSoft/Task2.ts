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


const dataKaryawan : karyawan[] = [
    {nama: 'daniel morantha', umur: 22, nik: 317583393, tgl_lahir: '20 November 2000', departemen: 'IT', divisi:'data', jabatan:'intern', grade: 'strata I', no_npwp: 231323131, no_rek: 12121212121, nama_pemilik: 'danielmrnth'},
    {nama: 'burhan', umur: 30, nik: 317583393, tgl_lahir: '10 November 1978', departemen: 'IT', divisi:'data', jabatan:'intern', grade: 'pascasarjana', no_npwp: 231323131, no_rek: 12121212121, nama_pemilik: 'danielmrnth'}

]


const umurDaniel = dataKaryawan[0].umur;
const umurBurhan = dataKaryawan[1].umur;

const SelisihUmur = umurDaniel - umurBurhan;
console.log('selisih Umur:'+SelisihUmur);

const TotalUmur = umurDaniel + umurBurhan;
console.log('Total Umur:'+TotalUmur);

const BagiUmur = umurDaniel / umurBurhan;
console.log('Hasil Pembagian Umur:'+BagiUmur);

const namaKaryawan = dataKaryawan[0].nama;

console.log(`Jumlah String ${dataKaryawan[0].nama} adalah `+namaKaryawan.length)