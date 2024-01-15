package com.cafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
//    @Query("SELECT SUM(oi.quantity) FROM OrderItem oi WHERE oi.product = :product")
//    int getQuantityByProduct(@Param("product") Product product);
//    
//    @Query("SELECT oi.order.cafe.cafeName FROM OrderItem oi WHERE oi.product = :product")
//    String getCafeNameByProduct(@Param("cafe") Cafe cafe);

}