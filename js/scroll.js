// ******** set date ********
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear() + ". ";

// ******** load video ********
const videoContainer = document.getElementById("video-container");

let screenType;
let screenWidth;
const getScreenWidth = () => {
  screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 720 && screenType !== "desktop") {
    screenType = "desktop";
    // load desktop video
    videoContainer.innerHTML = `
      <video
        src="images/adventure-desktop.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video>`;
    // now that we have downloaded desktop, there's no reason to keep listening
    window.removeEventListener("resize", getScreenWidth);
  } else if (screenType !== "mobile") {
    screenType = "mobile";
    // load mobile video
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
