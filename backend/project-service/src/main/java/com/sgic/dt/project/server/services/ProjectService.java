package com.sgic.dt.project.server.services;

import java.util.List;

import com.sgic.dt.project.server.entities.Project;

public interface ProjectService {
	public Project createProject (Project project);
	public List<Project> getAllProjects();
	public Project getProjectById(Long id);
	public Project updateProject (Project project);
	public boolean deleteProject(Long id);
	public Long getNumberOfInprocess();
	public Long getNumberOfCompleted();
	public boolean isClientIdExist(Long id);	
	
}
