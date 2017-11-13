const XBOX_STORE_URL = 'https://xboxapi.com/v2/browse-marketplace/games/';
const GAME_SEARCH_ID = 'https://xboxapi.com/v2/game-details/';

let STORE_PAGE_COUNT = 1;
const GAME_IDs = [];

const GAME_DETAILS = {
    DESCRIPTION: ''
}

function getDataFromStoreApi(callback, apiUrl, page) {
    const settings = {
        url: apiUrl + page.toString(),
        headers: {
            'X-AUTH': USER_CREDS.API_KEY,
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        success: function res(data) {
            GAME_IDs.length = 0;
            callback(data);
            let StoreResults = data.Items.map((item, index) =>
                GAME_IDs[index] = {
                    ID: `${item.ID}`
                }
            );
         }
    };
    $.ajax(settings);
}

function getDataFromGameSearchId(apiUrl, index) {
    const settings = {
        url: apiUrl + GAME_IDs[index].ID,
        headers: {
            'X-AUTH': USER_CREDS.API_KEY,
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        success: (data) => {
            GAME_DETAILS.DESCRIPTION = data.Items[0].Description;
            let details = $('.js-store-results').find(`.${index}`);
            details.text(GAME_DETAILS.DESCRIPTION);
        }
    };
    $.ajax(settings);
}

function renderStoreResults(result, index) {
    return `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${result.Images[0].Url}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">${result.Name}</h4>
            <p class="card-text">${result.ParentalRatings[0].Rating}</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="${index}" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion${index}" aria-expanded="true" aria-controls="exampleAccordion${index}">
                  Description
                </a>
                <div id="exampleAccordion${index}" class="collapse show" role="tabpanel">
                  <p class="mb-3 ${index}">
                    
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>`;
}

function displayStoreData(data) {
    let results = data.Items.map((item, index) => renderStoreResults(item, index));
    $('.js-store-results').html(results);
}

function watchNextBtn() {
    $('#js-store-next').on('click', event => {
        event.preventDefault();
        if (STORE_PAGE_COUNT < 1000) {
            STORE_PAGE_COUNT++;
            getDataFromStoreApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT)
        }
    });
}

function watchDetailsBtn() {
    $('.js-store-results').on('click', '.game-details-btn', event => {
        event.preventDefault();
        GAME_DETAILS.DESCRIPTION = '';
        const game_id = $(event.currentTarget).attr('id');
        let gameid = parseInt(game_id);
        getDataFromGameSearchId(GAME_SEARCH_ID, gameid);
    });
}

function watchPrevBtn() {
    $('#js-store-prev').on('click', event => {
        event.preventDefault();
        if (STORE_PAGE_COUNT > 1) {
            STORE_PAGE_COUNT--;
            getDataFromStoreApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT)
        }
    });
}

function handleStoreEvents() {
    $(watchDetailsBtn);
    $(watchPrevBtn);
    $(watchNextBtn);
}

$(handleStoreEvents);