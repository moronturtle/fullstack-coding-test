import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Input, Box } from "@chakra-ui/react";

const Home = () => {
  const textValue = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    textValue.current.changeValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box padding="20" marginTop="50" bg="gray.100" maxW="3xl">
          <DynamicText ref={textValue} />
          <Input onChange={onChange} borderColor="black" />
        </Box>
      </main>
    </div>
  );
};

export default Home;
