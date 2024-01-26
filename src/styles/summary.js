import {StyleSheet} from 'react-native';

export const summaryStyles = StyleSheet.create({
  backgroundImage: {
    width: 229,
    height: 185,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  scrollView: {
    paddingTop: 150,
    paddingBottom: 120,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  detailButton: {
    borderRadius: 30,
    backgroundColor: '#F94695',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryDetails: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 16,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  categoryDetailsText: {
    color: 'rgba(255,255,255,0.7)',
  },
});
