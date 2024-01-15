package com.cafe.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cafe.entity.Bill;
import com.cafe.entity.Order;
import com.cafe.repository.BillRepository;

@Service
@Transactional
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public void generateBill(Order order) {
        // Calculate the total amount based on order items
        double totalAmount = order.getOrderItems().stream()
                .mapToDouble(orderItem -> orderItem.getSubtotal())
                .sum();

        // Create a new Bill entity
        Bill bill = new Bill();
        bill.setTotalAmount(totalAmount);
        bill.setOrder(order);

        // Save the bill
        billRepository.save(bill);
    }
}
