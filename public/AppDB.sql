create database Slice;
use Slice;

drop table if exists user;
drop table if exists restaurant;
drop table if exists vouchers;
drop table if exists transaction;
drop table if exists split_method;


create table if not exists user (
  userId int AUTO_INCREMENT primary key,
  fname varchar(30) not null,
  lname varchar(30) not null
);

create table if not exists restaurant (
  restaurantId int AUTO_INCREMENT primary key,
  restaurantName varchar(40) not null
);

create table if not exists vouchers (
  vouchId int AUTO_INCREMENT primary key,
  valid_from date not null,
  valid_until date,
  description text,
  restaurantId int,
  constraint restaurantId foreign key (restaurantId) references restaurant(restaurantId)
);

create table if not exists transaction (
  transId int AUTO_INCREMENT primary key,
  transDate date not null,
  transTime time not null,
  userId_from int not null,
  userId_to int not null,
  vouchId int,
  constraint vouchId foreign key (vouchId) references vouchers(vouchId)
);

create table if not exists split_method (
  splitId int not null primary key,
  splitName varchar(20) not null
);

insert into split_method values (1,"evenly");
insert into split_method values (2,"per_item");
