import { StyleSheet, View, TextInput, Button } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <View style={styles.container}>


      <Header />

   
      <TextInput
      style={styles.input}
      placeholder='Digite o LOGIN'
      />

      <TextInput
      style={styles.input}
      placeholder='Digite a senha'
      />

      <Button
        title='Enviar'
      />

    
      
      
      <Footer />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input:{
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5,
    textAlign:'center'
  },
});
