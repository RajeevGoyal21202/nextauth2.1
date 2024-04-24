"use client"
import { useState, useTransition } from 'react'
import CardWrapper from '@/app/auth/card-wrapper'
import React from 'react'
import {useForm} from "react-hook-form"
import { RegisterSchema } from "../../../schemas"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod";
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField
}from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form.error'
import { FormSuccess } from '@/components/form.sucess'
import { register } from '../../../actions/register' 


const RegisterForm = () => {
  const [error,setError]= useState<string|undefined>("");
  const [success,setSuccess]=useState<string|undefined>("");

  const [isPending,startTransistion]=useTransition();
  const form = useForm({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      email:"",
      password:"",
      name:""
    },
  });

  const onSubmit = (values:any)=>{
    setError("");
    setSuccess("");
    startTransistion(()=>{
      register(values)
      .then((data)=>{
        setError(data.error);
        setSuccess(data.success);
        
      })
    });
  }
  return (
    <div>
         <CardWrapper headerLabel='Create An Account' backButtonLabel='Already have account?' backButtonhref='/auth/login' >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
            >
              <div className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>
                      Name
                    </FormLabel>

                    <FormControl>
                      <Input
                      {...field}
                      disabled={isPending}
                      placeholder='John Doe'
                      type='text'/>
                       
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name='email'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>
                      Email
                    </FormLabel>

                    <FormControl>
                      <Input
                      {...field}
                      disabled={isPending}
                      placeholder='john.doe@example.com'
                      type='email'/>
                       
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name='password'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>
                      Password
                    </FormLabel>

                    <FormControl>
                      <Input
                      {...field}
                      disabled={isPending}
                      placeholder='*******'
                      type='password'/>

                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
                />

              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type='submit' disabled={isPending} className='w-full'>Login</Button>

            </form>

          </Form>
        Login Form ! 
      </CardWrapper></div>
  )
}

export default RegisterForm