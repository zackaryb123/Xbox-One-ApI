const XBOX_STORE_URL = 'https://xboxapi.com/v2/browse-marketplace/games/';
let STORE_PAGE_COUNT = 1;

function getDataFromApi(callback, apiUrl, page) {
    const settings = {
        url: apiUrl + page.toString(),
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

function renderStoreResults(result) {
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
    let results = data.Items.map((item, index) => renderStoreResults(item));
    $('.js-store-results').html(results);
}

function watchNextBtn() {
    $('#js-store-next').on('click', event => {
        event.preventDefault();
        if (STORE_PAGE_COUNT < 1000) {
            STORE_PAGE_COUNT++;
            getDataFromApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT)
        }
    })
}

function watchPrevBtn() {
    $('#js-store-prev').on('click', event => {
        event.preventDefault();
        if (STORE_PAGE_COUNT > 1) {
            STORE_PAGE_COUNT--;
            getDataFromApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT)
        }
    })
}

function handleStoreEvents() {
    getDataFromApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT);
    $(watchPrevBtn);
    $(watchNextBtn);
}

//$(handleStoreEvents);