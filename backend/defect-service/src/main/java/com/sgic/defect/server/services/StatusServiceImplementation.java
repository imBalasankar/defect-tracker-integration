package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.Status;
import com.sgic.defect.server.repositories.StatusRepository;

@Service
public class StatusServiceImplementation implements StatusService{
	@Autowired
	StatusRepository statusRepository;
	
	//Add Status
	public void addStatus(Status Status) {
		statusRepository.save(Status);
	}
	
	//Get All Status
	public List<Status> getAllStatus() {
		return statusRepository.findAll();
	}
	
	//Update Status
	public void updateStatus(Status Status) {
		statusRepository.save(Status);
	}
	
	//Check Whether Status Id Exists
	public boolean isIdExists(Long id) {
		return statusRepository.existsById(id);
	}
	
	//Delete Status
	public void deleteStatus(Long id) {
		statusRepository.deleteById(id);
	}	
	
	//Get Status By Id
	public Status getStatusById(Long id) {
		return statusRepository.findById(id).get();
	}

}
