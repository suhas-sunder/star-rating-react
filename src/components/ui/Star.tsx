import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import { useState } from "react";

export default function Star() {
  const [stars, setStars] = useState(
    new Array(5).fill(<StarBorderIcon fontSize="inherit" />)
  );

  const [starCount, setStarCount] = useState<number>(0);

  const handleStarIcon = (
    btnIndex: number,
    side: string,
    saveState: boolean
  ) => {
    if (saveState) setStarCount(btnIndex); //Keeps track of star count when user clicks button. Used to preserve star count on hover state.

    setStars(
      stars.map((_star, index) => {
        if (index > btnIndex) {
          //Empty star
          return <StarBorderIcon fontSize="inherit" />;
        } else if (side === "left" && btnIndex === index) {
          //Full star
          return <StarHalfIcon fontSize="inherit" />;
        } else {
          //Half star
          return <StarIcon fontSize="inherit" />;
        }
      })
    );
  };

  return (
    <div className="flex gap-3 justify-center items-center">
      <h2 className="flex text-3xl leading-7">Rating: </h2>
      <div className="flex">
        {stars.map((star, index) => (
          <div
            key={index}
            className="flex relative justify-center items-center text-yellow-500"
          >
            <i className="flex absolute top-0 bottom-0 left-0 right-0 text-5xl justify-center items-center">
              {star}
            </i>
            <button
              id={`left-${index}`}
              onMouseEnter={() => handleStarIcon(index, "left", false)}
              onMouseLeave={() => handleStarIcon(starCount, "left", false)}
              onClick={() => handleStarIcon(index, "left", true)}
              className="flex w-7 px-1 h-11 z-10 bg-transparent"
            ></button>
            <button
              id={`right-${index}`}
              onMouseEnter={() => handleStarIcon(index, "right", false)}
              onMouseLeave={() => handleStarIcon(starCount, "right", false)}
              onClick={() => handleStarIcon(index, "right", true)}
              className="flex w-7 px-1 h-11 z-10 bg-transparent"
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}
