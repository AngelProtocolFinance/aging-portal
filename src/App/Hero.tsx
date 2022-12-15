import { app } from "constants/config";
import video from "assets/videos/hourglass_sand_falling.mp4";

export default function Hero() {
  return (
    <header className="bg-blue dark:bg-blue-d4 grid place-items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover object-top h-full w-full inset-0 opacity-50 brightness-50"
      >
        <source src={video} type="video/mp4" />
      </video>

      <h1 className="text-3xl sm:text-4xl sm:leading-relaxed mt-40 font-extrabold uppercase text-center z-[1] text-white">
        Together we can crowdfund better aging for all
      </h1>
      <div className="text-white sm:text-lg font-heading w-[80%] text-center z-[1] mt-4">
        <p className="leading-relaxed">Aging doesn't have to be awful.</p>
        <p className="leading-relaxed my-4">
          All of humanity can live longer, healthier lives with science. Help
          fund longevity research today and your donation can also be tax
          efficient, generating an immediate tax receipt.
        </p>
      </div>
      <a
        className="z-[1] rounded-md btn-orange uppercase px-4 py-2 mb-16 mt-6 font-bold text-sm"
        href="#donate_now"
      >
        Donate Now
      </a>
    </header>
  );
}
