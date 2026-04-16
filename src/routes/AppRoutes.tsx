import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import PlayerListScreen from '../screens/JogadorLista';
import PlayerDetailsScreen from '../screens/JogadorDetalhe';
const PublicStack = createNativeStackNavigator();
const PrivateStack = createNativeStackNavigator();
function PublicRoutes({ onLogin }: any) {
  return (
    <PublicStack.Navigator initialRouteName="Login">
      <PublicStack.Screen
        name="Login"
        children={(props) => <LoginScreen {...props} onLogin={onLogin} />}
        options={{ title: 'Login - Santos FC' }}
      />
      
    </PublicStack.Navigator>
  );
}

function PrivateRoutes({ onLogout }: any) {
  return (
    <PrivateStack.Navigator initialRouteName="PlayerList">
      <PrivateStack.Screen name="PlayerList" component={PlayerListScreen} options={{ title: 'Jogadores' }} />
      <PrivateStack.Screen
        name="PlayerDetails"
        children={(props) => <PlayerDetailsScreen {...props} onLogout={onLogout} />}
        options={{ title: 'Detalhes do Jogador' }}
      />
    </PrivateStack.Navigator>
  );
}

export default function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <PrivateRoutes onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <PublicRoutes onLogin={() => setIsAuthenticated(true)} />
  );
}
