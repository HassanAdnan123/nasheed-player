import React, { useState, FC, useRef } from "react";
import CustomCard from "./CustomCard";
import { utils } from "@/shared/utils";
import MUSIC_FILES from "@/shared/constants";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export type CustomAudioProps = {
  darkMode?: boolean;
};

const CustomAudio: FC<CustomAudioProps> = ({ darkMode = false }) => {
  const [musicFile, setMusicFile] = useState(MUSIC_FILES[0].file);
  const [audioThumbnail, setAudioThumbnail] = useState(MUSIC_FILES[0].image);
  const playerRef = useRef<AudioPlayer>(null);

  const toggleNext = () => {
    const audioElement = playerRef.current?.audio?.current;
    if (audioElement) {
      audioElement.pause();
      const currentIndex = MUSIC_FILES.findIndex(
        (file) => file.file === musicFile
      );
      const nextIndex = (currentIndex + 1) % MUSIC_FILES.length;

      setMusicFile(MUSIC_FILES[nextIndex].file);
      setAudioThumbnail(MUSIC_FILES[nextIndex].image);
    }
  };

  const audioCardUi = () => {
    return (
      <div className="flex flex-col items-center">
        <AudioPlayer
          ref={playerRef}
          autoPlay
          src={musicFile}
          showFilledProgress
          showJumpControls
          showSkipControls
          onClickNext={toggleNext}
          onClickPrevious={toggleNext}
        />
      </div>
    );
  };

  return (
    <CustomCard
      title={utils.trimMusicName(musicFile)}
      imageUrl={audioThumbnail}
      cardContent={audioCardUi()}
      darkMode={darkMode}
    />
  );
};

export default CustomAudio;
