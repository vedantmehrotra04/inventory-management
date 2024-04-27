const InitialState = {
    list: [],
    metric: {
        totalProducts: null,
        totalStoreValue: null,
        outOfStock: null,
        category: null
    },
    Modal: {
        isVisible: false,
        props: {}
    },
    isAdmin: true,
}

const getMetric = (list) => {
    let totalProducts = list.length;
    let outOfStock = list.filter(item => item.quantity === 0).length;
    let set = new Set();
    list.forEach(item => set.add(item.category));
    let category = set.size;

    let totalStoreValue = list.map(item =>{
        let value = item.value;
        const intValue = parseInt(value.replace('$', ''), 10);
        return intValue;
    }).reduce((acc, curr) => {
        return acc + curr
    },0)

    return {
        totalProducts, outOfStock, category, totalStoreValue
    }
}

export const reducer = (state = InitialState, action) => {
switch(action.type){
case 'ADD': {
let newList = [...action.payload];
const {totalProducts, totalStoreValue, outOfStock, category} = getMetric(newList)
 let newState = {
     ...state, list: [...action.payload], metric: {
         totalProducts, totalStoreValue, outOfStock, category
     }
 }
 return newState;
}
case 'EDIT':{
    let index = state.list.findIndex(item => item.id === action.payload.id);
    let newList = [...state.list];
    if(index !== -1){
        newList[index] = action.payload;
        const {totalProducts, totalStoreValue, outOfStock, category} = getMetric(newList)
        const newState = {
            ...state, list: [...newList], metric: {
                totalProducts, totalStoreValue, outOfStock, category
            }
        }
        return newState
    }
    break;
}
case 'SHOW_MODAL': 
     return {...state, Modal: {
         isVisible: true,
         props: action.payload,
     }};

case 'CLOSE_MODAL': 
    if(action.payload){
        let item = action.payload;
        let list = state.list;
        let index = list.findIndex(i => i.name === item.name);
        if(index !==-1 ){
            let newList = list;
            newList[index] = item;
            const {totalProducts, totalStoreValue, outOfStock, category} = getMetric(newList)
            const newState = {
                ...state, list: [...newList], metric: {
                    totalProducts, totalStoreValue, outOfStock, category
                }
            }
            return {...newState, Modal: {
                isVisible: false,
                props: {},
            }
            }
        }
    }
    return {
        ...state, Modal: {
            isVisible: false,
            props: {},
        },
    }
case 'CHANGE_USER': 
    return {
        ...state,
        isAdmin: !state.isAdmin
    }
case 'DELETE': {
    let item = action.payload;
    let index = state.list.findIndex(i => i.name === item.name);
    if(index !== -1){
        let newList = [...state.list].filter(i => i.name !== item.name);
        const {totalProducts, totalStoreValue, outOfStock, category} = getMetric(newList)
        const newState = {
            ...state, list: [...newList], metric: {
                totalProducts, totalStoreValue, outOfStock, category
            }
        }
        return {...newState}
    }
}

case 'DISABLE': {
    let item = action.payload;
    let index= state.list.findIndex(i => i.name === item.name);
    let newItem;
    if(index !== -1){
        let itemInState = {...state.list[index]};
        if(itemInState.hasOwnProperty('isDisabled')){
            itemInState.isDisabled = !itemInState.isDisabled;
            newItem = itemInState;
        }
        else {
            item.isDisabled = true;
            newItem = item;
        }

        let newList = [...state.list];
        newList[index] = newItem
        return {
            ...state, list: newList
        }
    }
}

default: 
  return state;
}
}