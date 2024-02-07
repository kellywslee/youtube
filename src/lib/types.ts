export type Video = {
  id: {
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};
