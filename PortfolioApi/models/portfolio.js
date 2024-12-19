const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  skill: String,
  experience: String,
  icon:String
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  role: String,
  live_demo: String,
  source_code: String,
  media: [String]
});

const WorkExperienceSchema = new mongoose.Schema({
  job_title: String,
  company_name: String,
  duration: String,
  responsibilities: [String],
  technologies_used: [String]
});

const EducationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  dates_attended: String,
  relevant_coursework: [String]
});

const CertificationSchema = new mongoose.Schema({
  title: String,
  issuing_organization: String,
  date_obtained: String,
  description: String
});

const PortfolioSchema = new mongoose.Schema({
  introduction: {
    name: String,
    title: String,
    bio: String,
    profile_picture: String,
    resumeUrl:String
  },
  contact_information: {
    phone:String,
    email: String,
    social_links: {
      linkedin: String,
      github: String,
      twitter: String
    },
    contact_form: Boolean
  },
  skills: {
    technical_skills: [SkillSchema],
    technical_skillsIcons:[String],
    soft_skills: [String]
  },
  projects: [ProjectSchema],
  work_experience: [WorkExperienceSchema],
  education: [EducationSchema],
  certifications_and_awards: [CertificationSchema]
}, { collection: 'portfolioData' });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
