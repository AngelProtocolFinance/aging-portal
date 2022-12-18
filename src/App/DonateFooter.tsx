export default function DonateFooter({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <p className="leading-relaxed">
        Donations are not subject to capital gains taxes and result in immediate
        tax receipts. Donor activity will be recorded onchain for future "proof
        of philanthropy" NFT initiatives being developed with the nonprofit
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
