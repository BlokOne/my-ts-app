export const buttonStyle = (width: string, arrow?: boolean, disabled?: boolean) => ({
  width: width,
  padding: '23px',
  backgroundColor: disabled ? '#1C191D' : '#0DF69E',
  borderRadius: '150px',
  fontFamily: 'Inter',
  fontWeight: disabled ? 400 : 700,
  fontSize: '20px',
  lineHeight: '23px',
  color: disabled ? '#696969' : '#10100E',
  display: arrow ? 'flex' : 'block',
  justifyContent: "space-between",
  alignItems: "center",
  border: '0',
  cursor: 'pointer'
})

