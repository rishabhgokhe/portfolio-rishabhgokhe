import React from "react";


function Features() {
    return (
        <section id="Features">
          <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom text-light">Featuring the Area of Expertise</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis">
                  <span style={{ color: '#7962bd' }}>“The only thing that doesn't weigh you down on your travels in life are skills”</span>
                </h2>
                <p className="text-light">
                  Embark on a transformative journey with me, where skills are the only luggage we carry. In the vast terrain of life's travels, my diverse skill set serves as the compass, guiding and lightening the path. From beginner to extreme, these proficiencies are the wings that empower exploration and fuel innovation. Join me in the adventure of skillful living, where every capability acquired becomes a ticket to new horizons and endless possibilities
                </p>
                <a href="./my_project.html" className="btn btn-outline-light btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-postcard-fill" viewBox="0 0 16 16">
                    <path d="M11 8h2V6h-2z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5M2.5 7a.5.5 0 0 0 0 1H6a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5m8-4v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5" />
                  </svg> Discover More
                </a>
              </div>

              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">
                    <div className="icon icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <img className="logo python" src="./all_svg/python.svg" alt="python" />
                    </div>
                    <h4 className="fw-semibold mb-0 text-light">Python</h4>
                    <p className="text-light">
                      Python is a high-level, versatile programming language known for its readability and broad applications in web development, data science, and automation. It emphasizes simplicity and flexibility.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <img className="logo Xcode" src="./all_svg/swift.svg" alt="Xcode" />
                    </div>
                    <h4 className="fw-semibold mb-0 text-light">Xcode</h4>
                    <p className="text-light">
                      Xcode is Apple's integrated development environment (IDE) for building applications across macOS, iOS, iPadOS, watchOS, and tvOS, offering tools for coding, debugging, and interface design.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <img className="logo html_tags" src="./all_svg/code.svg" alt="html tags" />
                    </div>
                    <h4 className="fw-semibold mb-0 text-light">Web Development</h4>
                    <p className="text-light">
                      Web development involves creating and maintaining websites or web applications.It's crucial for establishing an online presence, facilitating communication, and delivering services to a global audience.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <img className="logo blender" src="./all_svg/blender.svg" alt="blender" />
                    </div>
                    <h4 className="fw-semibold mb-0 text-light">Blender</h4>
                    <p className="text-light">
                      Blender is a versatile open-source software for 3D computer graphics, offering tools for modeling, animation, rendering, and more. It is widely used by for creating animated films, visual effects, games, and various 3D content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
};

export default Features