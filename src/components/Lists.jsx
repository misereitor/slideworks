import './Lists.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import getAllList from '../Services/controllers/getListsController'
import loading from '../loading.gif'

function Lists () {
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
                    <div key={key} className="list"><Link to={`/list/${item[0]}`}><h2>{item[1][0].desc}</h2></Link>{item[1].map((list) => (
                        <div key={list.id} className={list.name.toLowerCase()}><h3>{list.name}</h3> <p>{list.desc}</p></div>
                    ))} </div>
                ))}
            </section>
            {formList.length <= 0 &&
                <div className="loading">
                    <img src={loading} alt="Carregando" />
                </div>
            }
        </div>
    );
}

export default Lists;