import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
//import { Switch } from "react-native";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
} from "./styles";
import { Switch } from "react-native-gesture-handler";

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={["#52e78c", "#1ab563"]}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>
            <EyeButton>
              <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo esta rendendo 100% do CDI.</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={25} color="#fff" />
              <ActionLabel>Adicinar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar.</UseBalanceTitle>
        <Switch />
      </UseBalance>
    </Wrapper>
  );
}
