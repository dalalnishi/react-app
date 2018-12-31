const initialState={
    counter:0
}

const reducer=(state=initialState,action)=>{
    //return state;
    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter+1
            };
            
        case 'DECREMENT':
            if(state.counter===0){
                return state;
            }else{
                return {
                    counter: state.counter-1
                }
            }
        
        default:
            return state;                
    }
}

export default reducer;