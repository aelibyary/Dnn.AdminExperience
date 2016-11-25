import { licensing as ActionTypes } from "../constants/actionTypes";
import ApplicationService from "../services/applicationService";

const licensingActions = {
    getProduct(callback) {
        return (dispatch) => {
            ApplicationService.getProduct(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_LICENSING_PRODUCT,
                    data: {
                        productName: data.Results.Name
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    }
};

export default licensingActions;
