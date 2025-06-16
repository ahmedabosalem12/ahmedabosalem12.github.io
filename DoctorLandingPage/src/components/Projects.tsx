import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Metro Bridge Infrastructure',
      category: 'Civil Engineering',
      description: 'Modern transportation infrastructure connecting urban districts with advanced engineering solutions.',
      image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Downtown Metro Area',
      year: '2023',
      tags: ['Infrastructure', 'Transportation', 'Urban Planning']
    },
    {
      title: 'Industrial Complex Design',
      category: 'Mechanical Engineering',
      description: 'State-of-the-art manufacturing facility with optimized workflow and energy-efficient systems.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Industrial District',
      year: '2023',
      tags: ['Industrial', 'Manufacturing', 'Efficiency']
    },
    {
      title: 'Residential Tower Complex',
      category: 'Structural Engineering',
      description: 'High-rise residential development with innovative structural design and seismic safety features.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Central Business District',
      year: '2022',
      tags: ['Residential', 'High-rise', 'Safety']
    },
    {
      title: 'Smart Office Building',
      category: 'Electrical Engineering',
      description: 'Intelligent building systems with automated controls and sustainable energy management.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Business Park',
      year: '2022',
      tags: ['Smart Systems', 'Sustainability', 'Automation']
    },
    {
      title: 'Highway Interchange',
      category: 'Civil Engineering',
      description: 'Complex highway interchange design improving traffic flow and reducing congestion.',
      image: 'https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Highway Corridor',
      year: '2021',
      tags: ['Transportation', 'Traffic Flow', 'Infrastructure']
    },
    {
      title: 'Water Treatment Facility',
      category: 'Environmental Engineering',
      description: 'Advanced water treatment plant serving metropolitan area with cutting-edge filtration technology.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Metropolitan Area',
      year: '2021',
      tags: ['Water Treatment', 'Environmental', 'Public Health']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to engineering excellence through innovative projects 
            that shape communities and drive progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-50 text-primary-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;