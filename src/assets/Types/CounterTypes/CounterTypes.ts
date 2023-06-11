
export const CounterDefaultFormat = ( sec:number ) => {
    let min = Math.floor(sec / 60);
    sec -= (min * 60);
    let tempSec = `${ sec < 10 ? '0' + sec : sec}`;
    let tempMin = `${ min < 10 ? '0' + min : min}`;

    return `${ tempMin }:${ tempSec }`;
}
