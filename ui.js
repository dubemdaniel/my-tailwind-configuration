class UI {
    constructor(){

        this.result = document.getElementById('results')
        this.incorrect = document.getElementById('incorrect')
    }


    showresult(result){
        this.result.innerHTML = `
              <div id="result" class="mx-2 font-bold leading-5 text-white">${Object.values(result[0])}</div>
        `
    }

    invalid(){
        this.clearAlert()

        this.clearResult()

        this.incorrect.innerHTML =`
             <div id="invalid" class=" w-full py-1 px-2 font-bold text-red-600 bg-red-100 text-xs rounded-sm mb-4">Incorrect Word</div>
        `

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    clearAlert(){

        if (this.incorrect.innerHTML !== ''){
            this.incorrect.innerHTML = ''
        }
    }

    clearResult(){
        this.result.innerHTML = ''
    }

    // setTimeout(() => {
    //     // this.invalid.remove()
    // }, 3000);

}