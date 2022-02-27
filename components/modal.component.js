import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactModal from "react-modal";

export default function Modal({
  modalIsOpen,
  locationTitle,
  clickedImg,
  setClickedImg,
  closeModal,
}) {
  const { caption, title } = clickedImg;

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        overlayClassName="Overlay"
        onRequestClose={closeModal}
        aria={{
          describedby: "description",
        }}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 999,
            maxHeight: "100vh",
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            maxWidth: "64rem",
            margin: "1.5rem auto",
            height: 'fit-content'
          }
        }}
      >
        <figure>
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            wheel={{ disabled: true }}
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
                  <button name="zoom-reset" onClick={() => resetTransform()}>
                    Reset
                  </button>
                  <button
                    className="close absolute right-0"
                    name="close"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                <TransformComponent>
                  <picture>
                    <img
                      loading="lazy"
                      className="border-2 border-green border-solid"
                      src={clickedImg.image}
                      alt={title ? title : `Photograph of ${locationTitle}`}
                      tabIndex="0"
                    />
                  </picture>
                </TransformComponent>
              </div>
            )}
          </TransformWrapper>
          {caption ? (
            <figcaption className="my-2 text-lg leading-relaxed" id="description">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </ReactModal>
    </>
  );
  // return (
  //   <>
  //     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  //       <div className="relative w-auto max-h-screen my-6 p-6 mx-auto max-w-5xl">
  //         {/*content*/}
  //         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  //           {/*body*/}
  //           <figure className="relative p-2 flex-auto">
  //             <TransformWrapper
  //               initialScale={1}
  //               initialPositionX={0}
  //               initialPositionY={0}
  //               wheel={{disabled:true}}
  //             >
  //               {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
  //                 <div className="relative">
  //                   <div className="tools">
  //                     <button name="zoom-in" onClick={() => zoomIn()}>
  //                       +
  //                     </button>
  //                     <button name="zoom-out" onClick={() => zoomOut()}>
  //                       -
  //                     </button>
  //                     <button
  //                       name="zoom-reset"
  //                       onClick={() => resetTransform()}
  //                     >
  //                      Reset
  //                     </button>
  //                     <button
  //                       className="close absolute right-0"
  //                       name="close"

  //                     >
  //                       Close
  //                     </button>
  //                   </div>
  //                   <TransformComponent>
  //                     <picture>
  //                       <img loading="lazy" className="border-2 border-green border-solid" src={clickedImg.image} alt={ title ? title : `Photograph of ${locationTitle}` } />
  //                     </picture>
  //                   </TransformComponent>
  //                 </div>
  //               )}
  //             </TransformWrapper>
  //             {  caption ?
  //               <figcaption className="my-2 text-lg leading-relaxed">
  //                 { caption}
  //               </figcaption>
  //               : null
  //             }
  //           </figure>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
  //   </>
  // );
}
