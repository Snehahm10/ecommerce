import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forver was born from a simple passion: to create timeless pieces that celebrate everyday moments. We blend thoughtful design, honest materials, and a love for craftsmanship to make products that look beautiful and last. Welcome to Forver — where small details become lasting memories.</p>
        <p>Since our inception, Forver has been driven by a passion to create with purpose. What began as a small vision has grown into a commitment to designing products that blend quality, functionality, and timeless style. Guided by craftsmanship and attention to detail, we continue to evolve while staying true to our core belief — that every piece should add value and meaning to everyday life.
</p>
<b className='text-gray-800'>Our Mission</b>
<p>Our mission is to inspire meaningful living by creating products that combine timeless design, lasting quality, and everyday functionality. We strive to bring simplicity, authenticity, and purpose into people’s lives — turning ordinary moments into experiences worth cherishing.
</p>
        </div>

      </div>
      <div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-10 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
<p className='text-gray-600'>
We craft products with care, combining beauty, durability, and a commitment you can trust.




</p>
        </div>
         <div className='border px-10 md:px-16 py-10 flex flex-col gap-5'>
          <b>Convenience:</b>
<p className='text-gray-600'>
We make every step hassle-free, ensuring convenience and quality from browsing to delivery.

</p>
        </div>
        <div className='border px-10 md:px-16 py-10 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
<p className='text-gray-600'>
Our team believes every customer deserves care and support, providing prompt, personalized assistance at every stage.


</p>
        </div>

      </div>
      < NewsletterBox/>
    </div>
  )
}

export default About
