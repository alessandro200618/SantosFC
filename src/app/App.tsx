import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../routes/AppRoutes";
import { AuthProvider } from "../contexts/AuthContext";


export default function App(){
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </AuthProvider>
    )
}