import { useState, useEffect }from 'react'
import './insurance.css'
import { BiSolidCarCrash } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";
import keylock from '../ImagesFol/keylock.png'
import lock from '../ImagesFol/lock.png'


const Insurance = () => {
  return (
    <div>
        <h4 className='headcontent'>Our Comprehensive</h4>
        <h4 className='headcontent'>Insurance Coverage</h4>
        <p className='hello'>Learn about the detailed insurance policy we offer for your rental cars.</p>
        <div className='allkey'>

        <h4 className='key'>Key Coverage Details</h4>
        <div className='cardiv'>
          <div className='border-box'>
            <div className='caricon'><BiSolidCarCrash size={60}/></div>
            <div className='content'>
              <h4 className='damage'>Damage Protection</h4>
              <h5 className='damagecontent'>Our insurance covers damage to the rental car in</h5>
              <h5 className='damagecontent2'>case of accidents.</h5>
            </div>
          </div>
        </div>

        <div className='theftdiv'>
          <div className='border-box2'>
            <div className='thefticon'><FaPeopleRobbery size={60} /></div>
            <div className='content2'>
              <h4 className='theft'>Theft Protection</h4>
              <h5 className='theftcontent'>Provides coverage in case the rented vehicle is</h5>
              <h5 className='theftcontent2'>stolen.</h5>
            </div>
          </div>
        </div>
        </div>
     <div className='downsection'>
        <h4 className='features'>Included Features</h4>
        <div className='insidecontent'>
        <img src={keylock} alt="Key Lock" className="keylock-image"/>
        <img src={lock} alt="Lock" className='lock-image'/>
        <h4 className='collision'>Collision Damage Waiver</h4>
        <h4 className='thirdparty'>Third-Party Liability</h4>
        <div className='twentysection'>
        <h4 className='twenty'>Up to Rs. 2,00,000</h4>
        <h4 className='twentytwo'>coverage</h4>
        </div>
        <div className='fiftysection'>
        <h4 className='fifty'>Up to Rs. 50,000</h4>
        <h4 className='fiftytwo'>coverage</h4>
        </div>
        </div>
      </div>
      <div className='copyof2'>
      <p className='copy'>&copy; 2024 Vroom Car Rental Services</p>
      <p className='copy2'>Contact us: support@vroomcarrentals.com</p>
      </div>
    </div>
  )
}

export default Insurance;


