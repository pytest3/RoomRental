import React, { useState } from "react";
import CTAButton from "../UI/CTAButton";
import { styled } from "styled-components";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleSubmit() {
    alert(`form submitted:, ${form.email}, ${form.password}`);
  }
  function emailChangeHandler(e) {
    setForm({ ...form, email: e.target.value });
  }
  function passwordChangeHandler(e) {
    setForm({ ...form, password: e.target.value });
  }
  return (
    <MaxWidthWrapper>
      <Wrapper onSubmit={handleSubmit}>
        <Header>Sign in to your account</Header>
        <Form>
          <Inputs>
            <InputField
              type="email"
              id="email"
              value={form.email}
              onChange={emailChangeHandler}
              placeholder="Email"
            ></InputField>
            <InputField
              type="password"
              id="email"
              value={form.password}
              onChange={passwordChangeHandler}
              placeholder="Password"
            ></InputField>
          </Inputs>
          <CTAButton height="55px" type="submit">
            Sign In
          </CTAButton>
        </Form>
        <p>
          Dont have an account? <span>Create one now</span>
        </p>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const InputField = styled.input`
  border: 1px solid var(--color-gray-300);
  padding: var(--space-1) var(--space-2);
`;
const Form = styled.form`
  display: grid;
  gap: var(--space-4);
`;
const Header = styled.h1`
  font-size: var(--font-size-5);
  text-align: center;
  line-height: 1;
  align-self: end;
`;
const Inputs = styled.div`
  display: grid;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 27px;
  margin-top: 49px;
`;
