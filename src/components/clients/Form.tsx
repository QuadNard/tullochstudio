"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { PostInput } from "@/lib/schema/post.schema";

interface FormPostProps {
    submit: SubmitHandler<PostInput>
}

export const FormPost: FC<FormPostProps> = ({ submit }) => {
   const {register, handleSubmit } = useForm<PostInput>();

 
    return (
<>
                <h1>New Post</h1>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center'>
         <input type='text' placeholder='..post title' className='input input-bordered w-full max-w-lg' />

            <textarea className='textarea textarea-bordered w-full max-w-lg' placeholder='...post title'>
                    
            </textarea>
             <select className='select select-bordered w-full max-w-lg'>
                <option value=''>Category</option>
                <option value='1'></option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
             </select>
             <button className='btn bg-blue-400 btn-primary w-full max-w-lg'>Create</button>
        </form>
</>
    )
}