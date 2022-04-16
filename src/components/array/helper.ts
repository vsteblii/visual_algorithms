import Color from 'color';

let colorMemo: string[] = [];
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getBlockColorByIndex = (index: number): string => {
    if(colorMemo[index]){
        return colorMemo[index];
    }
    const r = getRandomInt(0,255);
    const g = getRandomInt(0,255);
    const b = getRandomInt(0,255);
    let color = Color.rgb(r,g,b);
    if(color.isDark()){
        color = color.lighten(0.9);
    }
    colorMemo[index] = color.toString();
    return colorMemo[index];
};
