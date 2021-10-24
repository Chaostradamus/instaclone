import Post from "./Post";

const posts = [
  {
    id: "1223",
    username: "whimsy",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "ayoooo",
  },
  {
    id: "1223",
    username: "whimsy",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "ayoooo",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      
    </div>
  );
}

export default Posts;
