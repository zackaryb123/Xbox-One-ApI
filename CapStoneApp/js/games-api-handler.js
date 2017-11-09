const USER_GAMES_URL = 'https://xboxapi.com/v2/2533274845190263/xboxonegames';

function getDataFromUserApi(callback, apiURL) {
    const settings = {
        url: apiURL,
        headers: {
            'X-AUTH': 'd66a2f0bf37d99e3ed7e6454d17b6c347f78ed70',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        error: (err) => {
            console.log(err);
        },
        success: callback
    };
    $.ajax(settings);
}

function renderResult(render) {
    return `
    <div class="card">
        <div data-src="holder.js/100px280?theme=thumb" data-holder-rendered="true" style="height: 280px; width: 100%; display: block;">
            <p class="card-text">Game: ${render.name}</p>
            <p class="card-text">Earned Achievements: ${render.earnedAchievements}</p>
            <p class="card-text">Current Gamerscore: ${render.currentGamerscore}</p>
            <p class="card-text">Max Gamerscore: ${render.maxGamerscore}</p>
        </div>
    </div>`;
}

function displayGameContent(display) {
    let results = display.titles.map((item, index) => renderResult(item));
    $('.js-game-results').html(results);
}

function watchGameTab() {
    $('#v-pills-games-tab').on('click', event => {
        event.preventDefault();
        getDataFromUserApi(displayGameContent, USER_GAMES_URL);
    });
}

$(watchGameTab); // Load inital content on web page start up