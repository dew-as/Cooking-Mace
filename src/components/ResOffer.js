const ResOffer = (props) => {
    const { offer } = props;
  return (
    <div key={offer?.info?.offerIds[0]} className="res-offer">
    <div>
      <i className="bx bxs-offer"></i>
      <h5>{offer?.info?.header}</h5>
    </div>
    <span>
      {offer?.info?.couponCode} | {offer?.info?.description}
    </span>
  </div>
  )
}

export default ResOffer;
