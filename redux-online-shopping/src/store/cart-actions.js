import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-food-app-2dddb-default-rtdb.firebaseio.com/shopping.json");
            if (!response.ok) {
                throw new Error('failed to fetch cart data');
            }
            
            const data = await response.json();
            console.log(data);
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartAction.setCart({
                items: cartData.items || [],
                totalItem: cartData.totalItem
            }));
        } catch (error) {
            dispatch(
                uiAction.updateNotification({
                  status: "error",
                  title: "Error!",
                  message: "Sending cart data failed!",
                })
              );
        }
        
    }
}
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.updateNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequestData = async () => {
      const response = await fetch(
        "https://react-food-app-2dddb-default-rtdb.firebaseio.com/shopping.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      await sendRequestData();

      dispatch(
        uiAction.updateNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.updateNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
