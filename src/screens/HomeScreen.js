import { SafeAreaView, StyleSheet } from "react-native";

const HomeScreen = () =>{
    return(
        <SafeAreaView style={styles.main}>
            <Text>{'Welcome'}</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:"center"
    },
    txt:{
        fontSize:15,
        color:'black'
    }
})