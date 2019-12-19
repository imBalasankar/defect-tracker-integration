package com.sgic.dt.project.server.services;

import java.util.List;


import com.sgic.dt.project.server.entities.SubModule;

public interface SubModuleService {
	public SubModule createSubModule (SubModule subModule);
	public List<SubModule> getAllSubModules();
	public SubModule getSubModuleById(Long id);
	public SubModule updateSubModule (SubModule subModule);
	public boolean deleteSubModule(Long id);
    public List<SubModule> getAllSubModulesByProjectId(Long id);
    public List<SubModule> getAllSubModulesByModuleId(Long id);
    public boolean isModuleIdExist(Long moduleId);	
	
}
