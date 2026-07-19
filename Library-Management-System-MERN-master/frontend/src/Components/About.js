import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                   <p className="about-text">
    Welcome to our Library Management System, a modern platform designed to make
    accessing knowledge simple, efficient, and convenient for students, faculty,
    and book enthusiasts. Our library offers an extensive collection of academic
    textbooks, reference materials, novels, magazines, and digital resources
    across a wide range of subjects, helping users achieve their educational and
    personal learning goals.<br/>
    <br/>
    The Library Management System provides powerful features such as book search,
    category-wise browsing, online book issuing and returning, user authentication,
    and real-time availability checking. With an intuitive interface, users can
    easily explore the library catalog, manage their borrowed books, and discover
    new titles from anywhere at any time.<br/>
    <br/>
    Our mission is to encourage a culture of reading, innovation, and lifelong
    learning by providing reliable access to quality educational resources. We are
    committed to creating a seamless digital library experience that saves time,
    improves library management, and supports academic excellence for every user.<br/>
    <br/>
    Thank you for choosing our Library Management System. We continuously strive to
    enhance our services and welcome your valuable feedback and suggestions to make
    the platform even better.
</p>
                </div>
            </div>
        </div>
    )
}

export default About
