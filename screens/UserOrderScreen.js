import { useState } from 'react';
import { View, Text, TextInput, Button, Image, Switch, StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native';

// OrderScreen component to capture order details
export default function OrderScreen({ navigation }) {
  const [quantity, setQuantity] = useState('');
  const [includeUtensils, setIncludeUtensils] = useState(false);
  const [delivery, setDelivery] = useState(false);

  // Static item data
  const item = {
    name: "Tim-hortan Steeped Tea",
    price: 5.00,
    photo: require('../assets/AdobeStock-tea.jpeg'),
  };

  // Clear order form fields
  const clearOrder = () => {
    setQuantity('');
    setIncludeUtensils(false);
    setDelivery(false);
  };

  // Submit order and navigate to Receipt screen
  const submitOrder = () => {
    const orderDetails = {
      item: item.name,
      price: item.price,
      quantity: parseInt(quantity),
      addOns: {
        includeUtensils,
        delivery,
      },
    };
    navigation.navigate('Receipt', { orderDetails }); //object to recipt
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Image source={item.photo} style={styles.image} />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Include Utensils ($1.00)</Text>
        <Switch value={includeUtensils} onValueChange={setIncludeUtensils} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Delivery ($10.00)</Text>
        <Switch value={delivery} onValueChange={setDelivery} />
      </View>
      <Button title="Submit Order" onPress={submitOrder} color="#007BFF" />
      <Button title="Clear Order" onPress={clearOrder} color="#DC3545" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});