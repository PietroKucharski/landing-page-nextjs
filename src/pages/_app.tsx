import { Layout } from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Wrapper para todos os componentes. Executado tanto em client quanto server side
export default function App({ Component, pageProps }: AppProps) { 
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
}
