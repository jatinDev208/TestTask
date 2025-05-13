import {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const ProfileScreen = () => {
  const [photo, setPhoto] = useState(null);

  const handleButtonPress = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to scan QR codes.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        takePhoto()
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const takePhoto = async() => {
    launchCamera(
      {mediaType: 'photo', cameraType: 'front', saveToPhotos: true},
      (rec) => {

        console.log('387847  -> ',rec)

        if (rec.didCancel) {
          console.log('cancelled');
        } else if (rec.errorCode) {
          console.log('camera error');
        } else {

        console.log(rec)

          setPhoto(rec.assets[0]);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inner}>
        <Image style={styles.img} source={{uri:photo?.uri ?? 'https://accounts.google.com/gsi/client'}} />
      </View>
      <TouchableOpacity onPress={handleButtonPress}>
      <Text>{'Change Profile Pic'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 999,
  },
});
