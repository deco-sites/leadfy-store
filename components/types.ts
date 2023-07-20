export interface PlpReturn {
  idLoja: string;
  result: Vehicles;
}

export interface PdpReturn {
  idLoja: string;
  result: Vehicles;
}

export type Vehicles = Vehicle[];

export interface Vehicle {
  vehicle_id: number;
  date: string;
  last_update: string;
  title: string;
  category: string;
  description: string;
  accessories: string[];
  make: string;
  body_type: string;
  model: string;
  model_name: string;
  version: string;
  year: number;
  fabric_year: number;
  condition: string;
  mileage: number;
  highligh: string;
  fuel: string;
  gear: string;
  plate: string;
  doors: number;
  color: string;
  tags: string;
  price: string;
  promotion_price: string;
  transfer_price: string;
  seller: string;
  seller_cnpj: string;
  phone: string;
  location_code: number;
  location_country: string;
  location_state: string;
  location_city: string;
  zip_code: string;
  neighborhood: string;
  location_street: string;
  location_number: string;
  chassi: null;
  mvs: null;
  images: string[];
  video: null;
  fipe: null;
  pericia: null;
  megaimagens_360: string;
}
