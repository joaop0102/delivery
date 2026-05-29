import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

import { Pokemon } from '@/@type/pokemon';

import { styles } from './style';

type Props = {
  pokemons: Pokemon[];
};

export default function PokemonList({ pokemons }: Props) {

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.index}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}

      renderItem={({ item }) => (
        <View style={styles.card}>

          <View style={styles.glowCircle} />

          <View style={styles.headerCard}>

            <View style={styles.numberBox}>
              <Text style={styles.number}>
                #{item.index}
              </Text>
            </View>

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
              <View key={index} style={styles.typeBadge}>
                <Text style={styles.type}>
                  {tipo}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <View style={styles.statsBox}>

            <Text style={styles.statsTitle}>
              Stats
            </Text>

            {item.poderes?.map((poder, index) => (
              <View key={index} style={styles.powerRow}>

                <Text style={styles.powerName}>
                  {poder.nome}
                </Text>

                <Text style={styles.powerValue}>
                  {poder.forca}
                </Text>

              </View>
            ))}

          </View>

        </View>
      )}
    />
  );
}