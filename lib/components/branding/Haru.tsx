import React from "react";

type Props = {
  isDecorative?: boolean;
  className?: string;
};

function Haru({ isDecorative = false, className }: Props) {
  return (
    <div>
      <img
        className={className}
        src={"/assets/mascot/haru.png"}
        alt={isDecorative ? "" : "Haru a..."}
      />
    </div>
  );
}

export default Haru;
