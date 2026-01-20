import { useRef, useState } from "react";
import { Marker } from "./components/rulerComps/marker";

const markers = Array.from({ length: 83 }, (_, i) => i);

enum PageProperties {
  WIDTH = 816,
  MINIMUM_SPACE = 100,
  DEFAULT_MARGIN_LEFT = 56,
  DEFAULT_MARGIN_RIGHT = 56,
}

export function Ruler() {
  // we havee to dynamically adapt marker positions across all users
  // for now let us test locally
  const [leftMargin, setLeftMargin] = useState(
    PageProperties.DEFAULT_MARGIN_LEFT,
  );
  const [rightMargin, setRightMargin] = useState(
    PageProperties.DEFAULT_MARGIN_RIGHT,
  );

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  function handleLeftMouseDown() {
    setIsDraggingLeft(true);
  }

  function handleRightMouseDown() {
    setIsDraggingRight(true);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relXPos = e.clientX - containerRect.left;
        const rawPos = Math.max(0, Math.min(PageProperties.WIDTH, relXPos));

        if (isDraggingLeft) {
          const maxLeftPos =
            PageProperties.WIDTH - rightMargin - PageProperties.MINIMUM_SPACE;
          const newLeftPos = Math.min(rawPos, maxLeftPos);
          setLeftMargin(newLeftPos); // Todo make collaborative
        } else if (isDraggingRight) {
          const maxRightPos =
            PageProperties.WIDTH - (leftMargin + PageProperties.MINIMUM_SPACE);
          const newRightPos = Math.max(PageProperties.WIDTH - rawPos, 0);
          const constrainedRightPos = Math.min(newRightPos, maxRightPos);
          setRightMargin(constrainedRightPos);
        }
      }
    }
  }

  function handleMouseUp() {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  }

  const handleLeftDoubleClick = () => {
    setLeftMargin(PageProperties.DEFAULT_MARGIN_LEFT);
  };

  const handleRightDoubleClick = () => {
    setRightMargin(PageProperties.DEFAULT_MARGIN_RIGHT);
  };
  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="h-6 border border-gray-300 flex items-end relative select-none print:hidden"
    >
      <div
        id="ruler-container"
        className="max-w-[816px] mx-auto w-full h-full relative"
      >
        <Marker
          postion={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <Marker
          postion={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className="absolute inset-x0 bottom-0 h-full">
          <div className="relative h-full w-[816px]">
            {markers.map((marker) => {
              // tailwind does not allow dynamic classes that arent already created, so use the style tag instead
              const positon = (marker * PageProperties.WIDTH) / 82;
              return (
                <div
                  key={marker}
                  className="absolute bottom-0 "
                  style={{ left: `${positon}px` }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}
                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                  )}
                  {marker % 5 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500 " />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
