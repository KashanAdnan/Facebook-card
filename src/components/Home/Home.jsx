import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faGraduationCap, faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Home.css'
import Post from '../Post/Post.jsx'

const Home = () => {
    return (
        <div className='main'>
            <div className="info-left">
                <h1>Intro</h1>
                <p>Hey there, I am Kashan Adnan. a full stack developer with 2 years of experience on MERN STACK</p>
                <button>Edit Bio</button>
                <ul>
                    <li><FontAwesomeIcon className='fonticon' icon={faGraduationCap} /> <span> Went to</span> Rahman Children Scool</li>
                    <li><FontAwesomeIcon className='fonticon' icon={faHouse} /> <span>Lives in</span> Karachi, Pakistan</li>
                    <li><FontAwesomeIcon className='fonticon' icon={faLocationDot} /> <span>From </span> Orangi Town</li>
                    <li><FontAwesomeIcon className='fonticon' icon={faInstagram} /> <a href='https:://github.com/KashanAdnan'>kashanadnan772 </a> </li>
                    <li><FontAwesomeIcon className='fonticon' icon={faTwitter} /> <a href='https:://github.com/KashanAdnan'>KashanAdnan8067 </a></li>
                    <li><FontAwesomeIcon className='fonticon' icon={faLinkedinIn} /> <a href='https:://github.com/KashanAdnan'>Kashan Adnan </a></li>
                    <li><FontAwesomeIcon className='fonticon' icon={faYoutube} /> <a href='https:://github.com/KashanAdnan'>Coding With Kashan Adnan </a></li>
                    <li><FontAwesomeIcon className='fonticon' icon={faGithub} /> <a href='https:://github.com/KashanAdnan'>Kashan Adnan </a></li>
                </ul>
                <div className="footer">
                    <p>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2023</p>
                </div>
            </div>
            <div className="right">
                <Post image="https://scontent.fkhi26-1.fna.fbcdn.net/v/t39.30808-6/354224371_829278858637615_8529992948063660237_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGYTVINoWXg3a7zkBpWahOCw0OaZGD0ndzDQ5pkYPSd3HC7J_N1EoAal0qkWrFajFl8hj5elHbc2IHzxCbTTIom&_nc_ohc=b15HG5h-yyYAX-lbcL2&_nc_ht=scontent.fkhi26-1.fna&oh=00_AfCXF0nmHdiJTPtQb83Ty-phAWunsGtfE9mrMfy8ovV8Ag&oe=64E8C080" title="Introducing Speaker Mr.Inzamam Malik For Our CAREER COUNSELLING & SELF DEVELOPMENT II Session He Will Be Motivating young individuals At Salmas Banquet Be There On time
Venue : *Salmas Banquet Orangi Town*
Entry: Free for everyone 
Timings : 01:30 to 05:00 PM
Day : Sunday
Date : 18th June 2023
*CAREER COUNSELLING II* Project Of *HAWO*" />
                <Post image="https://scontent.fkhi26-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG-C7lYN8Ph274ap1hPC_x1Z-7yGjKZnoRn7vIaMpmehGhwZTxxIYyErp6dQ8bLvjid-X92rio7jll7LhAge8su&_nc_ohc=drTCf_PDygAAX-oaO2D&_nc_ht=scontent.fkhi26-1.fna&oh=00_AfBbR2xeJMkmAVQH83lztE0EOOs7Q9HpEK906TvLuUz53Q&oe=64E7E7F0" title="SMIT has been organizing  hands on workshops on latest IT domains free of cost. We encourages every IT enthusiast to join this workshop. Fill this form to book your slot as we have limited seats available. Registrations will be closed on Monday 11:59pm." />
                <Post image="https://scontent.fkhi26-1.fna.fbcdn.net/v/t39.30808-6/352558481_825854365646731_9082138370001648739_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGHq0_OLFC55unAfeTo65zaIhwFt2jtDi8iHAW3aO0OLyS9YsqY-8MEVlgk5At6Ws-XZqdSHmjBioVlQrahSdL4&_nc_ohc=vytbCvBNnisAX_7GPsU&_nc_ht=scontent.fkhi26-1.fna&oh=00_AfDolbLkRx8djZWC4y6mnph3HgARf4JecrgzOMpZhB_KlA&oe=64E72254" title="Check details: https://fb.watch/l5IsAoNQLj/" />
            </div>
        </div>
    )
}

export default Home
