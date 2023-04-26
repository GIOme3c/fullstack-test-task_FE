import Price from "./Price"

export default function SizeBlock({length, width, price}) {

  const style={
    width: '163px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0EFF5',
    margin: '0 0 7px 0',
    borderRadius: '3px',

    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.4rem',
    lineHeight: '1.7rem',
  }

  return (
    <div style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
      <div>
        <div style={style}>{length}x{width}</div>
        <Price price={price}/>
      </div>
      
    </div>
    
  )
}