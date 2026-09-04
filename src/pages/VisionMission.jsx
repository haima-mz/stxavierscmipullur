import PageTop from '../components/PageTop'

export default function VisionMission() {
  return (
    <>
      <PageTop title="Our Vision & Mission" crumb="About" bg="./assets/images/academics/senior-classroom-reading.webp" />

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
                <p>Rooted in faith and guided by love, we aim to
                nurture intellect, shape hearts, and transform
                lives — forming students who are wise, kind,
                responsible, resilient, and spiritually aware.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish"></i>
                <h4>Our Mission</h4>
                <p>We are committed to providing holistic education
                  rooted in Christian values and the CMI tradition.
                  Our mission is to nurture students into intellectually
                  capable, morally upright, and spiritually aware
                  individuals. We aim to instill human values, integrity,
                  and self-reliance, while shaping resourceful,
                  compassionate learners ready to face life’s
                  challenges and serve society with wisdom and
                  heart.
                </p>
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
        <div id="contact" className="contact_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12">
                <div className="section-title text-center">
                  <h4>Come and Join with US</h4>
                  <a href='https://onlineadmissionforms.gjschool.xyz/applyonline?admission=U1QuWEFWSUVSJ1MgQ01JIFNDSE9PTF82NA==' target='_blank'>
                    <h3>Click Here for Admission Enquiry Form</h3>
                  </a>
                </div>
                <div className="contact">
                  {/* {submitted ? (
                    <div className="text-center" style={{ padding: '30px 0' }}>
                      <h3>Thank you, {form.name}!</h3>
                      <p>Your enquiry has been received. Our admissions office will contact you on {form.phone} soon.</p>
                    </div>
                  ) : (
                  
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
