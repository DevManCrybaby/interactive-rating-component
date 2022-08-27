const ratings = document.querySelectorAll('.btn.circle')
const btnSubmit = document.querySelector('.btn-submit')
let isRatingSelected = false
let selectedScore = 0

ratings.forEach(item=>{
    item.onclick = () =>{
        const selectedItens = document.querySelector('.selected')
        if(selectedItens){
            selectedItens.classList.remove('selected')
            item.onclick()
        } else {
            item.classList.add('selected')
            isRatingSelected = true
            selectedScore = item.textContent
            console.log(selectedScore)
        }
    }
})

/* ainda tenho que pegar o valor númerico selecionado, e nao deixar clicar no botao sem selecionar uma nota */
btnSubmit.onclick = () => {
    if(isRatingSelected){
        printScore(selectedScore)
        const thanks = document.getElementById("thanks")
        const rating = document.getElementById("rating")
        thanks.style.display = "block"
        rating.style.display = "none"
    } else {
        return
    }
}

function printScore(score){
    const scoreRating = document.getElementById("score-selected")
    scoreRating.innerHTML = `You selected ${score} out of 5`
}