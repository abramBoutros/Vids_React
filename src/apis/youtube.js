import axios from "axios";

const KEY = "AIzaSyDZodQp4Ral1npt4-jWMaNyePbYKx6ymzw";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
