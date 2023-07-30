import Image from 'next/image'
import { displayPartsToString } from 'typescript'

export default function Home() {
  return (
    <div className='max-w-6xl bg-red-300 grid grid-cols-[2fr_8fr] mx-auto sticky top-0 mt-10'>
      <div className='grid h-screen sticky top-0 sticky top-10'>
        <h1>welcome</h1>
        <div>
          <button className="btn btn-primary animate-none animate-spin animate-ping animate-pulse animate-bounce">
            <div>first page</div>
            <div className='inline'>second page</div>
            <div>third page</div>
            <div>fourth page</div>
            <div>fifth page</div>
            <div>sixth page</div>
            <div>seventh page</div>
            <div>eighth page</div>
            <div className='flex items-end'>ninth page</div>
          </button>
        </div>
        <h1>contain</h1>
        <div className='mb-96'>1</div>
        <div className='mb-96'>2</div>
        <div className='mb-96'>3</div>
        <div className='mb-96'>4</div>
        <div className='mb-96'>5</div>
        <div className='mb-96'>6</div>
        <div className='mb-96'>7</div>
        <div className='mb-96'>8</div>
        <div className='mb-96'>9</div>
        <div className='mb-96'>10</div>
        <div className='mb-96'>11</div>
        <div className='mb-96'>12</div>
        <div className='mb-96'>13</div>
        <div className='mb-96'>14</div>
        <div className='mb-96'>15</div>
      </div>
    </div>
  )
}