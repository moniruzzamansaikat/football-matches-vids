import Axios from "axios";

const xhr = Axios.create({
  baseURL: "https://www.scorebat.com/video-api/v3",
  method: "get",
});

// fetch all matches
export const fetchAllMatches = async (limit) => {
  const { data } = await xhr("/");
  const matches = data.response;

  if (limit) {
    return matches.slice(0, limit);
  }

  return matches;
};
