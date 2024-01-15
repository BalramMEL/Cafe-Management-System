package com.cafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
