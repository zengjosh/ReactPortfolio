import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X, Code, Globe, Coffee } from 'lucide-react';
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

  const getTagIcon = (tag: ProjectTag) => {
    switch (tag) {
      case 'Java':
        return <Coffee className="w-5 h-5" />;
      case 'Python':
        return <Code className="w-5 h-5" />;
      case 'Web Development':
        return <Globe className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="flex items-center gap-4">
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    {getTagIcon(tag)}
                    {tag}
                    <X size={16} />
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium hover:bg-gray-50"
            >
              <Filter size={20} />
              <span>Filter Projects</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className={`
          fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}
          z-50 overflow-y-auto
        `}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Filter Projects</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <div className="flex flex-col gap-3">
                  {allTags.map(tag => {
                    let tagStyle = '';
                    switch (tag) {
                      case 'Java':
                        tagStyle = selectedTags.includes(tag) 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200';
                        break;
                      case 'Python':
                        tagStyle = selectedTags.includes(tag)
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-green-100 text-green-800 hover:bg-green-200';
                        break;
                      case 'Web Development':
                        tagStyle = selectedTags.includes(tag)
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-purple-100 text-purple-800 hover:bg-purple-200';
                        break;
                      default:
                        tagStyle = selectedTags.includes(tag)
                          ? 'bg-gray-600 text-white hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                    }
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${tagStyle}`}
                      >
                        {getTagIcon(tag)}
                        <span>{tag}</span>
                        {selectedTags.includes(tag) && (
                          <X size={18} className="ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
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
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${tagStyle}`}
                      >
                        {getTagIcon(tag)}
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