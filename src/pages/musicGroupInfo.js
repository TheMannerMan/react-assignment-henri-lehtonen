import React, {useEffect, useState} from 'react';
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import musicService from "../services/music-group-service"

export function MusicGroupInfo() {
  
  const service = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [serviceData, setServiceData] = useState();
  
  useEffect(
    
    () => {
      async function readWebApi() {
        const data = await service.readMusicGroupAsync(id);
        setServiceData(data);
      }
      readWebApi(id);
  })

  console.log(id)


  return (
    <div>musicGroupInfo</div>
  )
}