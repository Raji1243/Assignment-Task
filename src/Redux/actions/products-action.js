export const getAllProducts = () => {
    return { type: 'GET_ALL_PRODUCTS' };
};
export const setSelectedProducts = (product) => {
    return { type: 'SET_SELECTED_PRODUCTS', payload: product }
}
export const getselectedProductsCount = () => {
    return { type: 'GET_SELECTED_PRODUCTS_COUNT' }
}

export const getSelectedProducts = () => {
    return { type: 'GET_SELECTED_PRODUCTS' }
}

export const clrDetails = () => {
    return { type: 'CLR_DETAILS' }
}

export const setHistory = (data) => {
    return { type: 'SET_HISTORY',data }
}