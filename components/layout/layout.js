import Navbar from './navbar/navbar'


export default function Layout({ children }) {
    return (
      <>
       <div >   
        <div className='videos'>
      <video className='video'  autoPlay muted loop >
          <source src="/static/background.mp4" />
          
        </video>    
        </div>
        </div> 
        <Navbar />
       
        <main>{children}</main>
     
      </>
    )
  }