import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/index";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

const logOut = () => supabase.auth.signOut();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    const { user: currentUser } = data;
    setUser(currentUser ? currentUser : null);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getUser();
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
