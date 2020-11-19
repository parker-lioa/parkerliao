import { React , useState } from 'react'
import parser from 'html-react-parser';
import './About.scss'

const pads= [
    {
        title:"Education",
        color:"#00c853"
    },
    {
        title:"Skill",
        color:"#ffab00"
    },
    {
        title:"Habbit",
        color:"#00b8d4"
    },
    {
        title:"Personality",
        color:"#69f0ae"
    },
    {
        title:"Family",
        color:"#ffea00"
    },
    {
        title:"Goal",
        color:"#b388ff"
    }
]

const li_parser = (content)=>{   
    let str = ""
    for(let i=0;i<content.length;i++){
        str+=`<li>${content[i]}</li>`
    }
    console.log(str)
    return parser(str)
}

const paragraphs = {
    "Education":{
        title:"學歷",
        content:["中央大學附屬中壢高級中學","元智大學"]
    },
    "Skill":{
        title:"會得東東",
        content:["React.js","Express.js","Keras","Assembly programming","C programming","HardWare dev","Python programming","Java programming"]
    },
    "Habbit":{
        title:"喜歡得東東",
        content:["Soul music","Jazz music","Composing and Arranging","Comedy related thing","Play basketball","Swiming > <"]
    },
    "Personality":{
        title:"個性的部分",
        content:""
    },
    "Family":{
        title:"家人～",
        content:["父母離異","快要不是獨生子了","不太喜歡目前的家庭氣氛","不喜歡回家"]
    },
    "Goal":{
        title:"目標！",
        content:["申請南加州大學獎學金","Become a software engineer","Engage in A.I research","Become a microprocessor engineer"]
    }
}

export default function About() {

    const [selectedTopic,setSelectedTopic] = useState(localStorage.getItem('topic')?localStorage.getItem('topic'):"Education");

    const hanleClick = (topic)=>{
        console.log(topic);
        setSelectedTopic(topic);
        localStorage.setItem('topic',topic);
    }

    return (
        <div className="board-container">
            <div className="pad-container">
                <div class="pad">
                    {
                        pads.map((pad,key)=>(<div className="pad-grid" key={key} onClick={(e)=>hanleClick(pad.title)} style={{backgroundColor:pad.color}}><h3>{pad.title}</h3></div>))
                    }
                </div>
            </div>
            <div className="content-container">
                <div className="content">
                <h3>{paragraphs[selectedTopic].title}</h3>
                <p>
                    {li_parser(paragraphs[selectedTopic].content)}

                </p>
                </div>
            </div>
        </div>
    )
}
