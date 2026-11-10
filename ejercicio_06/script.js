const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
const imgElement = document.getElementById("image");
const nameElement = document.getElementById("name");
const numberElement = document.getElementById("number");
const cardElement = document.getElementById("card");

let fetchData = async (url) => {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error de red: ${response.statusText}`);
    }
    let data = await response.json();

    imgElement.src = data.sprites.other.dream_world.front_default;
    nameElement.innerText = `${data.name}`;
    numberElement.innerText = `#${number}`;

    let types = data.types;

    types.forEach((element) => {
      console.log(element.type.name);

      let newButton = document.createElement("button");
      newButton.classList.add(element.type.name);
      newButton.innerText = element.type.name;
      cardElement.appendChild(newButton);
    });
  } catch (error) {
    console.error(error);
  }
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let number = getRandomNumber(1, 1025);
fetchData(`${pokeAPI}${number}`);
