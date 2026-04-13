import List "mo:core/List";
import VideoTypes "types/videos";
import BlogTypes "types/blog";
import SubTypes "types/submissions";
import VideoLib "lib/videos";
import BlogLib "lib/blog";
import VideosApi "mixins/videos-api";
import BlogApi "mixins/blog-api";
import SubmissionsApi "mixins/submissions-api";

actor {
  let videos = List.empty<VideoTypes.Video>();
  var nextVideoId : Nat = 0;

  let blogPosts = List.empty<BlogTypes.BlogPost>();
  var nextBlogId : Nat = 0;

  let subscriptions = List.empty<SubTypes.NewsletterSubscription>();
  let contactSubmissions = List.empty<SubTypes.ContactSubmission>();

  nextVideoId := VideoLib.seedSampleData(videos, nextVideoId);
  nextBlogId := BlogLib.seedSampleData(blogPosts, nextBlogId);

  include VideosApi(videos, nextVideoId);
  include BlogApi(blogPosts, nextBlogId);
  include SubmissionsApi(subscriptions, contactSubmissions);
};
