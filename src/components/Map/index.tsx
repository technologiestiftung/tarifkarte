import { FC, useEffect, useRef, useCallback, useMemo } from "react";
import Map, {
  Source,
  Layer,
  Marker,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import mapStyle from "./mapStyle";
import { useState } from "react";
import { layerStyles } from "./layerStyles";
import { MapNav } from "@components/MapNav";

// import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'

export interface MapComponentType {
  data: any;
}

export const MapComponent: FC<MapComponentType> = ({ data }) => {
  const [mapZoom, setMapZoom] = useState<number>(10);

  const mapRef = useRef<mapboxgl.Map>();
  const startMapView = {
    longitude: 13.341760020413858,
    latitude: 52.510831578689704,
    zoom: mapZoom,
  };

  var popup;
  let wasClicked = false;
  let stationNameOld = "";
  const onMapCLick = (e: any): void => {
    if (!mapRef || !mapRef.current) {
      return;
    }
    if (mapRef.current.getLayer("stations") === undefined) {
      return;
    }
    if (mapRef.current.getZoom() < 10) {
      return;
    }
    if (e.type === "click") {
      wasClicked = true;
    }
    if (popup && !wasClicked) {
      popup.remove();
    }
    let stationName = mapRef.current.queryRenderedFeatures(e.point, {
      layers: ["stations"],
    });

    if (stationName.length === 0) {
      mapRef.current.getCanvas().style.cursor = "";
      return;
    }

    stationName = stationName[0].properties?.stop_name;
    if (e.type === "click") {
      stationNameOld = stationName;
    }
    if (popup && stationNameOld != stationName) {
      popup.remove();
      stationNameOld = stationName;
      console.log(stationNameOld);
    }

    wasClicked = false;
    mapRef.current.getCanvas().style.cursor = "pointer";

    popup = new maplibregl.Popup({ className: "my-class" })
      .setLngLat(e.lngLat)
      .setHTML("<p>" + stationName + "</p>")
      .setMaxWidth("300px")
      .addTo(mapRef.current?.getMap());

    if (e.type === "click") {
      new maplibregl.Popup({ className: "my-class" })
        .setLngLat(e.lngLat)
        .setHTML(
          "<p>" +
            stationName +
            "</p><a class='popup-link' href='https://fahrinfo.vbb.de/webapp/?v=2.0&REQ0JourneyStopsZ0A=1&Z=" +
            stationName +
            "' target='_blank'>Bei der VBB Info finden</a>"
        )
        .setMaxWidth("300px")
        .addTo(mapRef.current?.getMap());
    }
  };

  // const onZoomEnd = (e: any): void => {
  //   if (!mapRef || !mapRef.current) {
  //     return;
  //   }
  //   setMapZoom(mapRef.current.getZoom());
  // };

  const onMapLoad = (e: any): void => {
    if (!mapRef || !mapRef.current) {
      return;
    }
    setMapZoom(mapRef.current.getZoom());
  };
  useEffect(() => {
    if (mapRef.current) {
      // @ts-ignore
      if (mapRef.current.getZoom() !== mapZoom) {
        // @ts-ignore
        mapRef.current.zoomTo(mapZoom, {
          duration: 200,
        });
      }
    }
  }, [mapZoom]);

  return (
    <div className="h-screen w-screen">
      <Map
        mapLib={maplibregl}
        initialViewState={{ ...startMapView }}
        // mapStyle={process.env.NEXT_PUBLIC_MAPTILER_STYLE}
        mapStyle={mapStyle()}
        onClick={onMapCLick}
        onMouseMove={onMapCLick}
        // @ts-ignore
        ref={mapRef}
        bounds={[
          12.777342808197773, 52.129092675117505, 14.009067613750716,
          52.86814653557087,
        ]}
        maxBounds={[
          11.82943127508483, 51.74832292717255, 15.046752480983088,
          53.467541934574086,
        ]}
        attributionControl={false}
        interactiveLayerIds={["stations"]}
        // onZoomEnd={onZoomEnd}

        onLoad={onMapLoad}
      >
        <Source id="zoneA" type="geojson" data={data.zoneA}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["zoneA"]} />
          <Layer {...layerStyles["zoneALine"]} />
        </Source>
        <Source id="zoneB" type="geojson" data={data.zoneB}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["zoneB"]} />
          <Layer {...layerStyles["zoneBLine"]} />
        </Source>{" "}
        <Source id="zoneC" type="geojson" data={data.zoneC}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["zoneC"]} />
          <Layer {...layerStyles["zoneCLine"]} />
        </Source>
        <Source id="berlinBuffer" type="geojson" data={data.berlinBuffer}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["berlinBuffer"]} />
        </Source>
        <Source id="berlinBufferLg" type="geojson" data={data.berlinBufferLg}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["berlinBufferLg"]} />
        </Source>
        <Source id="stations" type="geojson" data={data.stations}>
          {/* @ts-ignore */}
          <Layer {...layerStyles["stations"]} />
        </Source>
        <Marker longitude={13.38176002} latitude={52.5108315} anchor="center">
          <div className="w-10 h-10 bg-zonea font-bold bold text-3xl text-center text-white">
            A
          </div>
        </Marker>
        <Marker longitude={13.21638834} latitude={52.5108315} anchor="center">
          <div className="w-10 h-10 bg-zoneb font-bold bold text-3xl text-center text-white">
            B
          </div>
        </Marker>
        <Marker longitude={13.00884134} latitude={52.5108315} anchor="center">
          <div className="w-10 h-10 bg-zonec font-bold bold text-3xl text-center text-white">
            C
          </div>
        </Marker>
        <Marker
          longitude={13.863950610742421}
          latitude={52.28850789667135}
          anchor="center"
        >
          <div className=" text-zonec font-bold bold  text-center content">
            15 km
          </div>
        </Marker>
        <Marker
          longitude={13.828556219777767}
          latitude={52.19531400411296}
          anchor="center"
        >
          <div className=" text-zonec font-bold bold text-center content">
            20 km
          </div>
        </Marker>
        {/* {stationName && (
          <Popup
            longitude={stationLng}
            latitude={stationLat}
            offset={[0, -10]}
            closeButton={false}
          >
            {stationName}
          </Popup>
        )} */}
      </Map>
      <MapNav mapZoom={mapZoom} setMapZoom={setMapZoom} />
      <div>
        <div className="fixed bottom-2 right-2 text-gray-500/60 text-xs">
          {/* <a href="https://www.maptiler.com/copyright/" target="_blank">
            © MapTiler
          </a>{" "} */}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            © OpenStreetMap contributors
          </a>
        </div>
      </div>
    </div>
  );
};

// <Source id="berlin" type="geojson" data={data.berlin}>
// {/* @ts-ignore */}
// <Layer {...layerStyles["berlin"]} />
// </Source>
// <Source
// id="berlinInnenstadt"
// type="geojson"
// data={data.berlinInnenstadt}
// >
// {/* @ts-ignore */}
// <Layer {...layerStyles["berlinInnenstadt"]} />
// </Source>
