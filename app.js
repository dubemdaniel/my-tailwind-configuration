// initialize Dictionary object
const dictionary = new Dictionary

// initialize UI object
const ui = new UI

const letters = document.getElementById('input');

const search = document.getElementById('search')

let timeout;

letters.addEventListener('keyup' , e => {
    e.preventDefault()


    const letter = e.target.value

    clearTimeout(timeout);

    if(!letter){
        ui.clearResult()}

      else if (letters !== ''){

        timeout = setTimeout(() => {
    
            dictionary.getWord(letter)
              .then(data => {
    
                 if (data.words.title === 'No Definitions Found'){
                      console.log('no show')
    
                         ui.invalid()
                }else {
                    console.log(data)
                    ui.showresult(data.words[0].meanings[0].definitions)
                }
                  
               }
            )
        
        }, 2000)
    } 
    // if(!letter){
    //     ui.clearResult()
    // }

})