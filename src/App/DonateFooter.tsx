export default function DonateFooter({ classes = "" }) {
  return (
    <section className={`sm:container-unpadded container-padded ${classes}`}>
      <p className="leading-relaxed">
        Donations avoid capital gains tax and receive immediate tax receipts to
        write off. All donor activity will be recorded onchain for future "proof
        of philanthropy" NFT efforts. 100% of your donation will go directly to
        our partner nonprofits. Half will be used for immediate impact, and half
        will be invested in perpetual endowments to provide ongoing support,
        forever. This portal splits donations across partner orgs (50/25/25). If
        you prefer to donate to a specific charity and set your own split
        between immediate/endowment funding, please click into an individual
        charity below
      </p>
    </section>
  );
}
