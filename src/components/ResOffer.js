const ResOffer = (props) => {
  const { offer } = props;
  return (
    <div className="res-offer">
      <h4>
        <i style={{ color: "tomato" }} className="bx bxs-offer"></i>
        {offer?.info?.header}
      </h4>
      <h5>
        {offer?.info?.couponCode} | {offer?.info?.description}
      </h5>
    </div>
  );
};

export default ResOffer;