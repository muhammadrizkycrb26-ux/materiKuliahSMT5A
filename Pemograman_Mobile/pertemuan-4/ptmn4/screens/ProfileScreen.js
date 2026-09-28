import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Halaman Profil 👤</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nama : Mohammad Rizky Saputra</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>NIM  : 2488010071</Text>
    </View>
  );
}