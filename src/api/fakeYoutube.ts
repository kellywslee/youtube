import axios from "axios";
import { type Video } from "../lib/types";

export default class FakeYoutube {
  constructor() {}

  async getVideos(keyword: string): Promise<Video[]> {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword(): Promise<Video[]> {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: Video) => ({ ...item, id: item.id.playlistId })),
      );
  }

  async #mostPopular(): Promise<Video[]> {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
