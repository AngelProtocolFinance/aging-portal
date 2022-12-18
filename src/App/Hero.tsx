import { app } from "constants/config";
import heroBanner from "assets/images/aging-hero-banner.jpg";

export default function Hero() {
  return (
    <header className="bg-blue dark:bg-blue-d4 grid place-items-center relative">
      <img
        src={heroBanner}
        className="absolute object-cover object-top h-full w-full inset-0 opacity-50 brightness-50"
      />
      <h1 className="text-3xl sm:text-4xl sm:leading-relaxed mt-40 font-extrabold uppercase text-center z-[1] text-white">
        Together we can crowdfund better aging for all
      </h1>
      <div className="text-white sm:text-lg font-heading w-[80%] text-center z-[1] mt-4">
        <p className="leading-relaxed">
          Living much longer, healthier lives doesn’t have to be a dream
          anymore.
        </p>
        <p className="leading-relaxed my-4">
          Science now understands the biology of aging like never before and is
          working to prevent and reverse all age-related diseases. Your
          tax-deductible donation may help make this happen in your lifetime.
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
