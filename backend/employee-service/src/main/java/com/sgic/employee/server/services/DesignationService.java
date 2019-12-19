package com.sgic.employee.server.services;

import java.util.List;

import com.sgic.employee.server.entities.Designation;

public interface DesignationService {
	
	public Designation createDesignation(Designation designation);
	
	public List<Designation> getAllDesignation();
	
	public Designation findDesignationById(Long id);
	
	public Designation updateDesignation(Designation designation);
	
	public boolean deleteDesignation(Long id);

}
