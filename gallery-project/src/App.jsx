import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import BottomPagination from "./components/BottomPagination";


const App = () => {
  const [userData, setuserData] = useState([]);
  const [page, setPage] = useState(1);
  // for loading
  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getData = async () => {
    setLoading(true); //for loading
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`
    );
    // console.log(response);
    setTimeout(() => {
      setuserData(response.data);
      console.log(response.data);
      setLoading(false);
    }, 400);
  };

  useEffect(
    function () {
      setuserData([]); //clear old data
      getData();
    },
    [page]
  );

  // let printData = <h3 className="text-gray-500 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading....</h3>;
  // if (userData.length > 0) {
  //   printData = userData.map(function (elem, idx) {
  //     return (
  //       <div key={idx}>
  //         <a href={elem.url} target="_blank">
  //           <div className="h-40 w-44 overflow-hidden rounded-xl">
  //             <img
  //               className="h-full w-full object-cover"
  //               loading="lazy"
  //               src={elem.download_url}
  //               alt=""
  //             />
  //           </div>
  //           <h3 className="font-black text-lg">{elem.author}</h3>
  //         </a>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div className="bg-black text-white min-h-screen p-4 pb-28">
      {/* Gallery Section */}
      <Gallery loading={loading} userData={userData}/>
      
      {/* <div className=" flex flex-wrap gap-4">{printData}</div> */}

      {/* Bottom pagination */}
      <BottomPagination page={page} handleChange={handleChange}/>
    </div>
  );
};

export default App;
