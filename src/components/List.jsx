import './List.css'
import { useEffect, useState } from 'react'
import getAllList from '../Services/controllers/getListController'

function List () {
    const [formList, setFormList] = useState([])
    useEffect(() => {
        const loadAll = async () => {
            const list = await getAllList()
            setTimeout(() => {
                setFormList(list)
            }, 1000)
        }
        loadAll()
    }, [])

    return (
        <div className="page">
            <h2 className="page-title">Candidatos cadastrados</h2>
            <section className="lists">
                {formList.map((item, key) => (
                    <div key={key} className="list">{item.map((list, key) => (
                        <div key={key} className={list.name.toLowerCase()}><h3>{list.name}</h3> <p>{list.desc}</p></div>
                    ))} </div>
                ))}
            </section>
        </div>
    );
}

export default List;