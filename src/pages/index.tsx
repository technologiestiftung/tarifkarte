import { FC, useEffect, useRef, useCallback, useState } from "react";

import { MapComponent } from "@components/Map";
import { getMapData } from "@lib/loadMapData";
import { IntroModal } from "@/components/IntroModal";
import { Head } from "@/components/Head";

// import { Info } from "@/components/Icons";

export async function getStaticProps() {
  const mapData = getMapData();
  return mapData;
}

export default function Home(mapData: any) {
  const [modalOpen, setModalOpen] = useState(true);

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <Head />

      <MapComponent data={mapData} />
      <IntroModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <button
        className="fixed w-10 h-10 rounded bg-white left-0 top-0 z-20 m-4 text-center"
        onClick={openModal}
      >
        <Info></Info>
      </button> */}
      <button
        className="drop-shadow-md  fixed left-2/4 -translate-x-2/4 w-fit inline rounded bg-white md:text-2xl top-0 z-20 m-4 p-2 hover:bg-black border-black hover:text-white"
        onClick={openModal}
      >
        {" "}
        Berliner Tarifzonen Karte
      </button>
    </>
  );
}
