const starEl = document.querySelectorAll(".fa-star")
const emojiEl = document.querySelectorAll(".fa-regular")
const colorsArray =["red","orange","blue","lightgreen","green"]

updateRatings(0)

starEl.forEach((starEl,index) => {
    starEl.addEventListener("click", ()=>{
        updateRatings(index)
    });
});

function updateRatings(index){
    starEl.forEach((starEl,idx) => {
        if(idx < index + 1){
            starEl.classList.add("active")
        }else{
            starEl.classList.remove("active")
        };
            
        })

        emojiEl.forEach(emojisEl=>{
            emojisEl.style.transform = `translate(-${index * 50}px)`;
            emojisEl.style.color = colorsArray[index]
        })

    }
