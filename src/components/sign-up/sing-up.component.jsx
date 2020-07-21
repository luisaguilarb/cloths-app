import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.util';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert('Password do not match!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('SignUp: ', error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account </h2>
        <span>sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="email"
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="password"
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit"> Sign Up </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
