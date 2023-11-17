import { useState, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import DropListIcon from "../Icons/DragbleDropDownIcon";

import TaskCorusel from "../TasksCorusel";

const StyledDrawer = styled(Drawer)({
  marginTop: "100%",
  height: "100%",
  width: "100%",
  transition: "transform 0.5s",
  transform: "translateY(0%)",
  background: theme.palette.common.white,
  zIndex: 0,
  borderRadius: "10px",
  ".MuiBackdrop-root ": {
    opacity: 0,
    borderRadius: "20px",
  },
  ".MuiPaper-root ": {
    borderRadius: "20px",
  },
});

function BottomSheet({
  openTaskList,
  isTasks,
}: {
  openTaskList: () => void;
  isTasks: boolean;
}) {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setCurrentY(e.touches[0].clientY);
    const deltaY = currentY - startY;

    if (
      deltaY > document.body.clientHeight / 2 - 120 ||
      deltaY < document.body.clientHeight / 3 - 410
    ) {
      return;
    }
    if (drawerRef.current) {
      drawerRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = () => {
    // if (currentY - startY > 100) {
    //   setOpen(false);
    //   if (drawerRef.current) {
    //     drawerRef.current.style.transform = "translateY(0)";
    //   }
    // }
  };

  return (
    <div>
      <StyledDrawer
        anchor="bottom"
        open={true}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={drawerRef}
      >
        <div
          style={{
            padding: "0 1rem ",
            height: "2000px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isTasks ? (
            <>
              <DropListIcon />
              <TaskCorusel openTaskList={openTaskList} />
            </>
          ) : (
            <>
              <DropListIcon />
              <Box
                marginTop={"2rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography>На этот день нет задач</Typography>
              </Box>
            </>
          )}
        </div>
      </StyledDrawer>
    </div>
  );
}

export default BottomSheet;
