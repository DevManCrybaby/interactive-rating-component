const ratings = document.querySelectorAll('.btn.circle')
const btnSubmit = document.querySelector('.btn-submit')

ratings.forEach(item=>{
    item.onclick = () =>{
        const selectedItens = document.querySelector('.selected')
        if(selectedItens){
            selectedItens.classList.remove('selected')
            item.onclick()
        } else {
            item.classList.add('selected')
        }
    }
})

/* ainda tenho que pegar o valor númerico selecionado, e nao deixar clicar no botao sem selecionar uma nota */
btnSubmit.onclick = () => {
    const thanks = document.getElementById("thanks")
    const rating = document.getElementById("rating")
    thanks.style.display = "block"
    rating.style.display = "none"
}