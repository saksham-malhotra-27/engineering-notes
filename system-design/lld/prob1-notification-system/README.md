# Notification System - LLD (JavaScript)

This project is a Low-Level Design implementation of a pluggable notification system supporting multiple channels like Slack and SMS. It demonstrates core Object-Oriented Design principles and common design patterns used in real-world backend systems.

## Features

- Supports multiple notification channels (Slack, SMS)
- User preference-based notification filtering
- Adapter-based message formatting per channel
- Factory-based service creation
- Clean separation of concerns
- Extensible design for adding new channels

## Design Principles Used

### Single Responsibility Principle
Each class has one responsibility:
- NotificationManager handles orchestration
- Services handle sending notifications
- Adapters handle message formatting
- Preference handles user rules
- Factory handles object creation

### Open Closed Principle
New notification channels can be added without modifying existing logic. The system is open for extension and closed for modification.

### Dependency Inversion Principle
High level modules depend on abstractions instead of concrete implementations. Services receive adapters through constructor injection.

### Separation of Concerns
Formatting logic, business logic, routing logic, and object creation are all separated into different modules.

## System Architecture

Client  
  ↓  
NotificationManager  
  ↓  
NotificationService (abstract)  
  ↓  
SlackNotificationService / SMSNotificationService  
  ↓  
SlackAdapter / SMSAdapter  
  ↓  
External Notification Channel  

## Folder Structure

system-design/lld/prob1-notification-system

Factory  
- NotificationServiceFactory.js  

NotificationService  
- NotificationService.js  
- SlackNotificationService.js  
- SMSNotificationService.js  
- adapters  
  - SlackAdapter.js  
  - SMSAdapter.js  

Preferences  
- Preference.js  
- PreferenceBuilder.js  

enums  
- NotificationType.js  

- NotificationManager.js  

## Flow of Execution

1. Client selects notification type using NotificationType enum  
2. Factory creates fully wired service instances  
3. NotificationManager receives list of services  
4. For each service, system checks user preference  
5. If allowed, service sends notification  
6. Service uses adapter to format message  
7. Message is delivered to external channel  

## Design Patterns Used

Factory Pattern  
Used to centralize object creation logic for notification services  

Adapter Pattern  
Used to convert message format for Slack and SMS channels  

Builder Pattern  
Used in PreferenceBuilder to construct preference objects step by step  

Polymorphism  
Each notification service implements notify and getType differently  

## Preference System

Preference controls which channels are allowed for a user  

Example structure  
Preference  
  slack true  
  sms false  

canSend(serviceName)  
Returns whether a service is allowed for the user  

## Extensibility

To add a new notification channel:

1. Create new service class  
2. Create corresponding adapter  
3. Add new enum value in NotificationType  
4. Update factory with new case  

No changes required in NotificationManager  

## Key Learnings

- Object oriented design using classes  
- Use of abstraction and polymorphism  
- Factory pattern for object creation  
- Adapter pattern for message transformation  
- Dependency injection for loose coupling  
- Separation of concerns across modules  
- Designing extensible systems  

## Possible Improvements

- Add retry mechanism for failed notifications  
- Add asynchronous queue for message delivery  
- Add logging and monitoring layer  
- Add priority based notification handling  