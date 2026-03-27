import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'
const App = () => {
  const users =[
    
{
  img:'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8fDA%3D',
  intro:'A dedicated duo combining creativity and professionalism to accomplish shared objectives efficiently.',
  tag:'Satisfied',
  color:'bg-blue-600'
},
{
  img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
  intro:'Two ambitious women focused on innovation, productivity, and teamwork to achieve professional growth and excellence.',
  tag:'Underserved',
  color:'bg-green-600'
},
{
  img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
  intro:'A dynamic duo of professional women collaborating with creativity, confidence, and dedication to deliver quality work and achieve shared goals.',
  tag:'Underbreaked',
  color:'bg-purple-600'
},
{
  img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
  intro:'A dynamic duo of professional women collaborating with creativity, confidence, and dedication to deliver quality work and achieve shared goals.',
  tag:'Underbreaked',
  color:'bg-pink-600'
},
{
  img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60',
  intro:'Two professionals working together with dedication, innovation, and teamwork to achieve excellence and build successful outcomes.',
  tag:'Teamwork',
  color:'bg-yellow-500'
},
{
  img:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=60',
  intro:'A confident duo collaborating creatively, sharing ideas, and delivering impactful solutions with professionalism and passion.',
  tag:'Creative',
  color:'bg-indigo-600'
},
{
  img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60',
  intro:'Two ambitious women focused on innovation, productivity, and teamwork to achieve professional growth and excellence.',
  tag:'Ambitious',
  color:'bg-red-600'
},
{
  img:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60',
  intro:'A powerful duo combining skills, creativity, and determination to deliver quality work and meaningful results.',
  tag:'Powerful',
  color:'bg-orange-500'
},
{
  img:'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&auto=format&fit=crop&q=60',
  intro:'Two professionals collaborating with strong communication and innovation to build successful projects together.',
  tag:'Collaborative',
  color:'bg-teal-600'
},
{
  img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60',
  intro:'A dynamic pair working strategically, supporting each other, and achieving shared professional goals.',
  tag:'Strategic',
  color:'bg-cyan-600'
},
{
  img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60',
  intro:'Two confident professionals bringing creativity and dedication to every task for impactful results.',
  tag:'Confident',
  color:'bg-lime-600'
},
{
  img:'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60',
  intro:'A professional duo striving for excellence, innovation, and growth through teamwork and collaboration.',
  tag:'Growth',
  color:'bg-emerald-600'
},
{
  img:'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&auto=format&fit=crop&q=60',
  intro:'Two motivated professionals focused on delivering quality and achieving success together.',
  tag:'Motivated',
  color:'bg-rose-600'
},
{
  img:'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&auto=format&fit=crop&q=60',
  intro:'A dedicated duo combining creativity and professionalism to accomplish shared objectives efficiently.',
  tag:'Dedicated',
  color:'bg-violet-600'
}
]
  
  return (
    <div>
      <Section1 users={users}/>
       <Section2/>
    </div>
  )
}

export default App