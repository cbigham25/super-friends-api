

var url = "https://chriscastle.com/proxy/index.php?:proxy:https://superheroapi.com/api/202045435900603/70";

function logJSONData() {
    fetch(url, {}).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);

    })
}

logJSONData();

const generateButton = document.getElementById('clickButton');
generateButton.addEventListener('click', function() {
    console.log('Thanks For Clicking!');
});
