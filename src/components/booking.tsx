import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

import EventSummary from "./event-summary";

export default function Booking() {
  const [booking, setBooking] = useState<any>();

  useEffect(() => {
    const setupCal = async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          // `data` is properties for the event.
          // `type` is the name of the action(You can also call it type of the action.) This would be same as "ANY_ACTION_NAME" except when ANY_ACTION_NAME="*" which listens to all the events.
          // `namespace` tells you the Cal namespace for which the event is fired/
          const { data } = e.detail;
          setBooking(data);
        },
      });
    };

    setupCal();
  }, []);
  return (
    <div id="bookingSection" className="my-20">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Book Now:
        </h1>
      </div>
      {booking == null && (
        <Cal
          calOrigin="https://cal.mbcubeconsulting.ca"
          calLink="kdystudios/studio"
        ></Cal>
      )}

      {booking != null && (
        <div className="flex flex-col justify-between items-center">
          <div className="bg-white shadow sm:rounded-lg ring-1 ring-gray-900/10 px-4 py-6 flex flex-col items-center">
            <EventSummary event={booking} />
          </div>
        </div>
      )}
    </div>
  );
}
