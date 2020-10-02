import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Clefs from '../../shared/Clefs';
import styles from '../Level1/styles';

const Level3 = (props) => {
  const {navigation} = props;
  const Items = Clefs.Clefs;
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(0);
  const [displayChoices, setDisplayChoices] = useState();
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);
  const myIcon = <Icon name="heartbeat" style={styles.iconFont} />;
  const [counter, setCounter] = useState(10);
  const numbers = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    noteSelection();
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      setDisplayQuestion(true);
      displayOptions();
    }
  }, [notes]);

  useEffect(() => {
    if (currentNote > 0) {
      displayOptions();
    }
  }, [currentNote]);

  useEffect(() => {
    if (life === 0) {
      failedScreen();
    }
  }, [life]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      checkAnswer();
    }
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setCurrentNote(0);
      setScore(0);
      setCounter(10);
      noteSelection();
      setDisplayQuestion(false);
      setLife(3);
    });

    return unsubscribe;
  }, [props.navigation]);

  const noteSelection = () => {
    let array = [...Items];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setNotes(array);
  };

  const displayOptions = () => {
    let array = [...numbers];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let index = [];
    index.push(currentNote);
    for (i = 0; i < array.length; i++) {
      if (array[i] != currentNote && index.length < 4) {
        index.push(array[i]);
      }
    }
    let j = index.length - 1;
    for (; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      const temp = index[j];
      index[j] = index[k];
      index[k] = temp;
    }
    let options = [];
    for (let i = 0; i < index.length; i++) {
      let j = index[i];
      options.push(notes[j].name);
    }
    setDisplayChoices(options);
  };

  const checkAnswer = (id) => {
    console.log(id);
    console.log(displayChoices[id]);
    console.log(notes[currentNote].name);
    if (displayChoices[id] === notes[currentNote].name) {
      setScore(score + 1);
    } else setLife(life - 1);
    if (currentNote === 5) {
      return navigation.navigate('SuccessScreen', {level: 3});
    }
    setCurrentNote(currentNote + 1);
    setCounter(10);
  };

  const failedScreen = () => {
    return navigation.navigate('FailedScreen', {level: 3});
  };

  const iconLoop = () => {
    let array = [];
    for (let i = 0; i < life; i++) {
      array.push(<View key={i}>{myIcon}</View>);
    }
    return array;
  };

  const renderQuestion = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Get familiar with clefs in music.
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <View>
            <Image
              style={styles.questionImage}
              source={notes[currentNote].image}></Image>
          </View>
        </View>
        <View style={styles.questionOptionsContainer}>
          <Text style={styles.questionText}>Guess the above shown clef.</Text>
        </View>
        <View style={styles.choicesBox}>
          <TouchableOpacity
            style={styles.individualChoice}
            onPress={() => checkAnswer((id = 0))}>
            <Text style={styles.questionText}>{displayChoices[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.individualChoice}
            onPress={() => checkAnswer((id = 1))}>
            <Text style={styles.questionText}>{displayChoices[1]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.choicesBox}>
          <TouchableOpacity
            style={styles.individualChoice}
            onPress={() => checkAnswer((id = 2))}>
            <Text style={styles.questionText}>{displayChoices[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.individualChoice}
            onPress={() => checkAnswer((id = 3))}>
            <Text style={styles.questionText}>{displayChoices[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>{score} Points</Text>
        </View>
        <View>
          <Text style={styles.scoreText}>{counter}</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text>{iconLoop()}</Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MusicMania</Text>
        <Text style={{color: 'white'}}>Learn Music</Text>
      </View>
      <View style={styles.problemContainer}>
        <Text style={styles.problemText}> Problems</Text>
        <Text style={styles.problemText}>{currentNote} | 5</Text>
      </View>
      {displayQuestion ? renderQuestion() : null}
    </View>
  );
};

export default Level3;
