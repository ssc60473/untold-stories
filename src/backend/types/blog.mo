import Common "common";

module {
  public type BlogPost = {
    id : Common.BlogId;
    title : Text;
    excerpt : Text;
    content : Text;
    thumbnail : Text;
    publishDate : Common.Timestamp;
    tags : [Text];
    relatedVideoIds : [Common.VideoId];
  };
};
