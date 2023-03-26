import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser ,deleteUser} from "../feature/authSlice";
import { auth } from "../firebaseConfig";

const useAuthHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        dispatch(setUser(user.email))
        navigate("/");
      }
    });
  }, []);

  const signUpUser = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(auth.currentUser.email));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(auth.currentUser.email));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    signOut(auth).then(() => console.log("Sign Out Successfully"));
    dispatch(deleteUser())
    navigate("/login");
  };

  return { signUpUser, signInUser ,logOut};
};

export default useAuthHook;
