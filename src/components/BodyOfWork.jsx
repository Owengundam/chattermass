import React from 'react';

const projectItems = [
  {
    id: 1,
    image: '/images/original_253036431b75f71e2c963208cdabad35.jpg',
    title: 'Conversational AI Interface',
    description: 'Natural language processing enables architects to manipulate massing with commands like "Move the gallery up two floors" - revolutionizing the design workflow through intuitive conversational control.'
  },
  {
    id: 2,
    image: '/images/original_36fac7ca4b9ec3b9e611e8af47a6432b.gif',
    title: 'Unity ML-Agents Optimization',
    description: 'Advanced reinforcement learning agents automatically optimize spatial relationships, structural efficiency, and program adjacencies in real-time, creating smarter architectural solutions.'
  },
  {
    id: 3,
    image: '/images/original_fa6307f4e5d8decec46751893453a8fc.gif',
    title: 'Partnership',
    description: 'Industry validation through collaboration with world-renowned firms, exploring AI-driven design methodologies with potential licensing revenue of €48K+/year from this partnership alone.'
  },
  {
    id: 4,
    image: '/images/original_025070e5d893cecc740d90dfec23cf93.gif',
    title: 'Real-time Collaboration',
    description: 'Multiple architects can interact with the same massing model simultaneously, with AI mediating design decisions and providing instant feedback on spatial optimization and performance metrics.'
  },
  {
    id: 5,
    image: '/images/original_253036431b75f71e2c963208cdabad35.jpg',
    title: 'Commercial Platform',
    description: 'Professional SaaS platform targeting major architectural firms with subscription models ranging from €2K-5K/month, positioned to become the industry standard for computational design.'
  },
  {
    id: 6,
    image: '/images/original_36fac7ca4b9ec3b9e611e8af47a6432b.gif',
    title: 'Data-Driven Insights',
    description: 'Advanced analytics providing instant feedback on structural loads, spatial efficiency, circulation patterns, environmental performance, and regulatory compliance for informed design decisions.'
  }
];

function BodyOfWork() {
  return (
    <section id="body-of-work">
      <h2>Core Capabilities</h2>
      <div className="project-grid">
        {projectItems.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BodyOfWork; 