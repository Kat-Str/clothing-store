import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { Fragment } from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <Fragment>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </Fragment>
  );
};

export default SignIn;
