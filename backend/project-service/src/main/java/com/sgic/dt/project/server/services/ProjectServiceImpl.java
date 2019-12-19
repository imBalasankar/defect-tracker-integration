package com.sgic.dt.project.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgic.dt.project.server.entities.Project;
import com.sgic.dt.project.server.repositories.ProjectRepository;
import com.sgic.dt.project.server.services.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService{
	@Autowired
	private ProjectRepository projectRepository;
	
	 @Transactional(readOnly = false)
	 public Project createProject (Project project)
	 {
		Project responseProject = projectRepository.save(project);
		return responseProject;
	 }
	 @Transactional(readOnly = false)
	 public List<Project> getAllProjects() 
	 {
		 List <Project> projects = 	projectRepository.findAll();
		 return projects;
	 }
	 @Transactional(readOnly = false)
	 public Project getProjectById(Long id) 
	 {
		Project responseProject  = projectRepository.findProjectById(id);
		return responseProject;
	 }
	 @Transactional(readOnly = false)
	 public Project updateProject (Project project)
	 {
		Project responseProject = projectRepository.save(project);
		return responseProject;
	 }
	 @Transactional(readOnly = false)
	 public boolean deleteProject(Long id) 
	 {
		projectRepository.deleteById(id);
		return true;
	 }
	 //================ Get Count of InProcess Projects ====================//
	 @Transactional(readOnly = false)
	 public Long getNumberOfInprocess() 
	 {
		Long count =projectRepository.countByStatus("In Process");
		return count;
	 }
	 //================ Get Count of Completed Projects ====================//
	 @Transactional(readOnly = false)
	 public Long getNumberOfCompleted() 
	 {
		Long count =projectRepository.countByStatus("Completed");
		return count;
	 }
	 
	 //Check whether a Client exist on a Project
	 public boolean isClientIdExist(Long id) {
		 return projectRepository.existsByClientId(id);
	 }

}
