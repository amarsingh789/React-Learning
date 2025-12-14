import React from 'react'
import Section1 from './components/Section-01/Section1'
import Section2 from './components/Section-02/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661764601699-10c47be708aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661768380995-f459ff60add6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'deepskyblue',
      tag:'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1673548917137-84ad461bf82b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'pink',
      tag:'Undercovered'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'black',
      tag:'Vacancy'
    },
    
  ]

  return (
    <div>
      <Section1 users ={users}/>
      <Section2/>
    </div>
  )
}

export default App
