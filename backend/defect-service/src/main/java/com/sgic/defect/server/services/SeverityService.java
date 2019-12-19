package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.Severity;

public interface SeverityService {
	public void addSeverity(Severity severity);
	public List<Severity> getAllSeverity();
	public void updateSeverity(Severity severity);
	public boolean isIdExists(Long id);
	public void deleteSeverity(Long id);
	public Severity getSeverityById(Long id);
	
}
