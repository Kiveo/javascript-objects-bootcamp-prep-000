var playlist = {singerA: "Song A"}

function updatePlaylist(playlist, artistName, songTitle) {
  // return playlist.songTitle = artistName;
  var placeholder = songTitle;
  playlist[placeholder] = artistName;
  return playlist[artistName]
}
