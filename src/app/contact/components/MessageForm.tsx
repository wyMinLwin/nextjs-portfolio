"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Variants, motion} from 'framer-motion'
type InputTypes = {
    name: string,
    email: string,
    message: string,
}

const dialogVariants: Variants = {
    open: {opacity:1,scale:1,top:'50%'},
    closed: { opacity:0,scale:0,top:'60%',left:'50%',translateX:'-50%',translateY:'-50%'}
};

const MessageForm = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<InputTypes>();
    const [response,setResponse] = useState('');
    const [disableButton,setDisableButton] = useState(false);
    const sendEmail = (data: InputTypes) => {
        setDisableButton(true);
        const apiEndpoint = '/api/email';
        fetch(apiEndpoint, {
          method: 'POST',
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((text:{message:string}) => {
            setResponse(text.message);
            reset();
          })
          .catch((err) => {
            setResponse('Something was wrong. Please try again!')
          })
          .finally(() => {
            setDisableButton(false);
          });
    }

    const submitHandler:SubmitHandler<InputTypes> = (data) => {
        sendEmail(data);
    }
  return (
    <>
        <form className='flex flex-col gap-y-2 w-4/5 sm:w-1/2' onSubmit={handleSubmit(submitHandler)}>
            <input 
                className='px-5 py-4 rounded-lg drop-shadow-md ' 
                placeholder='Name'  
                {...register("name",
                { required: "Name required.", 
                maxLength: {value:20,message:"Name only allowed up to 20 characters."}})} />
            <label className='px-5 italic text-red-500'>{errors.name?.message}</label>
            <input 
                className='px-5 py-4 rounded-lg drop-shadow-md ' 
                placeholder='Email'  
                {...register("email",
                {required: "Email required.",
                pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:'Please enter a valid email.' }})} />
            <label className='px-5 italic text-red-500'>{errors.email?.message}</label>
            <textarea 
                className='px-5 py-4 rounded-lg drop-shadow-md resize-none h-32' 
                placeholder='Message'  
                {...register("message",{ required: "Message required.", minLength: {value:2,message:"Message must be at least 2 characters."}})}>
            </textarea>
            <label className='px-5 italic text-red-500'>{errors.message?.message}</label>
            <button className='w-fit px-6 py-3 rounded-lg flex items-center gap-x-3 bg-black dark:bg-white text-white dark:text-black drop-shadow-md' type='submit' disabled={disableButton} >
                <div>Send</div>
                {
                    disableButton && 
                    <div className="progress-bar">
                        <div className="circle rotate-circle"></div>
                    </div>
                }
            </button>
        </form>
        <motion.div className='fixed bg-white w-3/4 p-5 lg:w-1/3 h-44 drop-shadow-md rounded-lg'
        initial={"closed"}
        animate={!!response ? "open" : "closed"}
        variants={dialogVariants}
        transition={{duration:0.44}}>
            <div className='text-end'> 
                <button className='ml-auto click-effect' onClick={() => setResponse('')}>
                    <Image src={'/images/close.svg'} alt='close button' width={30} height={30} />
                </button>
            </div>
            <h1 className='text-center text-black text-xl font-semibold'>Email Response</h1>
            <p className='text-center text-black mt-3'>{response}</p>
        </motion.div>
    </>
  )
}

export default MessageForm