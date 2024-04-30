const welcome = document.querySelector(".welcome")
const keyInfor = document.querySelector(".key-infor")
const keyBox = document.querySelectorAll(".key-box")


window.onkeydown = (event) => {
    welcome.style.display = "none"
    document.body.innerHTML = `
    <div class="key-infor">
        <div class="key-box">
            ${event.key}
            <small>event.key</small>
        </div>

        <div class="key-box">
            ${event.keyCode}
            <small>event.code</small>
        </div>

        <div class="key-box">
            ${event.code}
            <small>event.keyCode</small>
        </div>
    </div>
    `                                               
}