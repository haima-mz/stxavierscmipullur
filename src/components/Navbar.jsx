import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const MENU = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Pre-Primary', to: '/academics#pre-primary' },
      { label: 'Primary School', to: '/academics#primary' },
      { label: 'Middle School', to: '/academics#middle' },
      { label: 'Senior School', to: '/academics#senior' },
    ],
  },
  {
    label: 'Pages',
    to: '#',
    children: [
      { label: 'Faculty', to: '/faculty' },
      { label: 'Events', to: '/events' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Downloads', to: '/downloads' },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="top_header_banner">
      {/* TOP CONTACT BAR */}
      <section className="logo-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-mobile"></i>
                <h4><a href="tel:+917025092120">+91 70250 92120</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-email"></i>
                <h4><a href="mailto:[email protected]">info@stxavierscmischool.com</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-alarm-clock"></i>
                <h4>Mon to Sat Open: 9am - 4pm</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="top_social_profile">
                <ul>
                  <li><a href="https://www.facebook.com/stxavierscmischool14" target="_blank" rel="noreferrer" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/stxavierscmischool" target="_blank" rel="noreferrer" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://www.youtube.com/@st.xavierscmischoolpullur6961" target="_blank" rel="noreferrer" className="top_f_linkedin"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN NAV */}
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-20 align-self-center">
              <div className="site-logo">
                <Link to="/">
                  <span className="school-logo-text">St. Xavier's <span>CMI School</span></span>
                </Link>
              </div>
            </div>

            <div className="col-60 d-flex">
              <nav id="main-menu">
                <ul>
                  {MENU.map((item) => (
                    <li key={item.label} className={item.children ? 'menu-item-has-children' : ''}>
                      <NavLink to={item.to === '#' ? '#' : item.to}>{item.label}</NavLink>
                      {item.children && (
                        <ul>
                          {item.children.map((c) => (
                            <li key={c.label}><Link to={c.to}>{c.label}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-30 d-none d-xl-block text-end align-self-center">
              <div className="call_to_action">
                <Link className="btn_two" to="https://onlineadmissionforms.gjschool.xyz/applyonline?admission=U1QuWEFWSUVSJ1MgQ01JIFNDSE9PTF82NA==" target='_blank'>Admissions Open <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button className="school-mobile-toggle d-xl-none" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <ul className={`mobile_menu ${open ? 'school-mobile-menu--open' : ''}`}>
              {MENU.map((item) => (
                <li key={item.label}>
                  <Link to={item.to === '#' ? '#' : item.to} onClick={() => setOpen(false)}>{item.label}</Link>
                  {item.children && (
                    <ul className="sub-menu">
                      {item.children.map((c) => (
                        <li key={c.label}><Link to={c.to} onClick={() => setOpen(false)}>{c.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li><Link to="/admissions" onClick={() => setOpen(false)}>Admissions Open</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
