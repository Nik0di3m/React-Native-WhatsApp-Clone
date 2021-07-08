import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ChatListItem from '../components/ChatListItem'
import chatRooms from '../data/ChatRooms'
const ChatScreen = () => {
  return (
    <View style={{ padding: 8 }}>
      <FlatList
        style={{ width: '100%' }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />} />
    </View>
  )
}

export default ChatScreen
