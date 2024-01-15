package com.cafe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.Cafe;
import com.cafe.entity.Customer;
import com.cafe.entity.Order;
import com.cafe.entity.OrderItem;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomer(Customer customer);
    List<Order> findByCafe(Cafe cafe);
    // Add more custom query methods if needed
	
	public void save(OrderItem orderItem);
}
