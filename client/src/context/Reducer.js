

export const Reducer = (state, action) => {
    switch (action.type) {

        case 'Apply':
            // console.log("action: ",action.payload)
            return {
              ...state,
              success:true,
            };


            case 'Error':
                // console.log("action: ",action.payload)
                return {
                  ...state,
                  error: action.payload,
                  success:false,
                };

    }


}