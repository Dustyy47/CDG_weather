export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatTemperature(temp:number){
    return (temp > 0 ? '+' : '') + temp.toFixed()
}