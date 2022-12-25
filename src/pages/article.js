import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUs } from '../redux/artredux'
import { Card } from '../component/card'

export const Article = ({ linkUrl }) => {

    const url = `https://newsapi.org/v2/${linkUrl}&apiKey=9b40e5a77da44ea6b5d2971d517f5247`
    const dispach = useDispatch()
    const { entities, loading } = useSelector((state) => state.arti)
    useEffect(() => {
        const fetching = () => {
            dispach(fetchUs(url))
        }
        fetching()
    }, [url])
    return (
        <div className='content4 isi'>
            {
                loading
                ?
                // console.log(entities)
                <p>Loading</p>
                :
                entities.map((val, ind) => (
                    <Card data={val} key={ind} />
                    // <div key={ind}>{JSON.stringify(val.source)} & {tgl}</div>
                ))}
        </div>
    )
}
