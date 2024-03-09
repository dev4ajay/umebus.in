"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/page"
import Hero from "./Hero/page";
import Umebus from "./Umebus/page";
import Faq from "./Faq/page";
import Umebusapp from "./Umebusapp/page"
import Justbus from "./Justbus/page"
import Footer from "./Footer/page";

export default function Home() {
  return (
    <main className="main-file">
    <Header/>
    <Hero/>
    <Umebus/>
    <Faq/>
    <Umebusapp/>
    <Justbus/>
    <Footer/>
    </main>
  );
}
