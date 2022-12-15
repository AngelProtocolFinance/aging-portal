export default function DonateFooter({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <p className="leading-relaxed">
        Donations can be tax efficient and receive immediate tax receipts. All
        donor activity will be recorded onchain for future "proof of
        philanthropy" NFT efforts developed in collaboration with the charity
        Lifespan.io.
      </p>
      <p className="leading-relaxed mt-4">
        This portal splits donations across the partner organizations in a
        50/25/25 ratio. If you prefer to donate just to a single charity or
        allocate your donation with a different immediate/endowment percentage,
        simply donate to one of the individual charities below
      </p>
    </section>
  );
}
