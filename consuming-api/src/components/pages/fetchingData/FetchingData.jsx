import { useEffect, useState } from "react"
import Albums from "./Albums";
import axios from "axios"

function FetchingData() {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    // const tarea = fetch("https://jsonplaceholder.typicode.com/albums");
    // tarea
    //   .then((res) => res.json())
    //   .then((res) => {setAlbums(res)})
    //   .catch((err) => {
    //     console.log("err:", err);
    //   });
    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea
      .then((res) => setAlbums(res.data))
      .catch((err)=>{console.log("err",err)})
  },[])

  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     userId: 1,
    //     id: 1,
    //     title: "Nuevo album",
    //   }),
      // headers: {
      //   "authorization":"dabnfnvc39eru8qmndko"
      // }
    //   });
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 1,
      id: 1,
      title: "Nuevo album",
    });
  }

  return (
    <Albums albums={albums} crear={crear} />
  )
}

export default FetchingData
