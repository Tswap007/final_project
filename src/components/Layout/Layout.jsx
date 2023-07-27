import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function Layout({ children }) {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <NavBar />
            <Box flex="1" as="main">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
