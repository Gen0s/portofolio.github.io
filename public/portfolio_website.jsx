import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Instagram, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

/*
  NORD COLOR PALETTE (hardcoded via Tailwind utility classes)
  Polar Night:    #2E3440 #3B4252 #434C5E #4C566A
  Snow Storm:     #D8DEE9 #E5E9F0 #ECEFF4
  Frost:          #8FBCBB #88C0D0 #81A1C1 #5E81AC
  Aurora:         #BF616A #D08770 #EBCB8B #A3BE8C #B48EAD
*/

/* ---------------- HOME ---------------- */
function Home() {
  return (
    <>
      <Helmet>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Personal portfolio of Your Name showcasing projects, experience, and skills." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-[#2E3440] p-4 text-[#ECEFF4]">
        <Card className="max-w-5xl w-full rounded-2xl bg-[#3B4252] border-none shadow-xl">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-[#88C0D0]"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#ECEFF4]">Your Name</h1>
              <p className="text-[#D8DEE9] mb-6 leading-relaxed">
                Short description about you. Explain what you do, your strengths, or your mission.
              </p>

              <div className="flex gap-5 text-[#88C0D0]">
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="GitHub"><Github /></a>
                <a href="#" aria-label="Website"><Globe /></a>
              </div>

              <div className="mt-6 flex gap-6">
                <Link to="/projects" className="text-sm text-[#81A1C1] hover:underline">Projects →</Link>
                <Link to="/resume" className="text-sm text-[#81A1C1] hover:underline">Resume →</Link>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

/* ---------------- RESUME ---------------- */
function SkillBar({ skill, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1 text-[#E5E9F0]">
        <span>{skill}</span><span>{level}%</span>
      </div>
      <div className="w-full bg-[#4C566A] rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8 }}
          className="h-2 bg-[#88C0D0] rounded-full"
        />
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-[#81A1C1] rounded-full" />
      <h4 className="font-semibold text-[#ECEFF4]">{year} – {title}</h4>
      <p className="text-sm text-[#D8DEE9]">{description}</p>
    </div>
  );
}

function Resume() {
  return (
    <>
      <Helmet>
        <title>Your Name | Resume</title>
        <meta name="description" content="Resume and professional experience of Your Name." />
      </Helmet>

      <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4] p-6 md:p-10 flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">My Resume</h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-6 border-l border-[#4C566A] pl-4">
              <TimelineItem year="2024" title="Your Role" description="Describe your responsibilities." />
              <TimelineItem year="2022" title="Previous Role" description="Another experience entry." />
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              <SkillBar skill="React" level={90} />
              <SkillBar skill="JavaScript" level={85} />
              <SkillBar skill="UI / UX" level={75} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex gap-2 w-fit bg-[#5E81AC] hover:bg-[#81A1C1]">
              <a href="/cv.pdf" download><Download size={18}/> Download CV</a>
            </Button>
            <Link to="/" className="text-sm text-[#D8DEE9] hover:underline self-center">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    { title: "Project One", description: "Short description.", image: "/project1.jpg", link: "#" },
    { title: "Project Two", description: "What problem it solves.", image: "/project2.jpg", link: "#" },
    { title: "Project Three", description: "Tech & outcome.", image: "/project3.jpg", link: "#" }
  ];

  return (
    <>
      <Helmet>
        <title>Your Name | Projects</title>
      </Helmet>

      <div className="min-h-screen bg-[#2E3440] p-6 md:p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#ECEFF4]">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-[#3B4252] rounded-2xl shadow-md overflow-hidden">
              <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#ECEFF4]">{p.title}</h3>
                <p className="text-[#D8DEE9] text-sm">{p.description}</p>
                <a href={p.link} className="mt-4 inline-block text-sm text-[#88C0D0] hover:underline">View Project →</a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/" className="text-sm text-[#D8DEE9] hover:underline">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}

/* ---------------- 404 ---------------- */
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#2E3440] text-[#ECEFF4] p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-[#D8DEE9] mb-6">Page not found</p>
      <Link to="/" className="text-[#88C0D0] hover:underline">Go Home</Link>
    </div>
  );
}

/* ---------------- APP ---------------- */
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", { page_path: location.pathname });
    }
  }, [location]);

  return null;
}

export default function PortfolioApp() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
