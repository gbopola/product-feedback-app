import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CreateFeedback from "./pages/CreateFeedback.jsx";
import EditFeedback from "./pages/EditFeedback.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FeedbackDetails from "./pages/FeedbackDetails.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import PrivateRoute from "./components/shared/PrivateRoute.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrivateRoute />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="feedback/create" element={<CreateFeedback />} />
        <Route path="feedback/edit/:id" element={<EditFeedback />} />
        <Route path="feedback/details/:id" element={<FeedbackDetails />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
