package com.sgic.employee.server.services;

import java.util.List;

import com.sgic.employee.server.entities.Client;

public interface ClientService {
	
	public void addClient(Client client);
	public List<Client> getAllClient();
	public void updateClient(Client client);
	public boolean isIdExists(Long id);
	public void deleteClient(Long id);
	public Client getClientById(Long id);

}
