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

function renderGameResults(render, index) {
    return `
    <div id="accordion-game-${index}" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="heading-game${index}">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapse-game${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${render.name}
            </a>
          </h5>
        </div>

        <div id="collapse-game${index}" class="collapse" role="tabpanel" aria-labelledby="heading-game${index}" data-parent="#accordion-game-${index}">
          <div class="card-body">
            <p class="card-text">Earned Achievements: ${render.earnedAchievements}</p>
            <p class="card-text">Current Gamerscore: ${render.currentGamerscore}</p>
            <p class="card-text">Max Gamerscore: ${render.maxGamerscore}</p>
          </div>
        </div>
      </div>
    </div>`;
}

function renderGameResultsOnProfile(render, index) {
    return `
    <div class="profile-game-content" id="accordion-profile-game${index}" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="heading-profile-game${index}">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapse-profile-game${index}" aria-expanded="true" aria-controls="collapse-profile-game${index}">
              ${render.name}
            </a>
          </h5>
        </div>

        <div id="collapse-profile-game${index}" class="collapse" role="tabpanel" aria-labelledby="heading-profile-game${index}" data-parent="#accordion-profile-game${index}">
          <div class="card-body">
            <p class="card-text">Earned Achievements: ${render.earnedAchievements}</p>
            <p class="card-text">Current Gamerscore: ${render.currentGamerscore}</p>
            <p class="card-text">Max Gamerscore: ${render.maxGamerscore}</p>
          </div>
        </div>
      </div>
    </div>`;
}

function displayGameContent(display) {
    let GameResults = display.titles.map((item, index) => renderGameResults(item, index));
    let ProfileGameResults = display.titles.map((item, index) => renderGameResultsOnProfile(item, index));
    $('.js-game-results').html(GameResults);
    $('.js-profile-game-results').html(ProfileGameResults);

}

function handleGameEvents() {
    getDataFromUserApi(displayGameContent, USER_GAMES_URL);
}

$(handleGameEvents);