import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Client1 from "@/assets/Client1.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    img: Client1,
    role: "Head of Technology",
    quote:
      "Experience Speaks for Itself – That is what I felt in my 1st dealing with DevTech Fusion when they gave me the crystal-clear roadmap for our design stage within 3 days of the initial meet-up. They delivered on-time! That is why I consider DevTech Fusion as our Software Technology Partner",
    name: "Mr. Shahzad Anwar",
    company: "SecuTech Arabia",
  },
  {
    id: 2,
    img: Client1,
    role: "Product Manager",
    quote:
      "Working with DevTech Fusion has been a game-changer. They understood our needs and delivered ahead of schedule. Highly professional team!",
    name: "Sarah Khan",
    company: "InnovateX",
  },
  {
    id: 3,
    img: Client1,
    role: "Founder & CEO",
    quote:
      "Their attention to detail and speed is unmatched. From concept to deployment, they executed with precision.",
    name: "Ali Raza",
    company: "StartVerse",
  },
];

export default function TestimonialSection() {
  return (
    <section className="font-['SatoshiVariable'] w-full sm:h-[100vh] lg:h-[90vh] py-28 relative z-20">
      <div className="text-center mb-10 z-30">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#212121]">What Our Clients Say</h2>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="h-auto py-10 flex flex-col lg:flex-row items-center justify-center gap-10">
              <div className="w-full md:w-3/4 lg:w-1/2 z-20 flex justify-center bg-gray-200 rounded-lg">
                <Image
                  src={testimonial.img}
                  alt="Client"
                  layout="intrinsic"
                  className="shadow-md md:hover:translate-y-[-8px] md:hover:translate-x-[-8px] transition-transform rounded-lg"
                />
              </div>

              <div className="z-30 w-full md:w-3/4 lg:w-1/2 xl:w-2/3 flex flex-col items-start text-center md:text-left">
                <p className="text-lg font-bold text-center lg:text-left text-[#211951] uppercase mb-5">
                  {testimonial.role}
                </p>
                <blockquote className="text-black text-center lg:text-left md:text-xl xl:text-2xl/snug font-normal leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <span className="mt-4 text-center lg:text-left block font-semibold text-gray-900">
                  {testimonial.name} - <a href="#" className="text-blue-500 hover:underline">{testimonial.company}</a>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

