/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from "react";

export const titleStyle = (isMobile: any): CSSProperties => ({
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: isMobile ? "60px" : '120px',
  textAlign: 'center',
  maxHeight: "182px",
  color: 'white',
  margin: 0,
})

export const wrapper = (): CSSProperties => ({
  height: 'calc(100vh - 280px)',
  maxHeight: '1146px',
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '50px'
})


export const wrapperModile = (value: string): CSSProperties => ({
  backgroundImage: `url(${value})`,
  height: 'calc(818px + 27px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '45px',
  marginBottom: '93px',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  alignItems: 'center'
})

