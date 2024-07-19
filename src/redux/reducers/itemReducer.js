const initialState = {
    items: [],
    selectedItem: null,
    loading: false,
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ITEMS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_ITEMS_SUCCESS':
        return {
          ...state,
          items: action.payload,
          loading: false,
        };
      case 'SELECT_ITEM':
        return {
          ...state,
          selectedItem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default itemReducer;
  