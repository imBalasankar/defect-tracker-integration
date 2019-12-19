package com.sgic.employee.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.employee.server.entities.Client;

public interface ClientRepository  extends JpaRepository<Client, Long>{

}
