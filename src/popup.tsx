
import { setauthor, getauthor } from "@/setauther.js";
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, SelectGroup
  , SelectLabel
} from "@/features/ui/Select"

import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

import hemmingway1 from "data-base64:./../assets/authors/hemmingway/hemmingway1.webp"
import hemmingway2 from "data-base64:./../assets/authors/hemmingway/hemmingway2.webp"
import hemmingway3 from "data-base64:./../assets/authors/hemmingway/hemmingway3.webp"
import hemmingway4 from "data-base64:./../assets/authors/hemmingway/hemmingway4.webp"
import hemmingway5 from "data-base64:./../assets/authors/hemmingway/hemmingway5.webp"
import hemmingway6 from "data-base64:./../assets/authors/hemmingway/hemmingway6.webp"
import hemmingway7 from "data-base64:./../assets/authors/hemmingway/hemmingway7.webp"
import hemmingway8 from "data-base64:./../assets/authors/hemmingway/hemmingway8.webp"
import hemmingway9 from "data-base64:./../assets/authors/hemmingway/hemmingway9.webp"
import hemmingway10 from "data-base64:./../assets/authors/hemmingway/hemmingway10.webp"

import tagore1 from "data-base64:./../assets/authors/tagore/tagore1.webp"
import tagore2 from "data-base64:./../assets/authors/tagore/tagore2.webp"
import tagore3 from "data-base64:./../assets/authors/tagore/tagore3.webp"
import tagore4 from "data-base64:./../assets/authors/tagore/tagore4.webp"
import tagore5 from "data-base64:./../assets/authors/tagore/tagore5.webp"
import tagore6 from "data-base64:./../assets/authors/tagore/tagore6.webp"
import tagore7 from "data-base64:./../assets/authors/tagore/tagore7.webp"
import tagore8 from "data-base64:./../assets/authors/tagore/tagore8.webp"
import tagore9 from "data-base64:./../assets/authors/tagore/tagore9.webp"
import tagore10 from "data-base64:./../assets/authors/tagore/tagore10.webp"

import murakami1 from "data-base64:./../assets/authors/murakami/murakami1.webp"
import murakami2 from "data-base64:./../assets/authors/murakami/murakami2.webp"
import murakami3 from "data-base64:./../assets/authors/murakami/murakami3.webp"
import murakami4 from "data-base64:./../assets/authors/murakami/murakami4.webp"
import murakami5 from "data-base64:./../assets/authors/murakami/murakami5.webp"
import murakami6 from "data-base64:./../assets/authors/murakami/murakami6.webp"
import murakami7 from "data-base64:./../assets/authors/murakami/murakami7.webp"
import murakami8 from "data-base64:./../assets/authors/murakami/murakami8.webp"
import murakami9 from "data-base64:./../assets/authors/murakami/murakami9.webp"
import murakami10 from "data-base64:./../assets/authors/murakami/murakami10.webp"


import harari1 from "data-base64:./../assets/authors/harari/harari1.webp"
import harari2 from "data-base64:./../assets/authors/harari/harari2.webp"
import harari3 from "data-base64:./../assets/authors/harari/harari3.webp"
import harari4 from "data-base64:./../assets/authors/harari/harari4.webp"
import harari5 from "data-base64:./../assets/authors/harari/harari5.webp"
import harari6 from "data-base64:./../assets/authors/harari/harari6.webp"
import harari7 from "data-base64:./../assets/authors/harari/harari7.webp"
import harari8 from "data-base64:./../assets/authors/harari/harari8.webp"
import harari9 from "data-base64:./../assets/authors/harari/harari9.webp"
import harari10 from "data-base64:./../assets/authors/harari/harari10.webp"

import jk1 from "data-base64:./../assets/authors/jk/jk1.webp"
import jk2 from "data-base64:./../assets/authors/jk/jk2.webp"
import jk3 from "data-base64:./../assets/authors/jk/jk3.webp"
import jk4 from "data-base64:./../assets/authors/jk/jk4.webp"
import jk5 from "data-base64:./../assets/authors/jk/jk5.webp"
import jk6 from "data-base64:./../assets/authors/jk/jk6.webp"
import jk7 from "data-base64:./../assets/authors/jk/jk7.webp"
import jk8 from "data-base64:./../assets/authors/jk/jk8.webp"
import jk9 from "data-base64:./../assets/authors/jk/jk9.webp"
import jk10 from "data-base64:./../assets/authors/jk/jk10.webp"

import king1 from "data-base64:./../assets/authors/king/king1.webp"
import king2 from "data-base64:./../assets/authors/king/king2.webp"
import king3 from "data-base64:./../assets/authors/king/king3.webp"
import king4 from "data-base64:./../assets/authors/king/king4.webp"
import king5 from "data-base64:./../assets/authors/king/king5.webp"
import king6 from "data-base64:./../assets/authors/king/king6.webp"
import king7 from "data-base64:./../assets/authors/king/king7.webp"
import king8 from "data-base64:./../assets/authors/king/king8.webp"
import king9 from "data-base64:./../assets/authors/king/king9.webp"
import king10 from "data-base64:./../assets/authors/king/king10.webp"


