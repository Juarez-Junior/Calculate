import calculate  from "./claculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handdleClearButton, handleButtonPress, handleTyping } from "./keyHanlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress )
})

document.getElementById("clear").addEventListener("click", handdleClearButton )
document.getElementById('input').addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click",themeSwitcher )