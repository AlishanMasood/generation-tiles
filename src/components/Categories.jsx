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
    name: "Marbel Tiles",

    imageSrc:
      "https://img.freepik.com/free-photo/still-life-putting-up-decorative-vinyls_23-2149683458.jpg?t=st=1726516480~exp=1726520080~hmac=2255cd57294b98dfb35c98b6a55f73a5d6ea96d9237d0126d2afc5dd67d29a4c&w=826",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Bath Accessories",

    imageSrc:
      "https://img.freepik.com/free-photo/shower-head-with-hot-water_23-2149088655.jpg?t=st=1726516416~exp=1726520016~hmac=db783b8570fca763608c04d70c8cbb078388a09c0e349e7b585ba8ced55462d5&w=740",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Basins",

    imageSrc:
      "https://img.freepik.com/free-photo/arrangement-pf-bathroom-elements-self-care_23-2148883828.jpg?t=st=1726516285~exp=1726519885~hmac=301ef59b7c1bd9fab158f0465ac1b1650727921ac9f538e1ee3cc6606aa8d1f7&w=996",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Our Collection</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
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
