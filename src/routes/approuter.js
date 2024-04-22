import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import {MusicGroupsWebApi, MusicGroupsWebApiList, MusicGroupInfo} from "../pages/musicGroups";
import Error from '../pages/error';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/musicGroupInfo" element={<MusicGroupInfo/>} />
      <Route path="/musicGroupInfo/:param1" element={<MusicGroupInfo/>} />

      <Route path="/music-groups-webapi" element={<MusicGroupsWebApi/>}>
        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<MusicGroupsWebApiList />} />
        <Route index path=":id" element={<MusicGroupInfo />}/>;
      </Route>
      
      
      {/* Passing a property when rendering and element */}
      <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}

export default AppRouter