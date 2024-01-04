import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const importMapsLib = async (): Promise<void> => {
  (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
};

const main = async (): Promise<void> => {
  await importMapsLib();

  const user = new User();
  const company = new Company();

  const cool = new CustomMap();
  cool.addMarker(user);
  cool.addMarker(company);
};

main();
