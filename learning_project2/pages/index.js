
import styles from '../styles/Home.module.css'
import AllEvents from './AllEvents'
import Layout from './Layout'
import Navbar from './Navbar'

export default function Home() {
  return (
   <div>
   <Navbar />
    {/* <Layout /> */}
    <AllEvents />
   </div>
  )
}