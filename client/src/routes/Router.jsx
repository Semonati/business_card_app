import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routerModel";
import CardsPage from "../cards/pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import Sandbox from "../sandbox/Sandbox";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import CompLogic from "../sandbox/CompLogic";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import Memoization from "../sandbox/memoization/Memoization";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependancies from "../sandbox/life-cycle-hooks/UseEffectNoDependancies";
import MuiSandbox from "../sandbox/mui-sandbox/MuiSandbox";
import TypographyComponent from "../sandbox/mui-sandbox/data-display/TypographyComponent";
import MuiDivider from "../sandbox/mui-sandbox/data-display/MuiDivider";
import FormTest from "../sandbox/forms/FormTest";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import EditUserPage from "../users/pages/EditUserPage";
import FavCardsPage from "../cards/pages/FavCardPage";
import UsersCRMPage from "../users/pages/UsersCRMPage";
import UserPage from "../users/pages/UserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.USERS_CRM} element={<UsersCRMPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.FAV_CRDES}/:userId`} element={<FavCardsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={`${ROUTES.EDIT_USER}/:userId`} element={<EditUserPage />} />
      <Route path={`${ROUTES.USER_PROFILE}/:userId`} element={<UserPage />} />
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path="logic" element={<CompLogic />} />
        <Route path="custom-counter-hook" element={<CustomCounterHook />} />
        <Route path="custom-name-hook" element={<CustomName />} />
        <Route path="form" element={<FormTest />} />
        <Route path="memoization" element={<Memoization />}>
          <Route path="use-callback" element={<UseCallback />} />
        </Route>
        <Route path="life-cycle" element={<LifeCycleHooks />}>
          <Route path="initial" element={<InitialCycle />} />
          <Route path="use-state-cycle" element={<UseStateCycle />} />
          <Route
            path="component-did-mount"
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path="component-did-update"
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path="component-will-unmount"
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route
            path="component-no-dependencies"
            element={<UseEffectNoDependancies />}
          />
        </Route>
        <Route path="mui-sandbox" element={<MuiSandbox />}>
          <Route path="typography" element={<TypographyComponent />} />
          <Route path="divider" element={<MuiDivider />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
