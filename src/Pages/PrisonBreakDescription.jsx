import React from "react";
import { Link } from "react-router-dom";

const PrisonBreakDescription = () => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <h1>Prison Break Trailer</h1>
      {/* Embed the video player or provide a link to the video */}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/AL9zLctDJaU?si=ZIRDvRup8nr6pZ3D"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        {" "}
        Prison Break is an American serial drama television series created by
        <br />
        Paul Scheuring for Fox. The series revolves around two brothers, Lincoln
        <br />
        Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller);
        <br />
        Burrows has been sentenced to death for a crime he did not commit, while
        <br />
        Scofield devises an elaborate plan to help his brother escape prison and
        <br />
        clear his name. Along with creator Paul Scheuring, the series is
        <br />
        executive-produced by Matt Olmstead, Kevin Hooks, Marty Adelstein, Dawn
        <br />
        Parouse, Neal H. Moritz, and Brett Ratner who directed the pilot
        <br />
        episode. The series' theme music, composed by Ramin Djawadi, was
        <br />
        nominated for a Primetime Emmy Award in 2006.[1] Prison Break is a joint
        <br />
        production between Original Film, Adelstein/Parouse Productions (seasons
        <br />
        1–4), Dawn Olmstead Productions (season 5), Adelstein Productions
        <br />
        (season 5), One Light Road Productions (season 5) and 20th Century Fox
        <br />
        Television, and is syndicated by 20th Television.
      </p>
    </div>
  );
};

export default PrisonBreakDescription;
