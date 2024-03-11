import Cal, { getCalApi } from "@calcom/embed-react";

import Image from "next/image";
import Team from "@/components/team";
import { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    const setupCal = async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    setupCal();
  }, []);

  return (
    <>
      <div className="relative isolate pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Come make magic.
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Our studio space is open to everyone. It is the best place to
                create, collaborate, and make your creative ideas come to life.
              </p>

              <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Join our team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>{" "}
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  width={600}
                  height={600}
                  src="/img/studio/studio_1.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    width={600}
                    height={600}
                    src="/img/studio/studio_3.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    width={600}
                    height={600}
                    src="/img/studio/studio_5.jpg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    width={600}
                    height={600}
                    src="/img/studio/studio_6.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <Cal
            calOrigin="http://localhost:3000"
            calLink="kdystudios/studio"
          ></Cal>
        </div>
      </div>
      <Team />
    </>
  );
}
