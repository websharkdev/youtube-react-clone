import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// Obfuscatored key for youtube API
var _0x9556 = [
  "\x30\x34\x38\x36\x37\x32\x32\x39\x61\x33\x6D\x73\x68\x62\x63\x61\x39\x39\x34\x35\x37\x64\x37\x65\x30\x31\x32\x38\x70\x31\x63\x62\x64\x63\x66\x6A\x73\x6E\x61\x30\x36\x39\x33\x65\x37\x37\x61\x39\x66\x31",
];
// Obfuscatored key for youtube API

const youtube_api_key = _0x9556[0];

export const fetchFromAPI = async (url: string, count?: number) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: count || 50,
    },
    headers: {
      "X-RapidAPI-Key": youtube_api_key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  return data;
};
