import { FC, useRef, useState } from 'react';

import ZeroExtra from './ZeroExtra';
import GetUpdates from './GetUpdates';
import OurCustomer from './OurCustomer';
import StartedAvro from './StartedAvro';
// import MakeCardless from './MakeCardless';
import LookingToTake from './LookingToTake';

import Hero from '../components/hero/Hero'
import Bank from '../components/bank/Bank';
import Footer from '../components/footer/Footer';
import WhyArvo from '../components/hero/WhyArvo';
import Navbar from '../components/navbar/NavBarView';
import Paywith from '../components/paywith/Paywith';
import Progress from '../components/progress/Progress';
import FormDetails from '../components/formdetail/FormDetails';
import ScrollToTop from '../components/scrollToTop/ScrollToTop';
import ScrollIcon from '../components/scrollToTop/scrollicon.svg';
import { scrollToSection } from '../util/utils';

const Home: FC = () => {
  const [nav, setNav] = useState<boolean>(true);
  const whyavro = useRef<HTMLDivElement>();
  const contact = useRef<HTMLDivElement>();
  const product = useRef<HTMLDivElement>();
  const faqs = useRef<HTMLDivElement>();

  return (
    <section className="">
      <Navbar
        {...{ faqs }}
        {...{ whyavro }}
        {...{ contact }}
        {...{ product }}
        {...{ nav, setNav }}
        {...{ scrollToSection }}
      />
      <Hero />
      <Progress />
      <WhyArvo {...{ whyavro }} />
      <div className="bg-[#F0FAFE]">
        <LookingToTake />
        <ZeroExtra />
        <Paywith />
        <Bank {...{ product }} />
        {/* <MakeCardless /> */}
      </div>
      <StartedAvro />
      {/* <OurCustomer {...{ faqs }} /> */}
      <FormDetails {...{ contact }} />
      <GetUpdates />
      <Footer {...{ whyavro, contact, scrollToSection }} />

      <ScrollToTop className="flex items-center justify-center">
        <img src={ScrollIcon} alt="ScrollIcon" />
      </ScrollToTop>
    </section>
  );
};

export default Home;
