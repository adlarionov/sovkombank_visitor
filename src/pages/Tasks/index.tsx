// @ts-nocheck

import Box from "@mui/material/Box";
import {
  YMaps,
  Map,
  GeolocationControl,
  ZoomControl,
  Placemark,
} from "react-yandex-maps";

import { Divider, Typography, styled } from "@mui/material";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { Tabs } from "@mui/base/Tabs";
import { typographyMobile } from "../../shared/config/typography";

import BottomSheet from "../../shared/components/BottomSheet";
import { useEffect, useRef, useState } from "react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { palette } from "../../shared/config/palette";
import { ITaskCard } from "../../shared/interfaces/ITaskCard";
import TaskCard from "../../shared/components/TaskCard";
import { TabsList } from "../../shared/components/Tabs/TabList";
import { Tab } from "../../shared/components/Tabs/Tab";
import { TabPanel } from "@mui/base/TabPanel";
import PointService from "../../shared/services/pointService";
import { getDays } from "../../shared/hooks/getTime";
import useSWR from "swr";
import TasksService from "../../shared/services/tasksService";
import ITask from "../../shared/interfaces/ITask";
import RequestError from "../../shared/components/RequestError";
import { getUser } from "../../shared/hooks/useUser";

const tasks = [
  {
    id: 1,
    taskNumber: 1,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 2,
    taskNumber: 2,
    priority: "Низкий",
    time: "12:30-15:30 ",
    title: "Доставка карт и материалов",
    address: "ул. Восточно-Кругликовская, д. 64/2",
    comment: "",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 3,
    taskNumber: 3,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
  {
    id: 4,
    taskNumber: 4,
    priority: "Высокий",
    time: "09:00-12:00",
    title: "Выезд на точку для стимулирования выдач",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    comment:
      "Необходимо связаться с digital-отделом после выполнения задачи для проверки нового функционала",
    employee: "Евдокимов Д.Т.",
  },
] as ITaskCard[];

const StyledButtonGroup = styled(Box)({
  position: "absolute",
  top: 25,
  left: 16,
});

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

const ModalStyles = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: palette.background.tertiary,
  display: "flex",
  flexDirection: "column",
  zIndex: 999,
});

const BottomBlock = styled(Box)({
  position: "absolute",
  overflow: "scroll",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "41.375rem",
  background: theme.palette.common.white,
  padding: "1rem 1rem 0 1rem ",
  borderRadius: "1rem 1rem 0rem 0rem",
  boxShadow: "0px 0px 4px 0px rgba(68, 68, 68, 0.16)",
});

const getTasks: () => Promise<ITask[]> = async () =>
  await TasksService.getTasks(Number(getUser()));

