import { createContext, useState } from "react";
import run from "../Config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentpromt,setrecentpromt] = useState("");
    const [prevprompt,setprevprompt] = useState([]);
    const [showResult,setshowResult] = useState(false);
    const [loading,setloading] = useState(false);
    const [resultdata,setresultdata] =useState("");

    const delayPara =(index) => {

    }


    const onSent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowResult(true);
        setrecentpromt(input);
        const response = await run(input);
        let responseArry = response.split("**");
        let newResponse ;
        for(let i=0; i< responseArry.length;i++){
            if(i === 0 || i%2  !== 1 ){
                newResponse += responseArry[i];
            }else{
                newResponse +="<b className='font-bold' >"+responseArry[i]+"</b>"
            }
        }
        let newResponse1 = newResponse.split("*").join("<br/>")
        setresultdata(newResponse1);
        setloading(false);
        setInput("");
    }



    const contextvalue = {
        prevprompt,
        setprevprompt,
        onSent,
        setrecentpromt,
        recentpromt,
        showResult,
        loading,
        resultdata,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextvalue} >
            {props.children}
        </Context.Provider>
    ) 
}

export default ContextProvider;