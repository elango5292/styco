
import { Storage } from "@plasmohq/storage"
 

async function setauthor(author:string){
    const storage = new Storage()
    await storage.set("author", author)
}

async function getauthor(){
    const storage = new Storage()
    const author = await storage.get("author")
    return author
}

export {setauthor , getauthor}