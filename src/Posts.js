import Post from "./Post";
let post = [];

const addComment = (post, nickName, text) => {
  post.comments.push({ nickName, text });
};
const postContent = (personNickName, contentLink, postTitle, likeBy, andLikedBy, img = true) => {
  return { personNickName, img, contentLink, postTitle, likeBy, andLikedBy, comments: [] };
};
post.push(
  postContent(
    "runner",
    "./assets/garage.jpg",
    "Every person remembers some moment in their life where they witnessed some injustice, big or small, and looked away because the consequences of intervening seemed too intimidating. But there’s a limit to the amount of incivility and inequality and inhumanity that each individual can tolerate.",
    "_raskolnikov",
    16
  )
);
addComment(post[0], "bypast", "Looks amazing man! Congrats");

post.push(
  postContent(
    "yury.ostapchuk",
    "https://cdn-animation.artstation.com/p/video_sources/000/085/015/ship-360-02.mp4",
    "Humanity is mind-controlled and only slightly more conscious than your average zombie.",
    "yokuny",
    702,
    false
  )
);
addComment(post[1], "yokuny", "What's your method for sharing the project with the client?");
addComment(post[1], "bedotarantino", "Need that");

post.push(
  postContent(
    "tanki x",
    "./assets/canal.jpg",
    "To live in the world without becoming aware of the meaning of the world is like wandering about in a great library without touching the books.",
    "fake.avatar",
    999
  )
);
addComment(post[2], "ghost.pz", "Such a fun project.");
addComment(post[2], "yokuny", "🔥🔥🔥");
addComment(post[2], "brianlocs", "WOW🔥👏");

const Feed = () => <Post data={post} />;
export default Feed;
