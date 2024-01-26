import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  titleTextMd: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1C0B37',
    position: 'absolute',
    height: 100,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#F94695',
    borderRadius: 30,
    padding: 10,
  },
  bottomContainerButtonText: {
    color: '#fff',
  },
});
