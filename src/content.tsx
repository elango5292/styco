import cssText from "data-text:~style.css"
import { LuMove } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { LiaWindowMinimize } from "react-icons/lia";
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { useState, useEffect } from "react";
import ContentLoader from 'react-content-loader';
import { runai } from "./gen.js"
import { getauthor } from "./setauther.js";


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}



const texxt = `It was either Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new.Google AI Studio creates a new Google Cloud project for each new API key. You also can create an API key in an existing Google Cloud project. All projects are subject to the Google Cloud Platform Terms of Service open_in_new. `

function checkaction(selection:Text) {

  let nchar = selection.length
  if (nchar <= 300000) {
    return true
  } else {
    return false
  }
}

function Skele() {
  return (
    <ContentLoader
      width={200}
      height={230}
      speed={2}


      backgroundColor="#89909C"
      foregroundColor="#424549"
    >

      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={i}
          x="10"
          y={10 + (i * 25)}
          rx="4"
          ry="4"
          width={Math.floor(Math.random() * 161) + 40}
          height="10"

        />
      ))}
    </ContentLoader>
  )
}


function Toobig() {
  return (
    <div className="flex flex-col !min-h-[60vh] items-center justify-center ">
      <div className="h-1/2 w-1/2"> <img src="Toobigicon.svg" alt="TooBig" /></div>
      <><p className="text-[#9096A0] my-4 text-center">The text you selected is too big to be converted.</p></>
    </div>
  )
}




const PlasmoOverlay = () => {
  const [showoverlay, setshowoverlay] = useState<true | false>(false)
  const [content, setcontent] = useState<1 | 2 | 3 | 4>(3)
  // 1 for skele, 2 for too large text selection and 3 for showing text
  const [text, settext] = useState("")
  const [minimize, setminimize] = useState(false)

  useEffect(() => {
    chrome.runtime.onMessage.addListener(async ({ type, text }) => {
      if (type === "styco") {
        setcontent(1)
        setminimize(false)
        setshowoverlay(true)
        let currentauthor= getauthor()
        let action = checkaction(text)
        if (action) {
          try{
            runai(text,currentauthor)
            .then(response => settext(response)).then(()=>setcontent(3))
          }catch{
setcontent(4)
          }
        } else{
          setcontent(2)
        }

} return true
    })
  }, [])
  return (

    <div className={showoverlay ? "!z-10 !w-screen !h-screen" : "hidden"} key="Converted-display">



      <Draggable handle=".handle" bounds="parent">


        <Resizable handleClasses={content === 1 ? {
          top: "pointer-events-none",
          bottom: "pointer-events-none",
          right: "pointer-events-none",
          left: "pointer-events-none",
          topRight: "pointer-events-none",
          bottomRight: "pointer-events-none",
          bottomLeft: "pointer-events-none",
          topLeft: "pointer-events-none",
        } : {
          bottomLeft: "pointer-events-none",
          topLeft: "pointer-events-none",
        }}
          className="!bg-[#1E2124] !max-h-[80vh] !shadow-[#bfc3c8]  !h-fit !min-w-fit  !max-w-[70vw] select-none flex items-center mr-3 !z-20 !fixed !top-[15vh] !left-[70vw] !px-3 !py-4  !rounded-lg !drop-shadow-md !shadow-md   ">
          <div className="h-full w-full">
            <div className="flex bg-[#424549] handle !z-10 rounded-lg !min-w-[200px]  justify-between !px-2 !py-1  items-center">
              <h2 className="text-xl font-bold text-gray-200">Styco.</h2>
              <div className="flex handle flex-row gap-x-3">
                <button className="text-gray-200 hover:text-gray-400" title="Move">
                  <LuMove className="h-4 w-4" />
                </button>

                <button className="text-gray-200 hover:text-gray-400" onClick={()=>setminimize(!minimize)} title="Close">
                  < LiaWindowMinimize className="h-5 w-5" />
                </button>

                <button className="text-gray-200 hover:text-gray-400" onClick={()=>setshowoverlay(false)} title="Close">
                  <MdOutlineClose className="h-5 w-5" />
                </button>
               

              </div>

            </div>
            <div className="my-2 rounded-lg text-[#bdc2cb] !bg-[#282B30] pr-4 pl-2  !min-w-full  !max-h-[65vh]  mx-auto scrollbar-track-[#000]  overflow-auto !scrollbar-thumb-rounded !scrollbar-thumb-[#cfd2d4]  !scrollbar-track-rounded-full  !scrollbar-thin ">
              {
                (content === 3) &&
                (<> <p className={!minimize ? "select-text py-4 text-pretty text-base" : "hidden"}>
                  {text}
                </p></>)
              }
              {
                (content === 2) &&
                <Toobig />
              }


              {
                (content === 1) &&
                <Skele />
              }

            </div>

          </div>




        </Resizable>
      </Draggable>

    </div>)
}

export default PlasmoOverlay
