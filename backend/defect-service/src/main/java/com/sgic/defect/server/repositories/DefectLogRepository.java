package com.sgic.defect.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.defect.server.entities.DefectLog;

public interface DefectLogRepository extends JpaRepository<DefectLog, Long>{

}
