let dataMhs = ['daniel', 'nama', 'nama2'];

dataMhs.map((val: string, index: number) => {
    console.log(val, index, 'mapping');
});


let filtered = dataMhs.filter((val: string, index: number) => index > 0)

//console.log(filtered, 'filtered')


let numSoal: number[]= [];

let soal1 = (numSoal1: number[]): any=>{
    let panjang = numSoal1.length / 2;
    console.log(panjang)
}

soal1([1, 2, 3, 4, 5])

// Nama Generasi yang Didasarkan Pada Umur
// Boomer I dari tahun 1946 - 1954, saat ini berusia 69 - 77 tahun. Boomers II 
// atau Generasi Jones dari tahun 1955 - 1964, saat ini berusia 59 - 68 tahun. 
// Gen X dari tahun 1965 - 1980, 
// saat ini berusia 43 - 58 tahun. Milenial dari tahun 1981 - 1996, saat ini berusia 27 - 42 tahun



// ********************* func latihan **************** 
const objInArr = (arr: any[]) => {

    let currentYear = new Date().getFullYear();
    let newArr: any = []

    arr.map((val: any, index: number) => {
        let age = currentYear - val[2]
        //console.log(currentYear, age)
        let IsiNama = val[0].split(' ')
        let gen = age >= 69 && age <= 77 ? 'boomer I': age >= 59 && age <= 68 ? 'boomer II' : age >=43 && age <= 58 ? 'Gen x' : age >= 27 && age <= 42 ? 'Milenial': age >= 11 && age <= 26 ? 'Gen Z':'Tidak dikenali' 
        newArr.push({
            firstName: IsiNama[0],
            lastName: IsiNama[1],
            age,
            gen
        })
        
    })
    return newArr

} 


console.log(objInArr([
    ['daniel', 'male', 2000],
    ['jason', 'male', 1980],
    ['kernel', 'male', 1976]
]))
// ************************************************** === *********************



const arrInObj2 = (arr: any[]) => {
    let newObj = {}
    arr.map((val: any, index: number) => {
        newObj[val.class] ? (newObj[val.class] = [
            ...newObj[val.class], 
            {name: val.name, score: val.score}]) 
            : (newObj[val.class] = [{name: val.name, score: val.score}])

    })
}

console.log([
    {namaNye: 'jimbe', score: 70, class: 'melati'},
    {namaNye: 'jason prikitiw', score: 83, class: 'melati'},
    {namaNye: 'jesi', score: 70, class: 'melati'}
])







// practice 2 slide array in object

/*

Buat array dalam object baru dari data siswa yang diinput.
Diketahui:
Inputan akan berupa array in object dengan struktur [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ].
Bagilah data input berdasarkan score, jika score diatas 75 maka kategorinya “lulus” dan selain itu kategorinya “gagal”.
Struktur output yang diharapkan yaitu => { lulus : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ], gagal : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ] }.


*/






