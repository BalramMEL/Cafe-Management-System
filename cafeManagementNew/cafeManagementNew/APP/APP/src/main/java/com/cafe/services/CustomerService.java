package com.cafe.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafe.Exception.CustomerServiceException;
import com.cafe.entity.Customer;
import com.cafe.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public int register(Customer customer) throws CustomerServiceException {
		Long count = customerRepository.findIfCustomerIsPresent(customer.getEmail(),customer.getPassword());
		if (count == 1)
            throw new CustomerServiceException("Customer already registered!");
        else {
            

             customerRepository.save(customer);
            return customer.getId();
        }
	}
	
	public Customer login(String email, String password) throws CustomerServiceException {
		Optional<Customer> customer = customerRepository.findByEmailAndPassword(email, password);
		if(customer.isPresent())
			return customer.get();
		else
			throw new CustomerServiceException("Invalid Email/Password");
	}
	
	

}
