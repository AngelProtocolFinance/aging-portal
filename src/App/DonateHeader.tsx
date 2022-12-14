import ExtLink from "components/ExtLink";

export default function DonateHeader({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Together we can crowdfund better aging for all
      </h2>
      <p className="leading-relaxed max-w-7xl">
        <p className="leading-relaxed my-4">
          Every second, someone dies of an age-related disease.
        </p>
        <p className="leading-relaxed my-4">
          If your support shortens the timetable for curing these diseases by just one second, you could have saved someone's life.
        </p>
        <p className="leading-relaxed my-4">
          PLUS your donation is doubled courtesy of $10K in matching funds donated by the{" "}
          <ExtLink
            className="text-blue dark:text-blue-l2"
            href="https://angelprotocol.io/csr-partners"
          >
            Angel Alliance
          </ExtLink>{" "}
          means your donation goes further.
        </p>
      </p>
    </section>
  );
}
