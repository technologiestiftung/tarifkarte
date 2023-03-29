import { FC, useEffect, useRef, useCallback, useState } from "react";

import { MapComponent } from "@components/Map";
import { getData } from "@lib/loadMapData";
import { IntroModal } from "@/components/IntroModal";
import { Head } from "@/components/Head";

export async function getStaticProps() {
  const mapData = getData();
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
      <button
        className="drop-shadow-md  fixed left-2/4 -translate-x-2/4 w-fit inline rounded bg-white md:text-2xl top-0 z-20 m-4 p-2 hover:bg-black border-black hover:text-white"
        onClick={openModal}
      >
        {" "}
        Berliner Tarifkarte
      </button>
    </>
  );
}
