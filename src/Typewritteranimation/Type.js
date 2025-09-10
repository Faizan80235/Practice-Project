import React from "react";
import Typewriter from "typewriter-effect";
const Type = () => {
  const Information = ["Frontend Developer", "Backend Developer","Python Developer"];
  return (
    <div>
        <h1>The Ty</h1>
      <h1 style={{textAlign:"center",color:"red",textTransform:"uppercase",cursor:"cell"}}>
        <Typewriter
          options={{
            strings: Information,
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 60,
          }}
        />
      </h1>
    </div>
  );
};
export default Type;
