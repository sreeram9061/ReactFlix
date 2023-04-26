export const initialState={
    page:1,
    favoriteItems:[],
}

export const reducer=(state,{type,payload})=>{
    switch(type){
        case  "ADD_FAVORITE":
            return {...state,favoriteItems:[...state.favoriteItems,payload]}
        case  "REMOVE_FAVORITE":
            return {...state,favoriteItems:state.favoriteItems.filter(favM=>favM.id!==payload)}
        case 'NEXT_PAGE':
            return {...state,page:state.page+1}
        case 'PREV_PAGE':
            return {...state,page:state.page-1}
        case 'LOCAL_STORAGE_DATA':
            return {...state,favoriteItems:[...payload]}
        default:
        return state;

    }
}
