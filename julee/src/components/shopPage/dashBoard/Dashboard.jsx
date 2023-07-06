import React from 'react'
import './Dashboard.css'
import TotalSales  from "../../../assets/dashboards/Total Sales.png"
import TotalSession  from "../../../assets/dashboards/Total Sessions (1).png"
import customerRate  from "../../../assets/dashboards/Total Sales.png"
const Dashboard = () => {
  return (
     <div className="dashboard_Section">
             <div className="graph_Container">
                 <div>
                    <img src={TotalSales} alt="" className='img-fluid'/>
                 </div>
                 <div>
                 <img src={customerRate} alt=""
                    className='img-fluid' />
                 </div>
                 <div>
                   
                     <img src={TotalSession} alt="" 
                    className='img-fluid'/>
                 </div>
             </div>
             <div className="actions_Orders">
                <li >
                    <p id='actions'>Actions</p>
                    <p id='order'> Orders </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
                <li>
                    <p>one</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </li>
             </div>
     </div>
  )
}

export default Dashboard