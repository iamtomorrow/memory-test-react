
export const CounterDefaultFormat = ( min:string, sec:string ) => {
    let tempSec = `${ parseInt(sec) < 10 ? '0' + sec : sec}`;
    let tempMin = `${ parseInt(min) < 10 ? '0' + min : min}`;

    return `${ tempMin }:${ tempSec }`;
}
