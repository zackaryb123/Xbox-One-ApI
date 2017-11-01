function onNavButton() {
    const currentPage = $('.page').find('section:visible');
    console.log(currentPage);
    $('.nav-link').on('click', function (event) {
        const targetPage = $(this).attr('id');
        console.log(targetPage);
        switch (targetPage) {
            case 'v-pills-home-tab':
                $(currentPage).attr({ 'hidden': true, 'visible': false });
                $('.home-page').attr({ 'hidden': false, 'visible': true });
                console.log(targetPage);
                break;
            case 'v-pills-games-tab':
                $(currentPage).attr({ 'hidden': true, 'visible': false });
                $('.games-page').attr({ 'hidden': false, 'visible': true });
                console.log(targetPage);
                break;
            case 'v-pills-store-tab':
                $(currentPage).attr({ 'hidden': true, 'visible': false });
                $('.store-page').attr({ 'hidden': false, 'visible': true });
                console.log(targetPage);
                break;
            case 'v-pills-profile-tab':
                $(currentPage).attr({ 'hidden': true, 'visible': false });
                $('profile-page').attr({ 'hidden': false, 'visible': true });
                console.log(targetPage);
                break;
            case 'v-pills-news-tab':
                $(currentPage).attr({ 'hidden': true, 'visible': false });
                $('news-page').attr({ 'hidden': false, 'visible': true });
                console.log(targetPage);
                break;
        }
    });
}

$(onNavButton);