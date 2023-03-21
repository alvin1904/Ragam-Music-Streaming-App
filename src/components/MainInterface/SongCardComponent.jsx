//for playlist expand
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const SongCardComponent = ({ song, showdelete }) => {
  return (
    <div className="song_card_template gradient_0">
      <div>
        <h1>{song.songName}</h1>
      </div>
      {showdelete && (
        <div className="songcard_template_like_plus">
          <AiOutlineDelete size={25} />
        </div>
      )}
    </div>
  );
};

export default SongCardComponent;