"use client"

import {Header} from '../../components/auth/Header'
import { Card,CardHeader,CardContent,CardFooter } from '@/components/ui/card'

interface CardWrapperProps{
    children:React.ReactNode,
    headerLabel:string,
    backButtonLabel:string,
    backButtonhref:string,
    showSocial?:boolean
}


import React from 'react'
import Social from './Social'
import BackButton from './BackButton'

function CardWrapper({children,headerLabel,backButtonLabel,backButtonhref,showSocial}:CardWrapperProps) {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel}/>
      </CardHeader>
      <CardContent>
      {children}
      {showSocial && (
        <CardFooter>
        </CardFooter>
      )
    }
    <Social/>
    </CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonhref}/>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper


