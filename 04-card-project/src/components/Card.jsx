// import React from 'react'

// const Card = () => {
//   return (
//     <div className="parent">
//         <div className="card">
//             <div>
//                 <div className="top">
//                 <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
//                 <button>Save <Bookmark size={12}  /></button>
//             </div>
//             <div className="center">
//                 <h3>Amazon <span>5 days ago</span></h3>
//                 <h2>Senior UI/UX Designer</h2>
//                 <div className='tag'>
//                     <h4>Part Time</h4>
//                     <h4>Senior Level</h4>
//                 </div>
//             </div>
//         </div>
//         <div className="bottom">
//             <div>
//               <h3>$120/hr</h3>
//               <p>Mumbai, India</p>
//             </div>
//             <button>Apply Now</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card


import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    console.log(props.company)
  return (
    <div className="card">
        <div>
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark size={12}  /></button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
