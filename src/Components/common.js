export const getData = () => {
    return async (dispatch) => {
        try{
        let data = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
        let result = await data.json();
        dispatch({type : 'ADD', payload: result})
        }
        catch(e){
            console.log(e);
        }
    }
}