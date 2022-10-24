import Navbar from './navbar/navbar'


export default function Layout({ children }) {
    return (
       <div className='videos' >   
        <div >
      <video className='video'  autoPlay muted loop >
          <source src="/static/c.mp4" />
          
        </video>    
        </div>
        <Navbar />
       
        <main>{children}</main>
        </div> 

    )
  }