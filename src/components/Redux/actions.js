export const fetchProductsBegin = () => ({
    type: "OPEN_MODAL"
  });
  
  export const fetchProductsSuccess = val => ({
    type: "CLOSE_MODAL",
    payload: { val }
  });
  
 