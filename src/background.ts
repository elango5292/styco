export {}

import { runai } from "./gen.js"

function setupContextMenu() {
    chrome.contextMenus.create({
      id: 'change-style',
      title: 'Chage style of %s',
      contexts: ['selection']
    });

  }

import { setauthor,getauthor } from "@/setauther.js";
  
  chrome.runtime.onInstalled.addListener(() => {
    setupContextMenu();
    setauthor("Stephen King")
  });

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
try{
  runai("people are not bad. people are always good","king")
  .then(second_response => console.log(second_response))
}finally{
  console.log(info.selectionText)
  getauthor().then((result)=>console.log(result))
  
}
  


});