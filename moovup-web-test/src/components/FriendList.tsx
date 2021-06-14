import React from "react";
import { Friend } from "../services/friendService";
import { FriendItem } from "./FriendItem";

import "./FriendList.css";

interface FriendListProps {
    friends: Friend[];
    selectedFriend: Friend | undefined;
    setSelected: (friend: Friend) => void;
  }

export const FriendsList:React.FC<FriendListProps> = ({friends, selectedFriend, setSelected}) => {

  return (
    <div className="friend-list-wrapper">
      <div>
        {friends.map(friend => {
          return (
            <FriendItem
              key={friend._id}
              friend={friend}
              setSelected={setSelected}
              selected={
                selectedFriend ? selectedFriend._id === friend._id : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};
