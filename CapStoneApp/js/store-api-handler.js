const XBOX_STORE_URL = 'https://xboxapi.com/v2/browse-marketplace/games/1?sort=releaseDate';

function getDataFromApi(callback) {
    const settings = {
        url: XBOX_STORE_URL,
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

function renderResult(result) {
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

function displayStoreData(data) {
    let results = data.Items.map((item, index) => renderResult(item));
    $('.js-store-results').html(results);
}

function watchStoreTab() {
    $('#v-pills-store-tab').on('click', event => {
        event.preventDefault();
        getDataFromApi(displayStoreData);
    });
}

$(watchStoreTab); // Load inital content on web page start up