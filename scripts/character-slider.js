import {characters} from "./objects/character.js";
import {_, createElement} from "https://cdn.jsdelivr.net/gh/LeojAnidem/Library@a065686b80b799094f1b024118061a128275df74/domFunctions.js";

let charaId = _('#castNumber'),
    charaName = _('#castTitle'),
    charaDescription = _('#castContent'),
    charaImg = _('#castCharacter')
;

if (screen.width <= 450){
    characters.forEach(character => {
        character.name = character.name.split(' ')[0];
    });
}

const createIndexBtn = () => {
    for(let i = 1; i <= characters.length; i++){
        createElement('#castIndex', 'input', 'radio', `castIndex-${i}`, 'cast-index', 'icon-indicator', `${i}`);

        if(i === 1){
            _('#castIndex-1').setAttribute('checked', true);
            charaId.textContent = characters[0].id;
            
            charaName.textContent = characters[0].name;

            charaDescription.textContent = characters[0].description;
            charaImg.src = characters[0].img;
        }
    }
}

const fillInfoBtn = () => {
    let allBtn = document.querySelectorAll('.icon-indicator');

    allBtn.forEach(btn => {
        btn.addEventListener('change', function(){
            characters.forEach(character => {
                if(character.id.replace('0', '') === btn.value){
                    charaId.textContent = character.id;
                    charaName.textContent = character.name;
                    charaDescription.textContent = character.description;
                    charaImg.src = character.img;
                }
            });
        });
    });
}

const characterSlider = () => {
    createIndexBtn();
    fillInfoBtn();
}

export {characterSlider};