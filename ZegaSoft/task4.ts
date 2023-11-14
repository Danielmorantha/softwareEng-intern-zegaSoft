const cekLoopingg = (angka: number): string =>{
    let totalIterasi: string = '';
    for (let i = 0; i < angka; i++) {
        let kali = i*2;
        totalIterasi += `Jumlah ${i} dikali 2 = ${kali}\n`;
    }
    return totalIterasi
}

const abc = cekLoopingg(5);
console.log(abc);




const cekGanjil = (a: number): string => {
    if (a % 2 === 0) {
        return "genap";
    } else {
        return "ganjil"
    }
}

const cekAngka = cekGanjil(12);
console.log(cekAngka)


function fibo(n: number): number {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

function printFibo(n: number) {
  for (let i = 1; i <= n; i++) {
    const result = fibo(i);
    console.log(result);
  }
}

const n = 11; 
printFibo(n);


  

