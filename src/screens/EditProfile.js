import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {
  ButtonComponent,
  Container,
  HeaderComponent,
  HorizontalLine,
  TextInputComponent,
} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {images, theme} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {getUserId} from '../shared/LocalStorage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfile = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState(userName);
  const [userPhoneNumber, setUserPhoneNumber] = useState(userPhoneNumber);
  const [userAge, setUserAge] = useState(userAge);
  const [userExperience, setUserExperience] = useState(userExperience);
  const [userImage, setUserImage] = useState(userImage);

  const sheetRef = useRef(null);
  const animatedValue = new Animated.Value(1);

  const nameInputHandler = inputText => {
    setUserName(inputText);
  };

  const phoneNumberInputHandler = inputText => {
    setUserPhoneNumber(inputText);
  };

  const ageInputHandler = inputText => {
    setUserAge(inputText);
  };

  const experienceInputHandler = inputText => {
    setUserExperience(inputText);
  };

  useEffect(() => {
    getUserIdFromStorage();
    getUserProfileData();
    getCategories();
  }, [getUserProfileData]);

  const getUserIdFromStorage = async () => {
    const user_id = (await getUserId()).toString();
    setUserId(user_id);
  };

  const getUserProfileData = useCallback(() => {
    async () => {
      const result = await axios.get(
        `https://pol.aisoftwares.co.in/get-user-profile?user_id=${userId}`,
      );
      const {name, phone_number, experience, age, user_image} =
        result.data.user;
      if (result.data.success === 'true') {
        setUserName(name);
        setUserPhoneNumber(phone_number);
        setUserAge(age);
        setUserExperience(experience);
        setUserImage(user_image);
      }
    };
  }, [userId]);

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        if (res.didCancel) {
          alert('cancelled');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          res.assets.map(resp => setUserImage(resp.uri));
          sheetRef.current.snapTo(1);
        }
      },
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        if (res.didCancel) {
          alert('cancelled');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          sheetRef.current.snapTo(1);
          console.log(res.assets);
        }
      },
    );
  };

  const saveProfileData = async () => {
    const data = {
      user_id: userId,
      name: userName,
      phone_number: userPhoneNumber,
      age: userAge,
      experience: userExperience,
      user_image: userImage,
    };
    const result = await axios.post(
      'https://pol.aisoftwares.co.in/save-user-profile',
      data,
    );
    if (result.data.success === 'true') {
      console.log(result.data);
      navigation.goBack();
    }
  };

  const renderHeader = () => {
    return (
      <HeaderComponent row center middle>
        <Container center>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F14,
              color: theme.Colors.white,
            }}>
            Edit Profile
          </Text>
        </Container>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            marginHorizontal: theme.Sizes.S10,
            borderRadius: theme.Sizes.radius / 7,
          }}>
          <ButtonComponent
            style={{
              backgroundColor: theme.Colors.white,
              width: theme.Sizes.S14 * 2,
              height: theme.Sizes.S14 * 2,
            }}
            onPress={saveProfileData}>
            <FontAwesome5
              name="check"
              size={moderateScale(18)}
              color={theme.Colors.orange}
            />
          </ButtonComponent>
        </Container>
      </HeaderComponent>
    );
  };

  const renderProfile = () => {
    return (
      <Container center middle flex={false}>
        <Container
          flex={false}
          center
          middle
          row
          style={{marginTop: theme.Sizes.S14}}>
          <Image
            source={{uri: userImage}}
            style={{
              width: theme.Sizes.S14 * moderateScale(6.7),
              height: theme.Sizes.S14 * moderateScale(6.7),
              borderRadius: theme.Sizes.radius * 2,
            }}
          />
          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              position: 'absolute',
              borderRadius: theme.Sizes.radius,
              borderWidth: moderateScale(4),
              borderColor: theme.Colors.orange,
              left: theme.Sizes.S14 * moderateScale(4.6),
              top: theme.Sizes.S14 * moderateScale(4.8),
            }}>
            <ButtonComponent
              style={{
                width: theme.Sizes.S14 * 1.6,
                height: theme.Sizes.S14 * 1.6,
                backgroundColor: theme.Colors.white,
              }}
              onPress={() => sheetRef.current.snapTo(0)}>
              <FontAwesome5
                name="pen"
                size={moderateScale(14)}
                color={theme.Colors.orange}
              />
            </ButtonComponent>
          </Container>
        </Container>

        <Container flex={false} center middle>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              marginTop: theme.Sizes.S12,
            }}>
            Member Since
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
            }}>
            10/04/2018
          </Text>
          <Entypo
            name="star"
            size={moderateScale(18)}
            color={theme.Colors.yellow}
          />
        </Container>
      </Container>
    );
  };

  const renderData = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 1.2,
          marginBottom: theme.Sizes.S14,
        }}>
        {/* Name */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}>
            Name
          </Text>
          <TextInputComponent
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F16,
              letterSpacing: moderateScale(0.5),
              borderWidth: 0,
              borderBottomWidth: moderateScale(1),
              borderColor: theme.Colors.gray,
            }}
            value={userName}
            onChangeText={nameInputHandler}
          />
        </Container>

        {/* Phone Number */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}>
            Phone Number
          </Text>
          <TextInputComponent
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F16,
              letterSpacing: moderateScale(0.5),
              borderWidth: 0,
              borderBottomWidth: moderateScale(1),
              borderColor: theme.Colors.gray,
            }}
            value={userPhoneNumber}
            onChangeText={phoneNumberInputHandler}
          />
        </Container>

        {/* Age */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}>
            Age
          </Text>
          <TextInputComponent
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F16,
              letterSpacing: moderateScale(0.5),
              borderWidth: 0,
              borderBottomWidth: moderateScale(1),
              borderColor: theme.Colors.gray,
            }}
            value={userAge}
            onChangeText={ageInputHandler}
          />
        </Container>

        {/* Experience */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}>
            Experience
          </Text>
          <TextInputComponent
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F16,
              letterSpacing: moderateScale(0.5),
              borderWidth: 0,
              borderBottomWidth: moderateScale(1),
              borderColor: theme.Colors.gray,
            }}
            value={userExperience}
            onChangeText={experienceInputHandler}
          />
        </Container>
      </Container>
    );
  };

  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [mainCategories, setmainCategories] = useState([]);

  const onOpenCategories = useCallback(() => {
    setOpenSubCategory(false);
  }, []);

  const onOpenSubCategories = useCallback(() => {
    setOpenCategory(false);
  }, []);

  const getCategories = async () => {
    const result = await axios.get(
      'https://pol.aisoftwares.co.in/get-categories',
    );
    const getCategory = result.data.categories.map(cat => {
      const item = {
        label: cat.category_name,
        value: cat.category_name,
      };
      return item;
    });
    setCategories(getCategory);
    setmainCategories(result.data.categories);
  };

  const renderCategories = () => {
    return (
      <Container flex={false} style={{height: 250, marginHorizontal: 50}}>
        <DropDownPicker
          open={openCategory}
          onOpen={onOpenCategories}
          value={selectedCategory}
          items={categories}
          setOpen={setOpenCategory}
          setValue={setSelectedCategory}
          setItems={setCategories}
          placeholder="Select Category"
          onChangeValue={getSubCategories}
          zIndex={2}
          zIndexInverse={2}
        />
      </Container>
    );
  };

  const getSubCategories = async data => {
    const categoryId = mainCategories
      .filter(res => res.category_name === data)
      .map(obj => obj.id);

    const result = await axios.get(
      `https://pol.aisoftwares.co.in/get-sub-categories?cat_id=${categoryId}`,
    );
    const getSubCategory = result.data.categories.map(cat => {
      const item = {
        label: cat.category_name,
        value: cat.category_name,
      };
      return item;
    });
    setSubCategories(getSubCategory);
  };

  const renderSubCategories = () => {
    return (
      <Container flex={false} style={{height: 250, marginHorizontal: 50}}>
        <DropDownPicker
          open={openSubCategory}
          onOpen={onOpenSubCategories}
          value={selectedSubCategory}
          items={subCategories}
          setOpen={setOpenSubCategory}
          setValue={setSelectedSubCategory}
          setItems={setSubCategories}
          placeholder="Select Sub Category"
          zIndex={1}
          zIndexInverse={1}
        />
      </Container>
    );
  };

  const renderBottomSheetContents = () => (
    <Container
      flex={false}
      color="white"
      shadow
      radius
      style={{marginTop: theme.Sizes.S14 * 2, height: moderateScale(200)}}>
      <Container flex={false} center style={{marginTop: theme.Sizes.S14}}>
        <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
          Upload Your Profile Picture
        </Text>
      </Container>

      <Container
        flex={false}
        style={{
          overflow: 'hidden',
          marginTop: theme.Sizes.S10,
          marginHorizontal: theme.Sizes.S14 * 4,
          borderRadius: theme.Sizes.radius / 3,
        }}>
        <ButtonComponent
          style={{height: theme.Sizes.S14 * 2.3}}
          onPress={openCamera}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
            Take a Photo
          </Text>
        </ButtonComponent>
      </Container>

      <Container
        flex={false}
        style={{
          overflow: 'hidden',
          marginTop: theme.Sizes.S10,
          marginHorizontal: theme.Sizes.S14 * 4,
          borderRadius: theme.Sizes.radius / 3,
        }}>
        <ButtonComponent
          style={{height: theme.Sizes.S14 * 2.3}}
          onPress={openGallery}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
            Choose from Gallery
          </Text>
        </ButtonComponent>
      </Container>

      <Container
        flex={false}
        style={{
          overflow: 'hidden',
          marginTop: theme.Sizes.S10,
          marginHorizontal: theme.Sizes.S14 * 4,
          borderRadius: theme.Sizes.radius / 3,
        }}>
        <ButtonComponent
          style={{height: theme.Sizes.S14 * 2.3}}
          onPress={() => sheetRef.current.snapTo(1)}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
            Cancel
          </Text>
        </ButtonComponent>
      </Container>
    </Container>
  );

  const renderBottomSheet = () => {
    return (
      <BottomSheet
        ref={sheetRef}
        snapPoints={[moderateScale(200), 0]}
        renderContent={renderBottomSheetContents}
        initialSnap={1}
        callbackNode={animatedValue}
        enabledGestureInteraction={true}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(animatedValue, 1.0)),
        }}>
        {renderHeader()}
        <ScrollView>
          {renderProfile()}
          {renderData()}
        </ScrollView>
        {renderCategories()}
        {renderSubCategories()}
      </Animated.View>
      {renderBottomSheet()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});
export default EditProfile;
