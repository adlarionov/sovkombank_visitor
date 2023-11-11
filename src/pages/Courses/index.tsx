import useMediaSize from "../../shared/hooks/useMediaSize";
import DesktopCourses from "./DesktopCourses";
import MobileCourses from "./MobileCourses";

export default function Courses() {
  const mediaSize = useMediaSize();

  return <>{mediaSize.isMobile ? <MobileCourses /> : <DesktopCourses />}</>;
}
