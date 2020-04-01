/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const Project = ({ title, children, images }) => (
  <div
    css={css`
      position: relative;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    <div
      css={css`
        flex: 1;
        min-width: 330px;
        width: 90%;
        margin: 0 auto;
        position: relative;
      `}
    >
      {images.map((image) => (
        <div
          css={css`
            position: relative;
            display: inline-block;
            vertical-align: top;
            zindex: 20;
            width: 30%;
            margin: 10px;
            transform: skewY(-10deg);
            transition: transform 0.2s ease-in-out;
            &:hover img {
              transform: scale(1.1) translate(0, -30%);
            }
            &:nth-child(1) {
              left: 0%;
            }
            &:nth-child(2) {
              margin-left: -12%;
              margin-top: 10%;
            }
            &:nth-child(3) {
              margin-left: -12%;
              margin-top: 20%;
            }
            &:nth-child(4) {
              margin-left: -12%;
              margin-top: 30%;
            }
          `}
        >
          <img
            src={image}
            alt=""
            css={css`
              width: 100%;
              display: block;
              transition: transform 0.2s ease-in-out;
              box-shadow: -2px -1px 10px rgba(0, 0, 0, 0.15);
            `}
          />
        </div>
      ))}
    </div>
    <div
      css={css`
        @media (min-width: 740px) {
          max-width: 600px;
          width: 50%;
        }
      `}
    >
      <h5>{title}</h5>
      {children}
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
