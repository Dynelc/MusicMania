import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '20@ms',
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@ms',
  },
  instructionText: {},
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionImage: {
    height: '100@ms',
    width: '100@ms',
    resizeMode: 'contain',
  },
  choicesBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
