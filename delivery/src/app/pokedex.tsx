import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
  FlatList 
} from 'react-native';

import { useEffect, useState } from 'react';

import { Pokemon } from '@/@type/pokemon';
import { getPokemons } from '@/integration/pokemonIntegration';

export default function Dashboard() {

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPokemons(20);
        setPokemons(data);
      } catch (e) {
        console.error('Erro ao carregar pokémons:', e);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          Carregando Pokédex...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pokédex
      </Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <View style={styles.headerCard}>
              <Text style={styles.number}>
                #{item.index}
              </Text>

              <Text style={styles.name}>
                {item.nome}
              </Text>
            </View>

            <Image
              source={{ uri: item.imagem }}
              style={styles.image}
            />

            <View style={styles.typesContainer}>
              {item.tipos.map((tipo, index) => (
                <Text key={index} style={styles.type}>
                  {tipo}
                </Text>
              ))}
            </View>

            <View style={styles.statsBox}>
              <Text style={styles.statsTitle}>
                Stats
              </Text>

              {item.poderes.map((poder, index) => (
                <Text key={index} style={styles.power}>
                  {poder.nome}: {poder.forca}
                </Text>
              ))}
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1a',
    padding: 16,
  },

  loading: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
  },

  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#ffcb05',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    letterSpacing: 2,
  },

  card: {
    backgroundColor: '#1c2333',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2d3a55',
  },

  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  number: {
    color: '#ffcb05',
    fontWeight: 'bold',
    fontSize: 14,
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  image: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginVertical: 10,
  },

  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 10,
  },

  type: {
    backgroundColor: '#ffcb05',
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  statsBox: {
    marginTop: 8,
  },

  statsTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  power: {
    color: '#cbd5e1',
    fontSize: 12,
  },
});