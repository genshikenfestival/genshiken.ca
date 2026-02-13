/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

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
