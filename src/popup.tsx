
import { setauthor,getauthor } from "@/setauther.js";
import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,SelectGroup
  ,SelectLabel
} from "@/features/ui/Select"

import king from "data-base64:./../assets/authors/comp/stephenK.jpeg"
import noah from "data-base64:./../assets/authors/comp/noah11.png"
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
  }
  useEffect(()=>{
    console.log(selectedValue)
  },[selectedValue])
  return (
    <div className="h-[480px] w-[350px] bg-gradient-to-b rounded-md from-[#000] via-[#1a1a1a] to-[#000]">
<img src={author_pic[selectedValue]} alt="" className=" object-cover min-w-full h-480" />
<div className=" flex justify-center items-center  z-50 ">
<Select onValueChange={console.log("changed")}>
                                        <SelectTrigger className="w-[180px] mx-1 my-2 border-[#cc6666] rounded-md text-[#d5d5d5]">
                                            <SelectValue placeholder="Stephen King" className="text" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gradient-to-b from-[#141414] to-[#000]  border-[#5E5E5E] bg-opacity-40 backdrop-blur-lg">
                                            <SelectGroup className="text-[#d5d5d5] hover:text-[#e7e7e7] bg-[#0e0e0e] text-base">
                                            <SelectLabel className="bg-[#272727] rounded-md">Select Author</SelectLabel>
                                            {default_authors.map((author) => (
        <SelectItem className="text-[#d5d5d5] hover:font-semibold hover:bg-[#6b6b6b] text-base" key={author} value={author}>{author}</SelectItem>
      ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </div>

    </div>
  )
}

export default IndexPopup