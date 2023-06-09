//const names = ;
const powers = ['Ultra Strength', 'Cat powers', 'super speed', 'fire powers', 'teleportation', 'time warping', 'material manipulation', 'heat vision', 'super hearing', 'mind control', 'omnipotence', 'molecular combustion', 'God slap', 'metal claws', 'shapeshifting', 'Ultra New Jersey Accent', 'transmutation', 'dreamwalker', 'beastmaster', 'shadow weaver', 'blood weaver', 'Eternal mage', 'eye lasers', 'demi-god', 'sharingan'];

const statsEl = document.getElementById('stats');
const nameEl = document.getElementById('names');
const powerEl = document.getElementById('powers');
const bioEl = document.getElementById('bio');
const identityEl = document.getElementById('identity')
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

    let url = `https://chriscastle.com/proxy/index.php?:proxy:https://superheroapi.com/api/202045435900603/search/%20`;

    fetch(url, {}).then((response) => {

        return response.json();

    }).then((data) => {

        console.log(data);
        let random1 = Math.floor(Math.random() * data.results.length) + 1;
        let random2 = Math.floor(Math.random() * data.results.length) + 1;
        let random3 = Math.floor(Math.random() * data.results.length) + 1;

        let firstName = data.results[random1].name.split(" ")[0];
        let lastName = data.results[random2].name.split(" ")[1];
        let heroStats = data.results[random3].powerstats;

        const name = firstName + " " + lastName;
        console.log(name);
        const power = powers[Math.floor(Math.random() * powers.length)];
        const stat = `Combat: ${heroStats.combat} Intelligence: ${heroStats.intelligence} Strength: ${heroStats.strength} Speed: ${heroStats.speed} Durability: ${heroStats.durability} Power: ${heroStats.power}`;
        console.log(typeof heroStats.combat);
        const bio = `You are now named ${name}. You are a hero with ${power} abilities. Where will you use them first?`;

        const newData = {
            heroName: name,
            power: power,
            stat: stat,
            bio: bio,

        }

        updateHTML(newData);

    }).catch((error) => {
        return error;
    });


}

function updateHTML(data) {
    nameEl.textContent = data.heroName;
    powerEl.textContent = data.power
    statsEl.textContent = data.stat;
    bioEl.textContent = data.bio;
    identityEl.textContent = data.fakeName;
}

function clearHTML() {
    nameEl.textContent = '';
    powerEl.textContent = '';
    bioEl.textContent = '';
}

function saveData() {
    const data = generateRandomSuperhero();
    console.log(data);
}

generateButton.addEventListener('click', () => {
    generateRandomSuperhero();
});

clearBtnEl.addEventListener('click', clearHTML);

saveBtnEl.addEventListener('click', saveData);

generateButton.addEventListener('click', function () {

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
        identityEl.textContent = name;
    }).catch((error) => {
        console.error(error);
    });

});
