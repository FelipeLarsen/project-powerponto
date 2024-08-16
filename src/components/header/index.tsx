import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return (
        <View>
            <Pressable>
                <Ionicons name='menu' size={20} color={'#121212'} />
            </Pressable>
        </View>
    );
}