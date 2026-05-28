const popup = document.getElementById("popup");

function abrirPopup(imagem, titulo, ingredientes, preco) {

    document.getElementById("popupImg").src = imagem;

    document.getElementById("popupTitulo").innerText = titulo;

    document.getElementById("popupIngredientes").innerText = ingredientes;

    document.getElementById("popupPreco").innerText = preco;

    popup.style.display = "flex";
}

document.getElementById("fecharPopup").onclick = function () {

    popup.style.display = "none";

}

window.onclick = function (event) {

    if (event.target == popup) {

        popup.style.display = "none";

    }

}