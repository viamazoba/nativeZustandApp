import { Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfile } from '../../store/profile-store';


export const HomeScreen = () => {

    const { name, email } = useProfile();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
        </View>
    );
};
