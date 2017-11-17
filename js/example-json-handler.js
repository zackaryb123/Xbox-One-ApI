const LOCAL_JSON = '/json/example-profile.json';

const EXAMPLE_DATA = {
    Gamertag: "pr0Xt0Xtype18",
    GameDisplayPicRaw: "http://images-eds.xboxlive.com/image?url=z951ykn43p4FqWbbFvR2Ec.8vbDhj8G2Xe7JngaTToBrrCmIEEXHC9UNrdJ6P7KI4AAOijCgOA3.jozKovAH94oRvaqkZ2RL.OMqWWMP5tqcHE36EZlcPqK2ej.Y4TJy&format=png",
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
                    uri: "iframes/CallofDutyWIII/Clip1.mp4"
                },
                {
                    dateRecorded: "2017-11-14 01:59:00",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip2.mp4"
                },
                {
                    dateRecorded: "2017-11-14 01:56:42",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip3.mp4"
                },
                {
                    dateRecorded: "2017-11-13 05:08:15",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip4.mp4"
                },
                {
                    dateRecorded: "2017-11-13 05:08:31",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip5.mp4"
                },
                {
                    dateRecorded: "2017-11-09 02:01:11",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip6.mp4"
                },
                {
                    dateRecorded: "2017-11-09 02:01:05",
                    titleName: "Call of Duty®: WWII",
                    uri: "iframes/CallofDutyWIII/Clip7.mp4"
                }
            ],
            earnedAchievements: 2,
            currentGamerscore: 15,
            maxGamerscore: 1000
        },
        {
            name: "Rocket League®",
            titleId: 558797228,
            clips: [
                {
                    dateRecorded: "2017-07-01 02:10:18",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip1.mp4"
                },
                {
                    dateRecorded: "2017-06-27 06:36:40",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip2.mp4"
                },
                {
                    dateRecorded: "2017-06-10 22:27:01",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip3.mp4"
                },
                {
                    dateRecorded: "2017-06-10 21:42:34",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip4.mp4"
                },
                {
                    dateRecorded: "2017-06-10 21:09:34",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip5.mp4"
                },
                {
                    dateRecorded: "2017-05-16 02:37:08",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip6.mp4"
                },
                {
                    dateRecorded: "2017-05-05 03:44:45",
                    titleName: "Rocket League®",
                    uri: "iframes/RocketLeague/Clip7.mp4"
                }
            ],
            earnedAchievements: 37,
            currentGamerscore: 830,
            maxGamerscore: 1950
        },
        {
            name: "Grand Theft Auto V",
            titleId: 972249091,
            clips: [
                {
                    dateRecorded: "2017-08-02 01:42:32",
                    titleName: "Grand Theft Auto V",
                    uri: "iframes/GrandTheftAutoV/Clip1.mp4"
                },
                {
                    dateRecorded: "2017-06-27 06:36:40",
                    titleName: "Grand Theft Auto V",
                    uri: "iframes/GrandTheftAutoV/Clip2.mp4"
                },
                {
                    dateRecorded: "2017-06-10 22:27:01",
                    titleName: "Grand Theft Auto V",
                    uri: "iframes/GrandTheftAutoV/Clip3.mp4"
                },
                {
                    dateRecorded: "2017-06-10 21:42:34",
                    titleName: "Grand Theft Auto V",
                    uri: "iframes/GrandTheftAutoV/Clip4.mp4"
                },
                {
                    dateRecorded: "2017-06-10 21:09:34",
                    titleName: "Grand Theft Auto V",
                    uri: "iframes/GrandTheftAutoV/Clip5.mp4"
                }
            ],
            earnedAchievements: 17,
            currentGamerscore: 270,
            maxGamerscore: 1500
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

        let ProfileGameResults = '';
        let GameResults = '';
        for (let i = 0; i < EXAMPLE_DATA.Game.length; i++) {
            ProfileGameResults += renderGameResultsOnProfile(EXAMPLE_DATA.Game[i], i+1)
            //$('.js-profile-game-results').html(ProfileGameResults);

            GameResults += renderGameResults(EXAMPLE_DATA.Game[i], i+1);
            //$('.js-game-results').html(GameResults);
        }
        $('.js-profile-game-results').html(ProfileGameResults);
        $('.js-game-results').html(GameResults);

        let staticStoreResults = getStaticStoreGamesForExample();
        $('.js-store-results').html(staticStoreResults);

        $('#id01').css('display', 'none');
    });
}

