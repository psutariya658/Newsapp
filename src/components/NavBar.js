import React, { Component } from 'react';
import newspaperimg from './images/newspaper.jpg';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
                    <div className="container-fluid">
                        <img src={newspaperimg} alt="newspaper" height={30} style={{ marginRight: '10px' }} />
                        <Link className="navbar-brand" to="/" style={{ color: '#8FBC8F' }}>NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#8FBC8F' }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item"><Link className="nav-link" aria-current="page" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/Home" >Home</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/entertainment">Entertainment</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/general">General</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: '#8FBC8F' }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#8FBC8F'} to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Additional styles for hover effects */}
                <style>{`
                    .nav-link {
                        position: relative;
                        transition: all 0.3s ease;
                    }

                    .nav-link::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: lightgreen;
                        transform: scaleX(0);
                        transition: transform 0.3s ease;
                    }

                    .nav-link:hover::before {
                        transform: scaleX(1);
                    }
                `}</style>
            </div>
        )
    }
}

export default NavBar