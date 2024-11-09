import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callouts } from "../components/constants";
const SubCategoriesPage = () => {
  const { subcategory } = useParams();
  const [parent, setParent] = useState("");
  useEffect(() => {
    for (let i = 0; i < callouts.length; i++) {
      if (callouts[i].subcategory === subcategory) {
        setParent(callouts[i]);
      }
    }
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 text-center">
          <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center">
            {parent.name}
          </h2>
          <div className="mt-6 space-y-12 gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {parent?.subCategories?.map((callout, index) => (
              <div key={index} className="group relative">
                <div className="group relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                  <img
                    //   alt={callout.imageAlt}
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
};

export default SubCategoriesPage;
