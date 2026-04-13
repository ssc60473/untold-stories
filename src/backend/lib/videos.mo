import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/videos";
import Common "../types/common";

module {
  public func getAll(videos : List.List<Types.Video>) : [Types.Video] {
    videos.toArray();
  };

  public func getByCategory(videos : List.List<Types.Video>, category : Types.VideoCategory) : [Types.Video] {
    videos.filter(func(v) {
      switch (v.category, category) {
        case (#History, #History) true;
        case (#Mystery, #Mystery) true;
        case (#Horror, #Horror) true;
        case (#Documentary, #Documentary) true;
        case _ false;
      };
    }).toArray();
  };

  public func getFeatured(videos : List.List<Types.Video>) : [Types.Video] {
    videos.filter(func(v) { v.isFeatured }).toArray();
  };

  public func getTrending(videos : List.List<Types.Video>) : [Types.Video] {
    videos.filter(func(v) { v.isTrending }).toArray();
  };

  public func seedSampleData(videos : List.List<Types.Video>, nextId : Nat) : Nat {
    // Only seed if empty
    if (not videos.isEmpty()) { return nextId };

    let now = Time.now();

    let samples : [Types.Video] = [
      {
        id = nextId;
        title = "Bhangarh Fort: Bharat Ka Sabse Bhoot Wala Kila";
        description = "Rajasthan ke Bhangarh Fort ki rहस्यमयी kahani — jaanein kyon yahan raat ko jaana mana hai aur kya sach mein yahan bhoot rahte hain.";
        youtubeId = "dQw4w9WgXcQ";
        thumbnail = "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";
        category = #Horror;
        publishDate = now;
        isFeatured = true;
        isTrending = true;
        viewCount = 1250000;
      },
      {
        id = nextId + 1;
        title = "Taj Mahal Ka Chhupa Hua Rahasya";
        description = "Kya Taj Mahal sirf ek mohabbat ki nishaani hai? Jaanein us ke neeche ki kahaniyan jo itihas ki kitaabon mein nahi milti.";
        youtubeId = "9bZkp7q19f0";
        thumbnail = "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg";
        category = #Mystery;
        publishDate = now - 604800000000000;
        isFeatured = true;
        isTrending = true;
        viewCount = 987000;
      },
      {
        id = nextId + 2;
        title = "Dwarka: Samudra Mein Duba Hua Shahr";
        description = "Gujarat ke paani ke neeche chhupa hua prachin shahar Dwarka — kya yahi Krishna ki nagri hai? Puratattva ki nayi khoj.";
        youtubeId = "kJQP7kiw5Fk";
        thumbnail = "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg";
        category = #History;
        publishDate = now - 1209600000000000;
        isFeatured = true;
        isTrending = false;
        viewCount = 756000;
      },
      {
        id = nextId + 3;
        title = "Kuldhara: Ek Raat Mein Ujar Gaya Pura Gaon";
        description = "1825 mein ek hi raat mein 1500 logo ne apna gaon kyun chhod diya? Kuldhara ke is ansuljhe rahasya ki poori kahani.";
        youtubeId = "RgKAFK5djSk";
        thumbnail = "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg";
        category = #Mystery;
        publishDate = now - 1814400000000000;
        isFeatured = false;
        isTrending = true;
        viewCount = 645000;
      },
      {
        id = nextId + 4;
        title = "Mohenjo-Daro: 4000 Saal Purani Sabhyata Ka Ant";
        description = "Duniya ki sabse purani sabhyataon mein se ek — Mohenjo-Daro kaise aur kyun tabah hua? Itihaas ka ek mahatvapoorn adhyay.";
        youtubeId = "JGwWNGJdvx8";
        thumbnail = "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg";
        category = #History;
        publishDate = now - 2419200000000000;
        isFeatured = false;
        isTrending = false;
        viewCount = 523000;
      },
      {
        id = nextId + 5;
        title = "India Ke Top 5 Bhootiya Jungle";
        description = "Bharat ke panch sabse daraaune jungle jahan aaj bhi log jaane se darte hain. In junglon ki raat alag hi hoti hai.";
        youtubeId = "YQHsXMglC9A";
        thumbnail = "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg";
        category = #Horror;
        publishDate = now - 3024000000000000;
        isFeatured = false;
        isTrending = true;
        viewCount = 890000;
      },
      {
        id = nextId + 6;
        title = "Ashoka Ka Khoye Hua Nau Ratnon Ka Samooha";
        description = "Samrat Ashoka ne ek rahasymay samooha banaya tha jo 9 mahatvapoorn gyanon ki raksha karta tha. Kya yah sach mein tha?";
        youtubeId = "tgbNymZ7vqY";
        thumbnail = "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg";
        category = #Documentary;
        publishDate = now - 3628800000000000;
        isFeatured = false;
        isTrending = false;
        viewCount = 412000;
      },
      {
        id = nextId + 7;
        title = "Nalanda Vishwavidyalaya: Jalaaya Gaya Gyaan Ka Mandir";
        description = "Duniya ki pehli university Nalanda ko kisne aur kyun jalaya? Is itihasik tragedy ki poori kahani.";
        youtubeId = "pRpeEdMmmQ0";
        thumbnail = "https://img.youtube.com/vi/pRpeEdMmmQ0/maxresdefault.jpg";
        category = #History;
        publishDate = now - 4233600000000000;
        isFeatured = false;
        isTrending = false;
        viewCount = 334000;
      },
    ];

    for (video in samples.values()) {
      videos.add(video);
    };

    nextId + 8;
  };
};
