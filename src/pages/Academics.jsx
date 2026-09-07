import PageTop from '../components/PageTop'
import ImageCarousel from '../components/ImageCarousel'

const STAGES = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    sub: 'Pre-KG - UKG',
    text: 'The Pre-primary section at St. Xavier’s CMI School provides a joyful, safe and engaging environment where young learners develop through play, exploration and meaningful experiences. Children are encouraged to build confidence, communication skills, creativity and social habits through activity-based learning, stories, rhymes, drawing, music, dance, yoga and interactive activities. Special experiences such as Green Day, Vegetables & Fruits Day, Flowers Day, field trips, Children’s Day celebrations, Sports Day, handwriting activities, CCA demonstrations and KG graduation make learning enjoyable and memorable. The Children’s Park and Activity Room further support their first experiences of school life, helping them grow emotionally, socially, physically and intellectually.',
    images: [
      './assets/images/academics/preprimary-puzzle-kids.webp',
      './assets/images/academics/preprimary-play-furniture.webp',
      './assets/images/academics/preprimary-indoor-play.webp',
      './assets/images/academics/preprimary-outdoor-play.webp',
      './assets/images/academics/preprimary-wooden-toys.webp',
    ],
  },
  {
    id: 'primary',
    title: 'Primary School',
    sub: 'Class I - IV',
    text: 'The Primary section, covering Classes 1 to 4, focuses on developing strong academic foundations while nurturing curiosity, creativity, confidence and good values. Students participate in a wide range of learning and co-curricular experiences, including reading activities, art and cultural programmes, science exhibitions, sports, educational trips, celebrations and competitions. Continuous assessment, activity-oriented classrooms, innovative teaching methods, communication-skill development and individual attention help children become confident and enthusiastic learners. Programmes such as the Science Exhibition, Arts Fest, Sports Day, CCA activities and educational experiences provide opportunities for students to explore their talents, work together and develop essential life skills.',
    images: [
      './assets/images/academics/primary-classroom.webp',
      './assets/images/gallery/Xviers825x1000-7.webp',
    ],
  },
  {
    id: 'middle',
    title: 'Middle School',
    sub: 'Class V - VII',
    text: 'The Middle School, comprising Classes 5 to 7, provides students with opportunities to move from foundational learning towards greater independence, critical thinking and responsible participation. Students are encouraged to develop scientific temper, logical reasoning, creativity, teamwork, leadership and effective communication through academics and a variety of co-curricular activities. Science exhibitions, Arts Fest, sports, CCA programmes, educational activities, competitions and interactive learning experiences encourage students to discover their interests and apply their knowledge beyond the classroom. Special attention to personality development, communication skills, emotional maturity, self-confidence, time management and goal setting prepares students to face new challenges with courage and responsibility.',
    images: [
      './assets/images/gallery/Xviers825x1000-2.webp',
      './assets/images/gallery/Xviers825x1000-31.webp',
    ],
  },
  {
    id: 'senior',
    title: 'Senior School',
    sub: 'Class VIII - X',
    text: 'The Senior School, comprising Classes 8 to 10, focuses on academic excellence, disciplined study, leadership, personal responsibility and preparation for future challenges. Along with regular academic learning and assessments, students take part in science exhibitions, Arts Fest, sports, CCA programmes, leadership activities and other school events that promote confidence, teamwork and well-rounded development. The diary includes important academic milestones such as the Mid-Term and Model Examinations for Class X, the Second Term Examination for Class X, Annual Examination for Class IX and the commencement of Class X classes. Through continuous assessment, communication training, personality development, critical thinking and value-based education, senior students are encouraged to become self-reliant, morally responsible and confident young individuals ready for higher education and life beyond school.',
    images: [
      './assets/images/academics/primary-classroom-backpacks.webp',
      './assets/images/academics/senior-classroom-reading.webp',
    ],
  },
]

