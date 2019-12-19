package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.Type;

public interface TypeService {
	public void addType(Type type);
	public List<Type> getAllType();
	public void updateType(Type type);
	public boolean isIdExists(Long id);
	public void deleteType(Long id);
	public Type getTypeById(Long id);

}
