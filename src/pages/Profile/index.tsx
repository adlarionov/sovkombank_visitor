import useMediaSize from "../../shared/hooks/useMediaSize";
import MobileProfile from "./MobileProfile";

export default function Profile() {
  const mediaSize = useMediaSize();

  return <>{mediaSize.isMobile && <MobileProfile />}</>;
}
