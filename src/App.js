import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";
import { Explanation, Title, Date } from "./components/Title";


// const dummyData = {
//   date: "2023-06-02",
//   explanation: "Big, beautiful spiral galaxy M101 is one of the last entries in Charles Messier's famous catalog, but definitely not one of the least. About 170,000 light-years across, this galaxy is enormous, almost twice the size of our own Milky Way. M101 was also one of the original spiral nebulae observed by Lord Rosse's large 19th century telescope, the Leviathan of Parsontown. Assembled from 51 exposures recorded by the Hubble Space Telescope in the 20th and 21st centuries, with additional data from ground based telescopes, this mosaic spans about 40,000 light-years across the central region of M101 in one of the highest definition spiral galaxy portraits ever released from Hubble. The sharp image shows stunning features of the galaxy's face-on disk of stars and dust along with background galaxies, some visible right through M101 itself. Also known as the Pinwheel Galaxy, M101 lies within the boundaries of the northern constellation Ursa Major, about 25 million light-years away.",
//   hdurl: "https://apod.nasa.gov/apod/image/2306/M101_hst6000.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Messier 101",
//   url: "https://apod.nasa.gov/apod/image/2306/M101_hst1280.jpg"
// }




function App() {


  const [data, setData] = useState("");
  const [date, setDate] = useState("2023-05-31");
  const changeHandler = (event) => {
    setDate(event.target.value)
  }
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Yh9QWuHltuytwCsgfzE4rpceyQjVeQU1ihff8D0V&date=" + date)
      .then(res => {
        setData(res.data)
      })
    //setData(dummyData)
  }, [date]);



  return (
    <div className="App">
      <input type="date" value={date} onChange={changeHandler} />
      <Title>
        {data.title}
      </Title>
      {data.media_type == "image"
        ? <Image dataurl={data.url} />
        : <Youtube dataurl={data.url} />}
      <Explanation>
        {data.explanation}
      </Explanation>
      <Date>
        {data.date}
      </Date>

    </div>
  );
}

export default App;
