import  { useEffect, useState } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
import { saveOrder } from '../data/orderHistory';


// user receptScreen to display the user order 

export default function ReceiptScreen({ route, navigation }) {
  const { orderDetails } = route.params; //order detail
  console.log('Received Order Details:', orderDetails);
  const [confirmationCode, setConfirmationCode] = useState('');


  // Generate a random order confirmation code 
  useEffect(() => {
    setConfirmationCode(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);


  // calculation of total
  const calculateCost = () => {
    let subtotal = orderDetails.price * orderDetails.quantity;
    if (orderDetails.addOns.includeUtensils) subtotal += 1.00;
    if (orderDetails.addOns.delivery) subtotal += 10.00;
    const tax = subtotal * 0.13;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateCost();
  
 // Save order details and navigate to OrderHistory screen
  const completeOrder = () => {
    saveOrder({ ...orderDetails, confirmationCode, subtotal, tax, total });
    navigation.navigate('Order History');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirmation}>Order Confirmation: {confirmationCode}</Text>
      <Text style={styles.detail}>Item: {orderDetails.item}</Text>
      <Text style={styles.detail}>Price: ${orderDetails.price.toFixed(2)}</Text>
      <Text style={styles.detail}>Quantity: {orderDetails.quantity}</Text>
      <Text style={styles.detail}>Add-Ons: {orderDetails.addOns.includeUtensils ? "Include Utensils" : ""} {orderDetails.addOns.delivery ? "Delivery" : ""}</Text>
      <Text style={styles.detail}>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text style={styles.detail}>Tax: ${tax.toFixed(2)}</Text>
      <Text style={styles.detail}>Total: ${total.toFixed(2)}</Text>
      <Button title="Complete Order" onPress={completeOrder} color="#28A745" />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  confirmation: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },

  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },

});