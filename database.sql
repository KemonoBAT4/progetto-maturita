create database leagueOfLegends;

use leagueOfLegends;

create table runes(
    id varchar(20) not null,
    firstKey varchar(20) not null,
    secondKey varchar(20) not null,
    mainKey varchar(20) not null,
    key11 varchar(20) not null,
    key12 varchar(20) not null,
    key13 varchar(20) not null,
    key21 varchar(20) not null,
    key22 varchar(20) not null
);

insert into runes values (
    "gwen",
    "Precision",
    "Resolve",
    "Conqueror",
    "Presence of Mind",
    "Legend: Alacrity",
    "Coup de Grace",
    "Second Wind",
    "Revitalize"
);