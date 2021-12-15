import React from "react";
import MaterialTable from "material-table";
import tableIcons from "../../../assets/icons/material-icons/material-icons";

import "./DataTable.scss";

export default function DataTable({ reservations }) {
  const columns = [
    {
      title: "Fecha",
      field: "date",
      searchable: false,
      filtering: true,
      /*  filterPlaceholder: "Filtrar fecha..." */
    },
    {
      title: "Nombre del propietario",
      field: "username",
      filtering: true,
      /* filterPlaceholder: "Filtrar nombre..." */
    },
    {
      title: "Departamento",
      field: "apartment",
      filtering: true,
      /* filterPlaceholder: "Filtrar depto..." */
    },
    {
      title: "Tipo de reserva",
      field: "sport",
      searchable: false,
      lookup: {
        "Fútbol cancha 1": "Fútbol cancha 1",
        "Tenis cancha 1": "Tenis cancha 1",
        "Paddle cancha 1": "Paddle cancha 1",
        "Paddle cancha 2": "Paddle cancha 2",
        "Bochas cancha 1": "Bochas cancha 1",
        "Bochas cancha 2": "Bochas cancha 2",
      },
    },
    {
      title: "Propietario/ Inquilino",
      field: "hasIdentityNumber",
      searchable: false,
      lookup: { Propietario: "Propietario", Inquilino: "Inquilino" },
    },
    {
      title: "Documento",
      field: "identityNumber",
      filtering: true,
      /* filterPlaceholder: "Filtrar DNI..." */
    },
    {
      title: "Horas reservadas",
      field: "hours",
      searchable: false,
      filtering: false,
    },
    {
      title: "Estado",
      field: "status",
      lookup: { ACTIVA: "ACTIVA", CANCELADA: "CANCELADA" },
    },
  ];

  return (
    <MaterialTable
      columns={columns}
      data={reservations}
      title=""
      icons={tableIcons}
      options={{
        pageSize: 20,
        search: false,
        showTitle: false,
        toolbar: false,
        sorting: true,
        filtering: true,
        headerStyle: {
          position: "sticky",
          top: "0",
          borderRadius: "10px",
          height: "10px",
        },
        maxBodyHeight: "26rem",
      }}
      localization={{
        toolbar: {
          searchPlaceholder: "Buscar por nombre o DNI...",
          searchTooltip: "Búsqueda por nombre o DNI",
        },
        pagination: {
          labelRowsSelect: "Filas",
          firstTooltip: "Primera página",
          previousTooltip: "Anterior",
          nextTooltip: "Siguiente",
          lastTooltip: "Última página",
          labelDisplayedRows: ``,
        },
        body: {
          filterRow: {
            filterTooltip: "Filtrar",
          },
        },
      }}
      className="material-table"
      style={{
        borderRadius: "10px",
        display: "grid",
        height: "100vh",
        gridTemplateRows: "auto 54px",
      }}
    />
  );
}
