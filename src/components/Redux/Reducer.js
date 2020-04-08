
const initialState = {
    visibles: false,
    error: null,
    modalitem: []
  };
  
  export default function rootReducer (
    state = initialState,
    action
  ) {
    switch (action.type) {
      case "OPEN_MODAL":
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        console.log("open_modal_console");
        
        return {
          ...state,
          visibles: true,
          error: null,
          modalitem: action.value
        };
  
      case "CLOSE_MODAL":
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          visibles: false
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }


