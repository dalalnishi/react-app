const initialState={
    counter:0,
    results:[]
}

const reducer=(state=initialState,action)=>{
    //return state;
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter+1
            };
            
        case 'DECREMENT':
            if(state.counter===0){
                return state;
            }else{
                return {
                    ...state,
                    counter: state.counter-1
                }
            }

        case 'Add 10':
            return {
                ...state,
                counter: state.counter+action.val
            };
            
        case 'Subtract 5' :
            if(state.counter===0){
                return state;
            }else{
                return {
                    ...state,
                    counter: state.counter-action.val
                }
            }
        
        case 'STORE RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value :state.counter})
            };
        
        default:
            return state;                
    }
}

export default reducer;
