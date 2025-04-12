import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Bundle from "../components/Bundle";
import Card from "../components/Card";

const Router = () => {
  const [edit, setEdit] = useState(false);
  const data = [
    {
      img: "http://localhost:3000/static/media/pic1_resized.1db6bc3d1fcd69a59bde.jpg",
      btn: "BOOK ARRIVAL & DEPARTURE",
      des: "Enjoy your first and last impression of the beautiful island with Jamaicas Personalized and Expedited Airport Concierge Lounge Services where you RELAX. CONNECT and DISCOVER our gateway to paradise.",
      Link: "/product-bundle",
    },
    {
      img: "http://localhost:3000/static/media/pic2_resized.332e518aab3e659c7c10.jpg",
      btn: "BOOK ARRIVAL",
      des: "Maximize your time in paradise; enjoy personalized escort services with preferential fast track through immigration and customs whilst you access Jamaicas premier arrival lounge where culture meets comfort.",
      Link: "/product-arrival",
    },
    {
      img: "http://localhost:3000/static/media/pic3_resized.9311623c83305d2b6ae8.jpg",
      btn: "BOOK DEPARTURE",
      des: 'Continue your vacation and enjoy our "happy everafter" with preferential fast track, impressive services and top class amenities of our culturally inspired lounges.',
      Link: "/product-departure",
    },
  ];
  const [cardData, setCardData] = useState(data);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex p-10 mt-20 align-center justify-between">
            {cardData.map((e,i) => {
              return (
                <Card key={i} img={e.img} text={e.btn} des={e.des} link={e.Link} />
              );
            })}
          </div>
        }
      />
      <Route path="/product-arrival" element={<Bundle />} />
      <Route path="/product-departure" element={<Bundle />} />
      <Route path="/product-bundle" element={<Bundle />} />
    </Routes>
  );
};

export default Router;
