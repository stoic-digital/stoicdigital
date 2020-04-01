/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const BgText = ({ children, right }) => (
  <div
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100vh;
      background: ${right ? "white" : "white"};
      clip: rect(0, 100vw, 100vh, 0);
    `}
  >
    <h3
      css={css`
        opacity: 0.2;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 0;
        right: ${right ? 0 : "auto"};
        transform: rotate(-90deg) translate(0, 100%);
        transform-origin: 0 100%;
        font-size: 20vh;
        @media (min-width: 740px) {
          font-size: 40vh;
        }
      `}
    >
      {children}
    </h3>
  </div>
);

BgText.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
};

BgText.defaultProps = {
  right: false,
};

export default BgText;
