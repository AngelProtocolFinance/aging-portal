import ExtLink from "components/ExtLink";

export default function DonateHeader({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Support longer, healthier lives worldwide
      </h2>
      <div className="leading-relaxed max-w-7xl">
        <p className="leading-relaxed my-4">
          Every second, someone dies of age-related diseases such as Parkinson's
          or Alzheimer's. If your support helps shorten the timetable for curing
          these diseases by just one second, you will have saved someone's life.
        </p>
        <p className="leading-relaxed my-4">
          100% of your donation will go directly to our partner nonprofits
          fighting the diseases of aging. Half will be used for anti-aging work
          that is currently underway. The rest will be invested in perpetual
          endowments that will provide ongoing support for this work -- forever.
        </p>
      </div>
    </section>
  );
}
