import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  listContent: {
    paddingBottom: 40,
    paddingHorizontal: 4,
  },

  card: {
    backgroundColor: '#0f172a',

    borderRadius: 30,

    padding: 22,

    marginBottom: 24,

    borderWidth: 1.5,
    borderColor: '#334155',

    overflow: 'hidden',

    position: 'relative',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 12,

    elevation: 10,
  },

  glowCircle: {
    position: 'absolute',

    width: 180,
    height: 180,

    borderRadius: 999,

    backgroundColor: 'rgba(250, 204, 21, 0.08)',

    top: -50,
    right: -50,
  },

  headerCard: {
    alignItems: 'center',

    marginBottom: 10,
  },

  numberBox: {
    backgroundColor: '#1e293b',

    paddingHorizontal: 14,
    paddingVertical: 6,

    borderRadius: 999,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#475569',
  },

  number: {
    color: '#facc15',

    fontWeight: '900',

    fontSize: 13,

    letterSpacing: 1,
  },

  name: {
    color: '#ffffff',

    fontSize: 28,

    fontWeight: '900',

    textTransform: 'capitalize',

    letterSpacing: 1.2,

    textAlign: 'center',
  },

  image: {
    width: 190,
    height: 190,

    alignSelf: 'center',

    marginVertical: 18,
  },

  typesContainer: {
    flexDirection: 'row',

    justifyContent: 'center',

    flexWrap: 'wrap',

    gap: 10,

    marginBottom: 18,
  },

  typeBadge: {
    backgroundColor: '#facc15',

    borderRadius: 999,

    paddingHorizontal: 16,
    paddingVertical: 7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 3,
  },

  type: {
    color: '#111827',

    fontSize: 12,

    fontWeight: '900',

    textTransform: 'uppercase',

    letterSpacing: 1,
  },

  divider: {
    height: 1,

    backgroundColor: '#334155',

    marginBottom: 18,
  },

  statsBox: {
    backgroundColor: '#111827',

    borderRadius: 20,

    padding: 16,

    borderWidth: 1,
    borderColor: '#1e293b',
  },

  statsTitle: {
    color: '#facc15',

    fontSize: 18,

    fontWeight: '900',

    textAlign: 'center',

    marginBottom: 14,

    letterSpacing: 1,
  },

  powerRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#1e293b',

    paddingVertical: 10,
    paddingHorizontal: 14,

    borderRadius: 14,

    marginBottom: 8,
  },

  powerName: {
    color: '#e2e8f0',

    fontSize: 13,

    fontWeight: '700',

    textTransform: 'capitalize',
  },

  powerValue: {
    color: '#facc15',

    fontSize: 14,

    fontWeight: '900',
  },

});