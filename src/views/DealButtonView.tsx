import NumberedCase from "../components/NumberedCase";

function DealButtonView({initialCase}) {
    return (
        <NumberedCase caseVal={initialCase} selectCase={null} index={null}/>
    )
}

export default DealButtonView;