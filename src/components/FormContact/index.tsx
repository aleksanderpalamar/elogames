/* eslint-disable @next/next/no-img-element */
import { Box, Button, Checkbox, Flex, FormControl, Stack, Text } from "@chakra-ui/react";
import { RiMailSendLine } from "react-icons/ri";

import ReactGA from "react-ga";
import $ from "jquery";

import { Input } from "../Form/Input";
import { Textarea } from "../Form/Textarea";
import { Component } from "react";

export class FormContact extends Component {
  sendMessage = async () => {    
    let name: any = $("#sender-name").val();
    let email: any = $("#sender-email").val();
    let subject: any = $("#sender-subject").val();
    let phone: any = $("#sender-phone").val();

    name = name.toString().trim();
    email = email.toString().trim();
    subject = subject.toString().trim();
    phone = phone.toString().trim();

    let error = false;

    if (name.length === 0) {
      $("#sender-name").val("");
      $("#sender-name").attr("placeholder", "O nome não deve estar vazio!");
      error = true;
    }

    if (email.length === 0) {
      $("#sender-email").val("");
      $("#sender-email").attr("placeholder", "O email não deve estar vazio!");
      error = true;
    }

    if (subject.length === 0) {
      $("#sender-subject").val("");
      $("#sender-subject").attr(
        "placeholder",
        "O assunto não deve estar vazio!"
      );
      error = true;
    }

    if (phone.length === 0) {
      $("#sender-phone").val("");
      $("#sender-phone").attr(
        "placeholder",
        "O Telefone não deve estar vazia!"
      );
      error = true;
    }
    if (error) return;

    this.setState({ sending: true });
    await fetch("", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        phone: phone,
      }),
    })
      .then(() => {
        this.setState({ sending: false });
      })
      .catch((error) => {
        console.log(error);
      });

    ReactGA.event({
      category: "Send Message",
      action: `${name}, ${email}, ${subject}, ${phone}`,
    });

    $("#sender-name").val("");
    $("#sender-email").val("");
    $("#sender-subject").val("");
    $("#sender-message").val("");

    alert("Mensagem enviada com sucesso! 🤗");
  };

  render() {
    return (
      <>      
      <Flex position="relative" bg="gray.800" pt="16" pb="20" px="4">
        <Box as="div" position="absolute" inset={0}>
          <Box as="div" bg="gray.100" h="1/3" w="2/3" />
        </Box>
        <Box as="div" position="relative" maxW="7xl" mx="auto">
          <FormControl>            
            <Input name="nome" id="sender-name" placeholder="Nome" type="text" />
            <Input name="email" id="sender-email" placeholder="E-mail" type="email" />
            <Input name="phone" id="sender-phone" placeholder="Telefone" type="text" />
            <Text fontSize={["xl", "2xl"]} mb="2" color="blue.500" textAlign="left" mt="2">              
              Quais plataformas você utiliza para jogar seus jogos?
            </Text>
            <Stack id="sender-subject" spacing={[1, 5]} direction={['column', 'row']} mt="4" mb="4">
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Steam</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Nintendo</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Epic Games</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Xbox</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Origin</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">uPlay</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Playstation</Text>
            </Checkbox>
            <Checkbox colorScheme="yellow">
              <Text fontSize={["sm", "md"]} color="gray.100">Celular</Text>
            </Checkbox>
            </Stack>           
            
            <Box as="div">
              <Button border="none" colorScheme="yellow" rounded="full" size="lg" mt="2" mb="2" ml="2" onClick={this.sendMessage}>
                <Box mr="2" d="flex" alignItems="center">
                  <RiMailSendLine />
                </Box>
                Estou interessado
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Flex>
    </>
    )
  }
}