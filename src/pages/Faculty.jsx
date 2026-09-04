import PageTop from '../components/PageTop'

// ============================================================
// EDIT STAFF DETAILS HERE.
// Each entry needs: name, designation, qualification, experience, img.
// "qualification" and "experience" are placeholders — replace the text
// below with the real details whenever you have them; nothing else in
// the layout needs to change.
// ============================================================

const LEADERSHIP = [
  {
    name: 'Fr. Arun Painedath CMI',
    designation: 'CMI Administration', // TODO: confirm exact title (e.g. Manager / Principal)
    img: './assets/images/faculty/fr-arun-painedath.webp',
  },
  {
    name: 'Fr. Jose Nandhikkara CMI',
    designation: 'CMI Devamatha Province, Thrissur',
    img: './assets/images/faculty/fr-jose-nandhikkara.webp',
  },
  {
    name: 'Fr. Jose Payyappilly CMI',
    designation: 'CMI Administration', // TODO: confirm exact title
    img: './assets/images/faculty/fr-jose-payyappilly.webp',
  },
]

const STAFF = [ 
  {
    name: 'Bency Jacob',
    designation: 'Teacher',      
    img: './assets/images/faculty/bency-jacob.webp',
  },
  {
    name: 'Bini Baby',
    designation: 'Teacher',      
    img: './assets/images/faculty/bini-baby.webp',
  },
  {
    name: 'Bini K R',
    designation: 'Teacher',      
    img: './assets/images/faculty/bini-k-r.webp',
  },
  {
    name: 'Disna Jose K',
    designation: 'Teacher',      
    img: './assets/images/faculty/disna-jose-k.webp',
  },
  {
    name: 'Fathima Zuhaira Bindu',
    designation: 'Teacher',      
    img: './assets/images/faculty/fathima-zuhaira-bindu.webp',
  },
  {
    name: 'Getty C T',
    designation: 'Teacher',      
    img: './assets/images/faculty/getty-c-t.webp',
  },
   {
    name: 'Gifty Jeeson',
    designation: 'Teacher',      
    img: './assets/images/faculty/gifty-jeeson.webp',
  },
  {
    name: 'Jayachithra Menon',
    designation: 'Teacher',      
    img: './assets/images/faculty/jayachithra-menon.webp',
  },  
  {
    name: 'Jiji M G',
    designation: 'Teacher',      
    img: './assets/images/faculty/jiji-m-g.webp',
  },
  {
    name: 'Muhammad Munavar E K',
    designation: 'Teacher',      
    img: './assets/images/faculty/muhammad-munavar-ek.webp',
  },
  {
    name: 'Nimi P Unnikrishnan',
    designation: 'Teacher',      
    img: './assets/images/faculty/nimi-p-unnikrishnan.webp',
  },
  {
    name: 'Remya Gireesh',
    designation: 'KG Coordinator',      
    img: './assets/images/faculty/remya-gireesh.webp',
  },
  {
    name: 'Sayana Sunil',
    designation: 'Teacher',      
    img: './assets/images/faculty/sayana-sunil.webp',
  },
  {
    name: 'Sindhu K P',
    designation: 'Teacher',      
    img: './assets/images/faculty/sindhu-k-p.webp',
  },
  {
    name: 'Sindhya Dibin',
    designation: 'Teacher',      
    img: './assets/images/faculty/sindhya-dibin.webp',
  },
  {
    name: 'Suma K S',
    designation: 'Teacher',      
    img: './assets/images/faculty/suma-k-s.webp',
  },
  {
    name: 'Vidhya Subhash Nair',
    designation: 'Teacher',      
    img: './assets/images/faculty/vidhya-subhash-nair.webp',
  },
  {
    name: 'Jithin Joseph Joy',
    designation: 'Accountant',      
    img: './assets/images/faculty/jithin-joseph-joy.webp',
  },
  {
    name: 'Mejo M J',
    designation: 'Accountant',      
    img: './assets/images/faculty/mejo-m-j.webp',
  },
]

function StaffCard({ person }) {
  return (
    <div className="school-staff-card">
      <div className="school-staff-card__img">
        <img src={person.img} alt={person.name} loading="lazy" />
      </div>
      {/* <div className="school-staff-card__body">
        <h3>{person.name}</h3>
        <span className="school-staff-card__designation">{person.designation}</span>
      </div> */}
    </div>
  )
}

export default function Faculty() {
  return (
    <>
      <PageTop title="Our Faculty" crumb="Faculty" bg="./assets/images/gallery/Xviers825x1000-6.webp" />

      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Leadership</h4>
            <h1>School Administration</h1>
          </div>
          <div className="row">
            {LEADERSHIP.map((p) => (
              <div className="col-lg-4 col-sm-6 col-xs-12" key={p.name} style={{ marginBottom: '30px' }}>
                <StaffCard person={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team_member section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h4>Meet Our Team</h4>
            <h1>Caring, Experienced Educators</h1>
          </div>
          <div className="row">
            {STAFF.map((p) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={p.name} style={{ marginBottom: '30px' }}>
                <StaffCard person={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
