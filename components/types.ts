export interface PlpReturn {
  idLoja: string;
  result: Vehicles;
}

export interface storeDataFromApi {
  title: string;
  description: string;
  logo: string;
  whatsapp: string;
}

export interface PdpReturn {
  idLoja: string;
  result: Vehicles;
  storeDataFromApi: storeDataFromApi;
}

export type Vehicles = Vehicle[];

export interface Vehicle {
  "g:id": string[];
  "g:title": string[];
  "g:description": string[];
  "g:link": string[];
  "g:image_link": string[];
  "g:additional_image_link": string[];
  "g:brand": string[];
  "g:color": string[];
  "g:condition": string[];
  "g:price": string[];
  "g:size": string[];
  "g:availability": string[];
  "g:google_product_category": string[];
  "location_id": string[];
}
