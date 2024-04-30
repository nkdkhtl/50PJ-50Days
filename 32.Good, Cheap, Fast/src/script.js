const inputs = document.querySelectorAll("input");
const good = document.getElementById("good")
const cheap = document.getElementById("cheap")
const fast = document.getElementById("fast")

inputs.forEach((input) => input.onchange = (e) => checkTheButton(e.target))

function checkTheButton(ClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === ClickedOne) {
            fast.checked = false
        }

        if(cheap === ClickedOne) {
            good.checked = false
        }

        if(fast === ClickedOne) {
            cheap.checked = false
        }
    }
}