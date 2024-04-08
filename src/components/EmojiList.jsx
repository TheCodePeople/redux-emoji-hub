import React from "react";
import { EmojiItem } from "./EmojiItem";
import {useSelector} from "react-redux"
export const EmojieList = () => {

const emojisList=useSelector(state => state.emojis);
  return (
    <div className="flex w-1/2 flex-wrap m-10 gap-12">
      {emojisList.map((emoji, index) => (
        <EmojiItem key={index} emoji={emoji} />
      ))}
      
    </div>
  );
};

