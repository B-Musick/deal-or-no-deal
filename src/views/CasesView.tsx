import { useEffect, useState } from "react";
import { shuffleArray } from "../lib/helpers";
import { showCaseValues } from "../lib/constants";
import NumberedCase from "../components/NumberedCase";

function CasesView({cases, selectCase}) {
    let casesObj = cases.map((value, index)=>{
    return <NumberedCase caseVal={value} selectCase={selectCase} index={index}/>
    })

    return (
        <div className='flex flex-wrap flex-row-reverse bg-amber-500'>
            {casesObj}
        </div>
    )
}

export default CasesView;