import "./App.css";
import { useEffect } from "react";
import { getEmojis } from "./store";
import { useDispatch } from "react-redux";

import { EmojieList } from "./components/EmojiList";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <EmojieList />
      </header>
    </div>
  );
}

export default App;
