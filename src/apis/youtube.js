import axios from "axios";

const KEY = "AIzaSyDPDiwyx-SbTgc5b5QnIkjE4ki9zTV6bUA";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 25,
		key: KEY,
	},
});
