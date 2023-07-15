import Header from "components/Header";
import Promocoes from "components/Promocoes";
import SecaoDestaque from "components/SecaoDestaque";
import SecaoPrincipal from "components/SecaoPrincipal";

import banner1 from "assets/images/bg-banner_modastreet.jpg"

const Home = () => {
  return (
    <>
      <Header />
      <SecaoPrincipal />
      <Promocoes />
      <SecaoDestaque urlImage={banner1} text={"Moda Street"}/>
    </>
  );
};

export default Home;
