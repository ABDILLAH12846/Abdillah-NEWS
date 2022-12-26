import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUs } from '../redux/artredux'
import { Card } from '../component/card'
import gambar from '../data/undraw_snap_the_moment_re_88cu.svg'

export const Saved = () => {

    const { saved } = useSelector((state) => state.saved)
    return (
        <>
            {
                saved.length === 0
                ?
                <img
                className='gambar_kamu'
                 src={gambar} alt='kau' />
                :
                <div className='content4 isi'>
                    {
                        saved.map((val, ind) => (
                            <Card data={val} key={ind} />
                            // <div key={ind}>{JSON.stringify(val.source)} & {tgl}</div>
                        ))
                    }
                </div>

            }
        </>
    )
}
