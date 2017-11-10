const SEARCH_STORE_URL = 'https://xboxapi.com/v2/browse-marketplace/games';


function getDataFromSearchApi(searchTerm, callback, apiUrl) {
    const settings = {
        url: apiUrl,
        headers: {
            'X-AUTH': '3f4f1234677cb8c21e729c00718e72102ead9c37',
            'Content-Type': 'application/json'
        },
        data: {"Name": `${searchTerm}`},
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

function renderSearchResult(result) {
    return `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${result.Images[0].Url}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">${result.Name}</h4>
            <p class="card-text">${result.ParentalRatings[0].Rating}</p> 
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
   </div>`;
}

function displaySearchData(data) {
    let results = data.Items.map((item, index) => renderSearchResult(item));
    $('.js-store-results').html(results);
}

function watchSearchForm() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        // If/Swithch statment to decide which api url to pull from 
        getDataFromSearchStoreApi(query, displaySearchData, SEARCH_STORE_URL);
    });
}

// Implement later - Have to store data then search for content to enable search
//$(watchSearchForm);