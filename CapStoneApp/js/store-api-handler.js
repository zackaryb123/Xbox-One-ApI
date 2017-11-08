const XBOX_SEARCH_URL = 'https://xboxapi.com/v2/browse-marketplace/games/1?sort=releaseDate';

function getDataFromApi(callback) {
    const settings = {
        url: XBOX_SEARCH_URL,
        data: {
            'X-AUTH': 'eeb07701b9773984f1bd26783f9537f0c20487b7',
            'Content-Type': 'application/json'
        },
        dataType: 'jsonp',
        type: 'GET',
        crossDomain: true,
        error: (err) => {
            console.log(err);
        },
        success: callback
    };
    $.ajax(settings);
}



function renderResult(result) {
    return `
    <div class="col-6 col-lg-4 store-sep">
        <h2>${result.Name}</h2>
        <p>${result.DeveloperName}</p>
    </div>`;
}

function displayStoreSearchData(data) {
    let results = data.Items.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}

function watchSubmit() {
    $('.js-store-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        getDataFromApi(displayStoreSearchData);
    });
}

$(watchSubmit);