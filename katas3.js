const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
    const lista = document.querySelector("ul")
    const itemLista = document.createElement("li")
    itemLista.innerText = valor
    lista.appendChild(itemLista)

}

function kata1() {
    let result = ""
    for(let i = 1; i <= 25; i++){
        result = result + [i] + ", "

    }
    return showResults(result)
    
}

function kata2() {
    let result = ""
    for(let i = 25; i >= 1; i--){
        result = result + [i] + ", "
    }
    return showResults(result)

}

function kata3() {
    let result = ""
    for(let i = -1; i >= -25; i--){
        result = result + [i] + ", "
    }
    return showResults(result)

}

function kata4() {
    let result = ""
    for(let i = -25; i <= -1; i++){
        result = result + [i] + ", "
    }
    return showResults(result)
}

function kata5() {
    let result = ""
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            result = result + [i] + ", "
        }
        
    }
    return showResults(result)
}

function kata6() {
    let result = ""
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            result = result + [i] + ", "
        }
        
    }
    return showResults(result)
}

function kata7() {
    let result = ""
    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            result = result + [i] + ", "
        }
        
    }
    return showResults(result)
}

function kata8() {
    let result = ""
    for(let i = 100; i >= 3; i--){
        if(i % 7 === 0){
            result = result + [i] + ", "
        }
        if(i % 3 === 0){
            result = result + [i] + ", "
        }
        
    }
    return showResults(result)
}

function kata9() {
    let result = ""
    for(let i = 5; i <= 100; i++){
        if((i % 5 === 0) & (i % 2 !== 0)){
            result = result + [i] + ", "
        }
       
        
        
    }
    return showResults(result)
}

function kata10() {
    let result = ""
    for(let i = 0; i < sampleArray.length; i++){
        result = result + sampleArray[i] + ", "
    
    }
    return showResults(result)
}

function kata11() {
    let result = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            result = result + sampleArray[i] + ", "

        }
    }
    return showResults(result)
}

function kata12() {
    let result = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            result = result + sampleArray[i] + ", "

        }
    }
    return showResults(result)
}

function kata13() {
    let result = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            result = result + sampleArray[i] + ", "

        }
    }
    return showResults(result)
}

function kata14() {
    let result = ""
    for(let i = 0; i < sampleArray.length; i++){
            result = result + sampleArray[i]**2 + ", "

    
    }
    return showResults(result)
}

function kata15() {
    let result = 0
    for(let i = 1; i <= 20; i++){
            result = result + i 
 
    }
    return showResults(result)
}

function kata16() {
    let result = 0
    for(let i = 0; i < sampleArray.length; i++){
            result = result + sampleArray[i]
 
    }
    return showResults(result)
   
}

function kata17() {
    let result = 0
    let menor = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        result = sampleArray[i]
        if(menor > result){
            menor = result

        }
 
    }
    return showResults(menor)
    
}

function kata18() {
    let result = 0
    let maior = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        result = sampleArray[i]
        if(maior < result){
            maior = result

        }
 
    }
    return showResults(maior)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
