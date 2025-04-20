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


    const onSent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowResult(true);
        setrecentpromt(input);
        const response = await run(input);
        setresultdata(response);
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