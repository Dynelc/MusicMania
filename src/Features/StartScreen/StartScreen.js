import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const StartScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>MusicMania</Text>
        <Text style={styles.subheaderText}>Learn Music</Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/startpage.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>

      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>Play Fun Games And Quizes</Text>
        <Text style={styles.instructiontext}>To Learn Music</Text>
        <Text style={styles.instructiontext}></Text>
        <Text style={styles.instructiontext}></Text>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Level1')}>
          <Text style={styles.txt}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;
