import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {
  ButtonComponent,
  Container,
  HeaderComponent,
  HorizontalLine,
  TextInputComponent,
  ModalComponent,
  KeyBoardAvoidingViewComponent,
} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {getUserId} from '../shared/LocalStorage';
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfile = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [userImage, setUserImage] = useState(userImage);
  const [visibleProfileImage, setVisibleProfileImageModal] = useState(false);
  const [visibleExperienceModal, setVisibleExperienceModal] = useState(false);
  const [mainCategories, setmainCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [mainSubCategories, setMainSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const nameInputHandler = inputText => {
    setUserName(inputText);
  };

  const phoneNumberInputHandler = inputText => {
    setUserPhoneNumber(inputText);
  };

  const ageInputHandler = inputText => {
    setUserAge(inputText);
  };

  const onOpenCategories = useCallback(() => {
    setOpenSubCategory(false);
  }, []);

  const onOpenSubCategories = useCallback(() => {
    setOpenCategory(false);
  }, []);

  useEffect(() => {
    getUserProfileData();
    getCategories();
  }, []);

  const getUserProfileData = async () => {
    const userId = (await getUserId()).toString();

    const result = await axios.get(
      `https://pol.aisoftwares.co.in/get-user-profile?user_id=${userId}`,
    );
    const {name, phone_number, experience, age, user_image} = result.data.user;
    if (result.data.success === 'true') {
      setUserName(name);
      setUserPhoneNumber(phone_number);
      setUserAge(age);
      setUserExperience(experience);
      setUserImage(user_image);
    }
  };

  const launchDeviceCamer = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      res => {
        if (res.didCancel) {
          setVisibleProfileImageModal(false);
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          res.assets.map(resp => setUserImage(resp.uri));
          setVisibleProfileImageModal(false);
        }
      },
    );
  };

  const openCamera = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (result === false) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Plenty Of Labor',
            message: 'Plenty Of Labor wants to access to your Camera',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
            buttonNeutral: 'Ask Later',
          },
        );
        if (granted === 'granted') {
          launchDeviceCamer();
        } else {
          alert('Camera permission denied');
        }
      } else {
        launchDeviceCamer();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        if (res.didCancel) {
          setVisibleProfileImageModal(false);
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          setVisibleProfileImageModal(false);

          console.log(res.assets);
        }
      },
    );
  };

  const submitCategories = () => {
    const combinedCategories = `${selectedSubCategory}, ${selectedCategory}`;
    setUserExperience(combinedCategories);
    setVisibleExperienceModal(false);
  };

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
    setMainSubCategories(result.data.categories);
  };

  const saveProfileData = async () => {
    const userId = (await getUserId()).toString();

    const categoryId = mainSubCategories
      .filter(res => res.category_name === selectedSubCategory)
      .map(obj => obj.id);

    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('name', userName);
    formData.append('phone_number', userPhoneNumber);
    formData.append('age', userAge);
    formData.append('sub_category_id', categoryId[0]);
    formData.append('user_image', {
      uri: userImage,
      name: userName,
      type: 'image/jpg',
    });
    formData.append('experience', userExperience);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const result = await axios.post(
      'https://pol.aisoftwares.co.in/save-user-profile',
      formData,
      config,
    );
    if (result.data.success === 'true') {
      navigation.goBack();
    }
  };

  const renderHeader = () => {
    return (
      <HeaderComponent row center middle>

          <Container
              flex={false}
              style={{
                  overflow: 'hidden',
                  marginHorizontal: theme.Sizes.S10,
                  borderRadius: theme.Sizes.radius / 7,
              }}/>
        <Container center>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F16,
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
              onPress={() => setVisibleProfileImageModal(true)}>
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
          <Container style={{
              marginBottom: 16
          }} flex={false}>
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
          <Container style={{
              marginBottom: 16
          }} flex={false}>
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
          <Container style={{
              marginBottom: 16
          }} flex={false}>
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
          <Container style={{
              marginBottom: 16
          }} flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}>
            Experience
          </Text>
          {/* <TextInputComponent
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
            editable={false}
          /> */}
          <Pressable onPress={() => setVisibleExperienceModal(true)}>
            <Text
              style={{
                ...theme.Fonts.fontBold,
                fontSize: theme.Sizes.F14,
                marginTop: theme.Sizes.S14 * 1.5,
                paddingLeft: theme.Sizes.S10 / 2.5,
              }}>
              {userExperience}
            </Text>
          </Pressable>

          <HorizontalLine color="black2" />
        </Container>
      </Container>
    );
  };

  const renderCategories = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 3,
          marginVertical: theme.Sizes.S14,
        }}>
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

  const renderSubCategories = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 3,
          marginBottom: theme.Sizes.S14,
        }}>
        <DropDownPicker
          open={openSubCategory}
          onOpen={onOpenSubCategories}
          value={selectedSubCategory}
          items={subCategories}
          setOpen={setOpenSubCategory}
          setValue={setSelectedSubCategory}
          setItems={setSubCategories}
          placeholder="Select Sub Category"
          maxHeight={moderateScale(140)}
          zIndex={1}
          zIndexInverse={1}
        />
      </Container>
    );
  };

  // const renderBottomSheetContents = () => (
  //   <Container
  //     flex={false}
  //     color="white"
  //     shadow
  //     radius
  //     style={{marginTop: theme.Sizes.S14 * 2, height: moderateScale(200)}}>
  //     <Container flex={false} center style={{marginTop: theme.Sizes.S14}}>
  //       <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
  //         Upload Your Profile Picture
  //       </Text>
  //     </Container>

  //     <Container
  //       flex={false}
  //       style={{
  //         overflow: 'hidden',
  //         marginTop: theme.Sizes.S10,
  //         marginHorizontal: theme.Sizes.S14 * 4,
  //         borderRadius: theme.Sizes.radius / 3,
  //       }}>
  //       <ButtonComponent
  //         style={{height: theme.Sizes.S14 * 2.3}}
  //         onPress={openCamera}>
  //         <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
  //           Take a Photo
  //         </Text>
  //       </ButtonComponent>
  //     </Container>

  //     <Container
  //       flex={false}
  //       style={{
  //         overflow: 'hidden',
  //         marginTop: theme.Sizes.S10,
  //         marginHorizontal: theme.Sizes.S14 * 4,
  //         borderRadius: theme.Sizes.radius / 3,
  //       }}>
  //       <ButtonComponent
  //         style={{height: theme.Sizes.S14 * 2.3}}
  //         onPress={openGallery}>
  //         <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
  //           Choose from Gallery
  //         </Text>
  //       </ButtonComponent>
  //     </Container>

  //     <Container
  //       flex={false}
  //       style={{
  //         overflow: 'hidden',
  //         marginTop: theme.Sizes.S10,
  //         marginHorizontal: theme.Sizes.S14 * 4,
  //         borderRadius: theme.Sizes.radius / 3,
  //       }}>
  //       <ButtonComponent
  //         style={{height: theme.Sizes.S14 * 2.3}}
  //         onPress={() => sheetRef.current.snapTo(1)}>
  //         <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
  //           Cancel
  //         </Text>
  //       </ButtonComponent>
  //     </Container>
  //   </Container>
  // );

  // const renderBottomSheet = () => {
  //   return (
  //     <BottomSheet
  //       ref={sheetRef}
  //       snapPoints={[moderateScale(200), 0]}
  //       renderContent={renderBottomSheetContents}
  //       initialSnap={1}
  //       callbackNode={animatedValue}
  //       enabledGestureInteraction={true}
  //     />
  //   );
  // };

  const renderChangeProfileImageModal = () => {
    return (
      <ModalComponent
        visible={visibleProfileImage}
        style={{height: theme.Sizes.height / 2.5}}>
        <Container>
          <Container
            flex={false}
            center
            style={{marginTop: theme.Sizes.S14 * 2}}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              Upload Your Profile Picture
            </Text>
          </Container>

          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              marginTop: theme.Sizes.S14,
              marginHorizontal: theme.Sizes.S14 * 2,
              borderRadius: theme.Sizes.radius / 3,
            }}>
            <ButtonComponent
              style={{height: theme.Sizes.S14 * 3}}
              onPress={openCamera}>
              <Text
                style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
                Take a Photo
              </Text>
            </ButtonComponent>
          </Container>

          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              marginTop: theme.Sizes.S14,
              marginHorizontal: theme.Sizes.S14 * 2,
              borderRadius: theme.Sizes.radius / 3,
            }}>
            <ButtonComponent
              style={{height: theme.Sizes.S14 * 3}}
              onPress={openGallery}>
              <Text
                style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
                Choose from Gallery
              </Text>
            </ButtonComponent>
          </Container>

          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              marginTop: theme.Sizes.S14,
              marginHorizontal: theme.Sizes.S14 * 2,
              borderRadius: theme.Sizes.radius / 3,
            }}>
            <ButtonComponent
              style={{height: theme.Sizes.S14 * 3}}
              onPress={() => setVisibleProfileImageModal(false)}>
              <Text
                style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
                Cancel
              </Text>
            </ButtonComponent>
          </Container>
        </Container>
      </ModalComponent>
    );
  };

  const renderExperienceModal = () => {
    return (
      <ModalComponent visible={visibleExperienceModal}>
        <Container center>
          <Text
            style={{...theme.Fonts.fontBold, marginTop: theme.Sizes.S14 * 2}}>
            Please Select Category and Sub-Category
          </Text>
          {renderCategories()}
          {renderSubCategories()}

          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              borderRadius: theme.Sizes.radius / 5,
              width: theme.Sizes.width / 1.6,
              marginBottom: theme.Sizes.S14,
            }}>
            <ButtonComponent
              style={{height: theme.Sizes.S14 * 3}}
              onPress={submitCategories}>
              <Text style={{fontSize: theme.Sizes.F16}}>Submit</Text>
            </ButtonComponent>
          </Container>

          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              borderRadius: theme.Sizes.radius / 5,
              width: theme.Sizes.width / 1.6,
            }}>
            <ButtonComponent
              style={{height: theme.Sizes.S14 * 3}}
              onPress={() => setVisibleExperienceModal(false)}>
              <Text style={{fontSize: theme.Sizes.F16}}>Cancel</Text>
            </ButtonComponent>
          </Container>
        </Container>
      </ModalComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(animatedValue, 1.0)),
        }}> */}
      {renderHeader()}
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          {renderProfile()}
          {renderData()}
        </KeyBoardAvoidingViewComponent>
      </ScrollView>
      {/* </Animated.View> */}
      {renderChangeProfileImageModal()}
      {renderExperienceModal()}
      {/* {renderBottomSheet()} */}
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
