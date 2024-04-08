import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import EmojiItem from './EmojiItem';
import { getEmojis } from "../store";


function EmojiList() {
  const emojis = useSelector((state) => state.emojis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmojis()); // Dispatch the action to fetch emojis
  }, [dispatch]);

  return (
    <div className="flex w-1/2 flex-wrap m-10 gap-12">
      {emojis.map((emoji) => (
        <EmojiItem key={emoji.name} emoji={emoji} /> // Pass each emoji to EmojiItem
      ))}
    </div>
  );
};

export default EmojiList;

