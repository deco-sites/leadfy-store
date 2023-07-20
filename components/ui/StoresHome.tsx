import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";

import type { SectionProps } from "$live/mod.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/leadfy-store/components/ui/Gallery.tsx";

export interface Profile {
  /** @title id */
  /** @description Store id on Leadfy pannel */
  idLoja: string;
  whatsappNumber: string;
  logo: LiveImage;
}

export interface StoreInformations {
  label: string;
  profile: Profile;
  banner?: {
    image?: LiveImage;
    altText?: string;
  };
  content: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface Props {
  stores: StoreInformations[];
}

export default function StoresHome(
  { store, vehicles }: SectionProps<typeof loader>,
) {
  if (store) {
    const { profile, banner, content } = store;
    return (
      <>
        <Head>
          <title>{content.title}</title>
          <link rel="icon" type="image/png" href={profile.logo}></link>
        </Head>
        <div>
          <div class="container px-12 py-7 flex justify-center">
            <Image
              src={profile.logo}
              width={200}
              alt={content.title}
            />
          </div>
          {banner && banner.image && (
            <div class="container">
              <Image
                src={banner.image}
                width={1100}
                alt={banner.altText || content.title}
              />
            </div>
          )}
          <div class="container text-center">
            <h1 class="text-[44px] my-3 louis-bold text-black">
              {content.title}
            </h1>
            <h2 class="text-[30px]">{content.subtitle}</h2>
            <p class="text-[20px] louis-bold text-[#1a1b1f] opacity-60">
              {content.text}
            </p>
          </div>
          <Gallery
            vehicles={vehicles}
            idLoja={profile.idLoja}
            whatsapp={profile.whatsappNumber}
          />
        </div>
      </>
    );
  }

  return (
    <div>
      <div class="container text-center">
        <h1 class="text-[64px] py-5">Dados da loja não cadastrados</h1>
      </div>
    </div>
  );
}

export const loader = async (
  { stores = [] }: Props,
  req: Request,
) => {
  const idAtUrl = req.url.split("/").pop();
  const store = stores.find(({ profile }) => profile?.idLoja == idAtUrl);

  const response = await fetch(
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${idAtUrl}/portals/dealersites/vehicles.json`,
  );
  const vehicles = await response.json();

  return { store, vehicles };
};
