package com.sgic.defect.server.services;

import java.util.List;

import com.sgic.defect.server.entities.Status;

public interface StatusService {
	public void addStatus(Status status);
	public List<Status> getAllStatus();
	public void updateStatus(Status status);
	public boolean isIdExists(Long id);
	public void deleteStatus(Long id);
	public Status getStatusById(Long id);

}
