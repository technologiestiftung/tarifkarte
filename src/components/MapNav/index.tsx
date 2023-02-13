import { FC } from "react";
import { Plus, Minus, Geolocate } from "../Icons";

export interface MapNavType {
  mapZoom: number;
  setMapZoom: (zoom: number) => void;
}

export const MapNav: FC<MapNavType> = ({ mapZoom, setMapZoom }) => {
  const navClasses =
    "border hover:bg-black hover:text-white bg-white text-textcolor h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full";

  return (
    <nav
      className={
        "mb-3 fixed top-0 p-4 pt-2 ease-in-out duration-300 z-10 right-0"
      }
    >
      <div>
        <button
          title="zoom in"
          className={navClasses}
          onClick={() => setMapZoom(mapZoom + 1)}
        >
          <Plus />
        </button>
        <button
          title="zoom out"
          className={navClasses}
          onClick={() => setMapZoom(mapZoom - 1)}
        >
          <Minus />
        </button>
      </div>
    </nav>
  );
};
