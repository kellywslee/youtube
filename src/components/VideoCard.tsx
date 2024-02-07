import { type Video } from "../lib/types";

export default function VideoCard({ video }: { video: Video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{publishedAt}</p>
      </div>
    </li>
  );
}
