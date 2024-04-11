export const utils = {
    trimMusicName
}
function trimMusicName(musicFile: string) {
    return musicFile.replace(".mp3", "").replace("/", "")
}

