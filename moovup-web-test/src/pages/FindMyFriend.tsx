import React, { useEffect, useState } from "react";
import friendService, { Friend } from "../services/friendService";
import { FriendsList } from "../components/FriendList";
import { SplitLine } from "../components/SplitLine";
import { Map } from "../components/Map";

export const FindMyFriend = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend>();

  const selectFriendHandler = (friend:Friend) =>{
    setSelectedFriend(friend)
  }

  useEffect(() => {
    async function fetchFriends() {
      try {
        const res = await friendService.getFriends();
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFriends();
  }, []);

  return (
    <div className="split-view-wrapper">
      <FriendsList friends={friends} setSelected={selectFriendHandler} selectedFriend={selectedFriend}/>
      <SplitLine />
      <Map selectedFriend={selectedFriend}/>
    </div>
  );
};
