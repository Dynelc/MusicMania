import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import NoteValue from '../../shared/NoteValue';
import {cos} from 'react-native-reanimated';

const Level1 = () => {
  const Items = NoteValue.NoteValue;
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(0);
  const [displayChoices, setDisplayChoices] = useState();
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    noteSelection();
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      setDisplayQuestion(true);
      displayOptions();
    }
  }, [notes]);

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
    console.log(index);
    let options = [];
    for (let i = 0; i < index.length; i++) {
      let j = index[i];
      options.push(notes[j].name);
      console.log(j);
    }
    console.log(options);
    setDisplayChoices(options);
  };

  const renderQuestion = () => {
    console.log(notes);
    console.log(displayChoices);
    return (
      <View style={{flex: 1}}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Get familiar with note value in music.
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <View>
            <Image
              style={styles.questionImage}
              source={notes[currentNote].image}></Image>
          </View>
        </View>
        <View style={styles.choicesBox}>
          <TouchableOpacity>
            <Text>{displayChoices[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{displayChoices[1]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.choicesBox}>
          <TouchableOpacity>
            <Text>{displayChoices[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{displayChoices[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MusicMania</Text>
      </View>
      {displayQuestion ? renderQuestion() : null}
    </View>
  );
};

export default Level1;