const CAMPUS_FACILITIES = [
  {
    icon: 'fa-solid fa-child-reaching',
    title: 'A Joyful Beginning',
    text: 'Our Children\u2019s Park offers our youngest learners a cheerful and welcoming space where their first experiences of school become enjoyable and memorable. Designed especially for Kindergarten children, it supports learning through play, exploration and interaction.',
  },
  {
    icon: 'fa-solid fa-shapes',
    title: 'Activity-Based Learning',
    text: 'The Activity Room provides an interactive space where students can participate in individual, small-group and large-group activities. Audio-visual presentations, creative tasks and interactive experiences make learning more engaging and meaningful.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Discovering Talents',
    text: 'Our school provides regular opportunities for students to develop their interests and talents through co-curricular activities such as speech, rhymes, storytelling, drawing, dance, music, karate and yoga. These experiences nurture creativity, confidence, discipline and self-expression.',
  },
  {
    icon: 'fa-solid fa-display',
    title: 'Learning Through Technology',
    text: 'The Audio-Visual Learning facilities and digital teaching and learning platform bring lessons to life through interactive study materials, engaging videos and three-dimensional learning experiences. Technology is thoughtfully integrated to make learning more visual, effective and student-friendly.',
  },
  {
    icon: 'fa-solid fa-language',
    title: 'English Language Lab',
    text: 'The English Language Lab provides students with an interactive environment to strengthen their speaking skills, improve communication and build confidence. It encourages students to express themselves clearly and participate actively in their learning journey.',
  },
  {
    icon: 'fa-solid fa-futbol',
    title: 'Sports and Wellness',
    text: 'Sports and physical activities form an important part of our holistic approach to education. Along with sports and games, students have opportunities to participate in activities such as yoga and karate, helping them develop fitness, discipline, teamwork and a healthy attitude towards life.',
  },
  {
    icon: 'fa-solid fa-briefcase-medical',
    title: 'Care and Well-being',
    text: 'The school provides Medical and First-Aid facilities to support the health and well-being of students. Counselling and emotional support also contribute to creating a caring environment where children feel secure, valued and encouraged to grow.',
  },
  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'Exploring Beyond the Campus',
    text: 'Educational tours and picnics provide students with opportunities to experience learning beyond the classroom. These experiences encourage observation, curiosity, social interaction and a deeper understanding of the world around them.',
  },
  {
    icon: 'fa-solid fa-drum',
    title: 'A Culture of Celebration',
    text: 'The School Band adds colour and pride to important school occasions such as Independence Day, Republic Day, Sports Day and Annual Day. Participation in the band encourages discipline, coordination, teamwork and a sense of belonging.',
  },
  {
    icon: 'fa-solid fa-bus',
    title: 'Safe and Convenient Transportation',
    text: 'The school provides school bus transportation facilities to support the safe and convenient commute of students. This facility helps families manage their children\u2019s daily journey to and from school with greater ease.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Remedial Teaching',
    text: 'Students who need additional academic support are given focused, individual attention through remedial teaching sessions. This helps every child build a stronger foundation, catch up with confidence and stay motivated in their learning journey.',
  },
  {
    icon: 'fa-solid fa-hands-praying',
    title: 'Value Education Programme',
    text: 'Our Value Education Programme nurtures honesty, compassion, respect and responsibility in every student. Through stories, discussions and everyday practice, children are guided to grow into thoughtful, morally grounded individuals.',
  },
]

const CCA_CATEGORIES = [
  {
    icon: 'fa-solid fa-masks-theater',
    accent: '#2c7aff',
    title: 'Creative & Performing Arts',
    text: 'Drawing, music, dance, storytelling, arts and cultural programmes.',
  },
  {
    icon: 'fa-solid fa-person-running',
    accent: '#1AB69D',
    title: 'Sports & Physical Development',
    text: 'Sports, games, yoga, karate and Sports Day.',
  },
  {
    icon: 'fa-solid fa-comments',
    accent: '#8E56FF',
    title: 'Literary & Communication Skills',
    text: 'Reading, storytelling, speech, language development and communication activities.',
  },
  {
    icon: 'fa-solid fa-flask-vial',
    accent: '#EE4A62',
    title: 'Science & Innovation',
    text: 'Science Exhibition, experiments, demonstrations and activity-based learning.',
  },
  {
    icon: 'fa-solid fa-people-group',
    accent: '#FF8408',
    title: 'Clubs & CCA',
    text: 'Regular co-curricular activities and demonstrations.',
  },
  {
    icon: 'fa-solid fa-trophy',
    accent: '#2c7aff',
    title: 'Competitions & Celebrations',
    text: 'Arts Fest, competitions, national and school celebrations.',
  },
  {
    icon: 'fa-solid fa-compass',
    accent: '#1AB69D',
    title: 'Educational Experiences',
    text: 'Field trips, educational tours and learning beyond the classroom.',
  },
  {
    icon: 'fa-solid fa-crown',
    accent: '#8E56FF',
    title: 'Leadership & Personality Development',
    text: 'Teamwork, responsibility, confidence, leadership and personality development.',
  },
]

