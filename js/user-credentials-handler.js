const XUID_URL = 'https://xboxapi.com/v2/';

const USER_CREDS =
    {
        API_KEY: '',
        UXID: '',
        TAG_IMG: '',
        GAMER_TAG: '',
        GAMER_SCORE: '',
        GAMER_REP: ''
    };

function getCredsFromGameApi(apiURL, xuid, apikey) {
    const settings = {
        url: apiURL + xuid.toString() + '/profile',
        headers: {
            'X-AUTH': `${apikey}`,
            'Content-Type': 'application/json'
        },
        data: {"id": xuid},
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        error: (err) => {
            alert('Either API Key or Uxid incorrect! Try Again');
        },
        success: (res) => {
            USER_CREDS.UXID = xuid;
            USER_CREDS.API_KEY = apikey;
            USER_CREDS.TAG_IMG = res.GameDisplayPicRaw;
            USER_CREDS.GAMER_TAG = res.Gamertag;
            USER_CREDS.GAMER_SCORE = res.Gamerscore;
            USER_CREDS.GAMER_REP = res.XboxOneRep;

            $('.logo-img').attr('src', USER_CREDS.TAG_IMG);
            $('.gamer-tag').text(USER_CREDS.GAMER_TAG);
            $('.gamer-score').text(USER_CREDS.GAMER_SCORE);
            $('.gamer-rep').text(USER_CREDS.GAMER_REP);
            $('.profile-btn').text(USER_CREDS.GAMER_TAG);

            $('.creds-container').prop('hidden', true);
            $('.signout-btn').prop('hidden', false);

            getDataFromStoreApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT);
            getDataFromGameApi(displayGameContent, USER_GAMES_URL);
        }
    };
    $.ajax(settings);
}

function watchCredsSubmit() {
    $('#login-form').on('click', '.login-btn', event => {
        event.preventDefault();
        const getUserUxidC = $(event.currentTarget).parent().find('#js-user-uxid');
        const UserUxidC = getUserUxidC.val();

        const getUserAPIKeyC = $(event.currentTarget).parent().find('#js-user-apikey');
        const UserAPIKeyC = getUserAPIKeyC.val();

        getUserUxidC.val("");
        getUserAPIKeyC.val("");

        getCredsFromGameApi(XUID_URL, UserUxidC, UserAPIKeyC)
    });
}

function watchCloseBtn() {
    $('.cancelbtn').on('click', event => {
        if (USER_CREDS.API_KEY === '' || USER_CREDS.UXID === '')
        {
            alert('Sign in first!');
            return;
        }      
        $('#id01').css('display', 'none');
    });
}

function watchProfileBtn() {
    $('.profile-btn').on('click', event => {
        $('#id01').css('display', 'block');
    });
}

function HandleLoginEvents() {
    watchProfileBtn();
    watchCloseBtn();
    watchCredsSubmit();
}

$(HandleLoginEvents);