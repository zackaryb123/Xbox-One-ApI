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
        success: callback
    };
    $.ajax(settings);
}

function renderGameResults(render, index) {
    if (USER_CREDS.API_KEY !== '') { render.img = "images/logo-img.png" }
    return `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${render.img}" alt="Card image cap" height="318" width="318">
        <div class="card-body">
          <h4 class="card-title">${render.name}</h4>
          <div class="card-body">
            <p class="card-text">Earned Achievements: ${render.earnedAchievements}</p>
            <p class="card-text">Current Gamerscore: ${render.currentGamerscore}</p>
            <p class="card-text">Max Gamerscore: ${render.maxGamerscore}</p>
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
          <button type="button" class="btn btn-primary btn-sm profile-game-btn" style="width: 100%;">Veiw Clips</button>
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