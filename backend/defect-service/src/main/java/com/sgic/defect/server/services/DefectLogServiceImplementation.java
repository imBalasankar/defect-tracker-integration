package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.DefectLog;
import com.sgic.defect.server.repositories.DefectLogRepository;

@Service
public class DefectLogServiceImplementation implements DefectLogService{
	
	@Autowired
	DefectLogRepository defectLogRepository;
	
	//Add Defect
	public void addDefectLog(DefectLog defectLog) {
		defectLogRepository.save(defectLog);
	}
	
	//Get All Defect
	public List<DefectLog> getAllDefectLog() {
		return defectLogRepository.findAll();
	}

}
