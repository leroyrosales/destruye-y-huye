import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Modal({ clickedImg, setClickedImg }) {
  return (
    <>
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
                <img src={clickedImg} alt="bigger pic" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </>
  );
}
