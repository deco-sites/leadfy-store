import type { LoaderReturnType } from "$live/types.ts";

import type {
  PdpReturn,
  Vehicle,
  Vehicles,
} from "deco-sites/leadfy-store/components/types.ts";

import Form from "deco-sites/leadfy-store/islands/Form.tsx";

import Image from "deco-sites/std/components/Image.tsx";

import { Head } from "$fresh/runtime.ts";

export interface Props {
  page: LoaderReturnType<PdpReturn | null>;
}

export default function StoresPdp({ page }: Props) {
  if (page) {
    const vehicle = page.result[0];
    return (
      <>
        <Head>
          <title>{vehicle.model.toUpperCase()}</title>
        </Head>
        <div>
          <div class="container flex flex-col sm:flex-row">
            <div class="w-full sm:w-1/2 px-5 pt-5 sm:px-0 flex gap-3 sm:flex-wrap sm:pt-10 overflow-auto scrollbar-none">
              {vehicle.images.map((image, idx) => {
                return (
                  <Image
                    class="sm:w-[calc(50%-12px)]"
                    src={image}
                    width={550}
                  />
                );
              })}
            </div>
            <div class="w-full px-5 sm:px-0 sm:w-1/2 sm:max-w-[450px] mx-auto pt-10 sticky top-0 self-start">
              <Form vehicle={vehicle} idLoja={page.idLoja}/>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <h1>Product Not Found</h1>;
}
