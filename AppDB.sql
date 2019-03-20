create database Slice;

use Slice;

create table user (
  userId int AUTO_INCREMENT primary key,
  fname varchar(30) not null,
  lname varchar(30) not null
);

create table restaurant (
  restaurantId int AUTO_INCREMENT primary key,
  restaurantName varchar(40) not null
);

create table vouchers (
  vouchId int AUTO_INCREMENT primary key,
  valid_from date not null,
  valid_until date,
  description text,
  restaurantId int,
  constraint restaurantId foreign key (restaurantId) references restaurant(restaurantId)
);

create table transaction (
  transId int AUTO_INCREMENT primary key,
  transDate date not null,
  transTime time not null,
  userId_from int not null,
  userId_to int not null,
  vouchId int,
  constraint vouchId foreign key (vouchId) references vouchers(vouchId)
);
