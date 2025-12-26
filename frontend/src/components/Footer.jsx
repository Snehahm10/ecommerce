import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt=''/>
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Your destination for timeless style and quality products. Explore our collection and enjoy seamless shopping with fast delivery and secure payments

                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>
                        COMPANY
                    </p>
                    <ul className='flex flex-col gap-1  text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>

                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>
                        GET IN TOUCH
                    </p>
                    <ul  className='flex flex-col gap-1  text-gray-600'>
                        <li>+1-222-456-7890</li>
                        <li>conatct@Foreveryou.com</li>

                    </ul>
                </div>

                
        </div>
        <div>
                 <hr/>
                 <p className='py-5 txet-sm text-center'>
                    &copy; 2025 @forever.com - All Rights Reserved 
                    </p>   
                </div>
    </div>
  )
}

export default Footer
