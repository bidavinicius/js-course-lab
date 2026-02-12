let resposta = prompt("Você gosta de café? Responda com sim ou não")

let respostaFormatada = resposta.toLowerCase()

if(respostaFormatada === "sim" || respostaFormatada === "s"){
    alert("Que ótimo! Um bom café anima o dia!")
    console.log("O usuário respondeu que gosta de café.")
}else if(respostaFormatada === "não" || respostaFormatada === "n"){
    alert("Tudo bem, talvez um chá seja uma boa pedida!")
    console.log("O usuário respondeu que não gosta de café.")
}else{
    alert("Desculpe, não entendi sua resposta.")
    console.log("O usuário deu uma resposta inválida: " + resposta)
}

console.log("Fim da interação.")