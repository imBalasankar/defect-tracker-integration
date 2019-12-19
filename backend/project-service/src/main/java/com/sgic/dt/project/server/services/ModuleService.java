package com.sgic.dt.project.server.services;

import java.util.List;

import com.sgic.dt.project.server.entities.Module;

public interface ModuleService {
	public Module createModule (Module module);
	public List<Module> getAllModules();
	public Module getModuleById(Long id);
	public Module updateModule (Module module);
	public boolean deleteModule(Long id);
    public List<Module> getAllModulesByProjectId(Long id);
    public boolean isProjectIdExist(Long projectId);
	
}
