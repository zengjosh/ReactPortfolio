import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { Project, ProjectTag } from '../types/project';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set<ProjectTag>();
    projects.forEach(project => project.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: ProjectTag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Projects</h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        {/* Filter Panel */}
        <div className={`
          fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300
          ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}
          z-50
        `}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => {
                  let tagStyle = '';
                  switch (tag) {
                    case 'Java':
                      tagStyle = selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200';
                      break;
                    case 'Python':
                      tagStyle = selectedTags.includes(tag) ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200';
                      break;
                    case 'Web Development':
                      tagStyle = selectedTags.includes(tag) ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200';
                      break;
                    default:
                      tagStyle = selectedTags.includes(tag) ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                  }
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${tagStyle}`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link
              key={project.id}
              to={project.path}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => {
                    let tagStyle = '';
                    switch (tag) {
                      case 'Java':
                        tagStyle = 'bg-blue-100 text-blue-800';
                        break;
                      case 'Python':
                        tagStyle = 'bg-green-100 text-green-800';
                        break;
                      case 'Web Development':
                        tagStyle = 'bg-purple-100 text-purple-800';
                        break;
                      default:
                        tagStyle = 'bg-gray-100 text-gray-700';
                    }
                    return (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${tagStyle}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 