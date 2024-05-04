import { useEffect, useState } from "react"

function NumberedCase({caseVal, selectCase, index}) {
    const [showValue, setShowValue] = useState(caseVal.removed);
    const [showCase, setShowCase] = useState(!caseVal.removed);

    useEffect(()=>{
        // Remove case if selected
        if(caseVal.removed === true){
            if(!caseVal.selected) setShowValue(true);
            setTimeout(()=>{
                setShowCase(false);
            }, 2000)
        }
    }, [caseVal.removed]);

    let caseView = 
        <div onClick={()=>{selectCase(caseVal, index)}} className="flex justify-center items-center bg-gray-300 w-[90px] h-[70px] rounded-xl">
            <div>{caseVal.caseNumber}</div>
        </div>  

    let moneyView = 
        <div className="flex justify-center items-center bg-indigo-900 border-gray-300 border-2 w-[90px] h-[70px] rounded-xl">
            <div className="bg-black text-white w-[75%] text-center">{caseVal.value}</div>
        </div>  

    return (
        <div className={!showCase ? 'invisible' : ''}>
            {showValue ? moneyView: caseView}
        </div>
    )
}

export default NumberedCase;