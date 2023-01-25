class Dictionary{
    constructor(){}

    async getWord(word){

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        const words = await response.json();

        return{
            words
        }
    }
}