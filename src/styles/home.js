import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  mainTitle: {
    marginLeft: 10,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 10,
  },
  noteItemText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  noteItemArrow: {
    marginLeft: 20,
  },
});
