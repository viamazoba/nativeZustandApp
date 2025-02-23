import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfile } from '../../store/profile-store';


export const ProfileScreen = () => {
    const { name, email, changeProfile } = useProfile();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>

            <Pressable
                style={styles.primaryButton}
                onPress={() => useProfile.setState({ name: 'Fiodor' })}
            >
                <Text>Cambiar nombre</Text>
            </Pressable>

            <Pressable
                style={styles.primaryButton}
                onPress={() => useProfile.setState({ email: 'fiodor@gmail.com' })}
            >
                <Text>Cambiar email</Text>
            </Pressable>

            <Pressable
                style={styles.primaryButton}
                onPress={() => changeProfile('John Doe', 'john.doe@gmail.com')}
            >
                <Text>Regresar a John Doe</Text>
            </Pressable>
        </View>
    );
};
