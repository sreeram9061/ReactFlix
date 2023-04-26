export const useStringminimize=(value,intalCount,endCount)=>{
    return value.split('').splice(intalCount,endCount).join('')
}