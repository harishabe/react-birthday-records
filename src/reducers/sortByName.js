const sortByNameReducers = (state = 0, action) => {
    switch (action.type) {
        case 'SORTBYNAME':
            return state + action.payload.sort((a,b)=>(a.name > b.name) ? 1 : -1);
        case 'SORTBYAGE':
            return state + action.payload.sort((a,b)=>(new Date(a.age) > new Date(b.age)) ? 1 : -1);
        default:
            return state;
    }
}

export default sortByNameReducers;