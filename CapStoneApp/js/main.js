function onNavButton() {
    let currentPage = $('.page').find('section:visible');
    $('.nav-link').on('click', function (event) {
        const targetPage = $(this).attr('id');
        switch (targetPage) {
            case 'v-pills-home-tab':
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', true);
                $('.home-page').attr( 'hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-games-tab':
                $(currentPage).attr( 'hidden', true);
                $('.top-nav').attr('hidden', false);
                $('.games-page').attr('hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-store-tab':
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', false);
                $('.store-page').attr('hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-profile-tab':
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', true);
                $('profile-page').attr( 'hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-news-tab':
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', false);
                $('news-page').attr('hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
        }
    });
}

$(onNavButton);