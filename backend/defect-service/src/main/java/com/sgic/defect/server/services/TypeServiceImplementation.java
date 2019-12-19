package com.sgic.defect.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.defect.server.entities.Type;
import com.sgic.defect.server.repositories.TypeRepository;

@Service
public class TypeServiceImplementation implements TypeService{
	@Autowired
	TypeRepository typeRepository;
	
	//Add Type
	public void addType(Type type) {
		typeRepository.save(type);
	}
	
	//Get All Type
	public List<Type> getAllType() {
		return typeRepository.findAll();
	}
	
	//Update Type
	public void updateType(Type type) {
		typeRepository.save(type);
	}
	
	//Check Whether Type Id Exists
	public boolean isIdExists(Long id) {
		return typeRepository.existsById(id);
	}
	
	//Delete Type
	public void deleteType(Long id) {
		typeRepository.deleteById(id);
	}	
	
	//Get Type By Id
	public Type getTypeById(Long id) {
		return typeRepository.findById(id).get();
	}

}
