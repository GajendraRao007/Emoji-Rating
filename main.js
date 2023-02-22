let starEl = document.querySelectorAll(".fa-star")

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
        }
            
        })
    }
