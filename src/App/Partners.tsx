import ExtLink from "components/ExtLink";

const Partners = ({ classes = "" }) => {
  return (
    <section className={`container-padded ${classes}`}>
      <article className="max-w-5xl">
        <h3 className="font-extrabold text-3xl sm:text-4xl mb-4 mt-6">
          Longevity Nonprofits Partners
        </h3>
        <p className="leading-relaxed">
          In the last decade scientists have made significant breakthroughs in
          understanding the root causes of age-related disease, and developing
          credible approaches to begin addressing them.
        </p>
        <p>
          Right now, we are in the UN Decade of Healthy Aging and have an
          opportunity to improve the quality and length of life for billions
          worldwide. Age-related decline is inherently inequitable, with burdens
          disproportionality born by women and minorities. Longevity is an
          engineering challenge, and we invite you to help us solve one of the
          biggest problems of our age.
        </p>
        <p className="leading-relaxed">
          Together, we can slay the{" "}
          <ExtLink href="https://www.youtube.com/watch?v=cZYNADOHhVY">
            Dragon Tyrant
          </ExtLink>{" "}
          of age-related disease.
        </p>
      </article>
      <ExtLink
        className="block mt-4 italic sm:text-lg"
        href="https://www.lifespan.io/news/vitalik-buterin-the-best-thing-to-donate-money-to-is-the-fight-against-aging"
      >
        "The best thing to donate money to is the fight against aging" - Vitalik
      </ExtLink>
    </section>
  );
};

export default Partners;
