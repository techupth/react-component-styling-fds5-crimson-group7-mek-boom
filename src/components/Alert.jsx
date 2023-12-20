/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import alerttriangle from "../picture/alerttriangle.svg";
import alertcircle from "../picture/alertcircle.svg";
import alertcheckcircle from "../picture/checkcircle.svg";

function Alert(props) {
  if (props.color === "red") {
    return (
      <div
        css={css`
        padding: 32px;
        background-color: red;
        font-size: 24px;
        border: none;
        border-radius; 5px;
        textAlign: center;
        color:white
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9H9.01"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9H15.01"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{props.text}</span>"
      </div>
    );
  } else if (props.color === "orange") {
    return (
      <div
        css={css`
            padding: 32px;
            background-color: orange;
            font-size: 24px;
            border: none;
            border-radius; 5px;
            textAlign: center;
            color:white
            `}
      >
        <h3>{props.text}</h3>
        <img src={alerttriangle} />
      </div>
    );
  } else if (props.color === "yellow") {
    return (
      <div
        css={css`
            padding: 32px;
            background-color: yellow;
            font-size: 24px;
            border: none;
            border-radius; 5px;
            textAlign: center;
            color:white
            `}
      >
        <h3>{props.text}</h3>
        <img src={alertcircle} />
      </div>
    );
  }
  {
    return (
      <div
        css={css`
        padding: 32px;
        background-color: green;
        font-size: 24px;
        border: none;
        border-radius; 5px;
        textAlign: center;
        color:white
        `}
      >
        <h3>{props.text}</h3>
        <img src={alertcheckcircle} />
      </div>
    );
  }
}
export default Alert;
