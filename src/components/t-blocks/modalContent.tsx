import { CSSProperties, useState } from "react";

const modalTextStyle: CSSProperties = {
  fontWeight: "400",
  fontSize: "16px",
  color: "white",
};

const modalLabelStyle: CSSProperties = {
  marginBottom: "12px",
  textAlign: "center",
};

const labelStyle = Object.assign(modalTextStyle, modalLabelStyle);

const inputStyle: CSSProperties = {
  width: "100%",
  height: "98px",
  marginBottom: "46px",
  padding: "34px 31px",
  paddingRight: "100px",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: " 24px",
  color: " #fff",
  backgroundColor: "unset",
  border: "1px solid #0df69e",
  borderRadius: "25px",
  outline: "none",
  boxSizing: "border-box",
};

export default function ModalContent({
  onButtonClick,
}: {
  onButtonClick: () => void;
}) {
  const [profit, setProfit] = useState("");

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          padding: 0,
          backgroundColor: "unset",
          border: "none",
          cursor: "pointer",
        }}
        type="button"
        onClick={onButtonClick}
        aria-label="close modal"
      >
        <img
          src="/public/close.svg"
          width={20}
          height={20}
          aria-hidden="true"
        />
      </button>
      <p style={labelStyle}>Выберите план</p>
      <p style={labelStyle}>Введите сумму инвестиции</p>
      <div style={{ position: "relative" }}>
        <input
          style={inputStyle}
          name="amount"
          id="amount"
          type="numeric"
          min={0}
          step={1}
          value={profit}
          onChange={(evt) => setProfit(evt.target.value)}
        />
        <span
          style={{
            position: "absolute",
            top: "35px",
            right: "33px",
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "24px",
            color: "#0df69e",
          }}
        >
          TTTU
        </span>
      </div>
      <p style={labelStyle}>Количество дней</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <p>Ваш профит составит:</p>
        <p style={{ fontSize: "48px" }}>
          {profit}
          <span style={{ marginLeft: "15px", fontSize: "24px" }}>TTTU</span>
        </p>
      </div>
    </>
  );
}
