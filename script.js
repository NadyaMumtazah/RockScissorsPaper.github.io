function getComputer() {
    const comp = Math.random();
    
    if(comp < 0.34) return 'rock';
    if(comp >= 0.34 && comp < 0.67) return 'scissors';
    return 'paper';
}

function result (player, comp) {
    if(player == comp) return 'TIED!';
    if(player == 'rock') return (comp == 'scissors') ? 'WIN!' : 'LOSE!';
    if(player == 'scissors') return (comp == 'rock') ? 'LOSE!' : 'WIN!';
    if(player == 'paper') return (comp == 'scissors') ? 'LOSE!' : 'WIN!';
}

function putar(){
    const comp = document.querySelector('.img-computer');
    const img = ['rock', 'scissors', 'paper'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - start > 1000){
            clearInterval();
            return;
        }
        comp.setAttribute("src", "img/" + img[i++] + ".svg");
        if(i==img.length){
            i=0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilComputer = getComputer();
        const pilPlayer = pil.className;
        const hasil = result(pilPlayer, pilComputer);
        const scorePlayer = document.querySelector('.scorePlayer span');
        const scoreComp = document.querySelector('.scoreComp span');

        putar ();

        setTimeout(function(){
            const imgComp = document.querySelector('.img-computer');
            imgComp.setAttribute("src", "img/" + pilComputer + ".svg");

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            if(hasil=='TIED!'){
                scoreComp.innerText;
                scorePlayer.innerText;
            }
            else if(hasil == 'WIN!'){
                scorePlayer.innerText++;
            }
            else {
                scoreComp.innerText++;
            }
        }, 1000);
    });
});
