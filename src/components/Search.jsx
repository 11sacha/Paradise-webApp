import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const style = {
    services: `flex flex-col lg:flex-row items-center text-center`,
    h2: `text-3xl font-bold`,
    h3: `text-xl font-bold py-2`,
    button: `p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md`,
    input: `border rounded-md p-2`
}

function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4 py-16'>
        {/* Left side */}
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div id='paragraph'>
                <h2 className={style.h2}>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4 text-justify'>
                    Come experience the very pinnacle of luxury Caribbean all-inclusive
                    vacations for couples at BEACHES Resorts. Our luxury beach resorts,
                    set along the most gorgeous tropical settings and exquisite beaches
                    in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
                    Curaçao, feature unlimited gourmet dining, unique bars serving
                    premium liquors and wines, and every land and water sport, including
                    complimentary green fees at our golf resorts and certified scuba
                    diving at most resorts. If you are planning a wedding, BEACHES is
                    the leader in Caribbean destination weddings and honeymoon packages.
                </p>
            </div>
            <div id='small-paragraph' className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className={style.services}>
                    <button className={style.button}>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className={style.h3}>Leading Service</h3>
                        <p className='py-1'>All-Inclusive Company for 20 years IN-A-ROW</p>
                    </div>
                </div>
                <div className={style.services}>
                    <button className={style.button}>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className={style.h3}>Leading Service</h3>
                        <p className='py-1'>All-Inclusive Company for 20 years IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full' >
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2'>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label>Check-In</label>
                    <input className='' type="date"/>
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-Out</label>
                    <input className='' type="date" />
                </div>
                <button className='p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md w-full my-4 cursor-pointer'>
                    Rates & Availabilities
                </button>
            </form>
        </div>
    </div>
  )
}

export default Search