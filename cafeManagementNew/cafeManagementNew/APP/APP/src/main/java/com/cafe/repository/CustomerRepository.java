package com.cafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cafe.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select count(c) from Customer c where c.email = ?1 and c.password = ?2")
	public Long findIfCustomerIsPresent(String email, String password);
	
	public Optional<Customer> findByEmailAndPassword(String email, String password);
	

}
