import { React , useState } from 'react'
import './Portfolio.scss'

const works = [
    {
        title:"Money track",
        sub:"記帳",
        url:"https://money-tracker-ecda8.an.r.appspot.com/",
        img_url:"https://i.ibb.co/X2Sfy7d/money-tracker.png",
    },
    {
        title:"Todo list",
        sub:"記事",
        url:"https://todo-list-ef999.web.app/",
        img_url:"https://i.ibb.co/KsvwZ4c/Screen-Shot-2020-10-30-at-10-24-46-PM.png"
    },
    {
        title:"Covid-19 tracker",
        sub:"關於疫情",
        url:"https://covid-19-20193.web.app/",
        img_url:"https://i.ibb.co/Y31HhzF/Screen-Shot-2020-10-30-at-10-27-30-PM.png"
    },
    {
        title:"Jazz chord pad machine",
        sub:"玩一點爵士聲響",
        url:"https://pad-machine.web.app/",
        img_url:"https://i.ibb.co/hKNzvBX/Screen-Shot-2020-11-16-at-8-14-12-PM.png"
    }
]

export default function Portfolio() {

    const [selected,setSelected] = useState(0);

    const Up_and_Down = (e)=>{
        console.log(e.keyCode);
        if(e.keyCode!==38&&e.keyCode!==40){
            return
        }
        
        if(e.keyCode===38&&selected!==0){
            setSelected(selected-1);
        }
        else if(e.keyCode===40&&selected<works.length){
            setSelected(selected+1);
        }
    }

    const selectByClick = (index)=>{
        setSelected(index);
    }


    const work_render = ()=>{
        if(selected===0){
            return(
                <div className="allworks-container">
                    {
                        works.map((work,index)=>{
                            return(
                                <a href={work.url}>
                                    <img src={work.img_url}></img>
                                </a>
                            )
                        })
                    }
                </div>
            );
        }
        return(
            <div className="singlework-container">
                <a href={works[selected-1].url}>
                    <img src={works[selected-1].img_url}></img>
                </a>
                <h3>
                    {works[selected-1].sub}
                </h3>
            </div>
        )
    }

    return (
        <div className="board-container">
            <div className="command-line-container">
                <div className="command-line" tabIndex={0} onKeyDown={Up_and_Down}>
                    <div className="command">
                        <p>Processing . . . </p>
                        <p>Please select what you like to see . . . </p>
                    </div>
                    <div className="option">
                        {
                            selected===0?<p className="selected">(✓)All</p>:<p onClick={(e)=>selectByClick(0)}>( )All</p>
                        }
                        {
                            works.map((work,key)=>{
                                return(
                                key+1===selected?<p key={key} className="selected">(✓){work.title}</p>
                                :<p onClick={(e)=>selectByClick(key+1)} key={key}>( ){work.title}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="panel-container">
                <div className="panel">
                    {
                        work_render()
                    }
                </div>
            </div>
        </div>
    )
}


