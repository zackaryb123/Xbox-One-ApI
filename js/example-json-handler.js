const LOCAL_JSON = '/json/example-profile.json';

const EXAMPLE_DATA = {
    Gamertag: "pr0Xt0Xtype18",
    GameDisplayPicRaw: "https://images-eds.xboxlive.com/image?url=z951ykn43p4FqWbbFvR2Ec.8vbDhj8G2Xe7JngaTToBrrCmIEEXHC9UNrdJ6P7KI4AAOijCgOA3.jozKovAH94oRvaqkZ2RL.OMqWWMP5tqcHE36EZlcPqK2ej.Y4TJy&format=png",
    Gamerscore: 16984,
    XboxOneRep: "GoodPlayer",
    Game: [
        {
            name: "Call of Duty WWII",
            titleId: 545844082,
            clips: [
                {
                    dateRecorded: "2017-11-14 02:14:47",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip1.mp4"
                },
                {
                    dateRecorded: "2017-11 - 14 01: 59:00",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip2.mp4"
                },
                {
                    dateRecorded: "2017-11 - 14 01: 56:42",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip3.mp4"
                },
                {
                    dateRecorded: "2017-11 - 13 05: 08:15",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip4.mp4"
                },
                {
                    dateRecorded: "2017-11 - 13 05: 08:31",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip5.mp4"
                },
                {
                    dateRecorded: "2017-11 - 09 02: 01:11",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip6.mp4"
                },
                {
                    dateRecorded: "2017-11 - 09 02: 01:05",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/Clip7.mp4"
                }
            ],
            earnedAchievements: 2,
            currentGamerscore: 15,
            maxGamerscore: 1000
        }
    ]
};

function watchExampleBtn() {
    $('.example-btn').on('click', event => {
        $('.logo-img').attr('src', EXAMPLE_DATA.GameDisplayPicRaw);
        $('.gamer-tag').text(EXAMPLE_DATA.Gamertag);
        $('.gamer-score').text(EXAMPLE_DATA.Gamerscore);
        $('.gamer-rep').text(EXAMPLE_DATA.XboxOneRep);
        $('.profile-btn').text(EXAMPLE_DATA.Gamertag);

        $('.creds-container').prop('hidden', true);
        $('.signout-btn').prop('hidden', false);

        let ProfileGameResults = renderGameResultsOnProfile(EXAMPLE_DATA.Game[0], 1)
        $('.js-profile-game-results').html(ProfileGameResults);

        let GameResults = renderGameResults(EXAMPLE_DATA.Game[0], 1);
        $('.js-game-results').html(GameResults);

        getDataFromStoreApi(displayStoreData, XBOX_STORE_URL, STORE_PAGE_COUNT);

        $('#id01').css('display', 'none');
    });
}

$(watchExampleBtn);
