import { useState } from "react";

function LikeButton(){
  const [count, setCount] = useState(999);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>
}

export default LikeButton;