const XUID_URL = 'https://xboxapi.com/v2/';

const USER_CREDS =
    {
        API_KEY: '',
        UXID: ''
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
            alert('Either API Key or Uxid incorrect! Try Again')
            console.log(err);
        },
        success: (res) => {
            alert("Success! Press Cancel");
            USER_CREDS.UXID = xuid;
            USER_CREDS.API_KEY = apikey;
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
        console.log(UserUxidC);

        const getUserAPIKeyC = $(event.currentTarget).parent().find('#js-user-apikey');
        const UserAPIKeyC = getUserAPIKeyC.val();
        console.log(UserAPIKeyC);

        getUserUxidC.val("");
        getUserAPIKeyC.val("");

        getCredsFromGameApi(XUID_URL, UserUxidC, UserAPIKeyC)
    });
}

$(watchCredsSubmit);