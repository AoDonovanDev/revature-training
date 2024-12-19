
Event-driven architecture - design pattern

Kafka=messaging software

events=significant occurences within a system that trigger responses or actions.

common for systems requiring scalability, flexibility, and real-time processing. 

Event brokers: middleware that facilitated communication
->kafka rabbitmq aws sns/sqs

event handlers: logic that executes when events

common use cases - even driven:
real time apps

events are immutable - once created, event itself cannot be changed

self-contained: event should contain all info needed to fully describe event

broker- kafka brokers are core servers in kafka cluster that manage storage, distribution, retrieval of event messages
handle incoming producer messages

Top- topic is a category or feed name to which messages are sent by producers. 

partition: topics are split into partitions and each partition is distributed across multiple brokers. -> scale horizontally. *each partition is an ordered immutable sequence of messages*

topics allows consumers to subscribe to specific categories of messages.

zookeeper: was used by kafka for distributed system management

kafka designed to run as a cluster, multiple brokers work together to handle ingestion storage and processing of messages.  

consumer group.

kafka fault tolerance provided through replication

uses log-based storage
