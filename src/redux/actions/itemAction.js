import api from '../../utils/api';

export const fetchItems = () => async (dispatch) => {
  dispatch({ type: 'FETCH_ITEMS_REQUEST' });
  try {
    const response = await api.get('/products');
    dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const selectItem = (item) => ({
  type: 'SELECT_ITEM',
  payload: item,
});
