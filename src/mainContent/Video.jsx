import { useEffect, useState } from "react"
import { url, VideoContainer } from "../assets"

import { Link } from "react-router-dom";



const Video = () => {


  // const dummyData =
  //   [
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "O_f9eMewdRTfxdpFvHZXWCvFHx0",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "De7Txvsn8kg"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-08-18T23:00:04Z",
  //         "channelId": "UCu24exFs7T594W4qAXNtiJA",
  //         "title": "How to Sprout Lentils &amp; Beans",
  //         "description": "Sprouted Mung Beans & Bread Sliced Bagels for Toast! Full recipe is on my IG (website coming soon!)",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/De7Txvsn8kg/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/De7Txvsn8kg/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/De7Txvsn8kg/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "rootedinspice",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-08-18T23:00:04Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "oRYL0ccQzrA0rWziErOiRD8XWVc",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "Z7WSbF_rKU8"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-09-02T12:28:55Z",
  //         "channelId": "UCQ7x25F6YXY9DvGeHFxLhRQ",
  //         "title": "Shfa Healthy food شفا و الأكل الصحي",
  //         "description": "",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/Z7WSbF_rKU8/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/Z7WSbF_rKU8/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/Z7WSbF_rKU8/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "shfa2 - شفا",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-09-02T12:28:55Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "r9AjQ1Hwl4ALF4Q-vQlk81X5ugE",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "RS4Fl_7BryE"
  //       },
  //       "snippet": {
  //         "publishedAt": "2023-05-22T22:24:43Z",
  //         "channelId": "UCUT1S-W5BIBUu_vzwhyGNVg",
  //         "title": "Bazen yanlış oturursun 😳💈",
  //         "description": "",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/RS4Fl_7BryE/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/RS4Fl_7BryE/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/RS4Fl_7BryE/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "ÖMER POLAT",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2023-05-22T22:24:43Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "Otj88URcwPkhruA3zF7nD_0lHEY",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "M9B75shO18M"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-04-26T16:00:22Z",
  //         "channelId": "UCiNqkJzyd_5qNm7jw_FcJqw",
  //         "title": "The easiest steps to fight the climate changes! #short #shorts",
  //         "description": "Link to all the products I use: → Soil: https://www.plantgrow.co.uk/ → Bokashi Grains (Use code Spicymoustache for 10% ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/M9B75shO18M/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/M9B75shO18M/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/M9B75shO18M/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Spicy Moustache",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-04-26T16:00:22Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "7infX70PXksJA2mk9ftIMxlcR1c",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "Rg3Xi5MwfGI"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-04-19T15:00:22Z",
  //         "channelId": "UCpWl2nwLDQQI4TTa1kJgxrg",
  //         "title": "How To Keep Cats From Scratching Furniture | Chewtorials",
  //         "description": "Learn More: https://be.chewy.com/how-to-keep-cats-from-scratching-furniture/ Cats need to scratch, and they love surfaces with ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/Rg3Xi5MwfGI/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/Rg3Xi5MwfGI/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/Rg3Xi5MwfGI/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Chewy",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-04-19T15:00:22Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "g6X6TqXsBgjOh4ws8jKX01Vp8Sw",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "GdFCKLlPM3o"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-11-09T17:40:31Z",
  //         "channelId": "UCHranSHHa1qo6Pg4JStkL7Q",
  //         "title": "How to open the BIOS on your HP computer | HP Support",
  //         "description": "Learn how to access your HP computer BIOS menu with either a hotkey at startup or through Windows 8, 10, or 11 navigation.",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/GdFCKLlPM3o/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/GdFCKLlPM3o/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/GdFCKLlPM3o/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "HP Support",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-11-09T17:40:31Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "jtA_XiaQCF9XhesntIdYft20JTA",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "nj5g_TWsBIs"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-05-30T16:07:23Z",
  //         "channelId": "UCh8gHdtzO2tXd593_bjErWg",
  //         "title": "Why I post videos of myself cooking to tell stories",
  //         "description": "shorts #pasta This is a myungranjeot (korean)/ mentaiko (japanese) cream pasta. It's pollock roe, and it's salty, fishy, and filled with ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/nj5g_TWsBIs/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/nj5g_TWsBIs/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/nj5g_TWsBIs/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Doobydobap",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-05-30T16:07:23Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "b4g140Jd5dI9t8lt8fPn-CcY7As",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "gddm8FRcxgI"
  //       },
  //       "snippet": {
  //         "publishedAt": "2020-09-25T20:51:59Z",
  //         "channelId": "UCtg2PZwo-2nePaZiYP3S2-w",
  //         "title": "Save Time And Money With Small Business Insurance | biBERK",
  //         "description": "Get small business insurance to save you time and money. If you're a small business owner, it may be tough to know what exactly ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/gddm8FRcxgI/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/gddm8FRcxgI/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/gddm8FRcxgI/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "biBerk Business Insurance",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2020-09-25T20:51:59Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "lMbnTnp4R9dY2qidnoc2az_Y1oM",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "tjeC5gfk8j0"
  //       },
  //       "snippet": {
  //         "publishedAt": "2023-05-20T14:02:44Z",
  //         "channelId": "UCz3SqBvF4w4_Dc5ez1iGcLg",
  //         "title": "Underwater Speed Trial: Catching a Ball in Swim Fins😆 #footbot #swimming",
  //         "description": "",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/tjeC5gfk8j0/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/tjeC5gfk8j0/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/tjeC5gfk8j0/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "FOOTBOT",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2023-05-20T14:02:44Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "w2DKxFPWwUyDTpZp5gvxZ51MGCo",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "ox7dPXDskDg"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-10-19T17:09:43Z",
  //         "channelId": "UCEUjQaO_TK3aIn24xDy7cNQ",
  //         "title": "Reliable Hyundai October Buying 101",
  //         "description": "View More Online: http://www.reliablehyundai.com Facebook: http://fb.me/reliableimports Twitter: http://twitter.com/reliableimports.",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/ox7dPXDskDg/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/ox7dPXDskDg/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/ox7dPXDskDg/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Reliable Hyundai",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-10-19T17:09:43Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "6amZR0d5pvD_dlkIXwYqc64vaSE",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "-nJkAJpQemI"
  //       },
  //       "snippet": {
  //         "publishedAt": "2020-09-29T11:58:37Z",
  //         "channelId": "UCJxpinj00bmXpJASi0_muuA",
  //         "title": "How to Do: BICYCLE CRUNCHES",
  //         "description": "Subscribe to our channel to get more videos This exercise works your internal and external obliques. Follow our coach to ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/-nJkAJpQemI/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/-nJkAJpQemI/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/-nJkAJpQemI/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Leap Fitness",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2020-09-29T11:58:37Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "DUGur6lmFZUL_frbITDaK1ma4m4",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "Fd-sfXg9MV0"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-02-12T09:48:24Z",
  //         "channelId": "UCFxdkQaoSw7tbFTFcTYzGLw",
  //         "title": "Kisco - Steel Making Process",
  //         "description": "Kisco steel manufacturing customised Alloy Steel visit our website www.kiscosteel.com For enquiry email at ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/Fd-sfXg9MV0/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/Fd-sfXg9MV0/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/Fd-sfXg9MV0/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Kiscosteel",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-02-12T09:48:24Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "KkptIBcnsuPaSp-6kiDo1yc6gQk",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "O7s43SPQr_I"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-05-27T16:21:34Z",
  //         "channelId": "UCRiWwWPjvwDcH8NxFTKKxTQ",
  //         "title": "Making a resin keychain with a resin foil #shorts",
  //         "description": "Thanks for watching my making a resin Keychain with resin foils video. Be sure to subscribe and go check out a few more of my ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/O7s43SPQr_I/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/O7s43SPQr_I/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/O7s43SPQr_I/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Naptime Creations",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-05-27T16:21:34Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "59770Om5xKJSP4GCjmjM09vzG-U",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "NyvyfR6JiNs"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-10-03T04:42:31Z",
  //         "channelId": "UC0fr7L8Q0W0_Nsn6uv7fpzA",
  //         "title": "Amazing tools!😍Smart appliances, Home cleaning/ Inventions for the kitchen  tiktok 🙏 P-324 #Shorts",
  //         "description": "",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/NyvyfR6JiNs/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/NyvyfR6JiNs/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/NyvyfR6JiNs/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Amazing tools",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-10-03T04:42:31Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "4djYcq4h8K57nZUPkWvEHyDRALE",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "mAj2CVOKBvs"
  //       },
  //       "snippet": {
  //         "publishedAt": "2019-04-05T13:11:16Z",
  //         "channelId": "UC9o2FUnuot8BFPrnObFSCuw",
  //         "title": "Greenmood - Natural Acoustic Solutions",
  //         "description": "Born in the heart of Europe, Greenmood introduces a new, revolutionary plant design concept to create healthy and happy work + ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/mAj2CVOKBvs/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/mAj2CVOKBvs/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/mAj2CVOKBvs/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Greenmood HQ",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2019-04-05T13:11:16Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "XNZhPdZ9-40U_uaPU5i0DasHKOs",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "dKsazCjwu5U"
  //       },
  //       "snippet": {
  //         "publishedAt": "2018-04-13T16:39:06Z",
  //         "channelId": "UClSOWj5Vc6ICxhGTdPVsQcQ",
  //         "title": "Ship Sticks: Send Your Golf Clubs Ahead",
  //         "description": "Imagine traveling hassle-free with your golf clubs. Now you can with ShipSticks.com. No more lugging your clubs through the ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/dKsazCjwu5U/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/dKsazCjwu5U/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/dKsazCjwu5U/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Ship Sticks",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2018-04-13T16:39:06Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "Bas3C3SrVrmMv-fb3uGwUCWacm4",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "HnwkBdeb6U4"
  //       },
  //       "snippet": {
  //         "publishedAt": "2022-01-04T15:10:00Z",
  //         "channelId": "UC8JfkMtNAp44vmzdtnL4wow",
  //         "title": "SCP-682 VS SCP-702",
  //         "description": "SCP-682 VS SCP-702 is a face-off between The Hard to Kill Reptile and The Trader's Residence. Who will win? Watch and find ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/HnwkBdeb6U4/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/HnwkBdeb6U4/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/HnwkBdeb6U4/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "SCP Explained - Story & Animation",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2022-01-04T15:10:00Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "TPmC-jZs4MPfcdpC4SRqbeBnMzk",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "6Ms6E2IdlzE"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-10-10T12:47:39Z",
  //         "channelId": "UCZSlfzadjnw7G419c_OJ9eg",
  //         "title": "3 Best new HIDDEN iPhone features! 💥",
  //         "description": "Do consider subscribing to my Shorts Channel! Main Mrwhosetheboss YouTube Channel: ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/6Ms6E2IdlzE/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/6Ms6E2IdlzE/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/6Ms6E2IdlzE/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Mrwhosetheboss Shorts",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-10-10T12:47:39Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "jg4kQB1AMXwqZZoW9hHzssJdxqM",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "Wh-72VktwZQ"
  //       },
  //       "snippet": {
  //         "publishedAt": "2021-03-22T13:55:51Z",
  //         "channelId": "UC_ruB7qtdk4KufASPRuWhZA",
  //         "title": "Burpees are Dumb. Do This Instead.",
  //         "description": "Try a Free Strength & Agility Workout: https://get.gmb.io/reboot/ Some people are gonna get mad at this video... That's fine - feel ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/Wh-72VktwZQ/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/Wh-72VktwZQ/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/Wh-72VktwZQ/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "GMB Fitness",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2021-03-22T13:55:51Z"
  //       }
  //     },
  //     {
  //       "kind": "youtube#searchResult",
  //       "etag": "fm3X75tVu7UZPG5BRPQnICnnO1s",
  //       "id": {
  //         "kind": "youtube#video",
  //         "videoId": "YYJ15CRX8Vo"
  //       },
  //       "snippet": {
  //         "publishedAt": "2024-04-28T10:30:00Z",
  //         "channelId": "UCim0ZIz8SAQGPvg4mJHG3JA",
  //         "title": "The ONE time Ranbir Kapoor got HIT by his dad! 😳😱 #TheGreatIndianKapilShow",
  //         "description": "Watch The Great Indian Kapil Show, streaming on Netflix. Watch on Netflix: https://www.netflix.com/title/81737431 Follow Netflix ...",
  //         "thumbnails": {
  //           "default": {
  //             "url": "https://i.ytimg.com/vi/YYJ15CRX8Vo/default.jpg",
  //             "width": 120,
  //             "height": 90
  //           },
  //           "medium": {
  //             "url": "https://i.ytimg.com/vi/YYJ15CRX8Vo/mqdefault.jpg",
  //             "width": 320,
  //             "height": 180
  //           },
  //           "high": {
  //             "url": "https://i.ytimg.com/vi/YYJ15CRX8Vo/hqdefault.jpg",
  //             "width": 480,
  //             "height": 360
  //           }
  //         },
  //         "channelTitle": "Netflix India Shorts",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2024-04-28T10:30:00Z"
  //       }
  //     }
  //   ]
  

  const [videoList, setVideoList] = useState([]);

  const data = async () => {

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setVideoList(json?.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }




  useEffect(() => {
    // data();
  }, []);





  return videoList
    ?
    <ul className=" p-2 flex flex-row flex-wrap justify-between ">
      {videoList.map((video) => {

        const id = video.id.videoId;
        const  snippet  = video.snippet 

        {/* console.log(video); */ }
        
        return <Link to={"/watch?v=" + id} key={id}> <VideoContainer data={snippet} key={id} /> </Link>
      })}
    </ul>
    : 
    <div></div>
}
export default Video