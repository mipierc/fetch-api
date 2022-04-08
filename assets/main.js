// DOM Objects
const characterName = document.getElementById('char-name');
const characterID = document.getElementById('char-id');
const characterStatus = document.getElementById('char-status');
const characterSpecies = document.getElementById('char-species');
const characterType = document.getElementById('char-type');
const characterGender = document.getElementById('char-gender');
const characterImage = document.getElementById('front-image');

function getCharacter() {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  fetch(' https://api.coinlore.net/api/ticker/?id=' + x[randomNum])
  .then(res => res.json())
  .then(data => {
    console.log(data)
    characterName.innerHTML = data['0']['name'];
    characterID.innerHTML = data['id'];
    characterStatus.innerHTML = data['status'];
    characterSpecies.innerHTML = data['species'];
    characterType.innerHTML = data['type'];
    characterGender.innerHTML = data['gender'];
    characterImage.src = data['image'];
  })
}
