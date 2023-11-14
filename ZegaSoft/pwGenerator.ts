const genPW = (kalimat: string): string =>{
    let pw = "";
    for (const huruf of kalimat) {
        if (['a','i','u','e','o'].includes(huruf.toLowerCase())) {
            if (huruf === huruf.toLowerCase()) {
                pw += String.fromCharCode(huruf.charCodeAt(0)+1);
            } else {
                pw += String.fromCharCode(huruf.charCodeAt(0)+1).toUpperCase();  
            }
        }else {
            pw += huruf
            
        }
        
    }

    return pw;
}


const eksePW = genPW("daniel MORANTHA");
console.log(eksePW)





const balikinHuruf = (kalimatTerbalik: string): string =>{
    let pw = "";
    for (const huruf of kalimatTerbalik) {
        if (['a','i','u','e','o'].includes(huruf.toLowerCase())) {
            if (huruf === huruf.toLowerCase()) {
                pw += String.fromCharCode(huruf.charCodeAt(0)+1);
            } else {
                pw += String.fromCharCode(huruf.charCodeAt(0)+1).toUpperCase();  
            }
        }else {
            pw += huruf
            
        }
        
    }
    const pwTerbalik = pw.split('').reverse().join('');
    const pwTanpaSpace = pwTerbalik.replace(/ /g,"");
    if (pwTanpaSpace === pwTanpaSpace.toLowerCase()) {
        pwTanpaSpace.toUpperCase();
        
    } else {
        pwTanpaSpace.toLowerCase()
    }
    return pwTanpaSpace;
}


const pwTerbalik = balikinHuruf("daniel MORANTHA");
console.log(pwTerbalik)


