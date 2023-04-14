
var heroName = document.querySelector('#name');
var url = "https://chriscastle.com/proxy/index.php?:proxy:https://superheroapi.com/api/202045435900603/70";

function logJSONData() {
    fetch(url, {}).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);

    })
}

logJSONData();

var url = "https://chriscastle.com/proxy/index.php?:proxy:https://api.namefake.com/";

function fetchFakeName() {
    return new Promise((resolve, reject) => {
        fetch(url, {}).then((response) => {
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
    //TODO change this to be what ever we come up with for UI. 
    heroName.textContent = name;
}).catch((error) => {
    console.error(error);
});

const generateButton = document.getElementById('clickButton');
generateButton.addEventListener('click', function () {
    console.log('Thanks For Clicking!');
});
