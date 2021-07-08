import React from 'react'
import { View, Text } from 'react-native'
import { ChatRoom } from '../../types'
import { Avatar } from 'react-native-elements'
import { styles } from './style'
export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Avatar
                    rounded
                    size={80}
                    source={{ uri: chatRoom.users[1].imageUri }} />

                <View style={styles.midContainer}>
                    <View style={styles.nameView}>
                        <Text style={styles.name}>{chatRoom.users[1].name}</Text>
                        <Text style={{ color: 'white' }}>Yestarday</Text>
                    </View>

                    <Text
                        style={styles.lsm}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            </View>


        </View >
    )
}

export default ChatListItem
