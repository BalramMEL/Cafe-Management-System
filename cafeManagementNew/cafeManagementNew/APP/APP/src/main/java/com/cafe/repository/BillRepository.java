package com.cafe.repository;

import com.cafe.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Integer> {
    // You can add custom query methods if needed
}
