import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

function Card({forEachPost}){
    return (
        <div key ={forEachPost.id}>
            <h2  className="font-bold text-sm ">{forEachPost.title}</h2>
            <p className="text-[14px]">By <span className="italic">{forEachPost.author}</span> on <span className="underline font-bold">{forEachPost.category}</span></p>
            <p className="text-[14px]">Posted on <span>{forEachPost.date}</span></p>
            <p className="text-[16px] mt-[13px]">{forEachPost.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center"> {
                    forEachPost.tags.map((tag,index)=>{
                        return <a key={index}  className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</a>
                    })
                }
               </div> 
        </div>
    )
}
export default Card;