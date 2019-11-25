const segitigaangka=(as)=>{
var z = ''
var angka = 1
for(x=0;x<as;x++){
    for(y=as;y>x;y--){
        z+=' '
    }
    for(a=0;a<=x;a++){
        if(angka%2==0){
        z+=` `
        }else
        z+=`${angka}`
        angka++
    }
    for(b=1;b<=x;b++){
        if(angka%2==0){
        z+=` `
        }else
        z+=`${angka}`
        angka++
    }
    z+='\n'
    angka+=1
}
return z
}


console.log(iseng(4))



 

// const isengiseng=(a)=>{
//     var g = ''
//     var h = 1
//     for(i=0;i<a;i++){
//         g+=`${h}`
//         h++
//     }
//     return g
// }

// console.log(isengiseng(20))