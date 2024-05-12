import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CharacterDetail() {

  const  { id } = useParams();

  const [url,setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7c7328547481e4ce2f59080fb4759726&hash=000ec5d29edbda939132c5729db9d8f4")
  const [item,setItem] = useState([]);
  const [search,setSearch] = useState("");
  const [detailToggle, setDetailToggle] = useState(false)
  
  useEffect(()=>{
    const fetch=async(id)=>{
      console.log(id)
      console.log(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=7c7328547481e4ce2f59080fb4759726&hash=000ec5d29edbda939132c5729db9d8f4`)
      const res=await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=7c7328547481e4ce2f59080fb4759726&hash=000ec5d29edbda939132c5729db9d8f4`)
      setItem(res.data.data.results);
      console.log(res.data.data.results)
      console.log(res.data.data.results["name"])
    }
    fetch();
  },[url])  




  return (
    <div>
    </div>
  )
}

export default CharacterDetail


// {item[id]['name']}: {item[id]['description']} comics: {(item[id]['comics']['items']['length'] > 0) && item[id]['comics']['items'][1]['name']}

// const display = () => {
//   <div>{item[id]['name']}: {item[id]['description']} comics: {(item[id]['comics']['items']['length'] > 0) && item[id]['comics']['items'][1]['name']}</div>
// }
