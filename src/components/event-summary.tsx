import {
  CheckCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import moment from "moment";

export default function EventSummary({ event }: { event: any }) {
  return (
    <>
      <div className="px-4 sm:px-0 text-center">
        <CheckIcon
          className="h-16 w-16 text-green-600 bg-green-50 mx-auto rounded-full p-3 mb-3"
          aria-hidden="true"
        />
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-5">
          Booking Confirmed
        </h3>
        <p className="mt-1 text-lg leading-6 text-gray-500">
          Your reservation has been confirmed.
          <br />
          You will receive an email with a calendar invitation and the details.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className=" font-medium leading-6 text-gray-900">Location</dt>
            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <p>99 chabannel ouest, 546b</p>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">When</dt>
            <dd className="mt-1leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {moment(event.booking.startTime).format("dddd, MMMM Do YYYY")}
              <br />
              {moment(event.booking.startTime).format("h:mm a")} &mdash;{" "}
              {moment(event.booking.endTime).format("h:mm a")}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
