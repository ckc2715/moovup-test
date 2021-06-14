import React from "react";
import { Friend } from "../services/friendService";

import "./FriendItem.css";

interface FriendItemProps {
  friend: Friend;
  selected: boolean;
  setSelected: (friend: Friend) => void;
}

export const FriendItem: React.FC<FriendItemProps> = ({
  friend,
  selected,
  setSelected
}) => {
  return (
    <div
      className="friend-list-item"
      style={{
        backgroundColor: selected ? "#dbdad7" : "unset"
      }}
      onClick={() => setSelected(friend)}
    >
      <div className="friend-image-background">
        <div
          className="friend-image"
          style={{ backgroundImage: `url(${friend.picture})` }}
        ></div>
      </div>
      <div className="friend-name">
        {friend.name.first} {friend.name.last}
      </div>
    </div>
  );
};
