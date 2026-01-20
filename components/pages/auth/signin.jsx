import { useInput } from "../../hooks/useInput";
import { signIn } from "../../../services/authService";
import { useMerchantAuth } from "../../../context/MerchantAuthContext";
import { useNotification } from "../../../context/NotificationContext";
import { useNavigate} from "react-router-dom";

import Input from "../../Input";
import Label from "../../Label";
import PrimarySubmitButton from "../../PrimarySubmitButton";
import SupportPrompt from "../../SupportPrompt";
import SupportAction from "../../SupportAction";
import FormHeader from "../../FormHeader";
import ContentColumn from "../../ContentColumn";
import FormContainer from "../../FormContainer";
import Form from "../../Form";
import HomeNavbar from "../../HomeNavbar";
import ShopNestLogo from "../../../assets/ShopNestLogo.png"

const SignIn = () => {
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const { login } = useMerchantAuth();

  
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
      return null;
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
   
    console.log("Email:", email.value);
    console.log("Password:", password.value);
    console.log("confirm:", confirm.value);
    
    try {
      const merchant = await signIn(email.value, password.value);
      
      login(merchant);

      showNotification({
        heading: "Success!",
        message: "You have signed in to your account.",
        type: 'success'
      });

      navigate('/dashboard');

    } catch (error) {
      console.log(error);
      showNotification({
        heading: 'Sorry!',
        message: `Wrong username and/or password`,
        type: 'error'
      });
    }
  };

  return (
    <>
    <HomeNavbar />
      <FormContainer>
        <FormHeader title='Sign In' altDescription='your company' imgSource={ShopNestLogo} />
        <ContentColumn>
          <Form onSubmit={onSubmit}>
            <div>
              <Label htmlFor='email' description='Email Address' />
              <Input {...email} />
            </div>
            <div>
              <div className="field-header">
                <Label htmlFor='password' description='Password' />
                <SupportAction description='forgot password?' />
              </div>
              <Input {...password} />
            </div>
            <div>
              <PrimarySubmitButton description='Sign in' />
            </div>
          </Form>
          <SupportPrompt route='/signup' paragraphDescription='Not a member?' linkDescription='Sign up' />
        </ContentColumn>
      </FormContainer>
    </>
  );
};

export default SignIn;