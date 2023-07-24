import './categories.css'
import Item from './items/Item'


export default function Categories() {

  const CategoryMenuList = [
    { imgLink: '', name:'Check Up'},
    { imgLink: '', name:'Services'},
    { imgLink: '', name:'Medical Kit'},
    { imgLink: '', name:'Lab Test'},
    { imgLink: '', name:'Consult'},
    { imgLink: '', name:'Ambulance'},
    { imgLink: '', name:'Medicine'},
    { imgLink: '', name:'Blog'}
  ]

  const CategoryItem = CategoryMenuList.map((event,index)=>
    <Item key={index} imgLink={event.imgLink} name={event.name} />
  )
  return (
    <>
      <section className="categories">
        <ul>
            {CategoryItem}
        </ul>
      </section>
    </>
  )
}
