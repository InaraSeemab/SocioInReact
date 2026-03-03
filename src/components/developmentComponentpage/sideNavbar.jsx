import React from 'react'

const sideNavbar = () => {
    return (
        <>
            <div className="col-lg-3 col-md-3">
                <nav className="responsive-tab style-4">
                    <ul data-submenu-title="compounents" uk-switcher="connect: #components-nav ;animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium" className="uk-list docs-list" uk-sticky="offset:50;media : @m">
                        <li><Link to="#">Accordion</Link></li>
                        <li><Link to="#">Alert</Link></li>
                        <li><Link to="#">Dropdown</Link></li>
                        <li><Link to="#">Filter</Link></li>
                        <li><Link to="#">Lightbox</Link></li>
                        <li><Link to="#">Modal</Link></li>
                        <li><Link to="#">Notification</Link></li>
                        <li><Link to="#">Off canvas</Link></li>
                        <li><Link to="#">Scrollspy</Link></li>
                        <li><Link to="#">Tooltip</Link></li>
                        <li><Link to="#">slider</Link></li>
                        <li><Link to="#">Slideshow</Link></li>
                        <li><Link to="#">Progress Bars</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default sideNavbar