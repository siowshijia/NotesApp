import {StyleSheet} from 'react-native';

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
  popupPosition: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 5,
    alignItems: 'center',
  },
  popupContainer: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupText: {
    color: '#fff',
    fontSize: 16,
  },
});
