import {
  FETCH_MANGA,
  FETCH_MANGA_ERROR,
  FETCH_MANGA_SUCCESS,
  FETCH_TOPMANGA_SUCCESS,
} from "../actions/mangaListActions";

const initialState = {
  mangas: [
    // {
    //   "request_hash": "request:manga:99e40de5a4ebdd8ac67fa4fb4423372333200888",
    //   "request_cached": true,
    //   "request_cache_expiry": 17584,
    //   "mal_id": 990,
    //   "url": "https://myanimelist.net/manga/990/Brother",
    //   "title": "Brother",
    //   "title_english": "Brother",
    //   "title_synonyms": [

    //   ],
    //   "title_japanese": "BROTHER",
    //   "status": "Finished",
    //   "image_url": "https://cdn.myanimelist.net/images/manga/1/5465.jpg",
    //   "type": "Manga",
    //   "volumes": 2,
    //   "chapters": 10,
    //   "publishing": false,
    //   "published": {
    //     "from": "2004-04-10T00:00:00+00:00",
    //     "to": "2006-02-10T00:00:00+00:00",
    //     "prop": {
    //       "from": {
    //         "day": 10,
    //         "month": 4,
    //         "year": 2004
    //       },
    //       "to": {
    //         "day": 10,
    //         "month": 2,
    //         "year": 2006
    //       }
    //     },
    //     "string": "Apr  10, 2004 to Feb  10, 2006"
    //   },
    //   "rank": null,
    //   "score": 7.37,
    //   "scored_by": 2026,
    //   "popularity": 3191,
    //   "members": 3741,
    //   "favorites": 13,
    //   "synopsis": "Asuka Momoki, an employee at a major advertising company, has a secret. He's 22 years old, impotent, and still a virgin. The existence of Asuka's younger step-brother Yui has a lot to do with it. Asuka and Yui were the best of friends until an unfortunate incident one summer's day. Ever since then, Yui has avoided Asuka at all costs, even going so far as to leave Japan and study in America. A successful tennis player, Yui no longer needs a big brother, so where does that leave poor Asuka? What happens when brotherly love transforms into something more?",
    //   "background": null,
    //   "related": {

    //   },
    //   "genres": [
    //     {
    //       "mal_id": 8,
    //       "type": "manga",
    //       "name": "Drama",
    //       "url": "https://myanimelist.net/manga/genre/8/Drama"
    //     },
    //     {
    //       "mal_id": 22,
    //       "type": "manga",
    //       "name": "Romance",
    //       "url": "https://myanimelist.net/manga/genre/22/Romance"
    //     },
    //     {
    //       "mal_id": 33,
    //       "type": "manga",
    //       "name": "Yaoi",
    //       "url": "https://myanimelist.net/manga/genre/33/Yaoi"
    //     }
    //   ],
    //   "authors": [
    //     {
    //       "mal_id": 2742,
    //       "type": "people",
    //       "name": "Ougi, Yuzuha",
    //       "url": "https://myanimelist.net/people/2742/Yuzuha_Ougi"
    //     }
    //   ],
    //   "serializations": [
    //     {
    //       "mal_id": 131,
    //       "type": "manga",
    //       "name": "Gush",
    //       "url": "https://myanimelist.net/manga/magazine/131/Gush"
    //     }
    //   ]
    // },
    // {
    //   "request_hash": "request:manga:cee81dfd346cf82d6144b48c5f9d109e1daa44ee",
    //   "request_cached": true,
    //   "request_cache_expiry": 319296,
    //   "mal_id": 10,
    //   "url": "https://myanimelist.net/manga/10/xxxHOLiC",
    //   "title": "xxxHOLiC",
    //   "title_english": "xxxHOLiC",
    //   "title_synonyms": [
    //     "xxxHolic Rou",
    //     "xxxHolic Cage"
    //   ],
    //   "title_japanese": "xxxHOLiC",
    //   "status": "Finished",
    //   "image_url": "https://cdn.myanimelist.net/images/manga/3/217533.jpg",
    //   "type": "Manga",
    //   "volumes": 19,
    //   "chapters": 213,
    //   "publishing": false,
    //   "published": {
    //     "from": "2003-02-24T00:00:00+00:00",
    //     "to": "2011-02-09T00:00:00+00:00",
    //     "prop": {
    //       "from": {
    //         "day": 24,
    //         "month": 2,
    //         "year": 2003
    //       },
    //       "to": {
    //         "day": 9,
    //         "month": 2,
    //         "year": 2011
    //       }
    //     },
    //     "string": "Feb  24, 2003 to Feb  9, 2011"
    //   },
    //   "rank": 163,
    //   "score": 8.4,
    //   "scored_by": 27625,
    //   "popularity": 118,
    //   "members": 61996,
    //   "favorites": 4898,
    //   "synopsis": "Living alone after his parents passed away, Kimihiro Watanuki is a high school student who can see otherworldly creatures that are attracted to him. His days are plagued by these nuisances, and he wishes to rid himself of this inconvenience. One fateful day, as Kimihiro is being chased by a horde of spirits, his feet bring him into a mysterious store to seek shelter. Here he meets Yuuko Ichihara, the mistress of this supposed store, who claims to be able to grant wishes. Yuuko offers to grant Kimihiro's, as long as he pays an appropriate price. Thus begins Kimihiro's time working in her store to earn the payment necessary for his wish. In Yuuko's employ, he must become further involved with spirits and the supernatural before he can leave that world behind. How will he fare in the inexplicable encounters that await him? [Written by MAL Rewrite]",
    //   "background": "xxxHOLiC was previously serialized in Young Magazine, but moved to  in June 2010.\r\n\r\nThe series was released in English by the now defunct Del Rey from April 27, 2004 to February 21, 2012. Kodansha Comics USA has republished the series in an omnibus edition from March 18, 2014 to September 8, 2015 the final two volumes were 2-in-1, while the previous were all 3-in-1. It was also published in Spanish by Norma Editorial from July 2004 to October 2011.",
    //   "related": {
    //     "Other": [
    //       {
    //         "mal_id": 16010,
    //         "type": "manga",
    //         "name": "K-Dash",
    //         "url": "https://myanimelist.net/manga/16010/K-Dash"
    //       },
    //       {
    //         "mal_id": 9,
    //         "type": "manga",
    //         "name": "Tsubasa: RESERVoir CHRoNiCLE",
    //         "url": "https://myanimelist.net/manga/9/Tsubasa__RESERVoir_CHRoNiCLE"
    //       },
    //       {
    //         "mal_id": 32037,
    //         "type": "manga",
    //         "name": "Drug & Drop",
    //         "url": "https://myanimelist.net/manga/32037/Drug___Drop"
    //       }
    //     ],
    //     "Spin-off": [
    //       {
    //         "mal_id": 14368,
    //         "type": "manga",
    //         "name": "Shiritsu Horitsuba Gakuen",
    //         "url": "https://myanimelist.net/manga/14368/Shiritsu_Horitsuba_Gakuen"
    //       }
    //     ],
    //     "Side story": [
    //       {
    //         "mal_id": 10183,
    //         "type": "manga",
    //         "name": "xxxHOLiC: AnotherHOLiC",
    //         "url": "https://myanimelist.net/manga/10183/xxxHOLiC__AnotherHOLiC"
    //       }
    //     ],
    //     "Sequel": [
    //       {
    //         "mal_id": 46010,
    //         "type": "manga",
    //         "name": "xxxHOLiC: Rei",
    //         "url": "https://myanimelist.net/manga/46010/xxxHOLiC__Rei"
    //       }
    //     ],
    //     "Adaptation": [
    //       {
    //         "mal_id": 3091,
    //         "type": "anime",
    //         "name": "xxxHOLiC Kei",
    //         "url": "https://myanimelist.net/anime/3091/xxxHOLiC_Kei"
    //       },
    //       {
    //         "mal_id": 6864,
    //         "type": "anime",
    //         "name": "xxxHOLiC Rou",
    //         "url": "https://myanimelist.net/anime/6864/xxxHOLiC_Rou"
    //       },
    //       {
    //         "mal_id": 4918,
    //         "type": "anime",
    //         "name": "xxxHOLiC Shunmuki",
    //         "url": "https://myanimelist.net/anime/4918/xxxHOLiC_Shunmuki"
    //       },
    //       {
    //         "mal_id": 861,
    //         "type": "anime",
    //         "name": "xxxHOLiC",
    //         "url": "https://myanimelist.net/anime/861/xxxHOLiC"
    //       }
    //     ]
    //   },
    //   "genres": [
    //     {
    //       "mal_id": 4,
    //       "type": "manga",
    //       "name": "Comedy",
    //       "url": "https://myanimelist.net/manga/genre/4/Comedy"
    //     },
    //     {
    //       "mal_id": 7,
    //       "type": "manga",
    //       "name": "Mystery",
    //       "url": "https://myanimelist.net/manga/genre/7/Mystery"
    //     },
    //     {
    //       "mal_id": 8,
    //       "type": "manga",
    //       "name": "Drama",
    //       "url": "https://myanimelist.net/manga/genre/8/Drama"
    //     },
    //     {
    //       "mal_id": 16,
    //       "type": "manga",
    //       "name": "Magic",
    //       "url": "https://myanimelist.net/manga/genre/16/Magic"
    //     },
    //     {
    //       "mal_id": 37,
    //       "type": "manga",
    //       "name": "Supernatural",
    //       "url": "https://myanimelist.net/manga/genre/37/Supernatural"
    //     },
    //     {
    //       "mal_id": 41,
    //       "type": "manga",
    //       "name": "Seinen",
    //       "url": "https://myanimelist.net/manga/genre/41/Seinen"
    //     }
    //   ],
    //   "authors": [
    //     {
    //       "mal_id": 1877,
    //       "type": "people",
    //       "name": "CLAMP",
    //       "url": "https://myanimelist.net/people/1877/CLAMP"
    //     }
    //   ],
    //   "serializations": [
    //     {
    //       "mal_id": 10,
    //       "type": "manga",
    //       "name": "Young Magazine (Weekly)",
    //       "url": "https://myanimelist.net/manga/magazine/10/Young_Magazine_Weekly"
    //     }
    //   ]
    // }
  ],
  topMangaList: [
    // {
    //   "mal_id": 2,
    //   "rank": 1,
    //   "title": "Berserk",
    //   "url": "https://myanimelist.net/manga/2/Berserk",
    //   "type": "Manga",
    //   "volumes": null,
    //   "start_date": "Aug 1989",
    //   "end_date": null,
    //   "members": 308868,
    //   "score": 9.34,
    //   "image_url": "https://cdn.myanimelist.net/images/manga/1/157931.jpg?s=8402b7b8190fa92d679a72d7f8c68152"
    // },
    // {
    //   "mal_id": 1706,
    //   "rank": 2,
    //   "title": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
    //   "url": "https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run",
    //   "type": "Manga",
    //   "volumes": 24,
    //   "start_date": "Jan 2004",
    //   "end_date": "Apr 2011",
    //   "members": 104098,
    //   "score": 9.22,
    //   "image_url": "https://cdn.myanimelist.net/images/manga/3/179882.jpg?s=dac8109140406ca296cf4946296b5037"
    // },
    // {
    //   "mal_id": 25,
    //   "rank": 3,
    //   "title": "Fullmetal Alchemist",
    //   "url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist",
    //   "type": "Manga",
    //   "volumes": 27,
    //   "start_date": "Jul 2001",
    //   "end_date": "Sep 2010",
    //   "members": 201779,
    //   "score": 9.12,
    //   "image_url": "https://cdn.myanimelist.net/images/manga/1/27600.jpg?s=9d0238ae01b9fbab777e64b023b7d654"
    // }
  ],
  loadingManga: true,
  errorMessage: ""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANGA:
      console.log("FETCH_MANGA from reducers")
      return {
        ...state,
        loadingManga: true
      }
    case FETCH_TOPMANGA_SUCCESS:
      console.log("FETCH_TOPMANGA_SUCCESS from reducers")
      return {
        ...state,
        topMangaList: action.payload,
        loadingManga: false
      };
      case FETCH_MANGA_ERROR:
        console.log("FETCH_MANGA_ERROR from reducers", action.payload)
        return {
          ...state,
          loadingManga: false,
          errorMessage: `${action.payload.status} error: ${action.payload.message}`
          // Eventual production error message, more useful/entertaining to users:
          // errorMessage: "Oops, we dropped it water, please try again shortly or leave a message shaming us for ruining was was a previously glorious day. ...oh, I should make a way to contact us..."
        };
    default :
      return state;
  }
}