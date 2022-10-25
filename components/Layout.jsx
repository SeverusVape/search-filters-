import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
    <>
        <title>REAL ESTATE</title>
        <Box maxWidth="1280px" m="auto">
            <header>NAVBAR</header>
            <main>{children}</main>
            <footer>FOOTER</footer>
        </Box>
    </>
);

export default Layout;
