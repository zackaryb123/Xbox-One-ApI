const STEAM_SEARCH_URL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

function getDataFromApi(searchTerm, callback) {
    $.getJSON(STEAM_SEARCH_URL, callback);
}

function renderResult(result) {
    return `
    <div class="col-6 col-lg-4 store-sep">
        <h2>${result.name}</h2>
        <p>${result.appid}</p>
    </div>`;
}

function displayStoreSearchData(data) {
    const results = data.apps.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}

function watchSubmit() {
    $('.form-inline').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        getDataFromApi(query, displayStoreSearchData);
    });
}

$(watchSubmit);