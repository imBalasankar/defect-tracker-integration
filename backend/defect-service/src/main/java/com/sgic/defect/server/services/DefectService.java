package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.Defect;

public interface DefectService {
	public void addDefect(Defect defect);
	public List<Defect> getAllDefect();
	public void updateDefect(Defect defect);
	public boolean isIdExists(Long id);
	public void deleteDefect(Long id);
	public Defect getDefectById(Long id);
	public boolean isSubmoduleIdExist(Long id);
	public boolean isEmployeeIdExist(Long id);
	public boolean isIdExist(String sid);

}
