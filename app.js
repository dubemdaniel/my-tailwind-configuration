// initialize Dictionary object
const dictionary = new Dictionary

const letter = document.getElementById('input');

const search = document.getElementById('search')

let timeout;

letter.addEventListener('keyup' , () => {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

        console.log('alert')

    }, 500)
})