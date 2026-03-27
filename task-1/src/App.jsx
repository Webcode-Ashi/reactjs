import Card from './components/card.jsx'
const App = () => {

   const jobs = [
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?pid=Api&P=0&h=180",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.YexzpbZifHqZnfOOFBOHkgHaEK?pid=Api&P=0&h=180",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?pid=Api&P=0&h=180",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.AuggztWv8Hwzt2zjbJcztAHaEK?pid=Api&P=0&h=180",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.LJ1xF1q8b17RBPTHscbX8AHaEK?pid=Api&P=0&h=180",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?pid=Api&P=0&h=180",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?pid=Api&P=0&h=180",
    company: "Tesla",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?pid=Api&P=0&h=180",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.AkKVWkjzwnxK7k_L-G1IYQHaEK?pid=Api&P=0&h=180",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Qo4oxKiBY1mYaYpIPDlTbwHaE3?pid=Api&P=0&h=180",
    company: "Nvidia",
    datePosted: "2 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  }
];
  console.log(jobs)
  return (
    <div className='parent'>
     {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
     })}
    </div>
  )
}

export default App