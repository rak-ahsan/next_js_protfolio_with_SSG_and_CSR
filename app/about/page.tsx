"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`grid grid-cols-3 mt-5 gap-10 ${
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
      }`}
    >
      <div className="flex justify-center items-center">
        <Image
          src={"/about.jpeg"}
          alt={"profile-image-rakib-ahsan"}
          height={600}
          width={500}
          className="rounded-sm"
        />
      </div>
      <div className="col-span-2">
        <small>
          Highly skilled and motivated Full Stack Web Developer with expertise
          in both front-end and back-end development. Experienced in designing
          and implementing robust, scalable, and user-friendly web applications.
          Proficient in a wide range of programming languages, frameworks, and
          tools, with a strong emphasis on JavaScript, HTML, CSS, and popular
          front-end frameworks such as React and Vue.
        </small>
        <div>
          <p className="text-[14px] bg-[#030c0a] text-white dark:bg-gray-700 rounded-lg px-2 mr-1 mt-3 mb-2">
            Key Skills :
          </p>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              PHP Development:
            </span>
            <small>Laravel, CodeIgniter, WordPress, Magento</small> <br />
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Front-end Development:
            </span>
            <small>
              HTML5, CSS3, Bootstrap, JavaScript, jQuery, React.js, Angular,Vue
            </small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Database Management:
            </span>
            <small>MySQL</small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              XML Integration:
            </span>
            <small>XML parsing, XML manipulation </small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Version Control:
            </span>
            <small>Git</small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Deployment and Hosting:
            </span>
            <small>AWS, Azure, Heroku</small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              Testing and Debugging:
            </span>
            <small>PHPUnit, Chrome DevTools, Postman</small>
          </div>
          <div>
            <span className="text-[13px] bg-[#88d8c0] dark:bg-gray-700 rounded-lg px-2 mr-1">
              UI/UX Design:
            </span>
            <small>Responsive Design, Cross-Browser</small>
          </div>
        </div>

        <div>
          <p className="text-[14px] bg-[#030c0a] text-white dark:bg-gray-700 rounded-lg px-2 mr-1 mt-3 mb-2">
            Compatibility Key Responsibilities:
          </p>
          <small>
            ▪ Develop and implement innovative,efficient, and secure web
            applications with clean and maintainable code. <br />▪ Collaborate
            with cross-functional teams including designers, product managers,
            and other developers to create exceptional user experiences. <br />▪
            Participate in the entire software development lifecycle, including
            requirements gathering, design, development, testing, deployment,
            and maintenance.
            <br />▪ Perform front-end and back-end coding, debugging, and
            troubleshooting to ensure seamless functionality across multiple
            browsers and devices. <br />▪ Optimize web applications for maximum
            speed and scalability while ensuring high performance and
            responsiveness. <br />▪ Integrate and consume RESTful APIs to fetch
            and display dynamic data on web pages. <br />▪ Conduct thorough
            testing to identify and fix bugs, ensuring the highest level of
            quality and user satisfaction. <br />▪ Stay updated with industry
            trends, best practices, and emerging technologies, and incorporate
            them into the development process.
          </small>
        </div>

        <small className="mt-5">
          As a Full Stack Web Developer, I am passionate about delivering
          innovative solutions and constantly improving my skills to meet the
          evolving needs of the industry. I am dedicated to creating
          high-quality web applications that provide a seamless and engaging
          user experience. Lets connect and explore opportunities to collaborate
          on exciting projects!
        </small>
      </div>
    </div>
  );
};

export default AboutPage;
