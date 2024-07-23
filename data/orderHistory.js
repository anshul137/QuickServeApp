// Data management for order history
let orderHistory = [];

// Function to save order to the history
export const saveOrder = (order) => {
  orderHistory.push(order);
};

// Function to retrieve the order history
export const getOrderHistory = () => {
  return orderHistory;
};

// Function to clear the order history
export const clearOrderHistory = () => {
  orderHistory = [];
};
