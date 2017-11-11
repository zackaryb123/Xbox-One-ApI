const USER_GAMES_URL = 'https://xboxapi.com/v2/2533274858701166/xboxonegames';

function getDataFromGameApi(callback, apiURL) {
    const settings = {
        url: apiURL,
        headers: {
            'X-AUTH': USER_CREDS.API_KEY,
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
    <div id="accordion-game-${render.titleId}" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="heading-game-${render.titleId}">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#index-${index}" aria-expanded="true" aria-controls="collapse-game-${render.titleId}">
              ${render.name}
            </a>
          </h5>
        </div>

        <div id="index-${index}" class="collapse" role="tabpanel" aria-labelledby="heading-game-${render.titleId}" data-parent="#accordion-game-${render.titleId}">
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
    <div class="profile-game-content" id="accordion-profile-${render.titleId}" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="heading-profile-${render.titleId}">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#${render.titleId}" aria-expanded="true" aria-controls="collapse-profile-${render.titleId}">
              ${render.name}
            </a>
          </h5>
        </div>

        <div id="${render.titleId}" class="collapse" role="tabpanel" aria-labelledby="heading-profile-${render.titleId}" data-parent="#accordion-profile-${render.titleId}">
          <div class="card-body">
            <p class="card-text">Earned Achievements: ${render.earnedAchievements}</p>
            <p class="card-text">Current Gamerscore: ${render.currentGamerscore}</p>
            <p class="card-text">Max Gamerscore: ${render.maxGamerscore}</p>
          </div>
          <button type="button" class="btn btn-primary btn-sm profile-game-btn" style="/* margin-right: auto; *//* margin-left: auto; */width: 100%;">Small button</button>
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

//function handleGameEvents() {
//    getDataFromGameApi(displayGameContent, USER_GAMES_URL);
//}

//$(handleGameEvents);