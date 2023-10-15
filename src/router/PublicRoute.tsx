import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./index";
import RouteWrapper from "./RouteWrapper";

export const PublicRoute = () => {
  console.log('ROUTES', ROUTES);

  return (
    <>
      <Routes>
        {ROUTES.map((item, i) => {
          return (
            <Route key={i}
              path={item.path}
              element={<RouteWrapper is_Blank={item?.is_blank} is_Private={!item.publicRoute}>{item.element}</RouteWrapper>}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
