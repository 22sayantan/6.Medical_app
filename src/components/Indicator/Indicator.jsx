/* eslint-disable react/prop-types */
import './indicator.css'
import Head from './head/Head'
import PostCard from './postCard/PostCard';
import Tail from './tail/Tail'

function Indicator(props){

  const CardItems = props.nameList;
  const Cards = CardItems.map((item,index) =>
    <PostCard key={index} postTitle={item}/>
  )

  return(
    <section className={props.title}>
      <div className="indicator">

          <div className="ind-left">
            <Head titles={props.title}/>
          </div>

          <div className="ind-middle">
          {Cards}
          </div>
        
          <div className="ind-right">
            <Tail/>
          </div>
      </div>
    </section>
  )
}

export default Indicator;