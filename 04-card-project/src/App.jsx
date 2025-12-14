import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    posted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mountain View"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    posted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "London"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    posted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Seattle"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    posted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Cupertino"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    posted: "4 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Angeles"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    posted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    posted: "10 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Texas"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    posted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    posted: "3 days ago",
    post: "GPU Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Bangalore"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///9BgcE7fsA0e75smswueL7Z5PEzer+DqNO0yeM+f8BWjcbo7vZ6o9DA0eeJrNWuxeGdudujvt74+/3u8/kkdLzN2+yZttppmMy4zOWuxuJ0n89rmctSisZGhMLJ2OsIbLiPsddfk8re6PPV4fBNF3UCAAAEhUlEQVR4nO3bbXuaShCAYQU3qI2oEMSXKlH5/7/xCCoMMIs57ZomV577U+PM7mZKYYSlgwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjB3l57PEwoxO0pP5o3GMQ96zpzSozV+9slYdeTcLWfrxq/9rualYy6ix/1uROnFY68oZUpKpz1JFxNPXPYiAoDPS3oHsTpVM30nVb425taJWWFvj2h4pn9uarQ6DnBpL32ypLptsLZ/pfVoahw3pMgDbN7hQc9Yb9rr320TL13WiHw9Z1f7PL4QULb9WqTW+ONq2lsn8dphQ76oWhkxQBLPyzCkVw5tE782f1Q71l6IytKsPXDi/3HVnbcD33P6tYP7Qkdw6JCY59Q/PuLE2ta4LTC+XpkdSoqTHsS1BHxyRpeL+qFM/u8a6cVAt/HOcxqWsKrLeFFBELZylZZV3gPhkpQXdeZZRLcGfWb76ROCBoXu6MIJEcROJmgI8mvsXPSjZnh06orLP2qHU1/aQmbus1NG79K6otOJu+QtIbnzTvLWdqlc8ugake+WuFEtjkZSOuRnslFYK11UnONHbQ+eHhadWUBo11lrCVkIqFxp7cQgUYnO8oRVUb5d/C6VkK72fPKA76FfFILtYTzdvLIovk0LdSzLrNnemSjrevMMvHvAks/9B9I0uaItamnPNV/fo8HJrj/YE5BnfR1+qHlrq59KRT90EvrH/xNXq912IrG+OR+WLc7vR9u7Ld910bXeVgo+mFwrIf763nVQYN0IdZ9bj8Mx/NKqiWsRIJm0RkR1cHxJFaHj8+Z+PyoLAv8JPmi1tlCKZwX/VadEaGIZs0fbzYfWNeZpWhe+r3Fg36YLNsjRD80c22CYkgk+vBzr6V/3w9N1Boh++Fce45qXi93Jp/YD//yGF6+rLS+7a3rryvFMRzsgmZ+uc7nHcMsXVbaB6OUiwSLVh/dikiozJAWp+7q0brAD/L/zkMZCEWgcSa2z8PBoHEipuXd5Oedh/Jaqt8fGnEZlIGjCMjNpc61tHk1va0irqVPvrdw9LxU3qa3+uFFJlpicL0ZEf1w+pX6oQzIY2jkP9PuMRzIw/1WfhKJdZ97DFfLqLLVEl5EQuOEycTnkWz6k+7nm84cuW1a4AdZju1mxcUg6klQR8Qz5fP7qX2+BWf3LZxQyVb3Tf6YukF0c30XI7AndB+4DfR3MYL5fb3bcsn94XGkZTut0On7NF7xtEx7n8arKpyX63nV67QLZSPR7fs0a2WjttqwLd+J6knoDChe+4q17d2qwryMJtU3g0jLdlqhZXOh3oew7DHYtiQutA2O+inOovhxW+1wvGjZTisEvr50N7Malf3QHm/4fT/VYmXGndjV2Ox24gtoqGU7rdBRPzR+dS2JzbSnHxav0hjxatBX6IcP/7/FcBqYtN7+7e+HFwdZwb/th+8f6ofGnCZye1vth/KLWCq3UrV+6PYd4Sy02xS/+KonoZCd21NqWfJNojc54qxlO60QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8M/8B/4ePsOgAodUAAAAASUVORK5CYII=",
    companyName: "IBM",
    posted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "New York"
  }
];

  console.log(jobOpenings)
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        return <div key={idx}>
            <Card  company ={elem.companyName} post={elem.post} 
            tag1={elem.tag1} pay={elem.pay} datePosted ={elem.posted} 
            brandLogo ={elem.brandLogo} tag2={elem.tag2}/>
          </div>
      })}
    </div>
  )
}

export default App
