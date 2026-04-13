import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/blog";
import Common "../types/common";

module {
  public func getAll(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.toArray();
  };

  public func getById(posts : List.List<Types.BlogPost>, id : Common.BlogId) : ?Types.BlogPost {
    posts.find(func(p) { p.id == id });
  };

  public func seedSampleData(posts : List.List<Types.BlogPost>, nextId : Nat) : Nat {
    // Only seed if empty
    if (not posts.isEmpty()) { return nextId };

    let now = Time.now();

    let samples : [Types.BlogPost] = [
      {
        id = nextId;
        title = "Bhangarh Fort Mystery Explained: Bharat Ka Sabse Bhootiya Kila";
        excerpt = "Rajasthan ke Bhangarh Fort ko officially India ka sabse haunted place kyon mana jaata hai? Archaeology, itihas aur logon ki aankhon dekhi gawahi ke saath poori sachchi kahani.";
        content = "## Bhangarh Fort: Ek Ansuljha Rahasya\n\nRajasthan ke Alwar district mein sthit Bhangarh Fort ko Archaeological Survey of India (ASI) ne officially haunted declare kiya hai. Yahan raat ko jaana qanoonan mana hai.\n\n### Itihasik Parishthiti\n\nBhangarh Fort ko 17vi sadi mein Madho Singh I ne banaya tha. Kuch saalon baad, ek abhishap ke chalte puri abadi ne is jagah ko chhod diya.\n\n### Abhishap Ki Kahani\n\nKahani hai ki ek kale jadugar Singhia ne rani Ratnavati ko paane ki koshish mein ek mantra kiya. Rani ne uski chaal pakad li aur usse maar diya. Marte waqt usne puri nagri ko tabaah hone ka shraap diya.\n\n### Aaj Ki Sthiti\n\nAaj bhi is jagah par anokhi ghatnayen report hoti hain. Log aawazein sunne ka daawa karte hain. ASI ke boards clearly likhte hain: 'Sunset ke baad entry wर्जित hai.'\n\n### Vaigyaanik Drishtikon\n\nVaigyanik mante hain ki ye sab sirf andhe vishwaas hain. Fort ki particular geography aur infrasound ke kaaran log uncomfortable feel karte hain.\n\nPhir bhi, Bhangarh ki mystery aaj bhi logon ko attract karti hai.";
        thumbnail = "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800";
        publishDate = now;
        tags = ["bhangarh", "haunted", "rajasthan", "mystery", "history"];
        relatedVideoIds = [0];
      },
      {
        id = nextId + 1;
        title = "Prachin Bharatiya Kisse: History of Ancient Legends";
        excerpt = "Bharat ki prachin katha-kahaniyan sirf myths nahi hain — inke peeche chhupe hain asal itihasik sach. Ramayan se Mahabharat tak, puratattva kya kehta hai?";
        content = "## Bharat Ki Prachin Kathaayen: Myth ya Itihaas?\n\nHamari dharmic kathaaon ko log aam taur par sirf dharmik najariye se dekhte hain. Lekin kya ye sirf kahaniyan hain ya inke peeche koi asal itihasik sach chhupa hai?\n\n### Ramayan Ka Bhougolic Saboot\n\nRamayan mein varnan kiye gaye kaafi sthan aaj bhi maujood hain. Sri Lanka mein Ram Setu ke taur par jaane jaate patthar, Kishkindha jo aaj Karnataka mein hai — yeh sab geographic accuracy ki baat karte hain.\n\n### Mahabharat Ki Kal Nirnay\n\nAstronomers ne Mahabharat mein varnan kiye gaye graha-nakshatron ki position calculate ki aur paya ki yeh alignment lagbhag 3100 BCE mein thi.\n\n### Dwarka Ki Khoj\n\n2001 mein National Institute of Ocean Technology ne Gujarat ke coast par ek prachin shahr ki khoj ki. Kuch log mante hain yahi Dwarka hai jiska zikr Mahabharat mein hai.\n\n### Vedic Vigyan\n\nVedic texts mein hawa ke jahaz (Vimaan), brahmastra jaisi weapons ka zikr hai. Kya ye sirf kavita tha ya is mein koi sach chhupa hai?\n\nIn sawalon ke jawab dhundhne ki koshish mein humare documentary series aapko le jaayegi prachin Bharat ke andar.";
        thumbnail = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800";
        publishDate = now - 604800000000000;
        tags = ["ancient", "history", "legends", "ramayan", "mahabharat", "archaeology"];
        relatedVideoIds = [2, 4];
      },
      {
        id = nextId + 2;
        title = "Top 5 Haunted Places in India: Darr Ki Duniya";
        excerpt = "Bharat ke panch sabse daraaune sthan jo officially haunted maane jaate hain. Yahan ke logon ne jo anubhav kiye hain, wo sun kar raat ko neend nahi aayegi.";
        content = "## India Ke 5 Sabse Haunted Jagahen\n\nBharat ek aisi dharti hai jahan itihaas ke saaye aaj bhi maujood hain. Kuch jagahen aisi hain jo sirf apni ruhandaar shohrat ki wajah se mashoor hain.\n\n### 1. Bhangarh Fort, Rajasthan\n\nPehle number par hai Bhangarh Fort — India ki officially haunted jagah. ASI ne yahan raat ko jaane par rok lagayi hai. Log aawazein, roshan roshni aur ajeeb sensations report karte hain.\n\n### 2. Dumas Beach, Surat\n\nGujarat ka yeh beach raat ko alag hi duniya mein badal jaata hai. Yahan ek qabristan tha aur log aaj bhi yahan se gujar kar ajeeb cheezein feel karte hain.\n\n### 3. Dow Hill, Kurseong\n\nPaschim Bengal ke is pahaadi jagah mein Victoria Boys' School ke paas logon ne ek headless boy ka saaya dekha hai. Yahan ki roads pe ajeeb footsteps sunai dete hain.\n\n### 4. Three Kings Church, Goa\n\nGoa mein yeh teen Portuguese teenpanth adhikariyon ki ichha-mrityu ki jagah hai. Church ke neeche teeno ki laashein hain aur unki aatmaen yahaan bhatkti hain — aisa logon ka kehna hai.\n\n### 5. Jamali Kamali Mosque, Delhi\n\nDilli ke Mehrauli mein sthit yeh mosque aur qabristan raat ko ajeeb awaazein nikalti hai. Yahan jaane waale logon ne anokhe anubhav kiye hain.\n\nIn jagahon ke baare mein aur jaanne ke liye hamaari horror documentary series zaroor dekhein.";
        thumbnail = "https://images.unsplash.com/photo-1509537257950-20f875b03669?w=800";
        publishDate = now - 1209600000000000;
        tags = ["haunted", "horror", "india", "ghost", "bhangarh", "documentary"];
        relatedVideoIds = [0, 5];
      },
    ];

    for (post in samples.values()) {
      posts.add(post);
    };

    nextId + 3;
  };
};
