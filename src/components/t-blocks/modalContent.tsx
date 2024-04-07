/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { CSSProperties, useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import close from '../../../public/close.svg';

// ==== types ====
type Option = {
  value: string,
  label: string,
}

type SliderSettings = {
  start: number,
  end: number,
  step: number
}

// ==== data for select list ====
const options: Option[] = [
  { value: '1', label: '1% в день' },
  { value: '1.1', label: '1.1% в день' },
  { value: '1.2', label: '1.2% в день' },
  { value: '1.3', label: '1.3% в день' },
  { value: '1.5', label: '1.5% в день' },
  { value: '1.6', label: '1.6% в день' },
  { value: '1.7', label: '1.7% в день' }
];

// ==== styles ====
const modalTextStyle: CSSProperties = {
  fontWeight: '400',
  fontSize: '16px',
  color: 'white',
};

const modalLabelStyle: CSSProperties = {
  marginBottom: '12px',
  textAlign: 'center',
  userSelect: 'none'
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

  dropdownIndicator: (baseStyle: any, state: any) => ({
    ...baseStyle,
    color: 'white !important',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
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
    color: 'white',
    backgroundColor: 'rgb(20, 19, 22)',
    border: '1px solid #0df69e !important',
    borderRadius: '25px',
    outline: 'none !important',
    boxSizing: 'border-box',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  option: (baseStyle: any, state: any) => ({
    ...baseStyle,
    backgroundColor: 'unset',
    color: state.isFocused ? '#0df69e' : 'white',
  }),
};

// ==== slider setting & styles ====
const SLIDER_SETTINGS = {
  start: 0,
  end: 100,
  step: 10,
  className: 'slider-element',
};

function getSliderMarks(settings: SliderSettings) {
  return Array.from({ length: settings.end / settings.step + 1 }).map((_, index) => index * settings.step).reduce((acc, item) => {
    return {
      ...acc,
      [item]: {
        style: sliderStyle.markStyle,
        label: <span>{item}</span>
      }
    }
  }, {});
}

const sliderStyle = {
  markStyle: {
    display: 'block',
    bottom: '-25px',
    margin: '-10px',
    padding: '10px',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '12px',
    color: '#323232',
    transform: 'translate(-20%, 0%)',
    userSelect: 'none',
  },
  markStyleAdd: `.${SLIDER_SETTINGS.className} span[class*="active"] {color: white !important;}`,
  sliderElement: {
    marginTop: '30px',
    marginBottom: '100px',
  },
  railStyle: {
    borderRadius: '25px',
    height: '4px',
    backgroundColor: '#323232',
  },
  trackStyle: {
    borderRadius: '25px',
    height: '4px',
    backgroundColor: '#0df69e',
  },
  dotStyle: {
    bottom: '-9px',
    width: '2px',
    height: '23px',
    backgroundColor: '#323232',
    border: 'none',
    borderRadius: '20px',
  },
  activeDotStyle: {
    backgroundColor: '#0df69e',
  },
  handleStyle: {
    margin: '-15px 0',
    padding: '15px',
    opacity: 0,
  }
};

// Component
function ModalContent({ onButtonClick }: { onButtonClick: () => void }) {

  const [selectedOption, setSelectedOption] = useState<Option | any>(options[0])
  const [profit, setProfit] = useState('');
  const [amount, setAmount] = useState('10000');
  const [days, setDays] = useState('10');

  const currencyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setProfit(() => getProfit(selectedOption.value, amount, days));
  }, [selectedOption, amount, days])

  function handleSelect(option: Option | null) {
    setSelectedOption(option);
  }

  function handleInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setAmount(value);
  }

  function handleSlider(value: number | number[]) {
    setDays(value.toString());
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
          type='number'
          inputMode='numeric'
          min={0}
          step={1}
          pattern='\d*'
          value={amount}
          onChange={(evt) => handleInput(evt)}
          //@ts-ignore
          onClick={(evt) => { const color = '#0df69e'; evt.target.style.borderColor = color; currencyRef.current ? currencyRef.current.style.color = color : null }}
          onBlur={(evt) => { const color = 'white'; evt.target.style.borderColor = color; currencyRef.current ? currencyRef.current.style.color = color : null }}
        />
        <span
          ref={currencyRef}
          style={{
            position: 'absolute',
            top: '35px',
            right: '33px',
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '24px',
            color: 'white',
            pointerEvents: 'none',
          }}
        >
          TTTU
        </span>
      </div>
      <p style={labelStyle}>Количество дней</p>
      <style scoped type='text/css'>
        {sliderStyle.markStyleAdd}
      </style>
      <style>
        { }
      </style>
      <Slider
        className={SLIDER_SETTINGS.className}
        style={sliderStyle.sliderElement}
        marks={getSliderMarks(SLIDER_SETTINGS)}
        min={SLIDER_SETTINGS.start}
        max={SLIDER_SETTINGS.end}
        step={SLIDER_SETTINGS.step}
        dots={true}
        startPoint={0}
        defaultValue={10}
        railStyle={sliderStyle.railStyle}
        trackStyle={sliderStyle.trackStyle}
        dotStyle={sliderStyle.dotStyle}
        activeDotStyle={sliderStyle.activeDotStyle}
        handleStyle={sliderStyle.handleStyle}
        onChangeComplete={(value) => handleSlider(value)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <p style={{ ...labelStyle, marginRight: '30px', marginBottom: 0, flexShrink: 0 }}>Ваш профит составит:</p>
        <p style={{ fontSize: '48px' }}>
          <span style={{ wordBreak: 'break-all', userSelect: 'none' }}>{profit}</span>
          <span style={{ marginLeft: '15px', fontSize: '24px', userSelect: 'none' }}>TTTU</span>
        </p>
      </div>
    </div>
  );
}

export default ModalContent;

function getProfit(select: string, amount: string, days: string) {
  const profit = Number(select) / 100 * Number(amount) * Number(days)
  return typeof profit === 'number' ? profit.toFixed() : ""

}