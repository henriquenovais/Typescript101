import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const googleMapsScript = `      

`;

const scriptTag = document.getElementById("map-code");

if (scriptTag) {
  const newContent = googleMapsScript.replace(
    "%%%SKEY%%%",
    process.env.GOOGLE_MAPS_API_KEY
  );

  myMapsScript(process.env.GOOGLE_MAPS_API_KEY);

  console.log(newContent);

  scriptTag.textContent = newContent;

  eval(scriptTag.textContent);
}

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
