import type { LoaderReturnType } from "$live/types.ts";

import type {
  PdpReturn,
  Vehicle,
  Vehicles,
} from "deco-sites/leadfy-store/components/types.ts";

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
              <Form vehicle={vehicle} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <h1>Product Not Found</h1>;
}

export function Form({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div>
      <h1 class="text-[34px] text-black louis-bold">
        {vehicle.model.toUpperCase()}
      </h1>
      <span class="text-[22px] text-[#d1ad57]">R${vehicle.price}</span>

      <form action="" class="py-4 flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <label htmlFor="" class="text-[14px] uppercase tracking-[1px]">
            Nome
          </label>
          <input
            type="text"
            name=""
            id=""
            class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label htmlFor="" class="text-[14px] uppercase tracking-[1px]">
            Sobrenome
          </label>
          <input
            type="text"
            name=""
            id=""
            class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label htmlFor="" class="text-[14px] uppercase tracking-[1px]">
            Telefone
          </label>
          <input
            type="text"
            name=""
            id=""
            class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label htmlFor="" class="text-[14px] uppercase tracking-[1px]">
            Email
          </label>
          <input
            type="text"
            name=""
            id=""
            class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label htmlFor="" class="text-[14px] uppercase tracking-[1px]">
            CPF
          </label>
          <input
            type="text"
            name=""
            id=""
            class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
          />
        </div>
        <button class="bg-[#d1ad57] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center">
          Tenho interesse
        </button>
      </form>
      <div>
        <p
          class="text-[20px]"
          dangerouslySetInnerHTML={{ __html: vehicle.description }}
        >
        </p>
      </div>
    </div>
  );
}
