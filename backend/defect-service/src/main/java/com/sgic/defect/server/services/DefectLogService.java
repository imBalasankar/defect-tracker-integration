package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.DefectLog;

public interface DefectLogService {
	public void addDefectLog(DefectLog defectLog);
	public List<DefectLog> getAllDefectLog();
}
