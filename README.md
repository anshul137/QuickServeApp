# QuickServeApp

QuickServeApp is a React Native mobile application designed for a restaurant to allow customers to place orders, view receipts, and check order history. The app features a multi-screen interface and utilizes React Native Navigation for a smooth user experience.

## Features

- **Place an Order**: Users can enter details about their order, including item name, price, quantity, and select optional add-ons. A form to submit or clear the order is also provided.
- **Receipt Screen**: After submitting an order, users are navigated to a receipt screen showing the order details, cost breakdown (subtotal, tax, total), and a randomly generated order confirmation code.
- **Order History**: Users can view their past orders in a list with options to clear the history. Each entry displays the order details and total cost.

## Screens

1. **Place an Order**: 
   - Displays item name, price, photo, quantity field, and add-ons (e.g., utensils, delivery).
   - Includes buttons for submitting or clearing the order.

2. **Receipt Screen**:
   - Shows order details, cost breakdown, and a confirmation code.
   - Saves order details to an order history data structure.

3. **Order History Screen**:
   - Displays a list of past orders.
   - Provides an option to clear the order history.

## Installation

To run this app locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/QuickServeApp.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd QuickServeApp
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Development Server**:
    ```bash
    npm start
    ```

5. **Run the App on a Simulator or Device**:
    Follow the Expo documentation to run the app on your desired platform.

## Usage

- **Place an Order**: Navigate to the Place an Order screen, fill in the required fields, and submit your order.
- **View Receipt**: After submitting an order, the Receipt Screen will display the order details and cost breakdown.
- **Order History**: Navigate to the Order History screen to view and manage your past orders.

## Navigation

- The app uses a Tab Navigator for the Place an Order and Order History screens.
- The Place an Order and Receipt screens are connected with a Stack Navigator.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

