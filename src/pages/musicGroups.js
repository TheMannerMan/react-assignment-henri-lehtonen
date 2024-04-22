import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import MusicGroupList from "../components/music-group-list";
import musicService from '../services/music-group-service';
import AppPagination from '../components/pagination';
import {FormSearch} from "../components/form-search";
import MusicGroupDetailsView from "../components/music-group-details-view"

export function MusicGroupsWebApi() {
  const service = new musicService("https://appmusicwebapinet8.azurewebsites.net/api");
  return (
    <div className="container px-4 py-4 text-start">

        <h2 className="pb-2 border-bottom">Music groups in the database</h2>
        <Outlet context={service}/>
    </div>
  );
}


export function MusicGroupsWebApiList() {
  const service = useOutletContext();
  const navigate = useNavigate();
  
  const [serviceData, setServiceData] = useState();
  const [searchInput, setSearchInput] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(10);
  const [nrOfMusicGroups, setNrOfMusicGroups] = useState(0);


  useEffect(() => {
    async function readWebApi() {
      let data = await service.readMusicGroupsAsync(currentPage, true, searchInput, postPerPage);
      console.log(data);
      const nrOfPost = (data.dbItemsCount);
      setNrOfMusicGroups(nrOfPost);
      setServiceData(data);
   }
   readWebApi();
  },[currentPage, searchInput]);

  const paginate = (number) => setCurrentPage(number-1);
    
const onSave = async (e) => {
  setSearchInput(e.searchFilter);
  setCurrentPage(0);
}

const onClick= (e) => 
  {
    const id = e.currentTarget.dataset.rowitemid;
    console.log(id);
    navigate(`/music-groups-webapi/${id}`);
  }


    return (
    <>
    
    <FormSearch searchFilter={searchInput} onSave={onSave}/>
    <div className="container px-4 py-4 text-start">
    
    <MusicGroupList serviceData={serviceData} onClick={onClick}/>
    <AppPagination currentPage={currentPage} postPerPage={postPerPage} totalPosts={nrOfMusicGroups} paginate={paginate}/>
    
    </div>
    
    </>
  )
}

export function MusicGroupInfo() {
  
  const service = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataFetched, setDataFetched] = useState(false);
  
  const [serviceData, setServiceData] = useState(null);
  useEffect(
    
    () => {
      async function readWebApi() {
        const data = await service.readMusicGroupAsync(id, false);
        setServiceData(data);
        setDataFetched(true);
        console.log("Break!")
      }
      readWebApi(id);
  }, [])

  console.log("Hello")

  return (
    <>
      <div className="d-flex justify-content-center">
        {dataFetched && <MusicGroupDetailsView data={serviceData} />}
      </div>
      
    </>
  )
}