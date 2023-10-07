"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { PostInput } from "@/lib/schema/post.schema";
import { FormEvent, useState } from "react";





export const FormPost = () => {
    const [value, setValue] = useState<string>(' ')

    const { register, handleSubmit, reset, formState: { errors },} = useForm<PostInput>();

   return (
<div className='container'>
                <h1>New Post</h1>
       <section className='flex gap-6'>
                    <form className='flex flex-1 flex-col gap-4 sm:w-1/2'>
         <input type='text' placeholder='..post title' className='input input-bordered w-full max-w-lg' />
         <input type='text' placeholder='author' className='input input-bordered w-full max-w-lg' />
           <input type='text' placeholder='..post description' className='input input-bordered w-full max-w-lg' />
            <textarea className='textarea textarea-bordered w-full max-w-lg' placeholder='...post content'>
                    
            </textarea>
             <select className='select select-bordered w-full max-w-lg'>
                <option value=''>Category</option>
                <option value='1'>WEB ANIMATIONS</option>
                <option value='2'>SYSTEM DESIGN</option>
                <option value='3'>RESOURCES</option>
                <option value='3'>DEV DOCS</option>
                <option value='3'>JAVASCRIPT</option>
             </select>
                <button className='rounded-lg bg-black py-2 text-white'>Create</button>
        </form>
                </section>
</div>
    )
}

