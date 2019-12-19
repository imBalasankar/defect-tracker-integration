package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.Severity;
import com.sgic.defect.server.repositories.SeverityRepository;

@Service
public class SeverityServiceImplementation implements SeverityService{
	
	@Autowired
	SeverityRepository severityRepository;
	
	//Add Severity
	public void addSeverity(Severity severity) {
		severityRepository.save(severity);
	}
	
	//Get All Severity
	public List<Severity> getAllSeverity() {
		return severityRepository.findAll();
	}
	
	//Update Severity
	public void updateSeverity(Severity severity) {
		severityRepository.save(severity);
	}
	
	//Check Whether Severity Id Exists
	public boolean isIdExists(Long id) {
		return severityRepository.existsById(id);
	}
	
	//Delete Severity
	public void deleteSeverity(Long id) {
		severityRepository.deleteById(id);
	}	
	
	//Get Severity By Id
	public Severity getSeverityById(Long id) {
		return severityRepository.findById(id).get();
	}

}
