import mobile1 from '../../../public/2/mobile.svg';
import mobile2 from '../../../public/3/mobile.svg';
import mobile3 from '../../../public/4/mobile.svg';
import mobile6 from '../../../public/6/mobile.svg';
import mobile12 from '../../../public/2/mobile2.svg';
import mobile22 from '../../../public/3/mobile2.svg';
import mobile32 from '../../../public/4/mobile2.svg';
import mobile62 from '../../../public/6/mobile2.svg';
import logo1 from '../../../public/2/logo.svg';
import logo2 from '../../../public/3/logo.svg';
import logo3 from '../../../public/4/logo.svg';
import logo5 from '../../../public/5/logo.svg';
import { useMediaQuery } from '../../media/useMedia';
import Item from './item';
import ModalContent from './modalContent';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    width: '641px',
    maxWidth: '90%',
    margin: '0px',
    padding: '0px',
    color: 'white',
    backgroundColor: '#141316',
    border: '1px solid #343334',
    borderRadius: '50px',
    transform: 'translate(-50%, -50%)',
  },
};

function TBlock() {

  const isMobile = useMediaQuery();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function scrollToElement(href2: string) {
    const element = document.getElementById(href2);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const TBlocks = [
    {
      mobile: mobile1,
      mobile2: mobile12,
      logo: logo1,
      title: 'T-Staking',
      button: 'Buy TTTU',
      arrow: true,
      href1: '/',
      href2: 'T-Autotrade',
      text: 'T-Staking is flagship product, which is a perpetual $TTTU staking that allows you to participate in the distribution of commissions that all T-Project products generate.',
      callback: () => {
        const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
        window.open(botUrl, '_blank')!.focus();
      },
    },
    {
      mobile: mobile2,
      mobile2: mobile22,
      logo: logo2,
      title: 'T-Autotrade',
      button: !isMobile ? 'Profitability calculator' : 'Buy TTTU',
      arrow: !isMobile ? false : true,
      href1: '/',
      href2: 'T-Wallet',
      text: 'T-Autotrade is lucrative custom product built on a proven investment-game PvP model based on high-frequency trading of liquidity cells. The product allows you to earn returns of 1% to 1.6% or more when you activate bonuses in $TTTU tokens on a daily basis.',
      callback: !isMobile ? openModal : () => {
        const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
        window.open(botUrl, '_blank')!.focus();
      },
    },
    {
      mobile: mobile3,
      mobile2: mobile32,
      logo: logo3,
      title: 'T-Wallet',
      button: 'Buy TTTU',
      arrow: true,
      href1: '/',
      href2: 'T-Gamble',
      text: 'T-Wallet is a single internal user wallet that is automatically created when a user registers in the T-Project system. The wallet allows you to deposit, withdraw, buy, sell and borrow assets that can be used in any T-Project product.',
      callback: () => {
        const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
        window.open(botUrl, '_blank')!.focus();
      },
    },
    {
      mobile: mobile3,
      mobile2: mobile32,
      logo: logo5,
      title: 'T-Gamble',
      button: 'Buy TTTU',
      arrow: true,
      href1: '/',
      href2: 'Our Next Products',
      text: "Very soon users will be able to enjoy betting on sports and cyber sports events, make predictions on cryptocurrency rates, while betting $TTTU and earning additional Bonuses for T-Autotrade tariffs.",
      callback: () => {
        const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
        window.open(botUrl, '_blank')!.focus();
      },
    },
    {
      mobile: mobile6,
      mobile2: mobile62,
      title: 'Our Next Products',
      button: 'RoadMap',
      arrow: true,
      href1: '/',
      href2: 'RoadMap',
      text: "The T-Project team is constantly working on expanding the product line. In addition to T-Gamble, T-Poker and T-Lottery will soon be released, as well as several well-known and well-loved PvP games where users can earn TTTUs and Bonuses.",
      callback: () => scrollToElement('RoadMap'),
    },
  ];



  return (
    <>
      {TBlocks.map((item, i) => (
        <Item
          key={i}
          id={i === 0 ? 'products' : item.title}
          mobile={item.mobile}
          mobile2={item.mobile2}
          logo={item.logo}
          title={item.title}
          onClick={item.callback}
          button={item.button}
          arrow={item.arrow}
          text={item.text}
          href1={item.href1}
          href2={item.href2}
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel='Example Modal'
      >
        <ModalContent onButtonClick={closeModal} />
      </Modal>
    </>
  );
}

export default TBlock;
