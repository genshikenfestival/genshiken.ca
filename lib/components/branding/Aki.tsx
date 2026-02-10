import React from "react";

type Props = {
  isDecorative?: boolean;
  className?: string;
};

function Aki({ isDecorative = false, className }: Props) {
  return (
    <div>
      <img
        className={className}
        src={"/assets/mascot/Aki.png"}
        alt={isDecorative ? "" : "Aki is a..."}
      />
    </div>
  );
}

export default Aki;
