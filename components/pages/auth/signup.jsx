import { useInput } from "../../hooks/useInput";
import { signUp } from "../../../services/authService";
import { useMerchantAuth } from "../../../context/MerchantAuthContext";
import { useNotification } from "../../../context/NotificationContext";
import { useNavigate } from "react-router-dom";

import Input from "../../Input";
import Label from "../../Label";
import SupportPrompt from "../../SupportPrompt";
import FormHeader from "../../FormHeader";
import ContentColumn from "../../ContentColumn";
import FormContainer from "../../FormContainer";
import Form from "../../Form";
import PrimarySubmitButton from "../../PrimarySubmitButton";
import HomeNavbar from "../../HomeNavbar";
import ShopNestLogo from "../../../assets/ShopNestLogo.png";
import PasswordRequirements from "../../PasswordRequirements";


const SignUp = () => {
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const { login } = useMerchantAuth();

  const firstName = useInput({
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    validate: (value) => {
      if (!value.trim()) return "First name is required";
      return null;
    },
  });

  const lastName = useInput({
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    validate: (value) => {
      if (!value.trim()) return "Last name is required";
      return null;
    },
  });

  const businessName = useInput({
    name: "businessName",
    type: "text",
    placeholder: "Business Name",
    validate: (value) => {
      if (!value.trim()) return "Business name is required";
      return null;
    }, 
  });

  const email = useInput({
    name: "email",
    type: "email",
    placeholder: "Email",
    validate: (value) => {
      const trimmed = value.trim();
      if (!trimmed) return "Email is required";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Invalid email format";

      return null;
    }

  });

  const password = useInput({
    name: "password",
    type: "password",
    placeholder: "Password",
    validate: (value) => {
      if (!value.trim()) return "Password is required";
      if (value.length < 6) return "Password must be 6 or more characters"
      return null;
    },
  });

  const passwordConfirmation = useInput({
    name: "passwordConfirmation",
    type: "password",
    placeholder: "Password Confirmation",
    validate: (value) => {
      if (!value.trim()) return "Please confirm your password";
      if (value !== password.value) return "Passwords do not match";
      return null;
    },
  });

  const passwordChecks = {
    length: password.value.length >= 6,
    lowercase: /[a-z]/.test(password.value),
    uppercase: /[A-Z]/.test(password.value),
    number: /[0-9]/.test(password.value),
    symbol: /[^A-Za-z0-9]/.test(password.value),
  };

  const allPasswordChecksPassed = Object.values(passwordChecks).every(Boolean);


  // const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("Email:", email.value);
    console.log("Password:", password.value);
    console.log("confirm password:", passwordConfirmation.value);

    try {
      const merchant = await signUp(
        email.value,
        password.value,
        passwordConfirmation.value,
        firstName.value,
        lastName.value,
        businessName.value
      );

      login(merchant);
      
      showNotification({
        heading: "Success!",
        message: "Your account has been created.",
        type: 'success'
      });
     
      navigate('/dashboard');

    } catch (err) {
      
      console.error(err);

      const errors = err.response?.data?.errors;

      if (errors && errors.length > 0) {
        showNotification({
          heading: 'Error!',
          message: err.response?.data || "Unable to create account.", // <- first validator message
          type: 'error'
        });
      } else {
        const serverMessage = err.response?.data;
        showNotification({
          heading: "Error:",
          message: serverMessage || "Unable to create account.",
          type: 'error'
        });
      }
      
    }

  };

  return (
    <>
      <HomeNavbar />
      <FormContainer>
        <FormHeader title='Sign up for an account' altDescription='your company' imgSource={ShopNestLogo} />
        <ContentColumn>
          <Form onSubmit={onSubmit}>
            <div>
              <Label htmlFor='name' description='Name' />
              <Input {...firstName} />
              <Input {...lastName} />
            </div>
            <div>
              <Label htmlFor='email' description='Email Address' />
              <Input {...email} />
            </div>
            <div>
              <Label htmlFor='email' description='Business Name' />
              <Input {...businessName} />
            </div>
            <div>
              <Label htmlFor='password' description='Password' />
              <Input {...password} />
              {!allPasswordChecksPassed && (<PasswordRequirements checks={passwordChecks} />)}
              <Label htmlFor='password' description='Confirm Password' />
              <Input {...passwordConfirmation} />
            </div>
            <div>
              <PrimarySubmitButton description='Sign up' />
            </div>
          </Form>
            <SupportPrompt route='/signin' paragraphDescription='Already a member?' linkDescription='Sign in' />
        </ContentColumn>
      </FormContainer>
    </>
  )
};

export default SignUp;