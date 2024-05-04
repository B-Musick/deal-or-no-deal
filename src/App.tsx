import { useEffect, useState } from 'react'
import NumberedCase from './components/NumberedCase'
import { showCaseValues } from './lib/constants';
import { shuffleArray } from './lib/helpers';
import CasesView from './views/CasesView';
import BoardView from './views/BoardView';
import { BoardValue, Case } from './lib/types';
import DealButtonView from './views/DealButtonView';

function App() {
  const [currentView, setCurrentView] = useState('cases');
  const [cases, setCases] = useState<Array<Case>>([]);
  const [boardAmounts, setBoardAmounts] = useState<Array<any>>([]);
  const [selectedCase,setSelectedCase] = useState<Case>();
  const [initialCaseChose, setInitialCaseChosen] = useState(false);
  const [newGame, setNewGame] = useState(false);
  
  const selectCase = (caseVal:Case, index: number) => {
    let newCases = [...cases];
    setSelectedCase(caseVal);

    if(!initialCaseChose) {
      newCases[index] = {...caseVal, removed: true, selected: true} as Case;
      setInitialCaseChosen(caseVal);
    } else {
      newCases[index] = {...caseVal, removed: true, selected: false} as Case;
      removeBoardAmount(caseVal.value);
    }

    setCases(newCases);
  }

  const removeBoardAmount = (boardVal:number) => {
    // Need to loop through boardAmounts to find value
    let newBoard = [...boardAmounts].map((boardObj, index)=>{
      if(boardObj.value === boardVal) return {value: boardObj.value, removed: true} as BoardValue
      else return boardObj;
    })

    console.log(newBoard)
    setBoardAmounts(newBoard);
  }

  useEffect(()=>{
    let caseValues = [...showCaseValues]; // Deep copy
    
    let board = caseValues.map((value, index)=>{
      return { value:value, removed: false} as BoardValue
    })
    console.log(board)
    setBoardAmounts(board);
    let numberedCases = shuffleArray(caseValues).map((value, index)=>{
      return {value: value, caseNumber: index+1, selected: false, removed: false} as Case
    });

    setCases(numberedCases);
  },[newGame]);

  return (
    <>
      <nav>
        <button onClick={()=>setCurrentView('board')}>Board</button>
        <button onClick={()=>setCurrentView('cases')}>Cases</button>
        {initialCaseChose && <button onClick={()=>setCurrentView('deal')}>Deal Button</button>}
      </nav>
      {currentView == 'cases' && <CasesView cases={cases} selectCase={selectCase}/>}
      {currentView == 'board' && <BoardView cases={cases} amounts={boardAmounts}/>}
      {currentView == 'deal' && <DealButtonView initialCase={initialCaseChose}/>}
    </>
  )
}

export default App
