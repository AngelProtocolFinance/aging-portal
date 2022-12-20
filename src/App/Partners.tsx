import ExtLink from "components/ExtLink";
import charity1 from "assets/images/lifespan-logo.png";
import charity2 from "assets/images/sens-logo.png";
import charity3 from "assets/images/mf-logo.png";

const Partners = ({ classes = "" }) => {
  return (
    <section className={`container-padded ${classes}`}>
      <article className="max-w-5xl">
        <h3 className="font-extrabold text-3xl sm:text-4xl mb-4 mt-6">
          Longevity Nonprofits Partners
        </h3>
        <p className="leading-relaxed">
          Recent scientific breakthroughs have revealed much about what causes
          age-related diseases -- and identified promising therapies to cure
          them.
        </p>
        <p className="leading-relaxed my-4">
          This decade -- the{" "}
          <ExtLink href="https://www.who.int/initiatives/decade-of-healthy-ageing#:~:text=The%20United%20Nations%20Decade%20of,improve%20the%20lives%20of%20older">
          UN Decade of Healthy Aging
          </ExtLink>{" "}
           -- offers the
          opportunity to improve the quality and length of life for billions of
          people worldwide, particularly women and minorities who are
          disproportionately burdened by age-related conditions. Science has
          shown that longevity is an engineering challenge. Join us in solving
          what may be the leading problem of our age.
        </p>
        <p className="leading-relaxed">
          Together, we can slay the{" "}
          <ExtLink href="https://www.youtube.com/watch?v=cZYNADOHhVY">
            Dragon Tyrant
          </ExtLink>{" "}
          of age-related disease.
        </p>
      </article>
      <div
        className={`font-heading container-padded grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center p-8`}
      >
        <CharityCard
          id={131}
          logo={charity1}
          name="Lifespan Extension Advocacy Foundation"
        />
        <CharityCard id={134} logo={charity2} name="SENS Research Foundation" />
        <CharityCard id={135} logo={charity3} name="Methuselah Foundation" />
      </div>
      <p className="leading-relaxed">
        Ever since the birth of blockchain technology, there has been an
        indelible connection between it and the desire for life extension — all
        the way back to the early cypherpunks and cryptocurrency founders such
        as Hal Finney, forward to the pioneers of the present such as Vitalik
        Buterin. You can be part of this grand tradition of transcending
        boundaries - be they financial or biological - in the service of all
        humankind.
      </p>
      <ExtLink
        className="block mt-4 italic sm:text-lg"
        href="https://www.lifespan.io/news/vitalik-buterin-the-best-thing-to-donate-money-to-is-the-fight-against-aging"
      >
        "The best thing to donate money to is the fight against aging" - Vitalik
      </ExtLink>
    </section>
  );
};

function CharityCard(props: { id: number; name: string; logo: string }) {
  return (
    <div className="text-center grid gap-4 place-items-center p-8 rounded-md border bg-blue-d6 dark:bg-blue-d6 border-prim">
      <a
        href={`https://app.angelprotocol.io/profile/${props.id}`}
        target="_blank"
      >
        <img src={props.logo} style={{ height: "100px" }} />
      </a>
    </div>
  );
}

export default Partners;
