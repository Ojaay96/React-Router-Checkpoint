import React from "react";
import { Link } from "react-router-dom";

const MerlinDescription = () => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Merlin Trailer</h1>
      {/* Embed the video player or provide a link to the video */}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/01rxgwVmxx0?si=IiedpJ5yDikzlOY1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        Merlin was famous for his shapeshifting powers and his guidance of a
        <br />
        young Arthur into the powerful king he was destined to be. Merlin was a
        <br />
        powerful yet altruistic character in Arthurian legend, who counseled and
        <br />
        advised the creation of the Knights of the Round Table.
      </p>
    </div>
  );
};

export default MerlinDescription;
