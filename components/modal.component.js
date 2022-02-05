import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Modal({ title, clickedImg, setClickedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("close")) {
      setClickedImg(null);
      document.body.style.overflow = "visible";
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto max-h-screen my-6 p-6 mx-auto max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="relative p-2 flex-auto">
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                wheel={{disabled:true}}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <div className="relative">
                    <div className="tools">
                      <button name="zoom-in" onClick={() => zoomIn()}>
                        +
                      </button>
                      <button name="zoom-out" onClick={() => zoomOut()}>
                        -
                      </button>
                      <button
                        name="zoom-reset"
                        onClick={() => resetTransform()}
                      >
                       Reset
                      </button>
                      <button
                        className="close absolute right-0"
                        name="close"
                        onClick={handleClick}
                      >
                        Close
                      </button>
                    </div>
                    <TransformComponent>
                      <img className="border-2 border-green border-solid" src={clickedImg.image} alt={ clickedImg.caption ? clickedImg.caption : `Photograph at ${title}` } />
                    </TransformComponent>
                  </div>
                )}
              </TransformWrapper>
              { clickedImg.caption ?
                <figcaption className="my-2 text-lg leading-relaxed">
                  {clickedImg.caption}
                </figcaption>
                : null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
