let a = 80000, b = 200000
for(i=1; a<b; i++){
    a = a*1.03
    b = b*1.015
    console.log(`População no país A no ano ${i}: ${Math.floor(a)}`)
    console.log(`População no país B no ano ${i}: ${Math.floor(b)}`)
    console.log("=====================================")
}

console.log(`Número de anos necessários para o país A passar o país B em população foi: ${i-1}`)

