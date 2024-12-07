import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Dive into the world of music.",
        "Capturing soulful melodies.",
        "Showcasing Cameroon’s finest talent.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: [
        "Laughter, unlimited.",
        "The home of Cameroon's rising comedians.",
        "Spreading joy through creative comedy.",
      ],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Empowering beauty and fashion.",
        "A platform for aspiring models.",
        "Showcasing elegance and talent.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: [
        "Multiprime, where creativity meets innovation.",
        "Redefining multimedia in Cameroon.",
        "Your gateway to entertainment and art.",
      ],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];