package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.Priority;
import com.sgic.defect.server.repositories.PriorityRepository;

@Service
public class PriorityServiceImplementation implements PriorityService{
	@Autowired
	PriorityRepository priorityRepository;
	
	//Add Priority
	public void addPriority(Priority priority) {
		priorityRepository.save(priority);
	}
	
	//Get All Priority
	public List<Priority> getAllPriority() {
		return priorityRepository.findAll();
	}
	
	//Update Priority
	public void updatePriority(Priority priority) {
		priorityRepository.save(priority);
	}
	
	//Check Whether Priority Id Exists
	public boolean isIdExists(Long id) {
		return priorityRepository.existsById(id);
	}
	
	//Delete Priority
	public void deletePriority(Long id) {
		priorityRepository.deleteById(id);
	}	
	
	//Get Priority By Id
	public Priority getPriorityById(Long id) {
		return priorityRepository.findById(id).get();
	}

}
