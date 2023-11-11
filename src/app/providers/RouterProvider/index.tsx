import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Error from "../../../pages/Error";
import { EErrorTexts } from "../../../shared/enums/EErrorTexts";

export default function AppRouterProvider() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Error errorReason={EErrorTexts.ErrorFallback} />}
    />
  );
}
