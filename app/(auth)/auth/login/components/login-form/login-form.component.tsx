"use client";
import { Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import React from "react";
import { useLoginUserForm } from "./hooks/useLoginUser";
import AuthFormLayout from "@/app/(auth)/auth/components/auth-form-layout/auth-form-layout.component";

import TextFieldPassword from "@/app/components/inputs/text-field-password/text-field-password";
import ButtonLoading from "@/app/components/buttons/button-loading/button-loading.component";

import * as S from "./login-form.styles";
import PrimaryButton from "@/app/components/buttons/primary-button/primary-button.component";

function LoginForm() {
  const { errors, handleSubmit, onSubmit, register, isLoading } =
    useLoginUserForm();

  return (
    <AuthFormLayout
      titleForm={"Acesse sua conta"}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <TextField
        {...register("email")}
        label="E-mail"
        variant="outlined"
        type="email"
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextFieldPassword
        register={register}
        registerOption="password"
        errors={errors}
        label="Senha"
      />
      <ButtonLoading
        buttonText="Entrar"
        isLoading={isLoading}
        type={"submit"}
      />
      <S.WrapperForgotPassAndKeepLogged>
        <FormControlLabel
          control={<Checkbox />}
          label="Manter dados salvos"
          {...register("keepData")}
        />
        <Link component={Link} href="/auth/forgot" color={"#1877F2"}>
          {"Esqueceu sua senha?"}
        </Link>
      </S.WrapperForgotPassAndKeepLogged>
      <S.WrapperCreateAccount>
        <PrimaryButton
          LinkComponent={Link}
          href="/auth/signup"
          variant="contained"
          type={"button"}
        >
          Criar conta
        </PrimaryButton>
        <PrimaryButton
          variant="contained"
          type={"button"}
          sx={{
            width: "100%",
            backgroundColor: "#1877F2",
            ":hover": {
              backgroundColor: "#1557B2",
            },
          }}
          startIcon={<S.IconGoogle />}
        >
          Continuar com o Google
        </PrimaryButton>
      </S.WrapperCreateAccount>
    </AuthFormLayout>
  );
}

export default LoginForm;
