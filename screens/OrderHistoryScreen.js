import  { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getOrderHistory, clearOrderHistory } from '../data/orderHistory';

// OrderHistoryScreen component to display past orders

export default function OrderHistoryScreen() {
  const [orderHistory, setOrderHistory] = useState([]);

  // Fetch order history on component mount
  useEffect(() => {
    setOrderHistory(getOrderHistory());
  }, []);

  // Clear order history
  const handleClearHistory = () => {
    clearOrderHistory();
    setOrderHistory([]);
  };

  return (

    <View style={styles.container}>

      <Button title="Clear Order History" onPress={handleClearHistory} color="#DC3545" />

      {orderHistory.length === 0 ? (

        <Text style={styles.noOrders}>No Orders Yet</Text>

      ) : (

        <FlatList

          data={orderHistory}

          keyExtractor={item => item.confirmationCode}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>Order #{item.confirmationCode}</Text>
              <Text style={styles.orderText}>Item: {item.item} x {item.quantity}</Text>
              <Text style={styles.orderText}>Add-Ons: {item.addOns.includeUtensils ? "Include Utensils" : ""} {item.addOns.delivery ? "Delivery" : ""}</Text>
              <Text style={styles.orderText}>Total: ${item.total.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );

};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  noOrders: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },

  orderItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  orderText: {
    fontSize: 16,
    color: '#333',
  },

});

