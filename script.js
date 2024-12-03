// Mostrar el pastel
document.getElementById("showCake").addEventListener("click", function () {
    document.getElementById("cakeContainer").classList.remove("hidden");
});

// Apagar las velas
let candlesExtinguished = 0;
function extinguishCandle(candle) {
    candle.textContent = "💨";
    candle.style.animation = "none";
    candlesExtinguished++;

    // Si todas las velas están apagadas, mostrar los fuegos artificiales
    if (candlesExtinguished === 22) {
        document.getElementById("fireworks").classList.remove("hidden");
        Swal.fire({
            title: '¡Feliz Cumpleaños!',
            text: '¡Sopla todas las velas y pide un deseo!',
            icon: 'success',
            confirmButtonText: '¡Gracias!'
        });
    }
}
