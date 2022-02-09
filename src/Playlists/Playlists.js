import { useRecoilState } from 'recoil'
import { playlistState } from '../state'
import { Playlist, PlaylistsWrapper } from './Playlists.styles'

function Playlists() {
  const [playlist, setPlaylist] = useRecoilState(playlistState)
  return (
    <PlaylistsWrapper>
      <Playlist>Default</Playlist>
    </PlaylistsWrapper>
  )
}

export default Playlists
