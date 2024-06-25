import { createContext, useContext, useEffect } from 'react';
import { useStorageState } from './useStorageState';
import { useRouter, useSegments } from 'expo-router';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

function useProtectedRoute(session: string | null) {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"

    if (!session && !inAuthGroup) {

      router.replace("/(auth)")

    } else if (session && inAuthGroup) {

      router.replace("/(tabs)/home")

    }
  }, [session, segments])
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  useProtectedRoute(session)

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
