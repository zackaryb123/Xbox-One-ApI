const SEARCH_GAMES_URL = 'https://xboxapi.com/v2/browse-marketplace/games/1?sort=releaseDate';
const SEARCH_STORE_URL = '';


function getDataFromStoreApi(callback) {
    const settings = {
        url: SEARCH_GAMES_URL,
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

function getDataFromGameApi(callback) {
    const settings = {
        url: SEARCH_STORE_URL,
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

function renderGameResult(result) {
    return;
}

function renderStoreResult(result) {
    return;
}

function displayStoreSearchData(data) {
    let results = data.Items.map((item, index) => renderResult(item));
    $('').html(results);
}

function displayGameSearchData(data) {
    let results = data.Items.map((item, index) => renderResult(item));
    $('').html(results);
}

function watchSearchForm() {
    $('.js-search-form').on('click', event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        // If/Swithch statment to decide which api url to pull from 
        getDataFromApi(displayStoreSearchData);
    });
}