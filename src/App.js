import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import  { db,} from "./firebase";
function App() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) =>
          ({
            id: doc.id,
            post: doc.data(),
          }())
        )
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
          alt="ErrorImg"
        />
      </div>
      {Posts.map((id, post) => (
        <Post
          key={id}
          Username={post.Username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      {/* <Post
        Username="Carry1"
        caption=" Wow !!! its Working Know "
        imageUrl="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/05/16/906281-carry-minati.jpg"
      />
      <Post
        Username="Carry2"
        caption=" Wow !!! its Working Know "
        imageUrl="https://i.pinimg.com/736x/d2/db/cc/d2dbccd44ca60231089fbb348ddc9a60.jpg"
      /> */}
    </div>
  );
}

export default App;
