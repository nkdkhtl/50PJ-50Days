const button = document.querySelector("button")
const messageList = document.querySelector(".message-list")
let count = 1;
button.onclick = () => {
    showNoti(count++)
}
function showNoti(count) {
    if (messageList.innerHTML == "") {
        count = 1;
    }
    const newMessage = document.createElement("div")
    newMessage.className = "message my-2 w-36 h-16 bg-white flex justify-center items-center rounded"
    newMessage.innerHTML = `Message ${count}`
    messageList.appendChild(newMessage);
    setTimeout(() => {
        messageList.removeChild(newMessage);
    }, 2000);
}