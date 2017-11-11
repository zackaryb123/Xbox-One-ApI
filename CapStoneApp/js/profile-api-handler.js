const USER_CLIPS_URL = 'https://xboxapi.com/v2/';

const STORE_GAME_CLIPS = [{mp4:''}];

function getDataFromClipsApi(callback, apiURL, gameId) {
    const settings = {
        url: apiURL + USER_CREDS.UXID + '/game-clips/' + gameId,
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

function RenderIframClip(iframe) {
    return `
    <iframe
        src="${iframe}">
    </iframe>`;
}

function RenderProfileGameClips(render, index) {
    return `
    <button class="play-clip-btn" id="${index}">
        <a class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${index + 1}. ${render.titleName}</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
                <small>${render.dateRecorded}</small>
            </div>
        </a>
    </button>`;
}

function DisplayProfileGameClips(display) {
    let GameResults = display.map((item, index) =>
        RenderProfileGameClips(item, index));   
    $('.js-profile-clips-results').html(GameResults);
}

function StoreClipMp4(store) {
    let StoreResults = store.map((item, index) =>
        STORE_GAME_CLIPS[index] = {
            mp4: `${item.gameClipUris[0].uri}`
        }
    );
    console.log(STORE_GAME_CLIPS);
}


function watchProfileGameBtn() {
    $('.js-profile-game-results').on('click', '.profile-game-btn', event => {
        event.preventDefault();
        STORE_GAME_CLIPS.length = 0;

        $(event.currentTarget).find('.js-query')
        const game_element = $(event.currentTarget).parent();
        const game_id = game_element.attr('id');

        console.log(game_id);

        getDataFromClipsApi(DisplayProfileGameClips, USER_CLIPS_URL, game_id);
        getDataFromClipsApi(StoreClipMp4, USER_CLIPS_URL, game_id);
    });
}

function watchGameClipBtn() {
    $('.js-profile-clips-results').on('click', '.play-clip-btn', event => {
        event.preventDefault();
        const getClipBtnId = $(event.currentTarget).attr('id');
        const getClipUri = STORE_GAME_CLIPS[getClipBtnId].mp4;
        const iframeClip = RenderIframClip(getClipUri);
        $('.js-iframe-clip').html(iframeClip);

    });
}

function HandleProfileEvents() {
    watchProfileGameBtn();
    watchGameClipBtn();
}

//$(HandleProfileEvents);