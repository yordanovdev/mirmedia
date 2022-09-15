import React, { useEffect } from "react";
import { useAuth } from "../../services/auth/useAuth";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { Column } from "primereact/column";
import styles from "../../styles/Signals.module.css";
import http from "../../services/http/httpService";

const Signals = () => {
  const [signals, setSignals] = useState([]);
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    http.get("api/services/app/Signal/GetAll").then((signals) => {
      setSignals(signals.data.result.items);
    });
  }, []);

  return (
    <div className={styles.container}>
      <DataTable value={signals}>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="subject" header="Subject"></Column>
        <Column field="message" header="Message"></Column>
      </DataTable>
    </div>
  );
};

export default Signals;
