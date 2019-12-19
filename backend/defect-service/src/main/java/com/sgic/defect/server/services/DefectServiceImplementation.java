package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.Defect;
import com.sgic.defect.server.repositories.DefectRepository;

@Service
public class DefectServiceImplementation implements DefectService{
	
	@Autowired
	DefectRepository defectRepository;
	
	//Add Defect
	public void addDefect(Defect defect) {
		defectRepository.save(defect);
	}
	
	//Get All Defect
	public List<Defect> getAllDefect() {
		return defectRepository.findAll();
	}
	
	//Update Defect
	public void updateDefect(Defect defect) {
		defectRepository.save(defect);
	}
	
	//Check Whether Defect Id Exists
	public boolean isIdExists(Long id) {
		return defectRepository.existsById(id);
	}
	
	//Delete Defect
	public void deleteDefect(Long id) {
		defectRepository.deleteById(id);
	}	
	
	//Get Defect By Id
	public Defect getDefectById(Long id) {
		return defectRepository.findById(id).get();
	}
	
	//Check whether a Submodule exist on a Defect
	public boolean isSubmoduleIdExist(Long id) {
		return defectRepository.existsBySubmoduleId(id);
	}
	
	//Check whether a Employee exist on a Defect
	public boolean isEmployeeIdExist(Long id) {
		if(defectRepository.existsByAssignedBy(id) || defectRepository.existsByAssignedTo(id) || defectRepository.existsByCreatedBy(id) || defectRepository.existsByUpdatedBy(id)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	//Check whether a Priority, Severity exist on a Defect
	public boolean isIdExist(String sid) {
		if(sid.startsWith("PRI")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return defectRepository.existsByPriorityId(id);
		}
		else if(sid.startsWith("SEV")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return defectRepository.existsBySeverityId(id);
		}
		else if(sid.startsWith("STA")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return defectRepository.existsByStatusId(id);
		}
		else if(sid.startsWith("TYP")) {
			String str=sid.substring(3);
			long id=Long.valueOf(str);
			return defectRepository.existsByTypeId(id);
		}
		else {
			return false;
		}
		
	}	

}
