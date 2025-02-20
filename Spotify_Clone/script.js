let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }

  // Show all the songs in the playlist
  let songUl = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  songUl.innerHTML = "";
  for (const song of songs) {
    songUl.innerHTML =
      songUl.innerHTML +
      `<li> <img class="invert" src="imgs/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Song Arist</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="imgs/play.svg" alt="">
                            </div>  </li>`;
  }

  // Attach an eventListner to each song

  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
}

const playMusic = (track, pause = false) => {
  currentSong.src = `/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "imgs/pause.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songinfo").innerHTML = "00:00 /  00:00";
};

async function displayAlbums() {
  let a = await fetch(`http://127.0.0.1:3000/songs/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");
  let array = Array.from(anchors);
  for (let index = 0; index < array.length; index++) {
    const e = array[index];
    if (e.href.includes("/songs")) {
      let folder = e.href.split("/").slice(-2)[0];
      // Get the metadata of the folder
      let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`);
      let response = await a.json();
      cardContainer.innerHTML =
        cardContainer.innerHTML +
        ` <div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="#000">
                                <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="songs/${folder}/cover1.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`;
    }
  }

  // Load the playlist whenever card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
    });
  });
}

async function main() {
  // Get the list of all the songs
  await getSongs("songs/ncs");
  playMusic(songs[0], true);

  //Display all the albums on the page
  await displayAlbums();

  // Attach an event listener to play, next and previous
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "imgs/pause.svg";
    } else {
      currentSong.pause();
      play.src = "imgs/play.svg";
    }
  });

  //Listen for timeupdate event
  currentSong.addEventListener("timeupdate", () => {
    //console.log(currentSong.currentTime, currentSong.duration);
    if (!isNaN(currentSong.duration)) {
      document.querySelector(
        ".songtime"
      ).innerHTML = `${secondsToMinutesSeconds(
        currentSong.currentTime
      )}/${secondsToMinutesSeconds(currentSong.duration)}`;
    }

    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  //Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  //Add an event listener for close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

// Select next and previous buttons properly
const previous = document.getElementById("previous");
const next = document.getElementById("next");

// Add event listener to previous button
previous.addEventListener("click", () => {
    if (!songs || songs.length === 0) return; 
    let currentSongName = decodeURIComponent(currentSong.src.split("/").pop());
    let index = songs.findIndex(song => decodeURIComponent(song) === currentSongName);
    
    if (index > 0) {
        playMusic(songs[index - 1]);
    }
});

// Add event listener to next button
next.addEventListener("click", () => {
    if (!songs || songs.length === 0) return; 
    let currentSongName = decodeURIComponent(currentSong.src.split("/").pop());
    let index = songs.findIndex(song => decodeURIComponent(song) === currentSongName);
    
    if (index !== -1 && index + 1 < songs.length) {
        playMusic(songs[index + 1]);
    }
});


 // Select volume elements
const volumeIcon = document.querySelector(".volume > img");
const volumeSlider = document.querySelector(".range input");

// Store previous volume before muting
let lastVolume = 1; // Default volume (100%)

volumeSlider.addEventListener("input", (e) => {
    let volume = parseFloat(e.target.value) / 100;
    currentSong.volume = volume;

    // Save volume only if it's not muted
    if (volume > 0) {
        lastVolume = volume;
        volumeIcon.src = "imgs/volume.svg"; // Change icon to unmute
    } else {
        volumeIcon.src = "imgs/mute.svg"; // Change icon to mute
    }
});

// Add event listener to mute/unmute button
volumeIcon.addEventListener("click", () => {
    if (currentSong.volume > 0) {
        // Mute the song
        lastVolume = currentSong.volume; // Store last volume before muting
        currentSong.volume = 0;
        volumeSlider.value = 0;
        volumeIcon.src = "imgs/mute.svg";
    } else {
        // Unmute and restore last volume
        currentSong.volume = lastVolume;
        volumeSlider.value = lastVolume * 100;
        volumeIcon.src = "imgs/volume.svg";
    }
});


// Ensure event listener is attached to each album card
Array.from(document.getElementsByClassName("card")).forEach((card) => {
  card.addEventListener("click", async (event) => {
      let folder = event.currentTarget.dataset.folder;
      
      // Fetch the songs from the clicked album folder
      await getSongs(`songs/${folder}`);

      // Play the first song from the selected album
      if (songs.length > 0) {
          playMusic(songs[0]); 
      } else {
          console.warn("No songs found in album:", folder);
      }
  });
});




}

main();
