import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { NameContext } from '../App'

export default function NewsDetailPage() {
    const params = useParams()
    const id = params.id
    // const {id} = useParams()
    const {newsList, name} = useContext(NameContext)

    return (
        <div>
            {name} wants to view news with id {id}
            {newsList && (
                <p>{newsList[id].title}</p>
            )}
        </div>
    )
}
