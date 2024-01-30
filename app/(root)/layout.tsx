import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar"

type Props = {
    children: React.ReactNode
}

const layout : React.FC<Props> = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default layout