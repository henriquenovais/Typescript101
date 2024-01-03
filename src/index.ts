import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// const user = new User();
// const company = new Company();

// const cool = new CustomMap();
// cool.addMarker(user);
// cool.addMarker(company);
