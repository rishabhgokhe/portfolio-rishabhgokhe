import React from "react";

// Icon Imports
import AppleReminderIcon from "../../assets/svg/icons/AppleReminderIcon";
import PythonIcon from "../../assets/svg/icons/PythonIcon";
import SwiftIcon from "../../assets/svg/icons/SwiftIcon";
import CodeIcon from "../../assets/svg/icons/CodeIcon";
import BlenderIcon from "../../assets/svg/icons/BlenderIcon";

const Features: React.FC = () => {
  return (
    <section id="Features">
      <div className="container mx-auto px-4 py-5">
        <h2 className="pb-2 border-b text-light text-4xl font-bold">Featuring the Area of Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-body-emphasis text-2xl">
              <span style={{ color: '#7962bd' }}>“The only thing that doesn't weigh you down on your travels in life are skills”</span>
            </h2>
            <p className="text-light">
              Embark on a transformative journey with me, where skills are the only luggage we carry. In the vast terrain of life's travels, my diverse skill set serves as the compass, guiding and lightening the path. From beginner to extreme, these proficiencies are the wings that empower exploration and fuel innovation. Join me in the adventure of skillful living, where every capability acquired becomes a ticket to new horizons and endless possibilities.
            </p>
            <a href="./my_project.html" className="btn btn-outline-light btn-lg flex items-center">
              Discover More
            </a>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="icon icon-square text-body-emphasis bg-body-secondary flex items-center justify-center">
                  <PythonIcon />
                </div>
                <h4 className="font-semibold mb-0 text-light">Python</h4>
                <p className="text-light">
                  Python is a high-level, versatile programming language known for its readability and broad applications in web development, data science, and automation. It emphasizes simplicity and flexibility.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="icon icon-square text-body-emphasis bg-body-secondary flex items-center justify-center">
                  <SwiftIcon />
                </div>
                <h4 className="font-semibold mb-0 text-light">Xcode</h4>
                <p className="text-light">
                  Xcode is Apple's integrated development environment (IDE) for building applications across macOS, iOS, iPadOS, watchOS, and tvOS, offering tools for coding, debugging, and interface design.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="icon icon-square text-body-emphasis bg-body-secondary flex items-center justify-center">
                  <CodeIcon />
                </div>
                <h4 className="font-semibold mb-0 text-light">Web Development</h4>
                <p className="text-light">
                  Web development involves creating and maintaining websites or web applications. It's crucial for establishing an online presence, facilitating communication, and delivering services to a global audience.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="icon icon-square text-body-emphasis bg-body-secondary flex items-center justify-center">
                <BlenderIcon />
                </div>
                <h4 className="font-semibold mb-0 text-light">Blender</h4>
                <p className="text-light">
                  Blender is a versatile open-source software for 3D computer graphics, offering tools for modeling, animation, rendering, and more. It is widely used for creating animated films, visual effects, games, and various 3D content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