export default function Academics() {
  return (
    <>
      <PageTop title="Academics" crumb="Academics" bg="./assets/images/academics/science-lab-microscope.webp" />

      {STAGES.map((s, i) => (
        <section id={s.id} key={s.id} className={`ab_one section-padding ${i % 2 === 1 ? 'school-row-reverse' : ''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <ImageCarousel images={s.images} alt={s.title} badge={s.sub} />
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12"> 
                <div className="ab_content">
                  <h2>{s.title}</h2>
                </div>               
                <div className="abmv">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h4>CBSE Curriculum</h4>
                  <p>Activity-based learning aligned with NEP 2020, balancing rigour with creativity.</p>
                </div>
                <div className="ab_content">
                  <p>{s.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SCIENCE LAB */}
      <section className="ab_one section-padding school-lab-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <ImageCarousel
                images={['./assets/images/academics/science-lab-microscope.webp']}
                alt="Science Laboratory"
              />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Hands-On Science &amp; Computer Labs</h2>
                <p>
                  Our well-equipped science laboratory gives students the chance to move beyond
                  textbooks and explore concepts through direct observation and experimentation.
                  From examining specimens under the microscope to studying human anatomy models,
                  every session is designed to build curiosity, precision and a genuine love for
                  scientific enquiry. Guided by experienced faculty, students learn to ask questions,
                  test ideas and draw their own conclusions, skills that carry far beyond the
                  classroom.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-flask"></i>
                <h4>Physics, Chemistry &amp; Biology Labs</h4>
                <p>Dedicated lab spaces with proper safety equipment for every science stream.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-microscope"></i>
                <h4>Guided, Hands-On Sessions</h4>
                <p>Small groups and close supervision ensure every student gets real lab time.</p>
              </div>
              <div className="school-lab-stats">
                <div className="school-lab-stat">
                  <h3>3</h3>
                  <span>Dedicated Labs</span>
                </div>
                <div className="school-lab-stat">
                  <h3>1:1</h3>
                  <span>Equipment Access</span>
                </div>
                <div className="school-lab-stat">
                  <h3>100%</h3>
                  <span>Safety Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS AMENITIES */}
      <section className="topic_content_p2 section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h4>Beyond The Classroom</h4>
            <h1>Campus Amenities</h1>
          </div>
          <div className="row">
            {[
              { icon: 'fa-solid fa-book', title: 'Library', img: './assets/images/amenities/library-campus.webp' },
              { icon: 'fa-solid fa-bus', title: 'School Transport', img: './assets/images/amenities/school-transport.webp' },
              { icon: 'fa-solid fa-table-tennis-paddle-ball', title: 'Indoor & Outdoor Games', img: './assets/images/amenities/indoor-outdoor-sports.webp' },
              { icon: 'fa-solid fa-bullseye', title: 'Archery Range', img: './assets/images/amenities/archery-range.webp' },
            ].map((c) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={c.title}>
                <div className="school-cocurr-card" style={{ backgroundImage: `url(${c.img})` }}>
                  <div className="school-cocurr-card__body">
                    <i className={c.icon}></i>
                    <h2><span>{c.title}</span></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT ST. XAVIER'S CAMPUS */}
      <section className="marketing_content_area section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h4>Beyond The Classroom</h4>
            <h1>Life At St. Xavier&rsquo;s Campus</h1>
          </div>

          <div className="school-life-intro">
            <p>
              At St. Xavier&rsquo;s CMI School, learning extends far beyond the walls of the classroom.
              Our campus is thoughtfully designed to provide children with opportunities to explore,
              create, communicate, collaborate and discover their talents in a safe and enriching
              environment. From engaging activity spaces and modern learning resources to sports,
              cultural activities and digital learning, every facility contributes to the holistic
              development of our students.
            </p>
          </div>

          <div className="school-life-grid">
            {CAMPUS_FACILITIES.map((f, i) => (
              <div
                className="school-life-card"
                key={f.title}
                style={{ '--slc-accent': ['#2c7aff', '#1AB69D', '#8E56FF', '#EE4A62', '#FF8408'][i % 5] }}
              >
                <span className="school-life-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="school-life-card__icon">
                  <i className={f.icon}></i>
                </div>
                <div className="school-life-card__content">
                  <h2>{f.title}</h2>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="school-life-closing">
            <p>
              At St. Xavier&rsquo;s CMI School, every space is an opportunity to learn, every activity
              is an opportunity to grow, and every experience is a step towards becoming a confident,
              capable and compassionate individual.
            </p>
          </div>
        </div>
      </section>

      <section className="topic_content_p2 section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h4>Beyond Academics</h4>
            <h1>Co-Curricular & Activities</h1>
          </div>
          <div className="row">
            {[
              { icon: 'fa-solid fa-palette', title: 'Arts & Crafts' },
              { icon: 'fa-solid fa-music', title: 'Music & Dance', img: './assets/images/academics/cocurricular-dance.webp' },
              { icon: 'fa-solid fa-futbol', title: 'Sports & Fitness', img: './assets/images/amenities/archery-range.webp' },
              { icon: 'fa-solid fa-flask', title: 'Science & Computer Labs', img: './assets/images/academics/science-lab-microscope.webp' },
            ].map((c, i) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={c.title}>
                {c.img ? (
                  <div className="school-cocurr-card" style={{ backgroundImage: `url(${c.img})` }}>
                    <div className="school-cocurr-card__body">
                      <i className={c.icon}></i>
                      <h2><span>{c.title}</span></h2>
                    </div>
                  </div>
                ) : (
                  <div className={`single_tca sc_${['one', 'two', 'three', 'four'][i]}`}>
                    <i className={c.icon} style={{ fontSize: '34px', marginBottom: '10px', display: 'block' }}></i>
                    <h2><span>{c.title}</span></h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CO-CURRICULAR CATEGORIES */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h4>A Well-Rounded Journey</h4>
            <h1>Our Co-Curricular Spectrum</h1>
          </div>
          <div className="school-cca-grid">
            {CCA_CATEGORIES.map((c) => (
              <div className="school-cca-card" key={c.title} style={{ '--cca-accent': c.accent }}>
                <div className="school-cca-card__icon">
                  <i className={c.icon}></i>
                </div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
                <div className="school-cca-card__bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}