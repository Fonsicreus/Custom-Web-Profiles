document.addEventListener('DOMContentLoaded', () => {
    let advice = "你是自己人生的建筑师和主人。";

    let contain_text = document.querySelector('.advice-chinese')

    for (let i = 0; i <= advice.length; i++) {
        let new_div = document.createElement('div')

        if (i !== advice.length) new_div.id = `character-target-${i}`

        else {
            new_div.textContent = advice[advice.length - 1]
        }

        contain_text.appendChild(new_div)
    }

    let chars_hanzi_writer = new Array(advice.length)

    for (let i = 0; i < advice.length - 1; i++) {
        chars_hanzi_writer[i] = HanziWriter.create(`character-target-${i}`, advice[i], {
            width: 25,
            height: 25,
            padding: 0,
            strokeColor: '#F00',
            outlineColor: 'rgb(86, 5, 5)',
            showCharacter: false,
            strokeAnimationSpeed: 20,
            delayBetweenStrokes: 100
        });
    }

    // Function Recursive
    function chainAnimations(characters, delayBetweenAnimations = 1000) {
        let index = 0;

        function animateNext() {
            if (index >= characters.length) return;

            characters[index].animateCharacter({
                onComplete: () => {
                    index++;
                    setTimeout(animateNext, delayBetweenAnimations);
                }
            });
        }

        animateNext();
    }

    chainAnimations(chars_hanzi_writer, 100);
});

