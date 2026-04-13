import List "mo:core/List";
import VideoLib "../lib/videos";
import VideoTypes "../types/videos";

mixin (videos : List.List<VideoTypes.Video>, nextVideoId : Nat) {
  public query func getVideos() : async [VideoTypes.Video] {
    VideoLib.getAll(videos);
  };

  public query func getVideosByCategory(category : VideoTypes.VideoCategory) : async [VideoTypes.Video] {
    VideoLib.getByCategory(videos, category);
  };

  public query func getFeaturedVideos() : async [VideoTypes.Video] {
    VideoLib.getFeatured(videos);
  };

  public query func getTrendingVideos() : async [VideoTypes.Video] {
    VideoLib.getTrending(videos);
  };
};
