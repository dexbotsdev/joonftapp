import "./BorderedHeader.css";

const BorderedHeader = () => {
  return (
    <div className="borderedheader">
      <div className="frame22">
        <b className="latest-added-nfts-container">
          <span>{`Latest added `}</span>
          <span className="nfts">NFTs</span>
        </b>
      </div>
      <div className="vector-parent2">
        <img className="frame-child40" alt="" src="/vector-106.svg" />
        <div className="frame-child41" />
        <div className="frame-child42" />
        <div className="frame-child43" />
      </div>
    </div>
  );
};

export default BorderedHeader;
