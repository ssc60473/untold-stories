import List "mo:core/List";
import BlogLib "../lib/blog";
import BlogTypes "../types/blog";
import Common "../types/common";

mixin (posts : List.List<BlogTypes.BlogPost>, nextBlogId : Nat) {
  public query func getBlogPosts() : async [BlogTypes.BlogPost] {
    BlogLib.getAll(posts);
  };

  public query func getBlogPost(id : Common.BlogId) : async ?BlogTypes.BlogPost {
    BlogLib.getById(posts, id);
  };
};
