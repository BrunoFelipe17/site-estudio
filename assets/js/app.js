// window.onload = function () {
//   const iframeInstagram = document.querySelector("iframe");
//   console.log(iframeInstagram);
//   // iframeInstagram.innerHTML += "<style>.css-11cewt9 {display: none}</style>";
// };

(function () {
  new InstagramFeed({
    username: "estudiokarlabruna",
    container: document.getElementById("instagram-feed"),
    display_profile: true,
    display_biography: true,
    display_gallery: true,
    display_captions: true,
    max_tries: 8,
    callback: null,
    styling: true,
    items: 8,
    items_per_row: 4,
    margin: 1,
    lazy_load: true,
    on_error: console.error,
  });
})();
