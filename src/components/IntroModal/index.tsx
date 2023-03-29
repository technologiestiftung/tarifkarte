import { FC } from "react";
import { Dialog } from "@headlessui/react";
import { Cross } from "../Icons";

// import { TsbLogo } from "@components/Logos/TsbLogo";
import { OdisLogo } from "@components/Logos/OdisLogo";
import { CitylabLogoBw } from "../Logos/CitylabLogoBw";

export interface IntroModalType {
  modalOpen: boolean;
  setModalOpen: (date: boolean) => void;
}

export const IntroModal: FC<IntroModalType> = ({ modalOpen, setModalOpen }) => {
  function closeModal() {
    setModalOpen(false);
  }
  function closeModalExplore() {
    setModalOpen(false);
  }
  function closeModalInfo() {
    setModalOpen(false);
  }

  return (
    <>
      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-50"
        onClose={closeModal}
      >
        <div className="fixed inset-0 bg-white/80" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 leading-7">
            <Dialog.Panel className="w-10/12 border border-primary/50  bg-white text-black/90 max-h-full p-6 md:max-w-none filter drop-shadow-lg rounded-lg md:min-w-xl lg:w-1/2 mx-auto transition-all">
              <button
                className="text-black focus:outline-none top-0 right-0 m-4 absolute cursor-pointer z-20 hover:bg-black border-black border-2 rounded-full p-1 hover:text-white"
                onClick={closeModal}
              >
                <Cross />
              </button>
              <h2 className="font-bold text-3xl pb-4 pt-2 text-black/80">
                Berliner Tarifkarte
              </h2>
              <p className="pb-6 leading-normal text-lg font-bold">
                Wo verläuft die Berliner{" "}
                <span className="italic"> Tarifzone C </span>
                des ÖPNVs eigentlich genau? Welche Stationen kannst du mit einem
                einfachen ABC Ticket erreichen? Finde es auf dieser Karte
                heraus!
              </p>
              <p className="pb-6">
                Laut den{" "}
                <a
                  className="text-zoneb"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bvg.de/de/abos-und-tickets/tarifzonen-und-tarifbestimmungen"
                >
                  Berliner Verkehrsbetrieben (BVG)
                </a>{" "}
                erstreckt sich die <span className="italic">Tarifzone C</span>{" "}
                in einem ca. 15 km weitem Radius um Berlin. Eine genaue
                geografische Grenze gibt es nicht. Bei Strausberg erreicht die
                Trafizone C fast 20 km - bei Erkner liegt sie deutlich unter 15
                km.
              </p>
              <p className="pb-6">
                <span className="font-bold">How to:</span> Exploriere die Karte
                durch einfaches Reinzoomen. Die weißen Punkte repräsentieren
                Haltestellen, deren Namen du durch Hovern und Klicken abrufen
                kannst. So bekommst du außerdem einen Link zum Verkehrsverbund
                Berlin Brandenburg (VBB).
              </p>
              <p className="text-sm">
                <span className="font-bold">Methodik: </span>
                Die{" "}
                <a
                  className="text-zoneb"
                  target="_blank"
                  rel="noreferrer"
                  href="https://daten.berlin.de/datensaetze/vbb-fahrplandaten-gtfs"
                >
                  Haltestellendaten
                </a>{" "}
                kommen vom Berliner Open Data Portal. Sie wurden zusätzlich mit
                <a
                  className="text-zoneb"
                  target="_blank"
                  rel="noreferrer"
                  href="https://sbahn.berlin/fileadmin/user_upload/Tickets/Tarifgebiet_Berlin-Brandenburg/Tarifbroschueren/vbbtarif-zielorte.pdf"
                >
                  {" "}
                  Tarifbereichsdaten{" "}
                </a>
                verschnitten. Mit Hilfe eines{" "}
                <a
                  className="text-zoneb"
                  target="_blank"
                  rel="noreferrer"
                  href="https://de.wikipedia.org/wiki/Voronoi-Diagramm"
                >
                  Voronoi-Diagramms{" "}
                </a>
                wurde der Raum um Berlin zuerst in Regionen zerlegt. Danach
                wurden diejenigen wieder zusammengelegt, welche zur Zone C
                gehören. Den Code zum Projekt findest du in unserem{" "}
                <a
                  className="text-zoneb"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/technologiestiftung/tarifzonen/"
                >
                  Github Repository
                </a>{" "}
                | Stand: Februar 2023
                <br />
                <br />
              </p>

              {/* <p className="text-sm">Stand: Februar 2023</p> */}

              {/* <button
                className="border px-4 bg-primary font-bold  p-2 text-bold rounded hover:border-primary hover:bg-black border-black hover:text-white"
                onClick={() =>
                  (function () {
                    setModalOpen(false);
                  })()
                }
              >
                Schließen
              </button> */}

              {/* <button
                className="px-4 ml-4 bg-white text-gray-500 text-bold hover:text-primary p-2 rounded "
                onClick={closeModalInfo}
              >
                Mehr Infos
              </button> */}

              <div className="grid md:grid-cols-[1fr,auto] gap-4 mt-2 md:mt-2">
                <p className="text-xs mb-2 md:mb-0 text-gray-500 max-w-md pt-4">
                  <i>
                    Eine prototypische Datenvisualisierung der Open Data
                    Informationsstelle Berlin in Zusammenarbeit mit dem CityLAB
                    Berlin
                  </i>
                </p>
                <div className="inline-block ml-4 md:flex self-center">
                  <div className="w-32 pt-4 mr-8 md:mt-0 self-center">
                    <OdisLogo className={`w-30`} />
                  </div>
                  <div className="w-32 pt-0 mr-8 md:mt-0 self-center">
                    <CitylabLogoBw className={`w-30`} />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
