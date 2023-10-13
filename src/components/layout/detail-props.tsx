
import * as React from 'react'
import TitleBar from './title-bar';
import { Compass } from 'lucide-react';
import Button from '../lib/button';
import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';

interface DetailContainerProps {
    children: React.ReactNode;
}

interface TitleProps {
  children: React.ReactNode
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  return (
    <h1
      ref={ref}
      className="text-primary font-sans text-2xl font-bold xl:text-3xl"
      {...props}
    />
  )
})

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

function Header(props: HeaderProps) {
  return <div className="space-y-3" {...props} />
}

function ContentContainer(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className='mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8' {...props}  />
    )
}

const Container = React.forwardRef<HTMLDivElement, DetailContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="main"
        className="relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black"
        {...props}
      />
    )
  }
)

function Null() {
  return (
    <Container>
      <TitleBar title="Not found" scrollContainerRef={undefined} />
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
        <Compass className="text-secondary" size={32} />
        <div className="flex flex-col space-y-1">
          <p className="text-primary font-semibold">
            What you seek does not exist.
          </p>
          <p className="text-tertiary">
            Maybe this link is broken. Maybe something was deleted, or moved. In
            any case, there’s nothing to see here...
          </p>
        </div>
        <Link href='/'>
        <Button icon={<FaBeer width={12} height={12} color={'#000'} />}  label='hello' className='default' size='default' raduis='sm' variant='primary'  />
        </Link>
      </div>
    </Container>
  )
}


export const Detail = {
  Container,
  ContentContainer,
  Title,
  Null,
  Header,
}