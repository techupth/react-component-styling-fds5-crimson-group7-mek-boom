// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.color === "primary") {
    return (
      <div
        css={css`
        padding: 32px;
        background-color: #4CAF50;
        font-size: 24px;
        border: none;
        border-radius; 5px;
        textAlign: center;
        color:white
        `}
      >
        <h3>{props.text}</h3>
      </div>
    );
  } else {
    props.color === "secondary";
    return (
      <div
        css={css`
          padding: 32px;
          background-color: pink;
          font-size: 24px;
          border: none;
          border-radius; 5px;
          textAlign: center;
          color:white
          `}
      >
        <h3>{props.text}</h3>
      </div>
    );
  }
}
export default Button;
