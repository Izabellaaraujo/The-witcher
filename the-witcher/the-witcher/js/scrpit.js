const character = document.getElementById('character')
const characterName = document.getElementById("name")
const btnClose = document.getElementById("close")
const btn = document.querySelector('.hide')

function witcher (value) {

    btnClose.setAttribute('class', 'show')

    switch(value){
        case 'yennefer':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Yennefer of Vengerberg'
            break

        case 'cirilla':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Cirilla of Cintra'
            break

        case 'emhyyr':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Emhyyr var Emreis'
            break

        case 'tissaia':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Tissaia de Vries' 
            break
        
        case 'gerart':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Gerart of Rivia'
            break
        
        case 'vilgefortz':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Vilgefortz of Roggerveen'
            break

        case 'triss':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Triss Merigold'
            break

        case 'jaskier':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Jaskier Sandpiper'
            break

        case 'vesemir':
            character.src = `assets/char-${value}.webp`
            characterName.textContent = 'Vesemir'
            break
    }

}

function logo(){
    btnClose.classList.toggle('hide')
    character.src = `assets/the-witcher-logo.webp`
    btnClose.setAttribute('class', 'hide')
    characterName.textContent = ''
}