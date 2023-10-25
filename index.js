function calculadoraRank (vitorias, derrotas){
let saldoVitorias = vitorias - derrotas
let nivel = ""
const mensagem = "O herói tem saldo de " + saldoVitorias + " vitórias e está no nível "
	
    if(saldoVitorias <= 10){
        nivel= "Ferro"
        console.log (mensagem + nivel)
    }
    else if (saldoVitorias >= 11 && saldoVitorias<= 20){
        nivel = "Bronze"
        console.log (mensagem + nivel)

    }
    else if (saldoVitorias >= 21 && saldoVitorias <=50 ){
        nivel = "Prata"
        console.log (mensagem + nivel)
    }
    else if (saldoVitorias >= 51 && saldoVitorias <=80 ){
        nivel = "Ouro"
        console.log (mensagem + nivel)
    }
    else if (saldoVitorias >= 81 && saldoVitorias <=90 ){
        nivel = "Diamante"
        console.log (mensagem + nivel)
    }
    else if (saldoVitorias >= 91 && saldoVitorias <=100 ){
        nivel = "Lendário"
        console.log (mensagem + nivel)
    }
    else{
        nivel = "imortal"
        console.log (mensagem + nivel)
    }
        
}
calculadoraRank (102,0)
