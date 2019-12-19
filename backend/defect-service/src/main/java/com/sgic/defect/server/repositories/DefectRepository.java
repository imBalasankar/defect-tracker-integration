package com.sgic.defect.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.defect.server.entities.Defect;

public interface DefectRepository extends JpaRepository<Defect, Long>{
	public long countBySeverityId(Long id);
	public long countByPriorityId(Long id);
	public long countByStatusId(Long id);
	boolean existsBySubmoduleId(Long id);
	boolean existsByAssignedTo(Long id);
	boolean existsByAssignedBy(Long id);
	boolean existsByCreatedBy(Long id);
	boolean existsByUpdatedBy(Long id);
	boolean existsByPriorityId(Long id);
	boolean existsBySeverityId(Long id);
	boolean existsByStatusId(Long id);
	boolean existsByTypeId(Long id);
}
