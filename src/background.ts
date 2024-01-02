export {}


function setupContextMenu() {
    chrome.contextMenus.create({
      id: 'change-style',
      title: 'Chage style for " %s "',
      contexts: ['selection']
    });

  }

import { setauthor} from "@/setauther.js";
  
  chrome.runtime.onInstalled.addListener(() => {
    setupContextMenu();
    setauthor("Stephen King")
  });



chrome.contextMenus.onClicked.addListener(async (info, tab) => {

  if (info.menuItemId === 'change-style') {
   
    try{

      chrome.tabs.sendMessage(tab.id,{type:"styco",text:info.selectionText})
      // runai("people are not bad. people are always good","king")
      // .then(second_response => console.log(second_response))
    }finally{
      console.log(info.selectionText)
 
      
      
      
    }
    
    
  }

  


});
