import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../api/youtube";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword ?? ""],
    queryFn: () => getVideos(keyword ?? ""),
  });

  return (
    <div>
      <div>Videos {keyword ? `${keyword}` : "🔥"}</div>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message || JSON.stringify(error)}</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.playlistId} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
