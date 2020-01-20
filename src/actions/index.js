export const sortByName = (empItem) => {
    return {
        type: 'SORTBYNAME',
        payload:empItem
    }
}

export const sortByAge = (empItem) => {
    return {
        type: 'SORTBYAGE',
        payload:empItem
    }
}

