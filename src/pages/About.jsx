import { useState } from 'react'
import PageTop from '../components/PageTop'

const FILES = [
  { name: 'Affiliation Letter', category: 'General', size: '240 KB', file: './assets/documents/Affiliation Letter.pdf' },
  { name: 'Building Safety Certificate', category: 'Certificate', size: '180 KB', file: './assets/documents/Building Safety Certificate.pdf'  },
  { name: 'Fee Structure 2026-27', category: 'General', size: '120 KB', file: './assets/documents/fees  structure 2026-27.pdf'  },
  { name: 'Fire Safety Certificate', category: 'Certificate', size: '300 KB', file: './assets/documents/Fire Safety Certificate.pdf'  },
  { name: 'Last 3 Year Result', category: 'Academics', size: '90 KB', file: './assets/documents/last 3 Year Result.pdf'  },
  { name: 'NOC', category: 'Certificate', size: '150 KB', file: './assets/documents/NOC.pdf'  },
  { name: 'PTA Committee', category: 'General', size: '150 KB', file: './assets/documents/PTA.pdf'  },
  { name: 'Recognition Certificate', category: 'Certificate', size: '150 KB', file: './assets/documents/Recognition Certificate.pdf'  },
  { name: 'School Diary', category: 'General', size: '150 KB', file: './assets/documents/St. Xaviers Diary 2026 - 27.pdf'  },
  { name: 'School Management Committee', category: 'General', size: '150 KB', file: './assets/documents/School Management Committee.pdf'  },
  { name: 'Trust Certificate', category: 'Certificate', size: '150 KB', file: './assets/documents/Trust Certificate.pdf'  },
]
export default function About() {
  const [query, setQuery] = useState('')
  const filtered = FILES.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <PageTop title="About Us" crumb="About" bg="./assets/images/academics/senior-classroom-reading.webp" />

      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="./assets/images/all-img/Xaviers-Banner-825x1000.webp" className="img-fluid" alt="About St. Xavier's CMI School" />
                <div className="wc_year">
                  <h3><span>931352</span> <br />CBSE Affiliation No.</h3>
                </div>
              </div>
              <br/>
              <h5><i className="fa-solid fa-people-roof"></i>&nbsp;&nbsp;Partnership with Families and the Wider Community</h5><br/>
              <p>
                Recognizing the important role of the family in the formation of every student, we seek to reach out especially 
                to the families of our students, to assist them in their needs, share in their joys and sorrows, 
                and build relationships based on love, freedom, mutual respect and understanding. Through such partnership 
                between the institution and the family, we endeavour to create an environment in which students experience 
                our educational institutions as an extension of their homes and receive the support necessary for their 
                wholesome growth and development.
              </p><br/>
              <h5><i className="fa-solid fa-hands-holding-circle"></i>&nbsp;&nbsp;A Shared Vision and Collective Responsibility</h5><br/>
              <p>
                The realization of the CMI goal of education requires the wholehearted cooperation and shared commitment 
                of students, parents, teachers, management and all those associated with our institutions. Education, for us, 
                is a collective responsibility and a continuing journey of growth, and through mutual respect, cooperation and 
                commitment to this shared vision, we seek to build educational communities that not only impart knowledge and 
                develop skills but also form responsible, compassionate and value-oriented individuals capable of contributing 
                meaningfully to their families, society, the nation and the wider world.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>About St. Xavier's CMI School</h2>
                <p>
                  We, the Carmelites of Mary Immaculate (CMI), inspired by the example and vision of our founder, 
                  Blessed Kuriakose Elias Chavara, consider education an integral part of the formation of the human person and 
                  a means of preparing individuals to fulfil their personal and social responsibilities. 
                  Our educational endeavours aim at the holistic formation of leaders who are intellectually competent, 
                  spiritually mature, morally upright, psychologically integrated, physically healthy and socially responsible; 
                  who champion the values of justice, love, truth and peace; and who remain ever open to further growth and 
                  development.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-regular fa-lightbulb"></i>
                <h4>Our Vision</h4>
                <p>Rooted in faith and guided by love, we nurture intellect, shape hearts, and transform lives.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish"></i>
                <h4>Our Mission</h4>
                <p>Holistic education rooted in Christian values, nurturing each child's unique potential.</p>
              </div>
              <h5><i className="fa-solid fa-chalkboard-user"></i>&nbsp;&nbsp;The Role of Teachers in the Educational Mission</h5><br/>
              <p>
                We believe that the success and strength of our educational institutions depend greatly on a community of teachers who 
                recognize teaching as a vocation and are committed to the true vision of education. We therefore seek educators who are 
                professionally competent, morally upright, just and humane in their dealings, and who continually grow in knowledge, 
                commitment and their understanding of their responsibility in guiding, inspiring and accompanying students towards 
                becoming mature, responsible and value-oriented individuals.
              </p><br/>
              <h5><i className="fa-solid fa-hand-holding-heart"></i>&nbsp;&nbsp;Commitment to a Just and Humane Society</h5><br/>
              <p>
                Our educational mission is directed towards the creation of a just, peaceful and humane society in which the 
                dignity of every human person is respected, unjust social structures are courageously challenged, 
                and the values of ahimsa, religious harmony and national integration are upheld. We have a special concern 
                for the poor, the marginalized and those deprived of opportunities, and we seek to promote justice, equality, 
                compassion and inclusion while encouraging our students to respect diversity, live peacefully with others and 
                contribute positively to the transformation of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="principal" className="ab_one section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Principal's Message</h2>
                <p>
                  Welcome to St. Xavier’s CMI School. We are pleased with the progress our school has made over the years and remain enthusiastic and committed to the overall growth and development of our students.
                </p>
                <p>
                  Following the example and vision of our founder, St. Kuriakose Elias Chavara, we, the Carmelites of Mary Immaculate, provide a platform for comprehensive learning and value-based education. Our aim is to nurture our students into well-rounded, responsible and principled individuals. Along with academic excellence, we provide opportunities for students to discover and excel in their individual talents, whether in music, dance, drawing, karate or other areas of interest.
                </p>
                <p>
                  Our dedicated teachers work with enthusiasm, commitment and genuine care to bring out the best in every student. At St. Xavier’s CMI School, we are more than just an educational institution; we are a family that works closely with supportive parents. Together, we strive to create a nurturing environment where students can thrive academically, socially and personally, developing into enlightened individuals who contribute positively to society and become lights unto the world.
                </p>
                <p>
                  It is our mission to challenge our students to reach their highest potential in both academic and co-curricular pursuits. We believe that our students should step out into the world well prepared to meet the demands of meaningful careers and responsible citizenship. To achieve this, our teachers invest considerable time and effort in planning and designing learning experiences that encourage curiosity, discovery, creativity and active participation.
                </p>
                <p>
                  St. Xavier’s CMI School is an academic haven that promotes discipline, motivation and excellence in learning while upholding the rich traditions and core values of Indian culture and education. We endeavour to equip our students with the knowledge, skills and values that will help them grow into independent and responsible adults, capable of embracing and contributing meaningfully to an increasingly global community with confidence, tenacity and perseverance.
                </p>
                
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="./assets/images/faculty/fr-arun-painedath.webp" className="img-fluid" alt="Principal" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="./assets/images/icon/mail.svg" alt="Email" width="22" height="20" /> painedatharun@gmail.com
                &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-phone"></i><span>+91 9496967997</span>
              </div>
              <br/>
              <p>
                In today's world, where children have greater exposure to information and opportunities than ever before, the importance of character and personality development from an early age cannot be overstated. Recognizing this need, we strive to provide not only an excellent academic environment but also one firmly rooted in ethics, etiquette and values inherent in our cultural heritage. Alongside a rigorous academic programme, we provide ample opportunities for co-curricular and extracurricular activities, fostering holistic development and helping our students develop the confidence and competence needed to face the challenges of the future.
              </p>
              <p>
                I extend my sincere gratitude to all the well-wishers, parents, teachers, students and supporters of St. Xavier’s CMI School. Let us continue to work together, guided by our shared vision and values, to nurture responsible, compassionate and capable individuals and to create better human beings for our world.
                </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="disclosure" className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>Mandatory Disclosures</h1>
            <h4>Documents to Download</h4>
          </div>

          <div className="text-center" style={{ marginBottom: '36px' }}>
            <input
              type="text"
              className="form-control school-search-input"
              placeholder="Search documents..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="row">
            {filtered.map((f) => (
              <div className="col-lg-6 col-xs-12" key={f.name}>
                <div className="single_tp school-download-item" style={{ textAlign: 'left' }}>
                  <i className="fa-solid fa-file-pdf" style={{ color: '#2c7aff', fontSize: '28px' }}></i>
                  <h3 style={{ marginTop: '14px' }}>{f.name}</h3>
                  <p>{f.category} - {f.size}</p>
                  <a href={f.file} download className="cta">
                    <span>Download</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}