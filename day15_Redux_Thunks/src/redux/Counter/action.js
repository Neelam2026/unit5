
const  ADD_COUNT="ADD_COUNT" 
const SUB_COUNT="SUB_COUNT"


export const addCount=(data)=>{
    return {
        type:ADD_COUNT,
        payload:data,

    }
}

export const subCount=(data)=>{
    return {
        type:SUB_COUNT,
        payload:data,

    }
}

