import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./index";
import RouteWrapper from "./RouteWrapper";
import React from "react";

export const PrivateRoute = () => {
  return (
    <>
      <Routes>
        {ROUTES?.filter((item) => item?.publicRoute !== true).map((item, i) => {
          return (
            <Route key={i}
              path={item.path}
              element={<RouteWrapper is_blank={item?.is_blank}>{item.element}</RouteWrapper>}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
