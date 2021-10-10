import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Text>
              Đăng xuất
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});