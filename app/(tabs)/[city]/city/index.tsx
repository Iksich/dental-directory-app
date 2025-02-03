import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const clinicsData = [
  { city: "Banja Luka", clinics: [{ name: "Dental Banja", address: "Street 123", phone: "123-456" }] },
  { city: "Sarajevo", clinics: [{ name: "Smile Center", address: "Street ABC", phone: "789-012" }] },
  // Add more clinics here
];

export default function CityDetailScreen() {
  const { city } = useLocalSearchParams(); // ✅ Get city name from URL

  const cityData = clinicsData.find((item) => item.city === city);
  const clinics = cityData?.clinics || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clinics in {city}</Text>
      <FlatList
        data={clinics}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.clinicCard}>
            <Text style={styles.clinicName}>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  clinicCard: { padding: 16, backgroundColor: '#eee', marginBottom: 8, borderRadius: 8 },
  clinicName: { fontSize: 18, fontWeight: 'bold' },
});

