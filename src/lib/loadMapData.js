import fs from "fs";
import path from "path";

export function getData() {
  const zoneAPath = path.join(
    process.cwd(),
    "public/data/BerlinInnenstadt.geojson"
  );
  const zoneA = JSON.parse(fs.readFileSync(zoneAPath, "utf-8"));
  const zoneBPath = path.join(process.cwd(), "public/data/zoneBalt.geojson");
  const zoneB = JSON.parse(fs.readFileSync(zoneBPath, "utf-8"));
  const zoneCPath = path.join(process.cwd(), "public/data/zoneCalt.geojson");
  const zoneC = JSON.parse(fs.readFileSync(zoneCPath, "utf-8"));
  const berlinInnenstadtPath = path.join(
    process.cwd(),
    "public/data/BerlinInnenstadt.geojson"
  );
  const berlinInnenstadt = JSON.parse(
    fs.readFileSync(berlinInnenstadtPath, "utf-8")
  );
  const berlinPath = path.join(process.cwd(), "public/data/Berlin.geojson");
  const berlin = JSON.parse(fs.readFileSync(berlinPath, "utf-8"));
  const berlinBufferPath = path.join(
    process.cwd(),
    "public/data/Berlin_buffer15.geojson"
  );
  const berlinBuffer = JSON.parse(fs.readFileSync(berlinBufferPath, "utf-8"));
  const berlinBufferLgPath = path.join(
    process.cwd(),
    "public/data/Berlin_buffer20.geojson"
  );
  const berlinBufferLg = JSON.parse(
    fs.readFileSync(berlinBufferLgPath, "utf-8")
  );
  const stationsPath = path.join(process.cwd(), "public/data/stations.geojson");
  const stations = JSON.parse(fs.readFileSync(stationsPath, "utf-8"));
  return {
    props: {
      zoneA: zoneA,
      zoneB: zoneB,
      zoneC: zoneC,
      berlinInnenstadt: berlinInnenstadt,
      berlin: berlin,
      berlinBuffer: berlinBuffer,
      berlinBufferLg: berlinBufferLg,
      stations: stations,
    },
  };
}
