/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: "Tiles",

    imageSrc:
      "https://img.freepik.com/free-vector/colored-realistic-ceramic-floor-tiles-horizontal-set-with-squares-different-types-styles-tiles_1284-29013.jpg?t=st=1729546626~exp=1729550226~hmac=f6a4023c38bae2df421df994851ebace2386223f3b7fd0ff15c9699aa62a936f&w=740",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Stone Tiles",

    imageSrc:
      "https://img.freepik.com/free-photo/light-red-brick-wall_169016-3239.jpg?t=st=1729546698~exp=1729550298~hmac=21670955934fd3816f8fbf1a27b0145aa474a4f3a379c493545f7981d280c2df&w=1060",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Sanitary Ware",

    imageSrc:
      "https://img.freepik.com/free-photo/small-bathroom-with-modern-style-plants_23-2150700372.jpg?t=st=1729546763~exp=1729550363~hmac=3a45dcc58a998fa138b4c6157ee188e8100e5c29ad90a6e6e5743bc1bc88de8c&w=826",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Sanitary Fittings",

    imageSrc:
      "https://img.freepik.com/premium-photo/faucet-that-is-made-by-faucet_811830-10872.jpg?w=740",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Vanities",

    imageSrc:
      "https://img.freepik.com/free-photo/home-interior-design-composition_23-2148986633.jpg?t=st=1729546957~exp=1729550557~hmac=1abf311313ce3785fd5af914ab80921056c3659b510e601878b3369f74e2ff09&w=826",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Kitchen Items",

    imageSrc:
      "https://img.freepik.com/premium-photo/modern-stylish-washbasin-perfect-contemporary-bathroom-design_1142-213347.jpg?w=740",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Plastic Items",

    imageSrc:
      "https://img.freepik.com/free-photo/construction-pvc-pipes-composition_23-2149106876.jpg?t=st=1729547229~exp=1729550829~hmac=325dfdfd892b4ff52e03e9622711f1f4e73940c1f3412d85cbdee627bb7d8522&w=826",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 text-center">
          <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center">
            Our Collection
          </h2>

          <div className="mt-6 space-y-12 gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="group relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    className="hidden absolute bottom-0 left-0 right-0 group-hover:block"
                    style={{
                      background: "rgba(203,203,203,0.2)",

                      // borderRadius: "20px",
                      padding: "16px",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <p className=" text-base font-semibold text-black ">
                      {callout.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
