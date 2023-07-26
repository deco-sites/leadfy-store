import type {
  PdpReturn,
  Vehicle,
} from "deco-sites/leadfy-store/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";

import { parseString } from "xml2js";

export interface Props {
  idloja: RequestURLParam;
  slug: RequestURLParam;
}

export default async function searchPdp(
  props: Props,
): Promise<PdpReturn> {
  const { slug, idloja } = props;

  const response = await fetch(
    `https://s3.agsistema.net/${idloja}/portals/c7power/vehicles.xml`,
  );

  const text = await response.text();

  let json;

  parseString(text, function (err, result) {
    json = result;
  });

  const vehicles = json.rss.channel[0].item;

  console.log(vehicles);

  const pdpResult = {
    idLoja: idloja,
    storeDataFromApi: {
      title: json.rss.channel[0].title[0],
      description: json.rss.channel[0].description[0],
      logo: json.rss.channel[0].logo[0],
      whatsapp:
        json.rss.channel[0].locations[0].location[0].whatsapps[0].whatsapp[0]
          .number[0],
    },
    result: vehicles.filter((car: Vehicle) => {
      console.log(car["g:title"][0]);
      console.log(slug.replaceAll("-", " "));
      return car["g:title"][0].toLowerCase() ==
        slug.replaceAll("-", " ").toLowerCase();
    }),
  };

  return pdpResult || {};
}
