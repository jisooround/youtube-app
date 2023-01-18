import React, { useEffect, useState } from "react";
import { instance } from "../api";
import RelatedCard from "./RelatedCard";
import styled from "styled-components";

const myData = [
  {
    kind: "youtube#searchResult",
    etag: "GRuv7Grp6FaviVH8yWbbiCcig2w",
    id: { kind: "youtube#video", videoId: "uLxPN-J8WqA" },
    snippet: {
      publishedAt: "2022-03-04T00:28:44Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title: "Ionia: Why So Many Champions Are Overloaded | League of Legends",
      description:
        "AFTER TWO MONTHS WE FINALLY HAVE THE THIRD EPISODE OF MY LORE SERIES XD Sorry about that! I promise though this one's gonna be a banger! For today let's dive into the lore of Ionia and how its champions have a rather questionable definition of what \"balance\" is supposed to be.\n\nLeague of Legends Champion Lore/Factions Playlist: https://bit.ly/3FQpoBu\n\n~Check out my second channel!~ https://bit.ly/3HQN9ud\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (Aphrow)~\nTwitter: https://twitter.com/aphrew\nTwitch: https://www.twitch.tv/afrew\nYouTube: https://www.youtube.com/channel/UCOEcYMd0oCwNtpyLvTyFXtQ\nWebsite: https://www.aphediting.net/videoediting\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Ionia #Lore",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uLxPN-J8WqA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/uLxPN-J8WqA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/uLxPN-J8WqA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/uLxPN-J8WqA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/uLxPN-J8WqA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2022-03-04T00:28:44Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "p4erUavdn-Ec8pzcMRJodAyoKFQ",
    id: { kind: "youtube#video", videoId: "0Rqlq5p9QLs" },
    snippet: {
      publishedAt: "2023-01-16T16:05:04Z",
      channelId: "UCvzoHz_9Vym9HUJ3lNRfCcw",
      title: "Do You Remember The Champ So Bad You Got BANNED For Playing Her",
      description:
        "🕹Download for FREE: https://operagx.gg/Exil4  Join the millions of gamers optimizing their setup with the Opera GX browser. Sponsored by Opera GX!\n\n\nToday, let's talk about old league of legends, and talking about a champion that was so bad you risked getting your account banned just for playing her. The old Evelynn had such a low win rate and was so underpowered, she was a complete troll pick... This video was written, produced, edited, and voiced by Kellen (Exil)\n\n►Subscribe to the channel!!  http://bit.ly/2NlXg0q\n\n»» Business inquiries\nlolelderwood@gmail.com \n\nIf you enjoy the content and want to support me and see Video Editing tutorials, please check out my Patreon! https://www.patreon.com/exil22\n\nMusic in this video comes from Epidemic Sound and the Runescape 3 Soundtrack\n\n#league #proguides #leagueoflegends",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0Rqlq5p9QLs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0Rqlq5p9QLs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0Rqlq5p9QLs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/0Rqlq5p9QLs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/0Rqlq5p9QLs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Exil",
      liveBroadcastContent: "none",
      publishTime: "2023-01-16T16:05:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "oz4qtadkUwF892YRo2dlbo9CD3M",
    id: { kind: "youtube#video", videoId: "ISZFYY1kP4Q" },
    snippet: {
      publishedAt: "2022-10-25T04:21:23Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title:
        'Sion\'s Rework: Why He Was "Deleted" From The Game | League of Legends',
      description:
        "Sion's original design could very well be in the 5 WORST designed champions of all time. An identity split between equal parts physical damage auto attacker and magic damage AP bruiser(?) with neither being compatible with the other. As a result, Riot saw fit to discard virtually everything about old Sion and start fresh. In today's Rework Retrospective we're gonna look at their most ambitious Visual Gameplay Update done so far by that point.\n\nLeague of Legends Rework Retrospective Playlist: https://bit.ly/3yWdMsZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (Wik)~\nTwitter: https://twitter.com/Wikthe3rd\nYoutube: https://www.youtube.com/channel/UCNmB6swLTafxeO2PHs6XVSg\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Sion #Rework",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ISZFYY1kP4Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ISZFYY1kP4Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ISZFYY1kP4Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ISZFYY1kP4Q/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ISZFYY1kP4Q/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2022-10-25T04:21:23Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "_d1d-7Nso2OWvxTFtDEPPisxX-A",
    id: { kind: "youtube#video", videoId: "P_EuoNfA_yA" },
    snippet: {
      publishedAt: "2023-01-09T02:02:23Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title: "Warwick Rework: A Perfect Masterpiece | League of Legends",
      description:
        "Warwick's visual gameplay update rework has to be arguably one of if not the best rework ever performed, a process of turning otherwise extremely simple abilities into very interactive and satisfying abilities. Let's dive into Warwick's Rework: A Retrospective!\n\nLeague of Legends Rework Retrospective Playlist: https://bit.ly/3yWdMsZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (MeadowEdits)~\nTwitter: https://twitter.com/MeadowEdits\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Warwick #Rework",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/P_EuoNfA_yA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/P_EuoNfA_yA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/P_EuoNfA_yA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/P_EuoNfA_yA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/P_EuoNfA_yA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2023-01-09T02:02:23Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "IqC_ayy2a8mkfxg5Lu-j4RUCJdk",
    id: { kind: "youtube#video", videoId: "nFyaJqFIsuw" },
    snippet: {
      publishedAt: "2023-01-13T00:02:40Z",
      channelId: "UC5Yo88QF-chdugJbAnB2tUw",
      title: "The Science Behind the Unproblematic Nature of the Capybara",
      description:
        "1st video of 2023! Appreciate y'all being patient, as you can imagine, these videos aren’t exactly quick to make (but hopefully worth it).\n\nMusic from:\nLakey Inspired: A Walk on the Moon & Watching the Clouds\nRuneScape: Medieval\nSuper Smash Bros: Delfino Plaza & Molgera Battle\nHollow Knight: Greenpath\n\nTikTok: https://vm.tiktok.com/ZM8TDoghj/\nInstagram: https://www.instagram.com/mndiaye97/?...\n\nIf you’d like to support the channel and earn access to exclusive content, check out my Patreon below \nhttps://www.patreon.com/HoodNature\n\nSubscribe, turn on ALL post notifications and make sure to drink water and hug your mother",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nFyaJqFIsuw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/nFyaJqFIsuw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/nFyaJqFIsuw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/nFyaJqFIsuw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/nFyaJqFIsuw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Casual Geographic",
      liveBroadcastContent: "none",
      publishTime: "2023-01-13T00:02:40Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2zvRAGcHs04dtXFP9bKVErtESfo",
    id: { kind: "youtube#video", videoId: "kiKSqg0cfMA" },
    snippet: {
      publishedAt: "2022-11-18T10:04:55Z",
      channelId: "UCFl1mGlf5j0Qno1Kxnyv6FA",
      title: "15 INSANE MECHANICS You NEED to KNOW in League of Legends!",
      description:
        "►SPECIAL: https://www.skill-capped.com/lol/browse3/course/lkzr43492d/t4nk71qm79#mechanics\n►𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄: http://goo.gl/kGvFCu\n►𝐃𝐈𝐒𝐂𝐎𝐑𝐃: https://discord.gg/CBsV72B\n\nWhat is Skill Capped?\nSkill Capped has one goal in mind: help YOU become a BETTER player FAST! We create guides that ACTUALLY WORK by the TOP PROS and COACHES. We're so confident we can help you IMPROVE that we back it up with a RANK IMPROVEMENT GUARANTEE not found anywhere else!\n\nChapters:\n00:00 Intro\n1:48 Zone Mechanics\n14:38 Movement Mechanics\n20:05 Farming Mechanics\n25:35 Hidden Mechanics\n\n\nFollow Skill Capped at:\n►TikTok: https://www.tiktok.com/@skillcappedlol\n►FACEBOOK: https://www.facebook.com/skillcapped \n►TWITTER: https://twitter.com/skillcapped \n\n#lolguides​​ #leagueoflegends​​ #skillcapped #season12",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kiKSqg0cfMA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/kiKSqg0cfMA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/kiKSqg0cfMA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/kiKSqg0cfMA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/kiKSqg0cfMA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Skill Capped Challenger LoL Guides",
      liveBroadcastContent: "none",
      publishTime: "2022-11-18T10:04:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Wl6prnic8I31QozrfQAGK-LCt2A",
    id: { kind: "youtube#video", videoId: "vU2fEDRmyng" },
    snippet: {
      publishedAt: "2022-12-05T15:21:57Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title: "The History Of The Most TOXIC Metas In League of Legends",
      description:
        "~SPONSOR~ Check out my new line of gaming PC's that were made with the help of Apex! By using my code VARS you can get up to 250$ off your first purchase! https://apexpartner.app/redirect/vars \n\nIt's been almost 13 years since League of Legends was officially released. To commemorate this, I decided to look back through the game's history and reminisce over some of the worst, most toxic metas we've had to go through and see how they shaped the game's future!\n\nLeague of Legends Discussion Playlist: https://bit.ly/3dzJuUZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (MeadowEdits)~\nTwitter: https://twitter.com/MeadowEdits\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Meta #History",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vU2fEDRmyng/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vU2fEDRmyng/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vU2fEDRmyng/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/vU2fEDRmyng/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/vU2fEDRmyng/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2022-12-05T15:21:57Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "vjV8rWJXSPIKmcPzj5_0hhvTV30",
    id: { kind: "youtube#video", videoId: "fQlUt2ciHS0" },
    snippet: {
      publishedAt: "2021-03-05T04:21:56Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title:
        "Should Untargetability Be Removed From The Game? | League of Legends",
      description:
        "Another discussion video! This time talking about my thoughts on Untargetability in League of Legends. Is it balanced? Is it fair? Is it overpowered? Is it bad for the game? Should it stay? Should it be removed?\n\n~Timestamps~\n(0:00) - Introduction\n(3:38) - Part One: Untargetability is Good?\n(8:09) - Part Two: Untargetability is Bad?\n\nLeague of Legends Discussion Playlist: https://bit.ly/3dzJuUZ\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Contact Links~\nDiscord: https://bit.ly/33M2iev\nTwitter: https://bit.ly/3kv7CZU\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://tofugraphics.carbonmade.com/\n\n#LoL #Untargetability #Discussion",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fQlUt2ciHS0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fQlUt2ciHS0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fQlUt2ciHS0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/fQlUt2ciHS0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/fQlUt2ciHS0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2021-03-05T04:21:56Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kULfvK1R8mmr14ZrA571OPNIAPU",
    id: { kind: "youtube#video", videoId: "YPq5aQxskcs" },
    snippet: {
      publishedAt: "2022-04-22T03:07:17Z",
      channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
      title: "Yorick's Rework: Was It A Failure? | League of Legends",
      description:
        "Welcome back to another episode of the Rework Retrospective series! Today we're gonna be discussing Yorick: The Sheppard of Souls. Arguably the LEAST played champion of all time in his previous iteration and... kind of still the same with his current one too. Was it a failed rework?\n\nLeague of Legends Rework Retrospective Playlist: https://bit.ly/3yWdMsZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (MeadowEdits)~\nTwitter: https://twitter.com/MeadowEdits\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Yorick #Rework",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YPq5aQxskcs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/YPq5aQxskcs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/YPq5aQxskcs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/YPq5aQxskcs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/YPq5aQxskcs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vars",
      liveBroadcastContent: "none",
      publishTime: "2022-04-22T03:07:17Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "hPqwg5vYuS9g49Ex74_p45BpSko",
    id: { kind: "youtube#video", videoId: "POVEOmjcZwI" },
    snippet: {
      publishedAt: "2022-03-12T16:26:55Z",
      channelId: "UCQHX6ViZmPsWiYSFAyS0a3Q",
      title: "700 Elo Chess - 19 BLUNDERS!!",
      description:
        "➡️ Get My Chess Courses:  https://www.chessly.com/\nTwo 700s created this masterpiece. \n\n➡️ Start Playing Chess FOR FREE: http://bit.ly/3Xa3EsB\n\n➡️ Enjoy my videos? Donate Here : https://www.paypal.me/gothamchess\n\nCheck out my new Cookies and Cream Cold Brew from Madrinas! Don’t forget to use code “GOTHAM” at checkout to save 20% off your order: https://madrinas.coffee/gothamchess\n\n⭐️ Follow Me If You Are Amazing:\n➡️ TWITCH:  https://www.twitch.tv/gothamchess\n➡️ TIKTOK: https://www.tiktok.com/@levyrozman\n➡️ CAMEO: https://www.cameo.com/gothamchess\n➡️ TWITTER: https://twitter.com/gothamchess\n➡️ INSTAGRAM: https://www.instagram.com/gothamchess/\n➡️ GOTHAM DISCORD:   https://discord.gg/f2ETqcWKdt\n\n➡️ THUMBNAILS BY: http://instagram.com/jojochessnoob",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/POVEOmjcZwI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/POVEOmjcZwI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/POVEOmjcZwI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/POVEOmjcZwI/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/POVEOmjcZwI/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "GothamChess",
      liveBroadcastContent: "none",
      publishTime: "2022-03-12T16:26:55Z",
    },
  },
];

interface GetVideoFnc{
  (
    videoId: string,
    setState: (value: React.SetStateAction<any>) => void,
  ): void;
};

type Props = { videoId: string };
 
function RelatedVideo({videoId}:Props){

  const [data, setData] = useState<IData | null>(null);

  const getVideoData:GetVideoFnc = async (videoId:string, setData) => {
    const res = await instance.get(
      `/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`,
    );
    setData(res.data.items);
  };

  useEffect(() => {
    getVideoData(videoId, setData);
    console.log(typeof(videoId))
    // setData(myData);
  }, [videoId]);

  return (
    <RelatedList>
      {data?.map((item) => (
        <RelatedCard key={item.id.videoId} item={item} />
      ))}
    </RelatedList>
  );
}

const RelatedList = styled.div`
  max-width: 400px;
`;

export type IData = Root2[];

export interface Root2 {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export default RelatedVideo;
