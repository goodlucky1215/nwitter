import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import NweetFatory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  //댓글 보기
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snap) => {
      const nweetArray = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFatory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nwe) => (
          <Nweet
            key={nwe.id}
            nweetObj={nwe}
            isOwner={nwe.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
