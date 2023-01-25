const previousOperration = document.querySelector("#previas-operacao");
const operacaoAtualText = document.querySelector("#operacao-atual");
const buttons = document.querySelector("#buttons-container button");

class calculator {

}

buttons.forEach(btn) => {
    btn.addEventListenner("click", (e) => {
        const value = e.target.innerText;

    })

});