import ExtLink from "components/ExtLink";

const Partners = ({ classes = "" }) => {
  return (
    <section className={`container-padded ${classes}`}>
      <article className="max-w-5xl">
        <h3 className="font-extrabold text-3xl sm:text-4xl mb-4 mt-6">
          Longevity Nonprofits Partners
        </h3>
        <p className="leading-relaxed">
          Scientists are working on exciting ways to live longer and healthier
          lives by repairing the damage that aging does to our bodies. We are in
          the{" "}
          <ExtLink href="https://www.un.org/en/UN-system/ageing">
            UN Decade of Aging
          </ExtLink>{" "}
          and have an opportunity to improve the quality and length of life for
          billions worldwide. Aging is inherently inequitable, with burdens
          disproportionality born by women and minorities. Longevity is an
          engineering problem, and we invite you to help us solve one of the
          biggest problems of our age. Together, we can slay{" "}
          <ExtLink href="https://www.youtube.com/watch?v=cZYNADOHhVY">
            the dragon tyrant
          </ExtLink>
        </p>
      </article>
      <ExtLink
        className="block mt-4 italic sm:text-lg"
        href="https://www.lifespan.io/news/vitalik-buterin-the-best-thing-to-donate-money-to-is-the-fight-against-aging"
      >
        "The Best Thing to Donate Money to is the Fight Against Aging" - Vitalik
      </ExtLink>
    </section>
  );
};

export default Partners;
