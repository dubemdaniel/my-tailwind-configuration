class UI {
    constructor(){

        this.result = document.getElementById('results')
    }


    showresult(result){
        this.result.innerHTML = `
        <div id="result" class="mx-2 font-bold leading-5 text-white">${Object.values(result[0])}</div>
        `
    }

    invalid(){
        
    }

}