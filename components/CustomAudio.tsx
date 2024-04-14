import React, { useState, FC, useRef } from "react";
import CustomCard from "./CustomCard";
import { utils } from "@/shared/utils";
import MUSIC_FILES from "@/shared/constants";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  faBackward,
  faBackwardStep,
  faForward,
  faForwardStep,
  faPause,
  faPlay,
  faRepeat,
  faVolumeLow,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          customIcons={{
            play: <FontAwesomeIcon icon={faPlay} />,
            pause: <FontAwesomeIcon icon={faPause} />,
            rewind: <FontAwesomeIcon icon={faBackward} />,
            forward: <FontAwesomeIcon icon={faForward} />,
            previous: <FontAwesomeIcon icon={faBackwardStep} />,
            next: <FontAwesomeIcon icon={faForwardStep} />,
            loop: <FontAwesomeIcon className="text-primary" icon={faRepeat} />,
            loopOff: <FontAwesomeIcon icon={faRepeat} />,
            volume: <FontAwesomeIcon icon={faVolumeLow} />,
            volumeMute: <FontAwesomeIcon icon={faVolumeMute} />,
          }}
          className={`custom-audio ${darkMode ? "" : ""}`}
        />
      </div>
    );
  };

  return (
    <CustomCard
      title={utils.trimMusicName(musicFile)}
      coverUrl={audioThumbnail}
      cardContent={audioCardUi()}
      darkMode={darkMode}
      className="min-w-[40rem] min-h-[20rem]"
      coverClassName="min-w-[40rem] min-h-[20rem]"
    />
  );
};

export default CustomAudio;
