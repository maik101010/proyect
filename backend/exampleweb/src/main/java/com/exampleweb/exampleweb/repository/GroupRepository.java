package com.exampleweb.exampleweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exampleweb.exampleweb.entity.Group;

import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}