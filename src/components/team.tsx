import Image from "next/image";

const people = [
  {
    name: "Malik",
    role: "Co-founder, director of operations, and production manager.",
    imageUrl: "/img/members/malik.png",
    location: "Montreal, Canada",
  },
  {
    name: "Siamak",
    role: "Co-founder, producer, and creative director.",
    imageUrl: "/img/members/siamak.png",
    location: "Montreal, Canada",
  },
  {
    name: "Frank",
    role: "Co-founder, production coordinator, producer.",
    imageUrl: "/img/members/frank.jpg",
    location: "Montreal, Canada",
  },
  {
    name: "Andy",
    role: "Audio specialist and associate producer.",
    imageUrl: "/img/members/andy.jpg",
    location: "Montreal, Canada",
  },

  // More people...
];

export default function Team() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need help?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our team is always ready to help, just reach out to us and we will
            be happy to schedule a session and assist you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                width={600}
                height={600}
                className="w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
