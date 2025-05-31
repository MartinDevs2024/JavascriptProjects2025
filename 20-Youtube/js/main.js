let nextPageToken = "";

async function getVideos() {
  const channelId = "YourId";
  const maxResults = 57;
  const apiKey = "YourKey";
  const container = document.querySelector("#youtube-container");

  const apiURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&key=${apiKey}&pageToken=${nextPageToken}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    nextPageToken = data.nextPageToken || "";

    if (!data.items || data.items.length === 0) {
      container.innerHTML += `<p class="text-white text-center">No videos found.</p>`;
      return;
    }

    const videoCards = data.items
      .filter(video => video.id && video.id.videoId)
      .map(video => generateVideoCard(video))
      .join("");

    container.innerHTML += videoCards;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    container.innerHTML += `<p class="text-danger">Failed to load videos.</p>`;
  }
}

function generateVideoCard(video) {
  const { videoId } = video.id;
  const { url } = video.snippet.thumbnails.medium;
  const title = video.snippet.title;

  return `
    <div class="col-md-4">
      <div class="card hover-div h-100 shadow-sm border-0">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer">
          <img src="${url}" class="card-img-top" alt="${title}">
        </a>
        <div class="card-body text-center">
          <h5 class="card-title text-dark mb-2"><i class="fas fa-play-circle text-danger me-2"></i>${truncateText(title, 50)}</h5>
          <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn btn-dark btn-sm mt-2">
            <i class="fab fa-youtube me-1"></i> Watch Now
          </a>
        </div>
      </div>
    </div>
  `;
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

getVideos();