import "./style.css"

const default_authors = ["Stephen King", "Yuval Noah Harari", "J. K. Rowling", "Ernest Hemingway", "Rabindranath Tagore", "Haruki Murakami"]
const author_pic = {
  "Haruki Murakami": [murakami1, murakami2, murakami3, murakami4, murakami5, murakami6, murakami7, murakami8, murakami9, murakami10],
  "Stephen King": [king1, king2, king3, king4, king5, king6, king7, king8, king9, king10],
  "Ernest Hemingway": [hemmingway1, hemmingway2, hemmingway3, hemmingway4, hemmingway5, hemmingway6, hemmingway7, hemmingway8, hemmingway9, hemmingway10],
  "Yuval Noah Harari": [harari1, harari2, harari3, harari4, harari5, harari6, harari7, harari8, harari9, harari10],
  "J. K. Rowling": [jk1, jk2, jk3, jk4, jk5, jk6, jk7, jk8, jk9, jk10],
  "Rabindranath Tagore": [tagore1, tagore2, tagore3, tagore4, tagore5, tagore6, tagore7, tagore8, tagore9, tagore10]

}
function IndexPopup() {
  const [selectedValue, setSelectedValue] = useState("Stephen King");
  function handlevaluechange(value) {
    setSelectedValue(value)
    setauthor(value)
  }
  async function iniauthor() {
    let stored = await getauthor()
    setSelectedValue(stored)
  }

  useEffect(() => { iniauthor() }, [])

  function randome(max) {
    return Math.floor((Math.random() * max))
  }



  function arrowhandler(direction: "right" | "left"): void {

    var n = default_authors.indexOf(selectedValue)
    if (direction === "right") {
      setSelectedValue(default_authors[(n + 1) % 6])
    } else if (n === 0) {
        setSelectedValue(default_authors[5])
      }else{
        setSelectedValue(default_authors[(n - 1) % 5])
      }
      
    }


  return (
    <div className="h-[520px] !min-h-[520px] !min-w-[270px]  overflow-hidden w-[270px] bg-gradient-to-b rounded-md from-[#1a1a1a] via-[#1a1a1a] to-[#000]">
      <img src={author_pic[selectedValue][randome(10)]} alt={`image of ${{ selectedValue }}`} key={selectedValue} className="relative  min-w-[360px]
min-h-[527] shrink-0 !select-none object-cover animate-fade-in-up" />
      <div className=" absolute animate-fade-in-up !text-[#DADADA]  top-[15px] !flex !flex-row !justify-center !w-full !items-center   !z-50 ">
        <h1 className="text-[20px] font-bold">Styco.</h1></div>
      <div className=" !select-none !z-10 !top-0 fixed !left-0 w-full h-full  " style={{ "background": "linear-gradient(180deg, #000 4.8%, rgba(71, 71, 71, 0.00) 43.53%, rgba(8, 8, 8, 0.90) 86.72%)" }} />
      <div className=" absolute animate-fade-in-up !text-[#9c9c9c] top-[450px] !flex !flex-row !justify-center !w-full !items-center   !z-50 ">
        <button onClick={() => arrowhandler("left")} className="!p-2 !z-50">
          <FaCaretLeft className=" !w-6 !h-6" /></button>
        <Select onValueChange={(value: string) => handlevaluechange(value)} className="!z-50 w-full mx-auto  !rounded-md">
          <SelectTrigger className="w-fit mx-auto my-2 flex justify-center gap-x-2 !border-[#b1b1b1] !shadow-[#747474] !px-4 !shadow-sm hover:!shadow-lg hover:!border-[#ccdcfc] hover:!border-3 !rounded-full !border-2 !text-md !font-semibold text-[#dddddd]">
            <SelectValue placeholder={selectedValue} className="" />
          </SelectTrigger>
          <SelectContent className="bg-gradient-to-b from-[#141414] to-[#000]  border-[#3f3f3f] bg-opacity-40 backdrop-blur-lg">
            <SelectGroup className="text-[#9c9c9c] hover:text-[#e7e7e7] bg-[#0e0e0e] text-base">
              <SelectLabel className="bg-[#272727] !rounded-lg">Select Author</SelectLabel>
              {default_authors.map((author) => (
                <SelectItem className="text-[#d5d5d5] !rounded-md  hover:!bg-[#252525] text-md" key={author} value={author}>{author}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <button onClick={() => arrowhandler("right")} className="!p-2 !z-50">
          <FaCaretRight className="!w-6 !h-6" /></button>



      </div>

    </div>
  )
}

export default IndexPopup
