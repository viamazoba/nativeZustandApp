import { Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfile } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';


export const HomeScreen = () => {

    const { name, email } = useProfile();
    const { count } = useCounterStore();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={styles.title}>Count: {count}</Text>
        </View>
    );
};
