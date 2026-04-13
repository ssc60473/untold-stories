import Common "common";

module {
  public type VideoCategory = { #History; #Mystery; #Horror; #Documentary };

  public type Video = {
    id : Common.VideoId;
    title : Text;
    description : Text;
    youtubeId : Text;
    thumbnail : Text;
    category : VideoCategory;
    publishDate : Common.Timestamp;
    isFeatured : Bool;
    isTrending : Bool;
    viewCount : Nat;
  };
};
