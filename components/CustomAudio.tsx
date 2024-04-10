"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRedo,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const CustomAudio = () => {
  const musicFile = process.env.MUSIC_FILE_A || "Mountains of Friendship.mp3";
  const musicFile2 = process.env.MUSIC_FILE_B || "Mountains of Friendship.mp3";

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsPlaying(!isPlaying);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById("audioPlayer") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <audio id="audioPlayer" className="mb-4" controls>
        <source src={musicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex items-center justify-center space-x-4">
        <button
          className={`text-2xl transition-opacity duration-300`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FontAwesomeIcon
              icon={faPause}
              className={`h-8 w-8 ${isPlaying ? "opacity-100" : "opacity-0"}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className={`h-8 w-8 ${isPlaying ? "opacity-0" : "opacity-100"}`}
            />
          )}
        </button>
        <button className="text-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <FontAwesomeIcon icon={faRedo} className="h-8 w-8" />
        </button>
        <button
          className="text-2xl transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => {
            const music = document.getElementById(
              "audioPlayer"
            ) as HTMLAudioElement;
            music.pause();
            music.src = music.src == musicFile ? musicFile2 : musicFile;
            music.load();
            music.play();
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default CustomAudio;
