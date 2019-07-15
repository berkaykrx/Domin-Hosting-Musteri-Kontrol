<?php
include ("dbConn.php");

$action=$_POST["action"];

switch ($action)
{
    case "bolge":
        $db=new dbConn();
        return $db->getBolgeList();
        break;

    case "il":
        $db=new dbConn();
        $bolge=$_POST["name"];
        return $db->getIlList($bolge);
        break;

    case "ilce":
        $db=new dbConn();
        $il=$_POST["name"];
        return $db->getIlceList($il);
        break;
}