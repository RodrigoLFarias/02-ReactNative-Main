import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header(){
    return(
        <View >
            <View 
            style={{
                backgroundColor: '#555',
                width: 500,
               
            }}
            >
            
            </View>
            {/* <Text style={{color: 'red'}}>Este componente é um Header</Text> */}
            <Image 
                source={{uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain"}}
                style={{ width: 500, height: 350 }}
            />
        </View>
    )
}