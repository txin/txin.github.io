// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Authors are listed in alphabetical order, unless stated otherwise.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-the-website-is-live",
          title: 'The website is live!',
          description: "",
          section: "News",},{id: "news-invited-to-the-ccs-2026-program-committee-applied-cryptography-track",
          title: 'Invited to the CCS 2026 program committee (applied cryptography track).',
          description: "",
          section: "News",},{id: "news-invited-to-the-iacr-cic-2026-editorial-board",
          title: 'Invited to the IACR CiC 2026 editorial board.',
          description: "",
          section: "News",},{id: "news-talk-proposal-sprinkle-differential-privacy-on-a-bit-of-everything-was-accepted-to-real-world-crypto-2026-looking-forward-to-visiting-taipei-in-march-2026-unfortunately-the-other-submission-on-learning-functionality-outputs-was-not-accepted",
          title: 'Talk proposal “Sprinkle Differential Privacy on a Bit of Everything” was accepted to...',
          description: "",
          section: "News",},{id: "news-started-a-new-position-at-the-university-of-glasgow-uk-back-in-the-uk-did-my-undergrad-in-bristol-but-this-time-in-scotland-feel-free-to-email-me-if-you-would-like-to-have-a-research-random-chat-and-are-around-definitely-recommend-the-fringe-festival-in-edinburgh-in-august-i-ve-been-there-twice-before-and-planning-to-travel-there-from-glasgow-again-this-time",
          title: 'Started a new position at the University of Glasgow, UK. Back in the...',
          description: "",
          section: "News",},];
