import { RightButtonArea } from './style';
import FullScreen from './FullScreen';
import Speed from './Speed';
import Episodes from './Episodes';
import Bookmark from './Bookmark';
import NextEpisode from './NextEpisode';

export default function RightButtons({
  id,
  videoRef,
  videoContainerRef,
  setShowBar,
}) {
  return (
    <RightButtonArea>
      <NextEpisode id={id} setShowBar={setShowBar} />
      <Bookmark />
      <Episodes setShowBar={setShowBar} />
      <Speed videoRef={videoRef} setShowBar={setShowBar} />
      <FullScreen videoContainerRef={videoContainerRef} />
    </RightButtonArea>
  );
}
