import React from "react";
import { Link } from "react-router-dom";

const LegendDescription = () => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Legend Of The Seeker Trailer</h1>
      {/* Embed the video player or provide a link to the video */}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/96OrBX1epXM?si=n_jxTEbeZOWspiGJ"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        Accompanied by the wizard Zedd and mysterious Kahlan, the woodsman
        <br />
        Richard Cypher uses his newfound magic powers to help stop a ruthless,
        <br />
        power-mad tyrant from unleashing an ancient evil upon the world, in an
        <br />
        adaptation of a best-selling series of fantasy novels by Terry Goodkind.
      </p>
    </div>
  );
};

export default LegendDescription;
