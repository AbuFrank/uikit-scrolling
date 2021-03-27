// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a sytring without modifying original string
//offsetTop - A Number, representing the top poition of the element, in pixels

// ******** set date ********
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + ". ";

// ******** load video ********
const videoContainer = document.getElementById("video-container");

let screenType;
let screenWidth;
const getScreenWidth = () => {
  console.log("getScreenWidth Running");
  screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 720 && screenType !== "desktop") {
    screenType = "desktop";
    videoContainer.innerHTML = `
      <video
        src="images/adventure-desktop.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video>`;
    window.removeEventListener("resize", getScreenWidth);
  } else if (screenType !== "mobile") {
    screenType = "mobile";
    videoContainer.innerHTML = `
      <video
        src="images/adventure-mobile.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video>`;
  }
  console.log("screenType: ", screenType);
};
getScreenWidth();
window.addEventListener("resize", getScreenWidth);
// ******** fixed navbar ********

// ******** smooth scroll ********
