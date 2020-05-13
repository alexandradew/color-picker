const colors = document.querySelectorAll('.inside');

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

Array.from(colors).forEach(function (color) {
    color.addEventListener("click", function (e) {
        let pickedColor = e.target.getAttribute('name');
        let clipColor = document.createElement('textarea');
        clipColor.value = pickedColor;
        document.body.appendChild(clipColor);
        clipColor.select();
        document.execCommand('copy');
        document.body.removeChild(clipColor);
        document.querySelector('h1').style.color = pickedColor;
        document.querySelector('.copied').style.zIndex = 1;
        document.querySelector('.copied').style.backgroundColor = pickedColor;
        sleep(500).then(() => {
            document.querySelector('.copied').style.zIndex = -1;
        });
    })
});