import { FC } from "react";
import { Dialog } from "@headlessui/react";
import { Cross } from "../Icons";

import { TsbLogo } from "@components/Logos/TsbLogo";
import { OdisLogo } from "@components/Logos/OdisLogo";

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
            <Dialog.Panel className="border border-primary/50  bg-white text-black/90 max-h-full p-6 max-w-xs md:max-w-none filter drop-shadow-lg rounded-lg md:min-w-xl md:w-1/2 mx-auto transition-all">
              <button
                className="text-black focus:outline-none top-0 right-0 m-4 absolute cursor-pointer z-20 hover:bg-black border-black border-2 rounded-full p-1 hover:text-white"
                onClick={closeModal}
              >
                <Cross />
              </button>
              <h2 className="font-bold text-2xl pb-4 pt-2 text-black/80">
                Berliner Tarifzonen Karte
              </h2>
              <p className="pb-6 leading-normal">
                Wo verläuft die Berliner{" "}
                <span className="decoration-zonec underline decoration-2 underline-offset-2">
                  {" "}
                  Tarifzone C{" "}
                </span>
                des öffentlichen Nahverkehrs eigentlich genau? Und welche
                Stationen kannst du noch mit einem einfachen ABC Ticket
                erreichen? Auf der Karte kannst du es herausfinden.
                <br />
                <br />
                Laut{" "}
                <a
                  className="text-zoneb"
                  href="https://www.bvg.de/de/abos-und-tickets/tarifzonen-und-tarifbestimmungen"
                >
                  BVG
                </a>{" "}
                liegt die Tarifzone C ca. 15 km um Berlin. Eine genaue Grenze
                gibt es nicht. Bei Strausberg reicht die Trafizone C fast 20 km.
                In der Umgebung von Erkner dagegen deutlich unter 15 km.
                <br />
                <br />
                Exploriere die Karte indem du hereinzoomst. Die weißen Punkte
                stellen die Sationen da, deren Namen du durch hovern/klicken
                abrufen kannst und so auch einen Link zur VBB Webseite bekommst.
                <br />
                <br />
                Methodik: Die{" "}
                <a
                  className="text-zoneb"
                  href="https://daten.berlin.de/datensaetze/vbb-fahrplandaten-gtfs"
                >
                  Haltestellen Daten
                </a>{" "}
                kommen vom Berliner Open Data Portal, welche mit den
                <a
                  className="text-zoneb"
                  href="https://sbahn.berlin/fileadmin/user_upload/Tickets/Tarifgebiet_Berlin-Brandenburg/Tarifbroschueren/vbbtarif-zielorte.pdf"
                >
                  {" "}
                  Tarifbereichsdaten{" "}
                </a>
                verschnitten wurden. Mit Hilfe eines{" "}
                <a
                  className="text-zoneb"
                  href="https://de.wikipedia.org/wiki/Voronoi-Diagramm"
                >
                  Voronoi-Diagramms{" "}
                </a>
                wurde der Raum um Berlin in Regionen zerlegt und danach
                diejenigen wieder zusammengelegt, welche zur Zone C gehören. Den
                Code zum Projekt findest du{" "}
                <a
                  className="text-zoneb"
                  href="https://github.com/technologiestiftung/tarifzonen/"
                >
                  hier
                </a>
                <br />
                <br />
                Stand: Februar 2023
              </p>

              <button
                className="border px-4 bg-primary font-bold  p-2 text-bold rounded hover:border-primary hover:bg-black border-black hover:text-white"
                onClick={() =>
                  (function () {
                    setModalOpen(false);
                  })()
                }
              >
                Schließen
              </button>

              {/* <button
                className="px-4 ml-4 bg-white text-gray-500 text-bold hover:text-primary p-2 rounded "
                onClick={closeModalInfo}
              >
                Mehr Infos
              </button> */}

              <div className="grid md:grid-cols-[1fr,auto] gap-4 mt-4 md:mt-6">
                <p className="text-xs mb-2 md:mb-0 text-gray-500 max-w-md pt-4">
                  <i>
                    Eine prototypische Datenvisualisierung der Open Data
                    Informationsstelle Berlin in Zusammenarbeit mit dem CityLAB
                    Berlin
                  </i>
                </p>
                <div className="inline-block ml-4 md:flex self-center">
                  <div className="w-32 md:pt-4 md:pl-4">
                    <TsbLogo className={`w-30`} />
                  </div>
                  <div className="w-32 pt-2 mr-8 md:mt-0 self-center">
                    <OdisLogo className={`w-30`} />
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
