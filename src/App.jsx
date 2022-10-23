import React from 'react'
import { Link, NavLink } from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src="data:image/png;base64,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" alt="linkedin" /></a>
                    <div class="inputdiv">
                        <form class="d-flex">
                            <input class="search form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house-chimney"></i>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-users"></i> My&nbsp;Network</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-sharp fa-solid fa-briefcase"></i>Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-envelope"></i> Messaging</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-bell"></i>Notifications</a>
                            </li>

                        </ul>
                    </div>
                    <img className='image' src="https://www7.lunapic.com/editor/premade/crop-circle.gif" alt="" />
                </div>
            </nav>

            <div className="container bodyy">
                <div className="left">
                    <img className='backgroundimg' src="https://media-exp1.licdn.com/dms/image/C4D16AQFW1tIuBIYBSA/profile-displaybackgroundimage-shrink_350_1400/0/1661007429329?e=1672272000&v=beta&t=PLruBxx8qejqk6Vnr-tWuMzJbLTryj-t41X6NVbXaz8" alt="" />

                    <img className='onleft ' src="https://www7.lunapic.com/editor/premade/crop-circle.gif" alt="" />
                    <div className="myself">
                        <h2>Ritesh Hajare</h2>
                        <small>Student at JSPM RSCOE</small>
                    </div>
                    <hr />
                    <div ><small className="connections">Connections</small> 55</div>
                    <div ><small className="profileviews">who viewed your profile</small>12</div>
                </div>
                <div className="middle">
                    <div className="middletop">
                        <img className='me' src="https://www7.lunapic.com/editor/premade/crop-circle.gif" alt="" />
                        <input type="text" name="" id="" placeholder='Start a Post' />
                    </div>
                    <hr className='hr' />
                    <div className="middlebottom">
                        <img className='img1' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        <div className='name'>Daniel <small>1st</small></div>
                        <div className='postdetail'>This is post details</div>
                        <img className='img2' src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h3>LinkedIn News</h3>
                    <ul>
                        <a href=""> <li className='news'>CXO demand still upbeat</li></a>
                        <a href=""> <li className='news'>Tech Mahindra to hire 2000 people</li></a>
                        <a href=""><li className='news'>are you worried about recision?</li></a>
                        <a href=""><li className='news'>UK PM resigns after 6 weeks</li></a>
                        <a href=""><li className='news'>AI to play bir role in ED Tech?</li></a>
                    </ul>
                    <a href=""><small className='grey'>show more <i class="fa-solid fa-angle-down"></i></small></a>
                </div>
            </div>

        </div>
    )
}

export default App