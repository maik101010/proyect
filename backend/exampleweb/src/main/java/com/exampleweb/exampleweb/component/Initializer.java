package com.exampleweb.exampleweb.component;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.exampleweb.exampleweb.repository.*;
import com.exampleweb.exampleweb.entity.*;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {
	private GroupRepository repository;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("--------------HOLA MUNDO--------------");
//		Stream.of("Denver JUG", "Utah JUG", "Seattle JUG", "Richmond JUG")
//				.forEach(name -> repository.save(new Group(name))
//
//		);
//		Event e = Event.builder().title("Full Stack Reactive").description("Reactive with Spring Boot + React")
//				.date(Instant.parse("2018-12-12T18:00:00.000Z")).build();
//		
//		Group djug = repository.findByName("Denver JUG");
//		repository.save(djug);

	}

	// private final GroupRepository repository;
	//
	// public Initializer(GroupRepository repository) {
	// this.repository = repository;
	// }
	//
	// @Override
	// public void run(String... strings) {
	// Stream.of("Denver JUG", "Utah JUG", "Seattle JUG",
	// "Richmond JUG").forEach(name ->
	// repository.save(new Group(name))
	// );
	//
	// Group djug = repository.findByName("Denver JUG");
	// Event e = Event.builder().title("Full Stack Reactive")
	// .description("Reactive with Spring Boot + React")
	// .date(Instant.parse("2018-12-12T18:00:00.000Z"))
	// .build();
	// djug.setEvent(Collections.singleton(e));
	// repository.save(djug);
	//
	// repository.findAll().forEach(System.out::println);
	// }
}