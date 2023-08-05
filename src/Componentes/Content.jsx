import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import Spinner from "./Spinner";
import Card from "./Card";

function Content() {

    // using context values
    const {loading,post} = useContext(ContextApi);



    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
            {
                loading ? (<Spinner></Spinner>) :
                 (post.map( (forEachPost) => (
                    (<Card forEachPost = {forEachPost}></Card>)
                    )
                  
                 ))
            }
        </div>
    );
}
export default Content;