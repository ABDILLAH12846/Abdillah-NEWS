import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSaved, deleteSaved } from '../redux/saveredux'

export const Card = ({ data }) => {
    const dispach = useDispatch()
    const {saved} = useSelector((state)=>state.saved)
    const isSaved = saved.find((val)=>val.url === data.url)
    return (
        <div className="card">
            <div className="wrapper">
                <img alt={data.source.name}
                    src={data.urlToImage}
                />
                <div className="cont">
                    <div className="content">
                        <div className="text">
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className="tombol">
                        <a href={data.url}>
                            <span className="read">Read</span>
                        </a>
                        <span className="save"
                        onClick={()=>{
                            isSaved
                            ?
                            dispach(deleteSaved(data.url))
                            :
                            dispach(addSaved(data))
                        }}
                        >{isSaved?'Saved':'Save'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
