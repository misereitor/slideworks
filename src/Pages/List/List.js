import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import getAllList from '../../Services/controllers/getListsController'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './List.css'
import loading from '../../loading.gif'

function List () {
    const [formList, setFormList] = useState([])
    let { id } = useParams()
    let list = []
    useEffect(() => {
        const loadAll = async () => {
            const list = await getAllList()
            setTimeout(() => {
                setFormList(list)
            }, 1000)
        }
        loadAll()
    }, [])
    getList()

    function getList () {
        formList.forEach(item => {
            if (item[0] === Number(id)) {
                list.push(item)
            }
        })
    }

    return (
        <div className="list-container">
            <Header />
            <div className="list-page">
                {list.map((item, key) => (
                    <div key={key} className="list-one"><div className="edit">
                        <h2>{item[1][0].desc}</h2></div>
                        {item[1].map((list) => (
                            <div key={list.id} className={list.name.toLowerCase()}><h3>{list.name}</h3> <p>{list.desc}</p></div>
                        ))} </div>
                ))}
            </div>
            {formList.length <= 0 &&
                <div className="loading">
                    <img src={loading} alt="Carregando" />
                </div>
            }
            <Footer />
        </div>
    )
}

export default List