import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
//
//
const ChatListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ChatListScreens</Text>

      <Button
        title="navigation to setting pae"
        onPress={() => navigation.navigate('ChatSetting')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ChatListScreen;
