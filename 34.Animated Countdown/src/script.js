const counting = document.querySelector(".count")
const final = document.querySelector(".final");
const button = document.querySelector("button")

setTimeout(() => {
    counting.classList.add("hidden");
    counting.classList.remove("show");
    final.classList.add("show");
    final.classList.remove("hidden")
}, 4000);

button.onclick = () => {
    counting.classList.remove("hidden");
    counting.classList.add("show");
    final.classList.remove("show");
    final.classList.add("hidden");
    setTimeout(() => {
        counting.classList.add("hidden");
        counting.classList.remove("show");
        final.classList.add("show");
        final.classList.remove("hidden")
    }, 4000);

}