export default function Tasks() {
  const apiKey = "d5918306-ec3f-40ad-a705-0c3d36aa30e8";
  const [isOpenTasksList, setIsOpenTasksList] = useState(false);

  const [selectedPoint, setSelectedPoint] = useState<number[]>();
  const [currentLocation, setCurrentLocation] = useState<number[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);

  const [isFirstRoute, setIsFirstRoute] = useState<boolean>(true);
  const days = getDays();

  const [ymaps, setYmaps] = useState<any>();
  const { data, error, mutate } = useSWR("/workers/get_tasks", getTasks);

  const mapState = {
    center: [44.98, 38.97],
    zoom: 12,
  };

  const map = useRef(null);

  const [coordinatesList, setCoordinatesList] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  const getAddresses = () => {
    data?.map((element) => {
      setAddresses((prevElement) => [...prevElement, element.address]);
    });
  };

  // const addresses = [
  //   "ул. Восточно-Кругликовская, д. 64/2",
  //   "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
  //   "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
  // ]; // Replace with your array of addresses

  useEffect(() => {
    const geocodeAddress = async (address: string) => {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${encodeURIComponent(
          address
        )}`
      );
      const data = await response.json();
      const coordinates =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
          " "
        );
      const latitude = parseFloat(coordinates[1]);
      const longitude = parseFloat(coordinates[0]);

      return { address, coordinates: { latitude, longitude } };
    };

    Promise.all(addresses.map(geocodeAddress))
      .then((results) => {
        setCoordinatesList(results.map((result) => result.coordinates));
      })
      .catch((error) => console.error("Error fetching geocoding data:", error));
  }, []);

  const getPoints = async () => {
    const poins = await PointService.getPoints();
    console.log(poins);
  };

  useEffect(() => {
    getPoints();
    getAddresses();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Ошибка при определении местоположения:", error);
      }
    );
  }, []);

  if (error) {
    console.error(error);
    return <RequestError errorDescription={error} reload={mutate} />;
  }

  const openModal = () => {
    setIsOpenTasksList(true);
  };

  const closeModal = () => {
    setIsOpenTasksList(false);
  };

  const handlePlacemarkClick = (e: any) => {
    const clickedPoint = e.get("target").geometry.getCoordinates();
    setSelectedPoint(clickedPoint);
  };

  const saveYmap = (ymaps: any) => {
    setYmaps(ymaps);
  };

  const addRoute = () => {
    const pointA = [45.035603578464205, 38.970755839404184];
    // const pointA = currentLocation;
    const pointB = selectedPoint;

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "auto",
          avoidTrafficJams: true,
        },
      },
      {
        boundsAutoApply: true,
      }
    );
    if (isFirstRoute) {
      setIsFirstRoute(false);
      map.current?.geoObjects.add(multiRoute);
    } else {
      map.current?.geoObjects.splice(
        map.current?.geoObjects.getLength() - 1,
        map.current?.geoObjects.getLength() - 1,
        multiRoute
      );
    }
  };

  console.log("list", coordinatesList);

  useEffect(() => {
    if (selectedPoint && currentLocation) {
      addRoute();
    }
  }, [selectedPoint]);

  return (
    <>
      <Box>
        <div>
          <YMaps
            query={{
              apikey: "d5918306-ec3f-40ad-a705-0c3d36aa30e8",
              lang: "ru_RU",
            }}
          >
            <Map
              defaultState={{
                center: [45.06, 38.98],
                zoom: 11,
              }}
              width={"100%"}
              height={"100vh"}
              modules={["multiRouter.MultiRoute"]}
              state={mapState}
              instanceRef={map}
              onLoad={saveYmap}
            >
              <GeolocationControl
                options={{ position: { top: 30, right: 20 } }}
              />
              <ZoomControl options={{ position: { right: 20, top: 100 } }} />

              {coordinatesList.map((coordinate) => {
                return (
                  <Placemark
                    modules={["geoObject.addon.balloon"]}
                    geometry={[coordinate.latitude, coordinate.longitude]}
                    onClick={handlePlacemarkClick}
                  />
                );
              })}
              {/* <Placemark
                modules={["geoObject.addon.balloon"]}
                geometry={[45.06, 38.988]}
                options={{ draggable: true }}
                // properties={{
                //   balloonContentBody: "Адрес такой-то",
                // }}
                onClick={handlePlacemarkClick}
              />

              <Placemark
                modules={["geoObject.addon.balloon"]}
                geometry={[45.018, 39.024]}
                options={{ draggable: true }}
                // properties={{
                //   balloonContentBody: "Адрес такой-то",
                // }}
                onClick={handlePlacemarkClick}
              /> */}
            </Map>
          </YMaps>
        </div>
        <StyledButtonGroup>
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>Сегодня, {days[0]} ноября</Tab>
              <Tab value={2}>Завтра, {days[1]} ноября</Tab>
            </TabsList>
            <TabPanel value={1}>
              <BottomSheet openTaskList={openModal} isTasks={true} />
            </TabPanel>
            <TabPanel value={2}>
              <BottomSheet openTaskList={openModal} isTasks={false} />
            </TabPanel>
          </Tabs>
        </StyledButtonGroup>
      </Box>

      {isOpenTasksList && (
        <ModalStyles>
          <Box padding={"1rem 1rem 0 1rem"}>
            <Box>
              <ArrowBackIosNewRoundedIcon
                onClick={closeModal}
                sx={{
                  marginBottom: "0.5rem",
                }}
              />

              <TypographyH1Mobile>Задачи</TypographyH1Mobile>

              <Tabs style={{ marginBottom: "2rem" }} defaultValue={1}>
                <TabsList>
                  <Tab value={1}>Сегодня, {days[0]} ноября</Tab>
                  <Tab value={2}>Завтра, {days[1]} ноября</Tab>
                </TabsList>
                <TabPanel value={1}>
                  <BottomBlock>
                    {data?.map((step) => (
                      <Box key={step.order} sx={{ padding: "0.5rem" }}>
                        <TaskCard
                          status={step.status}
                          worker_id={step.worker_id}
                          isList={true}
                          title={step.task_type}
                          address={step.address}
                          time={step.date}
                          priority={step.priority}
                          taskNumber={step.order}
                        />
                        <Divider sx={{ marginTop: "0.5rem" }} />
                      </Box>
                    ))}
                  </BottomBlock>
                </TabPanel>
                <TabPanel value={2}>
                  <Box
                    marginTop={"2rem"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography>На этот день нет задач</Typography>
                  </Box>
                </TabPanel>
              </Tabs>
            </Box>
          </Box>
        </ModalStyles>
      )}
    </>
  );
}
