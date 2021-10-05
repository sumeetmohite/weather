import { RiHomeLine, RiSettings4Line } from 'react-icons/ri'
import { VscGraphLine } from 'react-icons/vsc'
const LeftColumn = () => {
  return (
    <div className="left-sidebar">
      <RiHomeLine size={25} cursor='pointer'/>
      <VscGraphLine size={22} cursor='pointer'/>
      <RiSettings4Line size={27} cursor='pointer'/>
    </div>
  )
}

export default LeftColumn
