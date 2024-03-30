const i = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");

    img.onclick = () => {
        i.textContent ++;
        
        if ((i.textContent % 2) == 1) {
            img.width += 20;
            img.height += 20;
        };


        if ((i.textContent % 2) == 0) {
            img.width -= 20;
            img.height -= 20;
        };
    };