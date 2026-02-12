import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

function removeDuplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

function usuario(){
    let array = prompt("Digite o array, separando os elementos por vírgula")
    const arrayOriginal = array.split(",").map(item => item.trim())

    console.log(`Array original:\n ${arrayOriginal}`)
    const arraySemDuplicata = removeDuplicates(arrayOriginal)
    console.log(`Array sem duplicata:\n ${arraySemDuplicata}`)
}

usuario()