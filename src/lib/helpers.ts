export function shuffleArray(list: Array<any>){
    const listSize = list.length;

    for (let i = 0; i < listSize; i++) {
        // Random for remaining positions.
        let r = i + (Math.floor(Math.random() * (listSize - i)));
        let tmp = list[i];
        list[i] = list[r];
        list[r] = tmp;
    }

    return list;
}