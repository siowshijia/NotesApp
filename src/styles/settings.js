import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 20,
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
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#F94695',
    borderRadius: 30,
    padding: 10,
  },
  deleteButtonText: {
    color: '#fff',
  },
});
