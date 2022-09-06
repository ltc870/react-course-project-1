import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar-flex">
            <section className="navbar-child1">
                <img className="navbar-child1-logo" src="/src/images/react-icon-small.png" alt="" />
                <p className="navbar-child1-text">ReactFacts</p>
            </section>
            <section className="navbar-child2">
                <p className="navbar-child2-text">React Course - Project 1</p>
            </section>
        </nav>
    )
}