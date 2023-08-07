import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { style } from '../style'
import { EarthCanvas } from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'
import { Input } from 'postcss'

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name:'',
    email: '',
    message: ''
  })
const handleChange = (e) => {
  const {name, value} = e.target;

  setForm({ ...form, [name]: value})
}
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    'service_8gd3gs5',
    'template_4gn9ew9',
    {
      form_name: form.name,
      to_name: ' Anthony',
      from_email: form.email,
      to_email: 'iamanthonyjay@gmail.com',
      message: form.message,
    },
    '674nGlCVEL_PqvLCg'
  )
  .then(() => {
    setLoading(false);
    alert('Thank you for reaching out, I will get back to you ASAP');

    setForm({
      name:'',
      email: '',
      message: ''

    })
  }, (error) => {
    setLoading(false)

    console.log(error)

    alert('Hey, Something went wrong.')
  }) 
}


// service_8gd3gs5

// template_4gn9ew9

// public key - 674nGlCVEL_PqvLCg

//Private Key - nt2CdQPylleiclGUjEthS

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
            <p className={style.sectionSubText}> Get In Touch</p>
            <h3 className={style.sectionHeadText}>Contact</h3>
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Whats Your Name?'
                className='bg-tertiary py-4 px-7 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Whats Your Email?'
                className='bg-tertiary py-4 px-7 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea 
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='How can I help?'
                className='bg-tertiary py-4 px-7 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <button
              type='submit' 
              className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl shadow-primary '
              
              >
                
                {loading ? 'sending...' : 'send'}
              Send
              </button>
      
            </form>

            
        </motion.div>
        <motion.div
              variants={slideIn('right', "tween", 0.2, 1)}
              className='xl:flex-1 xl:h-auto md:h-[550px] h-[50px]'
            >
              <EarthCanvas />

            </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")