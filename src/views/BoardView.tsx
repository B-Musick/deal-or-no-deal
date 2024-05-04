function BoardView({cases, amounts}){
    let boardTiles = amounts.map((tile, index)=>{
        return <tr className={tile.removed && !tile.selected ? 'bg-red-200':''}>{tile.value}</tr>
    });

    return (
        <div>
            <table>{boardTiles}</table>
        </div>
    )
}

export default BoardView;