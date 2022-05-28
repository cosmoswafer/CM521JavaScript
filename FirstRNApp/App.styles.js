import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 5,
    backgroundColor: '#FFBA4F',
  },
  topicsContainer: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginTop: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  result: {
    marginTop: 120,
    padding: 20,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultScore: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});

export default styles;
