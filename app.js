// initialize Dictionary object
const dictionary = new Dictionary

// initialize UI object
const ui = new UI

const letters = document.getElementById('input');

const search = document.getElementById('search')

let timeout;

letters.addEventListener('keyup' , e => {
    e.preventDefault()

    clearTimeout(timeout);

    const letter = e.target.value

    dictionary.getWord(letter)
        .then(data => {

            if (data.words.title === 'No Definitions Found'){
                console.log('no show')
            }
            console.log(data)
            ui.showresult(data.words[0].meanings[0].definitions)
        })

    timeout = setTimeout(() => {

        console.log(letter)

    }, 500)
})