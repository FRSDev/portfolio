const modalOverlay = document.querySelector(".modal__overlay")

const cards = document.querySelectorAll(".card")

for (let card of cards){
    card.addEventListener("click", function() {
        const video__id = card.getAttribute("id")
        modalOverlay.classList.add("ativo")

        modalOverlay.querySelector("iframe").src = `http://www.youtube.com/embed/${video__id}`
    })
}

document.querySelector(".close__modal").addEventListener("click", function(){
    modalOverlay.classList.remove("ativo")
    modalOverlay.querySelector("iframe").src = ""
})

