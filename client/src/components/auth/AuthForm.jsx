import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthBlock = styled.div`
  position: relative;
  margin: 0 auto;
  width: 970px;
  height: 720px;
  border: 2px solid #00ff66;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131314;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 3rem;
`;
const InputStyled = styled.input`
  margin-bottom: 1rem;
  width: 15rem;
  height: 1.5rem;
  border: 1.5px solid #00ff66;
  color: #00ff66;
  outline: none;
  background-color: #131314;

  :-webkit-autofill {
    -webkit-text-fill-color: #00ff66;
  }
  :-webkit-autofill,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  ::placeholder {
    color: #00ff66;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`;
const ButtonStyled = styled.button`
  width: 7rem;
  height: 2rem;
  border-style: none;
  outline: none;
  background-color: #131314;
  color: #00ff66;
  font-size: 1.3rem;
  padding: 0;
  :hover {
    font-weight: bold;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-around;
  align-items: baseline;
`;
const BaesinZerMain = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bolder;
  color: #00ff66;
`;

const Footer = styled.div`
  a {
    color: #00ff66;
    text-decoration: none;
    font-size: 1.3rem;
    width: 7rem;
    height: 2rem;
    padding-right: 1.5rem;
    cursor: default;
    :hover {
      font-weight: bold;
    }
  }
`;
const ErrorBlock = styled.div`
  color: red;
  position: absolute;
  &#로그인 {
    padding-bottom: 4rem;
  }
  &#회원가입 {
    padding-bottom: 7rem;
  }
`;

const AuthForm = ({ success, form, type, onSubmit, onChange, error }) => {
  return (
    <AuthBlock>
      <BaesinZerMain>BaesinZer</BaesinZerMain>
      {error && <ErrorBlock id={type}>{error}</ErrorBlock>}
      {success && <ErrorBlock id={type}>{success}</ErrorBlock>}
      <StyledForm onSubmit={onSubmit}>
        <InputStyled
          type="text"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
        />
        <InputStyled
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={form.password}
        />
        {type === '회원가입' ? (
          <InputStyled
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        ) : null}
        <ButtonBlock>
          <ButtonStyled>{type}</ButtonStyled>
          {type === '로그인' ? (
            <Footer>
              <Link to="/register">회원가입</Link>
            </Footer>
          ) : (
            <Footer>
              <Link to="/login">로그인</Link>
            </Footer>
          )}
        </ButtonBlock>
      </StyledForm>
    </AuthBlock>
  );
};

export default AuthForm;
