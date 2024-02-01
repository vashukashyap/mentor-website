import Logo from "./assets/logo.png";
import Person from "./assets/person.png";
import JumbosterBackground from "./assets/motdbackground.png";
import SectionLogo from "./assets/icons/todocheck.svg";
import Navbar from "./components/navbar/Navbar";
import Jumboster from "./components/jumboster/jumboster";
import SearchMentor from "./components/searchMentor/SearchMentor";
import Suggestion from "./components/suggestion/Suggestion";
import PersonCard from "./components/PersonCard/PersonCard";
import { tagsData } from "./utils/constant";
import PersonFulInfoCard from "./components/PersonFullInfoCard/PersonFullInfoCard";
import ResultNotFound from "./components/resultNotFound/ResultNotFound";
import Profile from "./components/profile/Profile";
import Requests from "./components/requests/Requests";

function App() {
  return (
    <div>
      <Navbar
        logo={Logo}
        sectionLogo={SectionLogo}
        sectionTitle="My Sessions"
      />
      <Jumboster image={JumbosterBackground} personName='Atul'/>
      {/* <SearchMentor
        title="Who are you looking for?"
        searchDescription="Describe in 1-2 lines"
      />
      <Suggestion tags={tagsData} />
      <div className="mt-16 mx-auto w-[80%] h-[2px] border border-[#eoe2e3]"></div>
      <ResultNotFound tags={tagsData}/>
      <h1 className="font-bold mx-auto w-[80%] my-10 flex flex-col gap-10">
        Booked sessions:
        <PersonCard img={Person} join />
        <PersonCard img={Person} payment />
        <PersonCard img={Person} approved />
        <PersonCard img={Person} rejected />
        Suggested experts:
        <PersonFulInfoCard
          img={Person}
          info="Feeling burned out? After years of working with CEOs, Heads of Growth, & Marketers from all over the world, I have stories & experience ready to support you on your growth journey. I'll help you identify your biggest opportunities for sustainable growth for yourself and/or your business."
          tags={tagsData}
        />
        <PersonFulInfoCard
          img={Person}
          info="Feeling burned out? After years of working with CEOs, Heads of Growth, & Marketers from all over the world, I have stories & experience ready to support you on your growth journey. I'll help you identify your biggest opportunities for sustainable growth for yourself and/or your business."
          tags={tagsData}
        />
      </h1> */}
      {/* <Profile
        image={Person}
        name="Ryan Carruthers"
        subtitle="Enterprise SEO & Content Marketer With a Passion for SaaS, eLearning, eCommerce | Founder @ Conversion Media"
        bio="Feeling burned out? After years of working with CEOs, Heads of Growth, & Marketers from all over the world, I have stories & experience ready to support you on your growth journey. I'll help you identify your biggest opportunities for sustainable growth for yourself and/or your business."
        company="Cuvette"
        lookingFor="I have stories & experience ready to support you on your growth journey. I'll help you identify your biggest opportunities for sustainable growth for yourself and/or your business."
        link='https://www.linkedin.com/in/dewank-rastogi-0322961b2/'
      /> */}
      <Requests image={Person} requested/>
      <Requests image={Person} pending/>
      <Requests image={Person} approved/>
    </div>
  );
}

export default App;
