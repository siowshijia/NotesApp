import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSpacingX: {
    paddingHorizontal: 20,
  },
  containerSpacingY: {
    paddingVertical: 20,
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
  titleTextLg: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  navTabBottom: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(255,255,255,0)',
  },
  rowHorzCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowVertCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pickerContainer: {
    inputIOS: {
      fontSize: 14,
      paddingVertical: 20,
      paddingHorizontal: 15,
      color: '#fff',
      paddingRight: 30,
      backgroundColor: 'rgba(255,255,255,0.12)',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.12)',
      marginBottom: 5,
    },
    inputAndroid: {
      fontSize: 14,
      paddingVertical: 20,
      paddingHorizontal: 15,
      color: '#fff',
      paddingRight: 30,
      backgroundColor: 'rgba(255,255,255,0.12)',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.12)',
      marginBottom: 5,
    },
    placeholder: {
      color: '#fff',
      fontSize: 14,
    },
    iconContainer: {
      top: 20,
      right: 12,
    },
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    height: 260,
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
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