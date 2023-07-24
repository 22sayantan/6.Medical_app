import './item.css'

export default function Item(props) {

    // eslint-disable-next-line react/prop-types
    const {imgLink,name} = props;

  return (
    <>
       <li className='item-List'>
                <div className="item_1 items">
                    <img src={imgLink} alt="" />
                    <h4 className="name"><a href="">{name}</a></h4>
                </div>
        </li>  
    </>
  )
}
