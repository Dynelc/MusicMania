import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15@ms',
  },
  headerText: {
    fontSize: '22@ms',
    color: 'white',
  },
  iconFont: {
    fontSize: '20@ms',
    color: 'red',
    padding: '2@ms',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '50@ms',
  },
  scoreBox: {
    height: '35@ms',
    width: '85@ms',
    borderWidth: '1@ms',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4@ms',
  },
  scoreText: {
    color: 'white',
    fontSize: '16@ms',
  },
  problemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@ms',
  },
  problemText: {
    color: 'white',
    fontSize: '18@ms',
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40@ms',
    marginHorizontal: '40@ms',
    borderRadius: '8@ms',
    borderWidth: '1@ms',
    borderColor: 'white',
  },
  instructionText: {
    color: 'white',
    fontSize: '14@ms',
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '120@ms',
    width: '130@ms',
    borderRadius: '10@ms',
    alignSelf: 'center',
    margin: '25@ms',
  },
  questionImage: {
    height: '100@ms',
    width: '100@ms',
    resizeMode: 'contain',
  },
  questionText: {
    color: 'white',
    fontSize: '16@ms',
  },
  choicesBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  individualChoice: {
    height: '40@ms',
    width: '43%',
    borderWidth: '1@ms',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5@ms',
    marginTop: '20@ms',
  },
});

export default styles;
