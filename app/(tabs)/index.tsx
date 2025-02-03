import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import clinicsData from '@/assets/data/clinics.json';

export default function HomeScreen() {
  const router = useRouter();
  const cities = clinicsData.map((item) => item.city);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a City</Text>
      <FlatList
        data={cities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityCard} onPress={() => router.push(`/city/${item}`)}>
            <Text style={styles.cityName}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cityCard: { padding: 16, backgroundColor: '#eee', marginBottom: 8, borderRadius: 8 },
  cityName: { fontSize: 18 },
});
