/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { CSSProperties, useEffect, useState } from 'react';
import Select from 'react-select';
import close from '../../../public/close.svg';

// Mockup function to check profit calculation
function getProfit(select: string, amount: string) {
  return `${select}_${amount}`
}

// data for select list
type Option =  {
  value: string,
  label: string,
}

const options: Option[] = [
  { value: '1', label: '1% в день' },
  { value: '3', label: '3% в день' },
  { value: '5', label: '5% в день' },
];

// styles
const modalTextStyle: CSSProperties = {
  fontWeight: '400',
  fontSize: '16px',
  color: 'white',
};

const modalLabelStyle: CSSProperties = {
  marginBottom: '12px',
  textAlign: 'center',
};

const labelStyle = Object.assign(modalTextStyle, modalLabelStyle);

const inputStyle: CSSProperties = {
  width: '100%',
  height: '98px',
  marginBottom: '46px',
  padding: '34px 31px',
  paddingRight: '100px',
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: ' 24px',
  color: ' #fff',
  backgroundColor: 'unset',
  border: '1px solid #323232',
  borderRadius: '25px',
  outline: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
};

const selectStyles = {

  input: (baseStyle: any) => ({
    ...baseStyle,
    margin: 0,
    padding: 0,
    color: ' #fff',
    cursor: 'pointer !important',
  }),

  singleValue: (baseStyle: any) => ({
    ...baseStyle,
    margin: 0,
    padding: 0,
    color: ' #fff',
  }),

  valueContainer: (baseStyle: any) => ({
    ...baseStyle,
    margin: 0,
    padding: 0,
  }),

  indicatorContainer: (baseStyle: any) => ({
    ...baseStyle,
    color: 'white !important',
  }),

  dropdownIndicator: (baseStyle: any) => ({
    ...baseStyle,
    color: 'white !important',
  }),

  indicatorSeparator: () => ({
    display: 'none'
  }),

  container: (baseStyle: any) => ({
    ...baseStyle,
  }),
  control: (baseStyle: any, state: any) => ({
    ...baseStyle,
    ...inputStyle,
    paddingRight: '31px',
    border: state.isFocused ? '1px solid #0df69e !important' : '1px solid #323232 !important',
    boxSizing: 'border-box',
    boxShadow: 'none',
    transition: 'none',
  }),
  menu: (baseStyle: any) => ({
    ...baseStyle,
    padding: '15px 31px',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: ' 24px',
    color: ' #141316',
    backgroundColor: '#0df69e',
    border: '1px solid #0df69e !important',
    borderRadius: '25px',
    outline: 'none !important',
    boxSizing: 'border-box',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  option: (baseStyle: any,state: any) => ({
    ...baseStyle,
    backgroundColor: 'unset',
    color: state.isFocused ? 'white' : '#141316',
  }),
}

function ModalContent({
  onButtonClick,
}: {
  onButtonClick: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<Option | any>(options[0])
  const [profit, setProfit] = useState('');
  const [amount, setAmount] = useState('10000');

  useEffect(() => {
    setProfit(() => getProfit(selectedOption.value, amount));
  }, [selectedOption, amount])

  function handleSelect(option: Option | null) {
    setSelectedOption(option);
  }

  function handleInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setAmount(value);
  }

  return (
    <div style={{
      padding: '90px 75px 65px',
    }}>
      <button
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          padding: 0,
          backgroundColor: 'unset',
          border: 'none',
          cursor: 'pointer',
        }}
        type='button'
        onClick={onButtonClick}
        aria-label='close modal'
      >
        <img
          src={close}
          width={20}
          height={20}
          aria-hidden='true'
        />
      </button>
      <p style={labelStyle}>Выберите план</p>
      <Select
        styles={selectStyles}
        isSearchable={false}
        defaultValue={selectedOption}
        options={options}
        onChange={handleSelect}
      />
      <p style={labelStyle}>Введите сумму инвестиции</p>
      <div
        style={{ position: 'relative' }}
      >
        <input
          style={inputStyle}
          name='amount'
          id='amount'
          type='text'
          inputMode='numeric'
          min={0}
          step={1}
          pattern='\d*'
          value={amount}
          onChange={(evt) => handleInput(evt)}
          //@ts-ignore
          onClick={(evt) => evt.target.style.borderColor = '#0df69e'}
          onBlur={(evt) => evt.target.style.borderColor = '#323232'}
        />
        <span
          style={{
            position: 'absolute',
            top: '35px',
            right: '33px',
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '24px',
            color: '#0df69e',
            pointerEvents: 'none',
          }}
        >
          TTTU
        </span>
      </div>
      <p style={labelStyle}>Количество дней</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <p style={{marginRight: '30px',flexShrink: 0 }}>Ваш профит составит:</p>
        <p style={{fontSize: '48px' }}>
          <span style={{wordBreak: 'break-all'}}>{profit}</span>
          <span style={{ marginLeft: '15px', fontSize: '24px' }}>TTTU</span>
        </p>
      </div>
    </div>
  );
}

export default ModalContent;