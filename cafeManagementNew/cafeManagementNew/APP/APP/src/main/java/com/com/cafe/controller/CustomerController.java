package com.cafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.Exception.CustomerServiceException;
import com.cafe.dto.LoginDetails;
import com.cafe.dto.CustomerLoginStatus;
import com.cafe.dto.RegistrationStatus;
import com.cafe.dto.Status;
import com.cafe.entity.Customer;
import com.cafe.services.CustomerService;


@RestController
@CrossOrigin
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/customer/register")
	public Status register(@RequestBody Customer customer) {
		try {
			int id = customerService.register(customer);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			return status;
		}
		catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/customer/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		try {
			Customer customer = customerService.login(loginDetails.getEmail(), loginDetails.getPassword());
			CustomerLoginStatus status = new CustomerLoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setCustomerId(customer.getId());
			status.setName(customer.getName());
			status.setRole(customer.getRole());
			return status;
		}
		catch (CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}

}
