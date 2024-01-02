
import { setauthor,getauthor } from "@/setauther.js";
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,SelectGroup
  ,SelectLabel
} from "@/features/ui/Select"

import king from "data-base64:./../assets/authors/comp/stephenK.jpeg"
import noah from "data-base64:./../assets/authors/comp/noah111.png"
import whitehead from "data-base64:./../assets/authors/comp/whitehead.png"
import jk from "data-base64:./../assets/authors/comp/jk.jpeg"


import "./style.css"

const default_authors = ["Stephen King","Yuval Noah Harari","J. K. Rowling","Colson Whitehead"]
const author_pic = {
  "Stephen King" : king,
  "Yuval Noah Harari":noah,
  "J. K. Rowling":jk,
  "Colson Whitehead":whitehead

}
function IndexPopup() {
  const [selectedValue, setSelectedValue] = useState("Stephen King");
  function handlevaluechange(value){
    setSelectedValue(value)
    setauthor(value)
  }
  async function iniauthor() {
    let stored = await getauthor()
    setSelectedValue(stored)
  }

  useEffect(()=>{iniauthor()},[])
  
 


  return (
    <div className="h-[520px] !min-h-[520px] !min-w-[270px]  overflow-hidden w-[270px] bg-gradient-to-b rounded-md from-[#000] via-[#1a1a1a] to-[#000]">
<img src={author_pic[selectedValue]} alt={`image of ${{selectedValue}}`} key={selectedValue} className="relative  min-w-[360px]
min-h-[527] shrink-0 !select-none object-cover animate-fade-in-up" />
<div className=" !select-none !z-10 !top-0 fixed !left-0 w-full h-full  " style={{"background": "linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0.33%, rgba(71, 71, 71, 0.00) 42.51%, rgba(8, 8, 8, 0.90) 86.72%)"}}/>
<div className=" absolute animate-fade-in-up !select-none top-[450px] flex justify-center items-center w-full    !z-50 ">
<Select onValueChange={(value:string)=> handlevaluechange(value)} className="!z-50 w-full mx-auto  !rounded-md">
                                        <SelectTrigger className="w-fit mx-auto my-2 flex justify-center gap-x-2 !border-[#b1b1b1] !shadow-[#747474] !px-4 !shadow-sm hover:!shadow-lg hover:!border-[#ccdcfc] hover:!border-3 !rounded-full !border-2 !text-md !font-semibold text-[#dddddd]">
                                            <SelectValue placeholder={selectedValue}className="" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gradient-to-b from-[#141414] to-[#000]  border-[#3f3f3f] bg-opacity-40 backdrop-blur-lg">
                                            <SelectGroup className="text-[#9c9c9c] hover:text-[#e7e7e7] bg-[#0e0e0e] text-base">
                                            <SelectLabel className="bg-[#272727] !rounded-lg">Select Author</SelectLabel>
                                            {default_authors.map((author) => (
        <SelectItem className="text-[#d5d5d5] !rounded-md hover:font-medium hover:!bg-[#252525] text-md" key={author} value={author}>{author}</SelectItem>
      ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                               

                              
                                    </div>

    </div>
  )
}

export default IndexPopup