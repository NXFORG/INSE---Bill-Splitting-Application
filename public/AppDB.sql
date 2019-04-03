-- database setup

create user slice@localhost identified by 'sliceapp';
create database slice;
grant select, insert, update on slice.* to slice@localhost;
use slice;

drop table if exists user;
drop table if exists restaurant;
drop table if exists voucher;
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

create table if not exists voucher (
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

--insert dummy data

insert into restaurant (restaurantName) values ('Nandos');
insert into restaurant (restaurantName) values ('Pizza Hut');
insert into restaurant (restaurantName) values ('Burger King');
insert into restaurant (restaurantName) values ('Mcdonalds');

insert into voucher (valid_from, valid_until, description, restaurantId) values('2019-01-01', '2019-06-06', "new years deal", 01);
insert into voucher (valid_from, valid_until, description, restaurantId) values('2019-01-01', '2020-01-01', "2018 deal", 02);
insert into voucher (valid_from, valid_until, description, restaurantId) values('2019-03-01', '2019-05-06', "spring deal", 03);
insert into voucher (valid_from, valid_until, description, restaurantId) values('2019-04-01', '2019-07-06', "summer deal", 04);
