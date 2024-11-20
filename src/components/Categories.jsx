import { useNavigate } from "react-router-dom";
import { callouts } from "./constants";
export default function Categories() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 text-center">
          <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center">
            Products
          </h2>
          <div className="mt-6 space-y-12 gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative"
                onClick={() => navigate(`/categorie/${callout.subcategory}`)}
              >
                <div className="group h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-[85%] w-full object-cover object-center"
                  />

                  <p className=" text-base font-semibold text-black group-hover:text-red-400 ">
                    {callout.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
