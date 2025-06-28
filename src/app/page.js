
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Recado from "@/components/Card/Page";

export default function Home(){
  return(
    <>
    <Header/>
    <div>
    < Recado titulo = "meu site"/>
    <h1>bem-vindo à home! </h1>
    </div>
    <Footer/>
    </>

    );
  }