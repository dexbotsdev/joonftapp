import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="frequently-asked-questions-parent">
        <div className="frequently-asked-questions-container">
          <span>{`Frequently Asked `}</span>
          <span className="questions">Questions</span>
        </div>
        <div className="frame-parent">
          <div className="frame">
            <img className="frame-child3" alt="" src="/vector-10.svg" />
            <div className="frame-child4" />
          </div>
          <div className="frame1">
            <div className="frame-child5" />
            <div className="frame-child6" />
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="how-does-laqira-protocol-compa-parent">
            <div className="how-does-laqira">
              How does Laqira Protocol compare to Centralized Exchanges?
            </div>
            <img className="frame-icon" alt="" src="/frame-4834.svg" />
          </div>
          <div className="what-rewards-and-incentives-do-parent">
            <div className="what-rewards-and">
              What rewards and incentives does Laqira Protocol offer NFT
              Holders?
            </div>
            <img className="frame-child7" alt="" src="/frame-4835.svg" />
          </div>
          <div className="how-does-laqira-protocol-ensur-parent">
            <div className="how-does-laqira">
              How does Laqira Protocol ensure the safety of user assets?
            </div>
            <img className="frame-child8" alt="" src="/frame-4836.svg" />
          </div>
          <div className="how-to-join-the-laqira-protoco-parent">
            <div className="how-to-join">{`How to join the Laqira Protocol Community?  `}</div>
            <img className="frame-child9" alt="" src="/frame-4837.svg" />
          </div>
        </div>
        <div className="frame-div">
          <div className="frame2">
            <div className="youll-have-access">
              You’ll have access to top-tier liquidity, lightning-fast speeds,
              and a user-friendly interface, all while earning through our
              valuable NFT and staking rewards program. Don't settle for a
              subpar DEX experience – Join the revolution today and experience
              the power of true decentralization!
            </div>
          </div>
          <div className="frame3">
            <div className="why-use-laqira">Why use Laqira Protocol ?</div>
            <div className="frame-child10" />
            <div className="frame-child11" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
