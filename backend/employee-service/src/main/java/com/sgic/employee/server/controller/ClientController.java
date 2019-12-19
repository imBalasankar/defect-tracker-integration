package com.sgic.employee.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sgic.common.api.enums.RestApiResponseStatus;
import com.sgic.common.api.response.ApiResponse;
import com.sgic.common.api.response.ContentResponse;
import com.sgic.common.api.response.ListContentResponse;
import com.sgic.employee.dto.mapper.Mapper;
import com.sgic.employee.server.dto.ClientDto;
import com.sgic.employee.server.entities.Client;
import com.sgic.employee.server.services.ClientService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class ClientController {
	
	@Autowired
	ClientService clientService;

	@Autowired
	private Mapper mapper;

	//Add Client
	@PostMapping(value = "/client")
	public ResponseEntity<Object> createClient(@RequestBody ClientDto clientData) {
		Client client = mapper.map(clientData, Client.class);
		clientService.addClient(client);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.CREATED), HttpStatus.OK);	
	}
	
	//Get All Client
	@GetMapping(value = "/client")
	public ResponseEntity<Object> getAllClient() {
		List<Client> client = clientService.getAllClient();
		List<ClientDto> clientData = mapper.map(client, ClientDto.class);
		return new ResponseEntity<>(new ListContentResponse<ClientDto>("listAllClient",clientData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	//Update Client
	@PutMapping(value = "/client")
	public ResponseEntity<Object> updateClient(@RequestBody ClientDto clientData) {
		Client client = mapper.map(clientData, Client.class);
		clientService.addClient(client);
		return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.UPDATED), HttpStatus.OK);	
	}
	
	//Check Whether Client Id Exists on Another Service
	private static boolean isExists(String uri)
	{	     
	    RestTemplate restTemplate = new RestTemplate();
	    boolean result = restTemplate.getForObject(uri, Boolean.class);
	    return result;
	}
	
	//Delete Client
	@DeleteMapping(value = "/client/{id}")
	public ResponseEntity<Object> removeClient(@PathVariable Long id) {
		if(!isExists("http://localhost:1725/api/v1/project/exist/CLI"+id)) {
			clientService.deleteClient(id);
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETED), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(new ApiResponse(RestApiResponseStatus.DELETION_FAILURE), HttpStatus.CONFLICT);
		}
	}	
	
	//Get Client By Id
	@GetMapping(value = "/client/{id}")
	public ResponseEntity<Object> getClientById(@PathVariable Long id) {
		Client client = clientService.getClientById(id);
		ClientDto clientData = mapper.map(client, ClientDto.class);
		return new ResponseEntity<>(new ContentResponse<ClientDto>("listClient", clientData, RestApiResponseStatus.RECEIVED), HttpStatus.OK);	
	}
	
	//Get Client Name By Client Id
	@GetMapping(value = "/client/name/{id}")
	public String getClientNameById(@PathVariable Long id)
	{
		Client client = clientService.getClientById(id);
		ClientDto clientDto = mapper.map(client, ClientDto.class);
		String uname = clientDto.getName();
		return uname;
	}

}
