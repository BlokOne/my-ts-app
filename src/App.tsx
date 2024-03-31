import Title from "./components/home";
import TBlock from "./components/t-blocks";
import Video from "./components/videos";
import Layout from "./layout";
import mobile1 from '../public/2/mobile.svg';
import mobile2 from '../public/3/mobile.svg';
import mobile3 from '../public/4/mobile.svg';
import mobile6 from '../public/6/mobile.svg';
import mobile12 from '../public/2/mobile2.svg';
import mobile22 from '../public/3/mobile2.svg';
import mobile32 from '../public/4/mobile2.svg';
import mobile62 from '../public/6/mobile2.svg';
import logo1 from '../public/2/logo.svg';
import logo2 from '../public/3/logo.svg';
import logo3 from '../public/4/logo.svg';
import logo5 from '../public/5/logo.svg';
import Referral from "./components/referral";
import TStaking from "./components/tStaking";
import BuySell from "./components/buySell";
import { MediaQueryProvider } from "./media";




const TBlocks = [
  {
    mobile: mobile1,
    mobile2: mobile12,
    logo: logo1,
    title: 'T-Staking',
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: mobile2,
    mobile2: mobile22,
    logo: logo2,
    title: 'T-Autotrade',
    button: 'Profitability calbculator',
    arrow: false,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: mobile3,
    mobile2: mobile32,
    logo: logo3,
    title: 'T-Wallet',
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: mobile3,
    mobile2: mobile32,
    logo: logo5,
    title: "T-Gamble",
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: mobile6,
    mobile2: mobile62,
    title: "Our Next Products",
    button: 'RoadMap',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
]

function App() {
  return (
    <MediaQueryProvider>
      <Layout>
        <Title />
        {TBlocks.map((item, i) => <TBlock
          key={i}
          id={i === 0 ? 'products' : ''}
          mobile={item.mobile}
          mobile2={item.mobile2}
          logo={item.logo}
          title={item.title}
          button={item.button}
          arrow={item.arrow}
          text={item.text}
          href1={item.href1}
          href2={item.href2}
        />)}
        <Video />
        <BuySell />
        <TStaking />
        <Referral />
      </Layout>
    </MediaQueryProvider>
  )
}

export default App;
