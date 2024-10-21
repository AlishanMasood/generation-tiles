import profile from "../assets/hanan.png";
const stats = [
  { name: "Influencing Digital Landscapes Together", value: "5+ Years" },
  { name: "Excellence Achieved Through Success", value: "125+ Projects" },
  {
    name: "Our Dedication to Innovation Wins Understanding",
    value: "26+ Awards",
  },
  {
    name: "Mirrors our Focus on Client Satisfaction.",
    value: "99% Happy Clients",
  },
];
export default function AboutUs() {
  return (
    <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex ">
                  <h2 class="text-7xl font-bold tracking-tight text-gray-900 text-center">
                    The Tale of Our Achievement Story
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Our achievement story is a testament to teamwork and
                    perseverance. Together, we've overcome challenges,
                    celebrated victories, and created a narrative of progress
                    and success.
                  </p>
                </div>
              </div>
              <div class="w-full flex-col justify-center items-start gap-6 flex">
                <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {stats.map((item) => {
                    return (
                      <div class=" hover:scale-110 w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          {item.value}
                        </h4>
                        <p class="text-gray-500 text-base font-normal leading-relaxed">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:justify-start justify-center items-start flex">
            <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src={profile}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
