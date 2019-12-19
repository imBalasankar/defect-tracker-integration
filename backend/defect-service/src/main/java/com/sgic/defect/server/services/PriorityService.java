package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.Priority;

public interface PriorityService {
	public void addPriority(Priority priority);
	public List<Priority> getAllPriority();
	public void updatePriority(Priority priority);
	public boolean isIdExists(Long id);
	public void deletePriority(Long id);
	public Priority getPriorityById(Long id);
  
}

