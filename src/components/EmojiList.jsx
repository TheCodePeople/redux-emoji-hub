import {useSelector,useDispatch} from "react-redux"
import EmojiItem from "./EmojiItem"
import { useEffect } from "react";
import { getEmojis } from "../store";
export const EmojiList = () => {
  const emojiList=useSelector((state)=>state.emojis)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getEmojis());
  }, [dispatch]);
  return (
    <div className="flex w-1/2 flex-wrap m-10 gap-12"> 
     {emojiList.map((emoji,index) => (
        <EmojiItem key={index} emoji={emoji} />
      ))}
    </div>
  );
};
