!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.classList.add("btn-color-js"),o.classList.add("btn-color-js"),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),o.removeAttribute("disabled"),timerColor=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(){clearInterval(timerColor),e.removeAttribute("disabled"),o.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.3393b20a.js.map