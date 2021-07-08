import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 8,
        width: '100%',

        justifyContent: 'space-between'

    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    },
    midContainer: {
        justifyContent: 'space-evenly',
        height: 80,
        marginLeft: 6
    },
    avatar: {
        marginRight: 6
    },
    lastmsg: {
        justifyContent: "space-evenly",
        height: 80,
        maxWidth: '100%',


    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "65%",
    },
    lsm: {
        maxWidth: '65%',
        color: 'white'
    }
})