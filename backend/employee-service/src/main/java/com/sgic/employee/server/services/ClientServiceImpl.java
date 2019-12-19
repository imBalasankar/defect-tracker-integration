package com.sgic.employee.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.employee.server.entities.Client;
import com.sgic.employee.server.repositories.ClientRepository;

@Service
public class ClientServiceImpl implements ClientService{
	
	@Autowired
	ClientRepository clientRepository;
	
	//Add Client
	public void addClient(Client client) {
		clientRepository.save(client);
	}
	
	//Get All Client
	public List<Client> getAllClient() {
		return clientRepository.findAll();
	}
	
	//Update Client
	public void updateClient(Client client) {
		clientRepository.save(client);
	}
	
	//Check Whether Client Id Exists
	public boolean isIdExists(Long id) {
		return clientRepository.existsById(id);
	}
	
	//Delete Client
	public void deleteClient(Long id) {
		clientRepository.deleteById(id);
	}	
	
	//Get Client By Id
	public Client getClientById(Long id) {
		return clientRepository.findById(id).get();
	}

}
