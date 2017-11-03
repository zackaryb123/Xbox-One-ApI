const STEAM_SEARCH_URL = 'https://xboxapi.com/v2/2533274845190263/latest-xboxone-games';

function getDataFromApi(callback) {
    const settings  = {
        'X-AUTH': '57af9a3a801eac046ff8c9623e4d4c3fd8ae36c7', 
        'Content-Type': 'application/json',
    }
    $.getJSON(STEAM_SEARCH_URL, settings, callback);
}

function renderResult(result) {
    return `
    <div class="col-6 col-lg-4 store-sep">
        <h2>${result.ReducedName}</h2>
        <p>${result.ReducedDescription}</p>
    </div>`;
}

function displayStoreSearchData(data) {
    const results = data.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}

function watchSubmit() {
    $('.form-inline').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        getDataFromApi(displayStoreSearchData);
    });
}

$(watchSubmit);