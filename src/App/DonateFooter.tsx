export default function DonateFooter({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <p className="leading-relaxed">
        Donations avoid capital gains tax and receive immediate tax receipts to
        write off. All donor activity will be recorded onchain for future "proof
        of philanthropy" NFT efforts.
      </p>
      <p className="leading-relaxed my-4">
        100% of your donation will go directly to
        our partner nonprofits. Half will be used for immediate impact, and half
        will be invested in perpetual endowments to provide ongoing support,
        forever.
      </p>
      <p className="leading-relaxed">
        This portal splits donations across the partner organizations in a  50/25/25 ratio.
        If you prefer to donate just to a single charity or allocate your donation with a
        different immediate/endowment percentage, simply donate to one of the individual
        charities below.
      </p>
    </section>
  );
}
