import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Amplify } from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions";
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);
Predictions.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
