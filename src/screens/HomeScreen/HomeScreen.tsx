import Box from "@src/components/Box/Box";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import Header from "./patterns/Header/Header";
import Hero from "./patterns/Hero/Hero";
import Text from "@src/components/Text/Text";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
        
      }}
    >
      <Hero />
      <Header />
      <Feed>
        <Feed.Header />
        <Feed.Form />
        <Feed.Body />
      </Feed>
      <Footer />
      {/*      <Link colorVariant="negative" href="/sobre">
        Vá para a página sobre
      </Link>
      <Link href="https://google.com">
        Vá para o Google
      </Link>
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
    */}
    </Box>
  );
}
