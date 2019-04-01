create database Slice;

use Slice;

create table user (
  userId int AUTO_INCREMENT primary key,
  fname varchar(30) not null,
  lname varchar(30) not null
);

create table contact (
  contactId int AUTO_INCREMENT primary key,
  contactName varchar(30) not null,
  contactPhone int not null,
  contactDesc varchar(140) not null
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

create table split_method (
  splitId int not null primary key,
  splitName varchar(20) not null
);

insert into split_method values (1,"evenly");
insert into split_method values (2,"per_item");
