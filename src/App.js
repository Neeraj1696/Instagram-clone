import { useState } from "react";
import "./App.css";
import Post from "./Post";
function App() {
  const [posts, setposts] = useState([
    {
      Username: "Carry1",
      caption: " Wow !!! its Working Know ",
      imageUrl:
        "https://i.pinimg.com/736x/d2/db/cc/d2dbccd44ca60231089fbb348ddc9a60.jpg",
    },
    {
      Username: "Carry2",
      caption: " Wow !!! its Working Know ",
      imageUrl:
        "https://i.pinimg.com/736x/d2/db/cc/d2dbccd44ca60231089fbb348ddc9a60.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
          alt="ErrorImg"
        />
      </div>
      {posts.map((post) => (
        <Post
          Username={post.Username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      <Post
        Username="Carry1"
        caption=" Wow !!! its Working Know "
        imageUrl="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/05/16/906281-carry-minati.jpg"
      />
      <Post
        Username="Carry2"
        caption=" Wow !!! its Working Know "
        imageUrl="https://i.pinimg.com/736x/d2/db/cc/d2dbccd44ca60231089fbb348ddc9a60.jpg"
      />
      <Post
        Username="Carry3"
        caption=" Wow !!! its Working Know "
        imageUrl="https://wallpaperaccess.com/full/2569120.jpg"
      />
      <Post
        Username="Carry4"
        caption=" Wow !!! its Working Know "
        imageUrl="https://qph.cf2.quoracdn.net/main-qimg-8c7f3a8a75640acf7c6a69e39ffaee40-lq"
      />
      <Post
        Username="Carry5"
        caption=" Wow !!! its Working Know "
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGaAJwnApqWS_FMrc-_1TpC_N2apYtRPycg&usqp=CAU"
      />
      <Post
        Username="Carry6"
        caption=" Wow !!! its Working Know "
        imageUrl="https://pagalstatus.com/wp-content/webpc-passthru.php?src=https://pagalstatus.com/wp-content/uploads/2021/05/Carry-Minati-Whatsapp-Status-Video.jpg&nocache=1"
      />
    </div>
  );
}

export default App;
