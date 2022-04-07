// DOM Objects
const characterName = document.getElementById('char-name');
const characterID = document.getElementById('id-num');
const characterStatus = document.getElementById('char-status');
const characterSpecies = document.getElementById('char-species');
const characterType = document.getElementById('poke-type');
const characterGender = document.getElementById('poke-gender');
const characterImage = document.getElementById('front-image');

function getPokemon() {
  let randomNum = Math.floor(Math.random() * 825 + 1);
  fetch('https://rickandmortyapi.com/api/character/' + randomNum)
  .then(res => res.json())
  .then(data => {
    characterName.innerHTML = data['name'];
    characterID.innerHTML = data['id'];
    characterStatus.innerHTML = data['status'];
    characterSpecies.innerHTML = data['species'];
    characterType.innerHTML = data['type'];
    characterGender.innerHTML = data['gender'];
    characterImage.src = data['image'];
  })
}
