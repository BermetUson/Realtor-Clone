import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuthStatus = () => {
  const [loggedIn, setLoggenIn] = useState(false);
  const [checkingStaus, setCheckingStaus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggenIn(true);
      }
      setCheckingStaus(false);
    });
  }, []);
  return { loggedIn, checkingStaus };
};
export default useAuthStatus;
