import Card from "./components/card"
import Nav from "./components/nav"
import Script from "next/script"
import Footer from "./components/footer"
import Load from "./components/loader"
export default function Home() {
  return (
    <div>
      <Nav/>
      <Load/>
      <Card name="home"/>
      <Footer lk={true}/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js" id="mdb" strategy="lazyOnload"/>
    </div>
  )
}
