import { css } from 'glamor'

const button = css({
  boxSizing: 'border-box',
  display: 'inline-block',
  backgroundColor: '#108ee9',
  fontWeight: '500',
  textAlign: 'center',
  padding: '0 15px',
  whiteSpace: 'nowrap',
  borderRadius: '4px',
  fontSize: '12px',
  height: '28px',
  lineHeight: '28px',
  border: '1px solid transparent',
  cursor: 'pointer',
  color: 'white',
  transition: 'all .3s',

  ':hover': {
    opacity: '.8',
  }
})

export default {
  button
}