function getStaticStoreGamesForExample() {
    return `    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/5402b470-fa4a-41b5-bb3b-0bf026aa9f4e/13e5da1b-c957-401b-bb4e-4092e7f99d21/2fec5e76-b779-4a29-8daf-410c29435674.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">We Sing</h4>
            <p class="card-text">Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="0" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion0" aria-expanded="true" aria-controls="exampleAccordion0">
                  Description
                </a>
                <div id="exampleAccordion0" class="collapse" role="tabpanel">
                  <p class="mb-3 0">
                    We Sing returns bigger and better than ever before! Featuring the hottest hits from the world’s biggest artists, from across five decades including original recordings from artists including David Bowie, Coldplay, Sia and Britney Spears along with their official HD music videos. We Sing brings the award winning party experience, direct to the comfort of your living room. Sing together or sing-off against up to 8 friends at the same time, or go solo to top the online leaderboards and become the star you were born to be! Use your smartphone to play with the FREE We Sing Mic® App or connect a compatible USB microphone for the authentic studio experience.Sing your heart out to the hottest hits from the biggest artists - including original recordings and HD videos from across five decades - Connect up to four USB microphones and download the free We Sing Mic app to sing with up to eight friends simultaneously - Sing with friends or rock it solo to top the online leader boards and become a star - Featuring six game modes, including We Sing mode to sing and score together, and Sing-Off mode to compete individually - Sing along with your favourite artists or dive into a true karaoke experience with the original instrumental recordings - Turn your console into a music channel and watch every song's music video in Jukebox Mode - Turn up the heat and show off your perfect pitch with We Sing's three difficulty settings - Gameplay powered by the KaraEngine for ultra-accurate pitch detection - Studio quality audio pipeline allows players to hear the music the way it was meant to sound
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/f39d01b9-4532-4219-89aa-c0128d327016/e90a9966-fe17-4867-b23a-0164e7868634/b4a565f2-93f2-4d3c-8431-ffa63d818e7a.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">South Park™: The Stick of Truth ™</h4>
            <p class="card-text">Mature</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="1" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1">
                  Description
                </a>
                <div id="exampleAccordion1" class="collapse" role="tabpanel">
                  <p class="mb-3 1">
                    South Park™ The Stick of Truth™ is exclusively offered for free for every pre-order of its upcoming sequel: South Park™ The Fractured but Whole™. From the perilous battlefields of the fourth-grade playground, a young hero will rise, destined to be South Park’s savior. Arm yourself with weapons of legend to defeat underpants gnomes, hippies and other forces of evil. Discover the lost Stick of Truth and earn your place at the side of Stan, Kyle, Cartman and Kenny as their new friend in a hilarious and outrageous RPG adventure. • The Definitive South Park Experience Written and voiced by Trey Parker and Matt Stone, The Stick of Truth brings their unique brand of humor to video gaming. • Friends With Benefits Recruit classic South Park characters to your cause. • South Park Customization Insert yourself into South Park with something like a billion character, clothing combinations.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/92c8817d-1efe-4228-b168-d4ef7690393d/71459de8-9b26-41d7-8b6a-6e3fcd704949/72b414a2-bdd0-4814-b958-22897bc9ad7e.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Crackdown 3</h4>
            <p class="card-text">Unrated</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="2" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" aria-expanded="true" aria-controls="exampleAccordion2">
                  Description
                </a>
                <div id="exampleAccordion2" class="collapse" role="tabpanel">
                  <p class="mb-3 2">
                    Stop crime as a super-powered Agent of justice in Crackdown 3’s hyper-powered sandbox of mayhem and destruction. Explore the heights of a futuristic city, race through the streets in a transforming vehicle, and use your powerful abilities to stop a ruthless criminal empire. Developed by original creator Dave Jones, Crackdown 3 will deliver cooperative mayhem and an all-new multiplayer mode where destruction is your ultimate weapon against friends and rivals online powered by Microsoft Cloud. Whether you’re playing the Campaign with friends or enjoying an entirely new competitive experience, you’ll never look at an open-world game the same way again. *Online multiplayer requires paid Xbox Live Gold subscription (sold separately). Pre-release software. Features are subject to change.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/82d52f1c-c2b6-41a6-9a0e-b4880f8e23f3/8ed97946-02e8-4715-acc6-89660bc267e8/e2e41fca-566a-4659-80ef-ec5918aad4b6.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">CODE VEIN</h4>
            <p class="card-text">Unrated</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="3" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion3" aria-expanded="true" aria-controls="exampleAccordion3">
                  Description
                </a>
                <div id="exampleAccordion3" class="collapse" role="tabpanel">
                  <p class="mb-3 3">
                    In the Face of Certain Death, We Rise In the not too distant future, a mysterious disaster has brought collapse to the world as we know it. Towering skyscrapers, once symbols of prosperity, are now lifeless graves of humanity’s past pierced by the Thorns of Judgment. At the center of the destruction lies a hidden society of Revenants called Vein. This final stronghold is where the remaining few fight to survive, blessed with Gifts of power in exchange for their memories and a thirst for blood. Give into the bloodlust fully and risk becoming one of the Lost, fiendish ghouls devoid of any remaining humanity. Wandering aimlessly in search of blood, the Lost will stop at nothing to satisfy their hunger. Team up and embark on a journey to the ends of hell to unlock your past and escape your living nightmare in CODE VEIN. UNITE TO SURVIVE • Featuring a story driven connected dungeon experience, dive into the world of CODE VEIN. Create your own character and choose your partner as you venture out into a world of destruction, overrun by the Lost. Use your combined strength to coordinate your approach and defend each other from surprise attacks or overpowered enemies using your Blood Veil and various weapons. Change the feel of the game depending on which partner you choose, each with their own combat style and background story. BENEATH THE VEIL • Experience the power of blood as you use unique Blood Veils to drain your enemies to enhance your abilities. Using “Gifts” powered by enemy blood, players can increase their strength, weaken enemies, and utilize new weapon abilities and overpowered attacks. GREAT CHALLENGE BRINGS GREATER REWARDS • Take on the Lost as you explore the malefic world of CODE VEIN. Choose from a myriad of weapons such as bayonets, axes and spears, to accommodate your favorite battle style. Apply strategy in your attacks through partnered coordination and Blood Veil enhancements, ready to bring down the most threatening enemies.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/b9b1b506-de90-4e5c-8565-7fbda2d4e5d8/36ba29cb-028e-4c3e-8ae4-5001926b72ca/29e60015-c440-4866-ac29-d5499fa7d67b.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Sea of Thieves Technical Alpha</h4>
            <p class="card-text">Unrated</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="4" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion4" aria-expanded="true" aria-controls="exampleAccordion4">
                  Description
                </a>
                <div id="exampleAccordion4" class="collapse" role="tabpanel">
                  <p class="mb-3 4">
                    The freedom of the pirate life awaits in Rare's next adventurous voyage! Sea of Thieves is a shared world adventure game in which players form crews, set sail and seek legendary treasures. Pirates will be armed with all the trimmings from your favourite pirate adventures: rusted compasses, sturdy shovels, deadly blunderbusses and no shortage of weather-beaten maps. Taking place on a vast and open ocean, the world of Sea of Thieves is dotted with mysterious islands, fantastical creatures and dangers lurking behind every unexplored corner. You can embark on one of our numerous voyages, or sail to destinations of your choosing. In Sea of Thieves, every sail on the horizon is another player, so stay sharp and keep those cannons primed! Coming to Xbox One and Windows 10, Sea of Thieves will let you forge your pirate legend. Want to get involved? Join our Insider Programme to be considered for Technical Alpha testing: www.SeaOfThieves.com/Insider
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/65cdcd19-1553-4f3a-a9d2-f15868ca111b/65516e42-2133-467a-8366-548b14a5dbe8/f7e77e6d-3a27-4d96-9331-64fc9733e9f1.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Snooker Nation Championship Game Preview</h4>
            <p class="card-text">Everyone</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="5" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion5" aria-expanded="true" aria-controls="exampleAccordion5">
                  Description
                </a>
                <div id="exampleAccordion5" class="collapse" role="tabpanel">
                  <p class="mb-3 5">
                    Game Preview This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. The Snooker Nation Championship, the most important event in your digital Snooker diary. The offline tournament spans 6 rounds, competing in the qualifiers through to the grand final held in the Snooker Nation Championship venue, played on meticulously created Championship specification tables. Or take a break from the crowds by challenging players online and climb the global leaderboards. Collect a variety of cues and compete in online snooker leagues. Snooker Nation Championship is digital snooker at is best. Full details on the latest status of the game, how you can give feedback and report issues can be found at www.snookernationgame.com.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/865b8720-cfd9-4d78-8a47-6449f044370c/7d919a6d-6910-400f-893f-681e95709f9e/d81e8a6f-9060-4191-89a7-eac93848018d.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Conan Exiles (Game Preview)</h4>
            <p class="card-text">Mature</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="6" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion6" aria-expanded="true" aria-controls="exampleAccordion6">
                  Description
                </a>
                <div id="exampleAccordion6" class="collapse" role="tabpanel">
                  <p class="mb-3 6">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. Conan Exiles is an open-world survival game set in the brutal lands of Conan the Barbarian! Survive in a hostile world, build your kingdom, and dominate your enemies in both single and multiplayer! Start with nothing but your bare hands and forge the legacy of your clan, from simple tools and weapons to gigantic fortresses and entire cities. Wage war using swords, bows, siege weapons, and even take control of giant avatars of the gods and lay waste to your enemy’s cities in epic scenes of destruction. Features: •	EXPLORE A VAST WORLD: Explore a giant world, from the burning desert in the south, to the snow-capped mountains in the north. Discover ancient cultures, ruins, and dungeons! • SURVIVE: Stay warm, cool yourself down, drink and eat, weather scouring sandstorms, save your mind from being corrupted and going insane, and battle vicious monsters to stay alive! •	BUILD: Harvest resources to craft tools and weapons, then build everything from a small home to entire cities. Build walls, traps, and deck out your creations with a wide variety of different furniture, crafting stations, NPC guards, and more. • DOMINATE: Wage war against your enemies, use siege weapons and explosives and see their walls crumble to dust, then unleash your savage fury in violent and brutal combat! •	BUILD AN ARMY OF THRALLS: Capture NPCs and use the Wheel of Pain to break their will. Turn them into archers, crafters, entertainers, and more. •	BECOME A GOD: Sacrifice your enemies on the altar of your god then summon and take control of their huge, towering avatar. Crush enemies and entire buildings under your avatar’s feet! •	PLAY TOGETHER OR ALONE: Play alone locally or fight for survival and dominance in persistent multiplayer on public servers. You can also host your own server and invite others to join you. ALSO INCLUDES THE NEW EXPANSION UPDATE: THE FROZEN NORTH! Far to the north, a vast new land has been discovered. A cold and rugged landscape where snow-capped mountains and dark, haunted forests stretch as far as the eye can see. •	A HUGE, NEW LAND: Climb towering mountains, explore deep forests, fight your way through massive new dungeons, and discover new people, cultures, and settlements. •	WEATHER AND TEMPERATURE: Rain, snow, and the burning sun takes its toll. Make sure you dress for the weather to stay cool or warm. •	NEW BUILDINGS AND RESOURCES: Harvest new resources such as star metal, black ice, and more. Build new homes and entire cities with all new building pieces and furniture. •	NEW RELIGION AND AVATAR: Dedicate your work and worship to Ymir, the Lord of Storm and War. Summon his avatar and use his giant battle-axe to crush your enemies! •	BREWING AND COOKING: These two new crafting systems lets you brew different drinks and cook up a variety of juicy meals. You can even trap fish and practice beekeeping! •	BETTER THAN EVER: The expansion update brings with it a host of improvements such as better combat, better artificial intelligence on human enemies, and more. Full details on the latest status of the game, how you can give feedback and report issues can be found at www.conanexiles.com.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/aa88280a-00e0-4d77-a31f-478a754906a7/75ccc69d-20e6-4093-a5aa-33e664c90945/c0f07747-481d-4900-ae27-827368eea676.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Ghost of a Tale (Game Preview)</h4>
            <p class="card-text">Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="7" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion7" aria-expanded="true" aria-controls="exampleAccordion7">
                  Description
                </a>
                <div id="exampleAccordion7" class="collapse" role="tabpanel">
                  <p class="mb-3 7">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. Ghost of a Tale is an action-RPG adventure, set in a medieval world populated only by animals. You play as Tilo, a courageous minstrel mouse on a perilous quest to escape the jails of Dwindling Heights Keep and discover the fate of his true love Merra. Armed with a mouse’s talent for stealth, agility and disguise - and a love of music - you'll explore the towers and dungeons of the keep, navigating its dangers and discovering its secrets. Dwindling Heights is a dangerous place for a little mouse, and Tilo's not much of a fighter. When confronted with enemies twice your size, nimbleness and guile are your allies. Talk to the characters you meet - make enemies and allies - and leave no stone unturned in your quest to find Merra. Please note that the preview version of Ghost of a Tale is presented in English only. The final release will support English, French, German, Spanish, Italian, Japanese and more. About the team: Ghost of a Tale is developed by a very small team. Lionel "Seith" Gallat creates 90% of the art, design and coding. Paul Gardner is the game's writer and an experienced game designer. Cyrille Paulhiac does coding and develops tools. Jeremiah Pena is the game's composer, while Nicolas Titeux is responsible for sound design. Full details on the latest status of the game, how you can give feedback and report issues can be found at http://www.ghostofatale.com/. *PEGI RATING IS PROVISIONAL
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/ec3cb120-5fdc-4472-aa43-7aee97561bf8/1255034a-7258-4302-9d79-19b8e5851fb8/ecb004f0-cd4e-4753-ae70-995f945dae54.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Subnautica (Game Preview)</h4>
            <p class="card-text">Everyone 10+</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="8" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion8" aria-expanded="true" aria-controls="exampleAccordion8">
                  Description
                </a>
                <div id="exampleAccordion8" class="collapse" role="tabpanel">
                  <p class="mb-3 8">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. Descend into the depths of an alien underwater world filled with resources, creatures, wonder and threats. Craft equipment and submarines to explore lush coral reefs, volcanoes, cave systems, and more – all while trying to survive. Full details on the latest status of the game, how you can give feedback and report issues can be found at http://playsubnautica.com.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/0d6754ba-e650-428a-97ec-b3122e10fc0b/0e659523-1d58-4404-b5d5-2a7f33e47c30/ab083025-3c31-4154-9946-8b8ff1157002.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Pit People (Game Preview)</h4>
            <p class="card-text">Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="9" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion9" aria-expanded="true" aria-controls="exampleAccordion9">
                  Description
                </a>
                <div id="exampleAccordion9" class="collapse" role="tabpanel">
                  <p class="mb-3 9">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. In our fast-paced, turn-based, co-op adventure you'll quest and explore, find awesome loot, customize your fighters, recruit strange species, and fight in tournaments! A full cast of tragically unique heroes awaits as you plot a course across an apocalyptic wonderland! Dogged at every step by a mysterious and power-hungry narrator (Will Stamper, "BattleBlock Theater"), you'll need to rally your troops and steel your wits if you hope to survive a hostile world filled with sinister electrobots, deadly vampires and brutally adorable cupcake people! Highlights of the Game: -Single player story mode -2 player co-op story mode (local & online) -Up to 4 players in PvP (online) -Daily Tournaments -Signature Behemoth art style & humor Full details on the latest status of the game, how you can give feedback and report issues can be found at www.pitpeople.com
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/ef4f5a20-66bd-4366-abe0-8388baf9f933/e09b6989-2057-4964-b9f2-869c69c320d8/73ef66ad-1ae0-4009-b63d-7e104617bb2d.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Darksiders III</h4>
            <p class="card-text">Unrated</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="10" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion10" aria-expanded="true" aria-controls="exampleAccordion10">
                  Description
                </a>
                <div id="exampleAccordion10" class="collapse" role="tabpanel">
                  <p class="mb-3 10">
                    Return to an apocalyptic Earth in Darksiders III, a hack-n-slash Action Adventure where players assume the role of FURY in her quest to hunt down and dispose of the Seven Deadly Sins. The most unpredictable and enigmatic of the Four Horsemen, FURY must succeed where many have failed – to bring balance to the forces that now ravage Earth. Darksiders III is the long-anticipated, third chapter in the critically-acclaimed Darksiders franchise. • Play as FURY - a mage who must rely on her whip and magic to restore the balance between good and evil on Earth! • Harness FURY’s magic to unleash her various forms – each granting her access to new weapons, moves and traversal abilities. • Explore an open-ended, living, free-form game world in which FURY moves back and forth between environments to uncover secrets while advancing the story. • Defeat the Seven Deadly Sins and their servants who range from mystical creatures to degenerated beings. • Sit in awe of Darksiders signature art style – expansive post-apocalyptic environments that take the player from the heights of heaven to the depths of hell, dilapidated by war and decay and overrun by nature.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/29e51aab-9641-4d8b-a93e-6214b5637e28/6205a94e-8bf6-4ff6-a232-a1fc8f48daf8/c1e98934-fec9-4a3f-9fb9-84f312f0e3f3.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Hand of the Gods: SMITE Tactics (BETA)</h4>
            <p class="card-text">Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="11" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion11" aria-expanded="true" aria-controls="exampleAccordion11">
                  Description
                </a>
                <div id="exampleAccordion11" class="collapse" role="tabpanel">
                  <p class="mb-3 11">
                    “Hearthstone and X-Com combine” - PCGamesN Collectible card games and turn-based strategy collide in Hand of the Gods: SMITE Tactics! Wage divine war by summoning the Gods to a full 3D battlefield. Move your forces into position, then unleash divine powers to defeat your foes. Can you Command the Gods? DIVINE BLEND OF CCG AND TBS It’s not what cards you play – it’s where you play them. Dominate the battlefield with your tactical brilliance. BRING YOUR CARDS TO LIFE You can’t contain a God in a flat, 2D card. Drag your cards onto the battleground and watch the Gods come to life in rich 3D. UNREAL ENGINE 4 POWERED Experience stunning 3D graphics, with FX and animations made possible by Unreal Engine 4. COMMAND THE GODS Which Pantheon will you lead into battle? Build your army from the legendary Gods of Greek, Roman, Norse, Chinese, and Egyptian mythology. FREE-TO-PLAY It’s free to play Hand of the Gods – and we’ll give you 4 Core Card Packs to open FREE when you finish the tutorial.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/9b99d0d2-a2d9-4258-8397-a881433b409c/390294f4-539e-40de-aee3-9a71f9088f78/a623814b-0df2-451c-9ddd-6b3b0a74578a.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Rush: A DisneyPixar Adventure</h4>
            <p class="card-text">Everyone 10+</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="12" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion12" aria-expanded="true" aria-controls="exampleAccordion12">
                  Description
                </a>
                <div id="exampleAccordion12" class="collapse" role="tabpanel">
                  <p class="mb-3 12">
                    "“Rush: A DisneyPixar Adventure,” invites families and fans of all ages to experience the worlds of six beloved Disney•Pixar films like never before. Team up with characters from “The Incredibles,” “Ratatouille,” “Up,” “Cars”, “Toy Story”, and “Finding Dory” to solve puzzles and uncover hidden secrets all remastered in 4K Ultra HD and HDR. You and your favorite Pixar character can interact on screen and play cooperatively to solve challenges. Move from fast-paced puzzle-solving to moments of pulse-pounding agility and speed."
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/dc1bc841-98c6-4289-865a-5fc08057c550/4d2ad921-3e60-4929-a2db-d1b722ad81cb/7abfef69-c8ff-491e-8c33-4d9ad0e46867.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">We Happy Few Digital Deluxe (Game Preview)</h4>
            <p class="card-text">Unrated</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="13" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion13" aria-expanded="true" aria-controls="exampleAccordion13">
                  Description
                </a>
                <div id="exampleAccordion13" class="collapse" role="tabpanel">
                  <p class="mb-3 13">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. The Deluxe Edition includes We Happy Few and the We Happy Few Season Pass. We Happy Few is the tale of a plucky bunch of moderately terrible people trying to escape from a lifetime of cheerful denial in the city of Wellington Wells. In this alternative 1960s England, conformity is key. You’ll have to fight or blend in with the drug-addled inhabitants, most of whom don’t take kindly to people who won’t abide by their not-so-normal rules. Discover the retrofuturistic city’s dark history as you play through the intertwined narratives of three quietly rebellious citizens of Wellington Wells. Each has their own strengths and weaknesses as they face their pasts, prepare for the future, and engage in activities that aren’t exactly status quo in the artificially enthused society. Save 15% when you pre-purchase We Happy Few, and get instant access to the game's alpha. This allows you to experience the introduction to Arthur's narrative, explore a portion of the procedurally generated world, collect and craft items, and choose how you’ll interact with members of the Joy-obsessed society through stealth, combat, or conformity across a handful of the game’s unique events. Plus, get the exclusive in-game Jolly Brolly weapon at launch. There’s a definite chance of pain when using this weaponized umbrella, complete with advanced blocking capabilities and trippy psychedelic interior. Full details on the latest status of the game, how you can give feedback and report issues can be found at www.wehappyfewgame.com.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/99cb4d8e-9f97-4933-b6e5-858c80229b4d/5b203180-e67b-41e6-a45a-65122f098819/06c8a8b1-fb8a-4bdc-a3b6-21d5edf4b62f.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">We Happy Few (Game Preview)</h4>
            <p class="card-text">Mature</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="14" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion14" aria-expanded="true" aria-controls="exampleAccordion14">
                  Description
                </a>
                <div id="exampleAccordion14" class="collapse" role="tabpanel">
                  <p class="mb-3 14">
                    This game is a work in progress. It may or may not change over time or release as a final product. Purchase only if you are comfortable with the current state of the unfinished game. We Happy Few is the tale of a plucky bunch of moderately terrible people trying to escape from a lifetime of cheerful denial in the city of Wellington Wells. In this alternative 1960s England, conformity is key. You’ll have to fight or blend in with the drug-addled inhabitants, most of whom don’t take kindly to people who won’t abide by their not-so-normal rules. Discover the retrofuturistic city’s dark history as you play through the intertwined narratives of three quietly rebellious citizens of Wellington Wells. Each has their own strengths and weaknesses as they face their pasts, prepare for the future, and engage in activities that aren’t exactly status quo in the artificially enthused society. Save 15% when you pre-purchase We Happy Few, and get instant access to the game's alpha. This allows you to experience the introduction to Arthur's narrative, explore a portion of the procedurally generated world, collect and craft items, and choose how you’ll interact with members of the Joy-obsessed society through stealth, combat, or conformity across a handful of the game’s unique events. Plus, get the exclusive in-game Jolly Brolly weapon at launch. There’s a definite chance of pain when using this weaponized umbrella, complete with advanced blocking capabilities and trippy psychedelic interior. Full details on the latest status of the game, how you can give feedback and report issues can be found at www.wehappyfewgame.com.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/abd0dcfd-2656-4c7d-b5f0-dbf097a0c9b7/8ed9d986-a32b-448f-941c-2275b5ac4de1/297e58ee-8ce1-4b58-a819-8c7d383214eb.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">The Crew® 2 - Standard Edition</h4>
            <p class="card-text">Rating Pending Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="15" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion15" aria-expanded="true" aria-controls="exampleAccordion15">
                  Description
                </a>
                <div id="exampleAccordion15" class="collapse" role="tabpanel">
                  <p class="mb-3 15">
                    Pre-order and get The Legendary Motors Pack which includes: - Mercedes-AMG C 63 Touring Car 2016 - HARLEY-DAVIDSON IRON 883TM 2017 In The Crew® 2, take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and adrenaline-pumping excitement of competing across the entire USA as you test your skills in a wide range of driving disciplines. Record every heart-pounding, asphalt-melting moment and share them with the simple push of a button - fame is yours to take! Play with up to7 other friends online.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/c7c2ddae-a1d3-481c-8686-0070862a9ac2/6e1f5ae0-af44-450e-9475-a1ced537e6ae/5d996e68-0562-4afd-983a-984be78c5588.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">The Crew® 2 Standard Edition</h4>
            <p class="card-text">Rating Pending Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="16" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion16" aria-expanded="true" aria-controls="exampleAccordion16">
                  Description
                </a>
                <div id="exampleAccordion16" class="collapse" role="tabpanel">
                  <p class="mb-3 16">
                    Pre-order and get The Legendary Motors Pack which includes: - Mercedes-AMG C 63 Touring Car 2016 - HARLEY-DAVIDSON IRON 883TM 2017 In The Crew® 2, take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and adrenaline-pumping excitement of competing across the entire USA as you test your skills in a wide range of driving disciplines. Record every heart-pounding, asphalt-melting moment and share them with the simple push of a button - fame is yours to take! Play with up to7 other friends online.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/dc588f06-0f32-4d1e-aa78-f4eb6c83b6e1/4b04e133-ad00-495d-8fd4-3fbebd6eff6f/8e7d7bb8-7410-411c-ae35-694375b374bc.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">THE CREW® 2 - Gold Edition</h4>
            <p class="card-text">Rating Pending Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="17" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion17" aria-expanded="true" aria-controls="exampleAccordion17">
                  Description
                </a>
                <div id="exampleAccordion17" class="collapse" role="tabpanel">
                  <p class="mb-3 17">
                    Pre-order and get The Legendary Motors Pack which includes: - Mercedes-AMG C 63 Touring Car 2016 - HARLEY-DAVIDSON IRON 883TM 2017 The Crew® 2 - Gold Edition features: - A 3-day early access on 13 March 2018 - Season Pass - The Crew® 2 Motorsports Deluxe Pack which has: - FORD F-150 RAPTOR RACE TRUCK 2017 - ABARTH 500 2008 MONSTER TRUCK EDITION - PILATUS PC-21 - 3 outfits to customize your avatar Take on the American motorsports scene as you explore and dominate the land, air, and sea across the entire USA. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and adrenaline-pumping excitement of competing across the entire USA as you test your skills in a wide range of driving disciplines. Record every heart-pounding moment and share them with the simple push of a button - fame is yours to take! Play with up to7 other friends online.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/7f350745-b829-4d25-bbef-a16fe6592512/322d3812-6e88-4de3-8f9c-1b9293f54693/b17f77cf-ef6d-4006-b3c4-fbed8d309f19.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">THE CREW® 2 - Deluxe Edition</h4>
            <p class="card-text">Rating Pending Teen</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="18" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion18" aria-expanded="true" aria-controls="exampleAccordion18">
                  Description
                </a>
                <div id="exampleAccordion18" class="collapse" role="tabpanel">
                  <p class="mb-3 18">
                    Pre-order and get The Legendary Motors Pack which includes: - Mercedes-AMG C 63 Touring Car 2016 - HARLEY-DAVIDSON IRON 883TM 2017 The Crew® 2 - Deluxe Edition features The Crew® 2 Motorsports Deluxe Pack which includes: - FORD F-150 RAPTOR RACE TRUCK 2017 - ABARTH 500 2008 MONSTER TRUCK EDITION - PILATUS PC-21 - 3 outfits to customize your avatar In The Crew® 2, take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created. With a wide variety of exotic cars, bikes, boats, and planes to choose from, experience the unbridled thrill and excitement of competing across the entire USA as you test your skills in a wide range of driving disciplines. Record every heart-pounding, moment and share them with the simple push of a button - fame is yours to take! Play with up to 7 friends online.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://dlassets-ssl.xboxlive.com/public/content/af735b59-8966-4550-b730-31c77cb32c60/c96ff979-9c2d-42e8-aa50-fbb77f0deac3/37348518-e8ff-484c-a9bd-6a73dcbcb34c.png" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">Pure Farming 2018</h4>
            <p class="card-text">Rating Pending Everyone</p> 
            <div id="exampleAccordion" data-children=".item">
              <div class="item">
                <a id="19" class="game-details-btn" data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion19" aria-expanded="true" aria-controls="exampleAccordion19">
                  Description
                </a>
                <div id="exampleAccordion19" class="collapse" role="tabpanel">
                  <p class="mb-3 19">
                    Pre-order the game and receive the following bonuses: - Germany Map - Exclusive Outfit Pack Pre-order Pure Farming 2018 to receive a brand-new map located in Germany and 3 exclusive outfits for your in-game character. FARMING GOES GLOBAL Use licensed machines to manage all aspects of modern farming, from cultivating land and growing crops, to breeding livestock and producing green energy. Travel between continents to plant region-specific crops such as hemp, cherries, and olives using dedicated vehicles. Farm your way with three modes tailored to both simulation veterans and newcomers to farming games.
                  </p>
                </div>
              </div>
            </div>
        </div>
   </div>`;
}

$(watchExampleBtn);