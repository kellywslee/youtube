import axios from "axios";
import { type Video } from "../lib/types";

export async function getVideos(keyword: string): Promise<Video[]> {
  return axios
    .get(`/videos/${keyword ? "search" : "popular"}.json`)
    .then((res) => res.data.items);
}
