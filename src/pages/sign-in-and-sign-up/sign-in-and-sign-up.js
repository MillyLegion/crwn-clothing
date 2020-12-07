import React from 'react';

import SignIn from '../../components/sing-in/sing-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.scss';


const SignInAndSignUpPage = () => {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    )
};

export default SignInAndSignUpPage;