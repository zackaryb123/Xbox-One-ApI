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
        success: callback
    };
    $.ajax(settings);
}

function RenderIframClip(iframe) {
    return `
    <iframe class="embed-responsive-item"
        src="${iframe}">
    </iframe>`;
}

function RenderLocolVideoClip(file) {
    return `
    <input type="file" accept="video/*"/>
    <video controls autoplay>
        <source src="${file}" type='video/mp4' />
    </video>
    `;
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

function DisplayProfileGameClips(display, id) {
    let GameResults = '';
    if (USER_CREDS.API_KEY !== '') {
        GameResults = display.map((item, index) =>
            RenderProfileGameClips(item, index));

        display.map((item, index) =>
            STORE_GAME_CLIPS[index] = {
                mp4: `${item.gameClipUris[0].uri}`
            }
        );
    } else {
        let id_index = 0;
        if (id == '545844082') {
            id_index = 0;
        } else if (id == '558797228') {
            id_index = 1;
        } else if (id == '972249091') {
            id_index = 2;
        }

        GameResults = EXAMPLE_DATA.Game[id_index].clips.map((item, index) =>
            RenderProfileGameClips(item, index));

        EXAMPLE_DATA.Game[id_index].clips.map((item, index) =>
            STORE_GAME_CLIPS[index] = {
                mp4: `${item.uri}`
            }
        );
    }

    $('.js-profile-clips-results').html(GameResults);
}

function watchProfileGameBtn() {
    $('.js-profile-game-results').on('click', '.profile-game-btn', event => {
        event.preventDefault();
        STORE_GAME_CLIPS.length = 0;

        $(event.currentTarget).find('.js-query')
        const game_element = $(event.currentTarget).parent();
        const game_id = game_element.attr('id');

        if (USER_CREDS.API_KEY !== '') {
            getDataFromClipsApi(DisplayProfileGameClips, USER_CLIPS_URL, game_id);
        } else {
            DisplayProfileGameClips(null, game_id);
        }
        $('#collapseClips').addClass('show');
    });
}

function watchGameClipBtn() {
    $('.js-profile-clips-results').on('click', '.play-clip-btn', event => {
        event.preventDefault();
        let iframeClip = '';
        const getClipBtnId = $(event.currentTarget).attr('id');
        const getClipUri = STORE_GAME_CLIPS[getClipBtnId].mp4;
        if (USER_CREDS.API_KEY !== '') {
            iframeClip = RenderIframClip(getClipUri);
        } else {
            iframeClip = RenderLocolVideoClip(getClipUri);
        }
        $('#collapseClips').removeClass('show');
        $('.js-iframe-clip').html(iframeClip);

    });
}

function HandleProfileEvents() {
    watchProfileGameBtn();
    watchGameClipBtn();
}

$(HandleProfileEvents);