const names = ['Superman', 'Goku', 'Silver Surfer', 'Green Arrow', 'Black Canary', 'The Hulk', 'Spiderman', 'Wonder Woman'];
const stats = ['Ultra Strength', 'Cat powers', 'super speed', 'fire powers', 'teleportation', 'time warping', 'material manipulation'];

const nameEl = document.getElementById('names');
const statsEl = document.getElementById('stats');
const bioEl = document.getElementById('bio');
const generateButton = document.getElementById('clickButton');
const clearBtnEl = document.querySelector('.clearBtn');
const saveBtnEl = document.querySelector('.saveBtn');

let superHeroUrl = "https://chriscastle.com/proxy/index.php?:proxy:https://superheroapi.com/api/202045435900603/70";


function logJSONData() {
  fetch(superHeroUrl, {}).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}

logJSONData();

function generateRandomSuperhero() {
  const name = names[Math.floor(Math.random() * names.length)];
  const power = stats[Math.floor(Math.random() * stats.length)];
  const stat = Math.floor(Math.random() * 100) + 1;
  const bio = `You are now named ${name}. You are a hero with ${power} abilities. Where will you use them first?`;
  return { name, power, stat, bio };
}

function updateHTML(data) {
  nameEl.textContent = data.name;
  statsEl.textContent = `${data.power}: ${data.stat}%`;
  bioEl.textContent = data.bio;
}

function clearHTML() {
  nameEl.textContent = '';
  statsEl.textContent = '';
  bioEl.textContent = '';
}

function saveData() {
  const data = generateRandomSuperhero();
    console.log(data);
}

generateButton.addEventListener('click', () => {
  const data = generateRandomSuperhero();
  updateHTML(data);
});

clearBtnEl.addEventListener('click', clearHTML);

saveBtnEl.addEventListener('click', saveData);

/*const generateButton = document.getElementById('clickButton');
generateButton.addEventListener('click', function() {

let nameFakeurl = "https://chriscastle.com/proxy/index.php?:proxy:https://api.namefake.com/";

function fetchFakeName() {
    return new Promise((resolve, reject) => {
        fetch(nameFakeurl, {}).then((response) => {
            return response.json();
        }).then((data) => {
            const name = data.name;
            resolve(name); // Resolve the Promise with the name
        }).catch((error) => {
            reject(error); // Reject the Promise with the error
        });
    });
}


fetchFakeName().then((name) => {
    bioEl.textContent = "Real Name: " + name;
}).catch((error) => {
    console.error(error);
});

const generateButton = document.getElementById('clickButton');
generateButton.addEventListener('click', function () {

    console.log('Thanks For Clicking!');
});*/