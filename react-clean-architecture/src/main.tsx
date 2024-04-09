import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./application/redux/store.ts";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd"; //
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StreamerList from "./presentation/screens/StreamerList/StreamerList.tsx";
import VideoList from "./presentation/screens/VideoList/VideoList.tsx";
import ActorList from "./presentation/screens/ActorList/ActorList.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StreamerList />}>
      <Route path="VideoList" element={<VideoList />} />
      <Route path="ActorList" element={<ActorList />} />
      <Route path="ActorList" element={<ActorList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*ConfigProvider en Ant Design (AntD) es un componente que
 roporciona una configuración 
uniforme para todos los componentes de React que se encuentren 
debajo de él en el árbol de renderizado. */

/*El archivo reset.css se utiliza para restablecer estilos básicos 
que pueden interferir con los estilos de AntD, 
asegurando que los componentes de AntD se muestren 
correctamente sin conflictos de estilo.*/
