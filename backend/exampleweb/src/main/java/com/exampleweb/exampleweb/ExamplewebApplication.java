package com.exampleweb.exampleweb;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.exampleweb.exampleweb.entity.Event;
import com.exampleweb.exampleweb.entity.Group;
import com.exampleweb.exampleweb.repository.GroupRepository;

@SpringBootApplication
public class ExamplewebApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(ExamplewebApplication.class, args);
		
		        
	}
}
