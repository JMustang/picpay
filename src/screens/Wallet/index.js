import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
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
  PaymentMethodsTitle,
  PaymentMethods,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
} from "./styles";

import creditCard from "../../images/credit-card.png";

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
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento.</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de credito.</CardTitle>
              <CardInfo>
                Cadastre um cartão de credito para poder fazer pagamentos mesmo
                quando nao tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de credito.</AddLabel>
          </AddButton>
        </Card>
      </PaymentMethods>
    </Wrapper>
  );
}
