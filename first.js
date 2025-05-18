const emojis =["😁","😁","😈","😈","👻","👻","🎭","🎭","🥐","🥐","☃️","☃️","🎋","🎋","🧁","🧁","🍁","🍁","😭","😭",];
        var shf_emojis = emojis.sort(() => (Math.random()>.5) ? 2: -1);
        for(var i= 0;  i<emojis.length; i++){
        let box = document.createElement('div')
        box.className ='item';
        box.innerHTML= shf_emojis[i]

        box.onclick = function () {
        this.classList.add('boxOpen');
        if (document.querySelectorAll('.boxOpen').length === 2) {
            setTimeout(function () {
                let openBoxes = document.querySelectorAll('.boxOpen');
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                }
                openBoxes[0].classList.remove('boxOpen');
                openBoxes[1].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert("YOU WON!🤩")
                }
            }, 600);
        }
    };
    document.querySelector('.game').appendChild(box);
}

