import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Sign in</Text>
      <View style={styles.container2}>
      <Text>New User ?</Text>
      <Link style={styles.text2} href={'createAccount'}>Create an Account</Link>
      </View>
      <TextInput
      placeholder="Email Address"
        style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  text1:{
    fontSize : 25,
    fontWeight : '700',
  },
  container2:{
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },
  text2:{
    color :'#0098FF',
    fontSize: 15,
    fontWeight : '600',
  },
  input: {
    height: 50,
    marginBottom: 10,
    borderBottomWidth: 1, // Bottom border ki width
    borderBottomColor: '#000',
    marginTop : 30
  },
  
  

})
